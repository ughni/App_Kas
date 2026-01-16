import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  WalletIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Tabel from "../components/ul/Tabel"; // Pastikan path ini benar sesuai folder kamu
import { fetchData, FetchTotal } from "./action";
import { BtnLink } from "../components/buttons/BtnLink"; // Pastikan path ini benar
import { logout } from "../logout/action";

// 1. FORMAT RUPIAH
const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

export default async function Dashboard() {
  const database = await fetchData();
  const TotalSaldo = await FetchTotal();

  // 2. LOGIKA HITUNG PEMASUKAN & PENGELUARAN OTOMATIS
  // Kita filter data dari 'database' biar angkanya real-time sesuai tabel
  const totalPemasukan = database
    .filter((item: any) => item.status === "Pemasukan") // Pastikan di DB tulisannya "Pemasukan" (huruf besar/kecil ngaruh)
    .reduce((acc: number, curr: any) => acc + Number(curr.nominal), 0);

  const totalPengeluaran = database
    .filter((item: any) => item.status === "Pengeluaran")
    .reduce((acc: number, curr: any) => acc + Number(curr.nominal), 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* === HEADER (STICKY & GLASS EFFECT) === */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-extrabold  from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dashboard Kas
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Monitoring Keuangan Organisasi
            </p>
          </div>

          <div className="flex items-center gap-3">
             {/* Tombol Tambah Data di Header (Mobile Friendly) */}
            <div className="md:hidden">
              <BtnLink
                icon={<PlusIcon className="h-5 w-5" />}
                link="/add"
                title=""
                className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
              />
            </div>

            <form action={logout}>
              <button className="group flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all shadow-sm">
                <ArrowRightOnRectangleIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        
        {/* === STATS CARDS (MODERN GRID) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Pemasukan (Gradient Green) */}
          <div className="relative overflow-hidden bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ArrowDownCircleIcon className="h-24 w-24 text-emerald-500" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                <ArrowDownCircleIcon className="h-6 w-6" />
              </div>
              <span className="text-slate-500 font-medium text-sm">Pemasukan</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 tracking-tight">
              {formatRupiah(totalPemasukan)}
            </h3>
            <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
              <span className="bg-emerald-100 px-2 py-0.5 rounded-full">Total Masuk</span>
            </p>
          </div>

          {/* Card 2: Pengeluaran (Gradient Red) */}
          <div className="relative overflow-hidden bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ArrowUpCircleIcon className="h-24 w-24 text-rose-500" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-rose-100 rounded-xl text-rose-600">
                <ArrowUpCircleIcon className="h-6 w-6" />
              </div>
              <span className="text-slate-500 font-medium text-sm">Pengeluaran</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 tracking-tight">
              {formatRupiah(totalPengeluaran)}
            </h3>
            <p className="text-xs text-rose-600 mt-2 font-medium flex items-center gap-1">
              <span className="bg-rose-100 px-2 py-0.5 rounded-full">Total Keluar</span>
            </p>
          </div>

          {/* Card 3: Saldo (Gradient Blue) */}
          <div className="relative overflow-hidden  from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-lg shadow-blue-200 group hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300 text-white">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
              <WalletIcon className="h-24 w-24 text-white" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white">
                <WalletIcon className="h-6 w-6" />
              </div>
              <span className="text-blue-100 font-medium text-sm">Sisa Saldo</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">
              {formatRupiah(TotalSaldo)}
            </h3>
            <p className="text-xs text-blue-100 mt-2 font-medium opacity-80">
              Dana Tersedia Saat Ini
            </p>
          </div>
        </div>

        {/* === TOMBOL ADD & TITLE TABEL === */}
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Riwayat Transaksi</h2>
            <p className="text-sm text-slate-500">List data keuangan terbaru</p>
          </div>
          
          <div className="hidden md:block">
            <BtnLink
              icon={<PlusIcon className="h-5 w-5" />}
              link="/add"
              title="Tambah Transaksi"
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all"
            />
          </div>
        </div>

        {/* === TABEL SECTION === */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
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

        {/* FOOTER INFO */}
        <div className="text-center py-6 border-t border-slate-200 border-dashed">
          <p className="text-xs text-slate-400 font-medium">
            Kas App © {new Date().getFullYear()} • Dibuat dengan Next.js & Supabase
          </p>
        </div>

      </main>
    </div>
  );
}