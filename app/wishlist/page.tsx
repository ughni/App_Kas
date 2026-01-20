import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Tabel from "../components/ul/Tabel";
import { fetchData } from "./action";
import { BtnLink } from "../components/buttons/BtnLink";
import { logout } from "../logout/action";
import Search from "../components/ul/serach";

// FORMAT RUPIAH
const formatRupiah = (angka: number) => {
  if (isNaN(angka)) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};

interface DashboardProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Dashboard(props: DashboardProps) {
  const searchParams = await props.searchParams;
  const query =
    typeof searchParams?.query === "string"
      ? searchParams.query.toLowerCase()
      : "";

  const database = await fetchData();

  // LOGIC FILTER
  const filteredData = database.filter((item: any) => {
    return (
      item.nama?.toLowerCase().includes(query) ||
      item.keterangan?.toLowerCase().includes(query) ||
      item.kategori?.toLowerCase().includes(query)
    );
  });

  // LOGIC HITUNG
  const totalPemasukan = database
    .filter((item: any) => item?.tipe?.toLowerCase() === "pemasukan")
    .reduce((acc: number, curr: any) => acc + (Number(curr.nominal) || 0), 0);

  const totalPengeluaran = database
    .filter((item: any) => item?.tipe?.toLowerCase() === "pengeluaran")
    .reduce((acc: number, curr: any) => acc + (Number(curr.nominal) || 0), 0);

  const currentSaldo = totalPemasukan - totalPengeluaran;

  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    // FIX: Pakai style langsung untuk gradient background utama
    <div
      className="min-h-screen font-sans text-slate-900"
      style={{ background: "linear-gradient(135deg, #f8fafc, #f1f5f9)" }}
    >
      {/* HEADER */}
   <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-lg shadow-slate-200/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div className="flex items-center justify-between gap-4">
      {/* Bagian Kiri - Logo dan Judul */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div
          className="shrink-0 p-2 rounded-xl shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-transform duration-300"
          style={{ background: "linear-gradient(135deg, #2563eb, #4f46e5)" }}
        >
          <BanknotesIcon className="h-6 w-6 text-white" />
        </div>
        
        <div className="min-w-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 truncate">
            Dashboard Kas
          </h1>
          <p className="text-xs text-slate-500 truncate">
            Selasa, 20 Januari 2026
          </p>
        </div>
      </div>

      {/* Bagian Kanan - Tombol Logout */}
      <div className="shrink-0">
        <form action={logout}>
          <button 
            type="submit" 
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all whitespace-nowrap"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Keluar</span>
            <span className="sm:hidden">Logout</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* WELCOME BANNER - FIX: Style Gradient */}
        <div
          className="relative overflow-hidden rounded-2xl p-6 text-white shadow-xl shadow-blue-500/30"
          style={{
            background: "linear-gradient(to right, #2563eb, #3b82f6, #4f46e5)",
          }}
        >
          <h2 className="text-2xl font-bold mb-2">Halo, Admin! 👋</h2>
          <p className="text-blue-100 opacity-90">
            Saldo saat ini:{" "}
            <span className="font-bold text-white text-lg ml-1">
              {formatRupiah(currentSaldo)}
            </span>
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card Pemasukan - FIX: Style Gradient */}
          <div
            className="p-6 rounded-2xl shadow-xl shadow-green-200/50 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <ArrowDownCircleIcon className="h-8 w-8 text-white/80" />
              <span className="font-semibold text-white/90">
                Total Pemasukan
              </span>
            </div>
            <h3 className="text-3xl font-bold">
              {formatRupiah(totalPemasukan)}
            </h3>
          </div>

          {/* Card Pengeluaran - FIX: Style Gradient */}
          <div
            className="p-6 rounded-2xl shadow-xl shadow-rose-200/50 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f43f5e, #db2777)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <ArrowUpCircleIcon className="h-8 w-8 text-white/80" />
              <span className="font-semibold text-white/90">
                Total Pengeluaran
              </span>
            </div>
            <h3 className="text-3xl font-bold">
              {formatRupiah(totalPengeluaran)}
            </h3>
          </div>
        </div>

        {/* BAGIAN PENCARIAN & TABEL */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="w-full md:w-1/2">
                <Search placeholder="Cari transaksi..." />
              </div>

              {/* FIX: Style Gradient Button Tambah */}
              <div
                className="flex items-center justify-center gap-2 px-1 py-1 rounded-xl shadow-lg shadow-blue-500/30"
                style={{
                  background: "linear-gradient(to right, #2563eb, #4f46e5)",
                }}
              >
                <BtnLink
                  icon={<PlusIcon className="h-4 w-4" />}
                  link="/add"
                  title="Tambah Data"
                  className="px-4 py-1.5 text-white font-semibold w-full h-full flex items-center justify-center bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* TABEL DATA - FIX: Max Height pakai Style langsung */}
          <div
            className="overflow-x-auto overflow-y-auto custom-scrollbar"
            style={{ maxHeight: "600px" }} // Ini yang bikin warning hilang
          >
            <div className="min-w-full">
              {filteredData.length > 0 ? (
                <Tabel
                  headers={[
                    "No",
                    "Nama",
                    "Kategori",
                    "Tipe",
                    "Nominal",
                    "Keterangan",
                    "Tanggal",
                    "Aksi",
                  ]}
                  data={filteredData}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500">Data tidak ditemukan.</p>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center text-sm text-slate-500">
            Menampilkan <b>{filteredData.length}</b> transaksi
          </div>
        </div>
      </main>

      {/* FAB Mobile - FIX: Style Gradient */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <div
          className="rounded-full shadow-xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2563eb, #4f46e5)" }}
        >
          <BtnLink
            icon={<PlusIcon className="h-6 w-6" />}
            link="/add"
            title=""
            className="flex items-center justify-center w-16 h-16 text-white bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
