import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  WalletIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  ChartBarIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Tabel from "../components/ul/Tabel"; 
import { fetchData } from "./action";
import { BtnLink } from "../components/buttons/BtnLink"; 
import { logout } from "../logout/action";

// 1. FORMAT RUPIAH YANG LEBIH BAIK
const formatRupiah = (angka: number) => {
  if (isNaN(angka)) return "Rp 0";
  
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};

// 2. FUNGSI UNTUK HITUNG PERSENTASE
const calculatePercentage = (partial: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((partial / total) * 100);
};

export default async function Dashboard() {
  const database = await fetchData();
  
  // 3. PERBAIKAN FILTER DATA YANG LEBIH AMAN
  const totalPemasukan = database
    .filter((item: any) => 
      item?.status?.toString().toLowerCase() === "pemasukan"
    )
    .reduce((acc: number, curr: any) => 
      acc + Math.abs(Number(curr.nominal) || 0), 0
    );

  const totalPengeluaran = database
    .filter((item: any) => 
      item?.status?.toString().toLowerCase() === "pengeluaran"
    )
    .reduce((acc: number, curr: any) => 
      acc + Math.abs(Number(curr.nominal) || 0), 0
    );

  // 4. HITUNG SALDO DENGAN VALIDASI
  const currentSaldo = totalPemasukan - totalPengeluaran;
  const totalTransaksi = totalPemasukan + totalPengeluaran;
  const persentasePengeluaran = calculatePercentage(totalPengeluaran, totalPemasukan || 1);

  // 5. DATA TERBARU UNTUK DASHBOARD
  const recentTransactions = database.slice(0, 5); // 5 transaksi terbaru
  const today = new Date();
  const formattedDate = today.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fafc,#f1f5f9)] font-sans text-slate-900">
      
      {/* === HEADER MODERN & GLASSMORPHISM === */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-lg shadow-slate-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            {/* Logo/Title dengan animasi */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div 
                className="p-2 rounded-xl shadow-lg shadow-blue-500/30 transform group-hover:scale-105 transition-transform duration-300"
                style={{background: 'linear-gradient(135deg, #2563eb, #4f46e5)'}}
              >
                <BanknotesIcon className="h-6 w-6 text-white"/>
              </div>
              <div className="text-center sm:text-left">
                <h1 
                  className="text-xl sm:text-2xl font-bold bg-clip-text text-blue-700"
                >
                  Dashboard Kas
                </h1>
                <p className="text-xs font-medium text-slate-500">
                  {formattedDate}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-3">
                <BtnLink
                  icon={<PlusIcon className="h-4 w-4" />}
                  link="/add"
                  title="Tambah Transaksi"
                  className="flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                  style={{background: 'linear-gradient(to right, #2563eb, #4f46e5)'}}
                />
              </div>

              <form action={logout} className="relative">
                <button 
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-300 hover:shadow-md group"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 transition-transform group-hover:rotate-90" />
                  <span className="hidden sm:inline">Keluar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* === WELCOME BANNER === */}
        <div 
          className="relative overflow-hidden rounded-2xl p-6 text-white shadow-xl shadow-blue-500/30"
          style={{background: 'linear-gradient(to right, #2563eb, #3b82f6, #4f46e5)'}}
        >
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Selamat Datang! 👋</h2>
                <p className="text-blue-100 opacity-90 max-w-2xl">
                  Monitor keuangan organisasi Anda dengan mudah. Dashboard ini memberikan 
                  ringkasan lengkap tentang pemasukan, pengeluaran, dan saldo terkini.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <ChartBarIcon className="h-5 w-5" />
                <span className="font-semibold">{database.length} Transaksi</span>
              </div>
            </div>
          </div>
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
        {/* === STATS CARDS GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card Pemasukan */}
          <div 
            className="relative overflow-hidden p-6 rounded-2xl shadow-xl shadow-green-200/50 hover:shadow-2xl hover:shadow-green-300/30 transition-all duration-300 transform hover:-translate-y-1"
            style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <ArrowDownCircleIcon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-white/90">Pemasukan</span>
                </div>
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                  {calculatePercentage(totalPemasukan, totalTransaksi)}%
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {formatRupiah(totalPemasukan)}
              </h3>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-1000"
                  style={{ width: `${calculatePercentage(totalPemasukan, totalTransaksi)}%` }}
                ></div>
              </div>
            </div>
            <ArrowDownCircleIcon className="absolute -bottom-6 -right-6 h-32 w-32 text-white opacity-10" />
          </div>

          {/* Card Pengeluaran */}
          <div 
            className="relative overflow-hidden p-6 rounded-2xl shadow-xl shadow-rose-200/50 hover:shadow-2xl hover:shadow-rose-300/30 transition-all duration-300 transform hover:-translate-y-1"
            style={{background: 'linear-gradient(135deg, #f43f5e, #db2777)'}}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <ArrowUpCircleIcon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-white/90">Pengeluaran</span>
                </div>
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                  {persentasePengeluaran}%
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {formatRupiah(totalPengeluaran)}
              </h3>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-1000"
                  style={{ width: `${persentasePengeluaran}%` }}
                ></div>
              </div>
            </div>
            <ArrowUpCircleIcon className="absolute -bottom-6 -right-6 h-32 w-32 text-white opacity-10" />
          </div>

          {/* Card Saldo */}
          <div 
            className="relative overflow-hidden p-6 rounded-2xl shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-300/30 transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
            style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)'}}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <WalletIcon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-white/90">Saldo Tersedia</span>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  currentSaldo >= 0 
                    ? 'bg-emerald-500/30 text-emerald-100' 
                    : 'bg-rose-500/30 text-rose-100'
                }`}>
                  {currentSaldo >= 0 ? 'Positif' : 'Negatif'}
                </span>
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${
                currentSaldo >= 0 ? 'text-white' : 'text-rose-100'
              }`}>
                {formatRupiah(currentSaldo)}
              </h3>
              <p className="text-sm text-white/70">
                Update real-time dari semua transaksi
              </p>
            </div>
            <WalletIcon className="absolute -bottom-6 -right-6 h-32 w-32 text-white opacity-10" />
          </div>
        </div>

        {/* === QUICK STATS === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Total Transaksi</p>
            <p className="text-2xl font-bold text-slate-800">{database.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Rata-rata Masuk</p>
            <p className="text-2xl font-bold text-emerald-600">
              {formatRupiah(totalPemasukan / Math.max(database.filter((d: any) => d.status?.toLowerCase() === 'pemasukan').length, 1))}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Rata-rata Keluar</p>
            <p className="text-2xl font-bold text-rose-600">
              {formatRupiah(totalPengeluaran / Math.max(database.filter((d: any) => d.status?.toLowerCase() === 'pengeluaran').length, 1))}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 mb-1">Rasio</p>
            <p className="text-2xl font-bold text-blue-600">
              {totalPemasukan > 0 
                ? `1:${(totalPengeluaran / totalPemasukan).toFixed(1)}` 
                : '0:0'}
            </p>
          </div>
        </div>

        {/* === SECTION TABEL & TRANSACTION HISTORY === */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  Riwayat Transaksi
                  <span className="text-sm font-normal bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    {database.length} data
                  </span>
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Monitor semua transaksi keuangan Anda
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <BtnLink
                  icon={<PlusIcon className="h-4 w-4" />}
                  link="/add"
                  title="Tambah Baru"
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                  style={{background: 'linear-gradient(to right, #2563eb, #4f46e5)'}}
                />
                <BtnLink
                  icon={<ChevronRightIcon className="h-4 w-4" />}
                  link="/reports"
                  title="Lihat Laporan"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* TABEL RESPONSIVE */}
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <Tabel
                headers={[
                  "No",
                  "Nama",
                  "Kategori",
                  "Status",
                  "Nominal",
                  "Keterangan",
                  "Tanggal",
                  "Aksi",
                ]}
                data={database}
              />
            </div>
          </div>
          
          {/* FOOTER TABEL */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
            <div className="flex justify-between items-center">
              <p className="text-sm text-slate-500">
                Menampilkan <span className="font-semibold">{Math.min(database.length, 10)}</span> dari {database.length} transaksi
              </p>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Lihat Semua
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* === FOOTER === */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <div className="h-1 w-1 bg-slate-300 rounded-full"></div>
            <p className="text-xs md:text-sm font-medium">
              Kas App © {new Date().getFullYear()} Mughni
            </p>
            <div className="h-1 w-1 bg-slate-300 rounded-full"></div>
          </div>
        </div>

      </main>

      {/* === FLOATING ACTION BUTTON (MOBILE) === */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <BtnLink
          icon={<PlusIcon className="h-6 w-6" />}
          link="/add"
          title=""
          className="flex items-center justify-center w-16 h-16 text-white rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-3xl hover:shadow-blue-500/60 hover:scale-110 transition-all duration-300"
          style={{background: 'linear-gradient(135deg, #2563eb, #4f46e5)'}}
        />
      </div>

    </div>
  );
}