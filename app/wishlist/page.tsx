import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Tabel from "../components/ul/Tabel";
import { fetchData } from "./action";
import BtnTombol from "../components/buttons/BtnTombol";
import { BtnLink } from "../components/buttons/BtnLink";

export default async function Dashboard() {
  const database = await fetchData();
  return (
    <div className="min-h-screen  from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Dashboard Kas
          </h1>
          <p className="text-gray-600 mt-2">
            Monitoring arus kas masuk dan keluar organisasi
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Pemasukan */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                  Total Pemasukan
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2"></p>
                <div className="flex items-center mt-2">
                  <span className="text-green-600 text-sm font-medium">
                    +12% dari bulan lalu
                  </span>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-full">
                <ArrowDownCircleIcon className="h-10 w-10 text-green-600" />
              </div>
            </div>
          </div>

          {/* Total Pengeluaran */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                  Total Pengeluaran
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2"></p>
                <div className="flex items-center mt-2">
                  <span className="text-red-600 text-sm font-medium">
                    +8% dari bulan lalu
                  </span>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-full">
                <ArrowUpCircleIcon className="h-10 w-10 text-red-600" />
              </div>
            </div>
          </div>

          {/* Sisa Saldo */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                  Sisa Saldo
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2"></p>
                <div className="flex items-center mt-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-500 mr-1" />
                  <span className="text-blue-600 text-sm font-medium">
                    Saldo tersedia
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-full">
                <CurrencyDollarIcon className="h-10 w-10 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-40">
          <BtnLink
            icon={<PlusIcon className="h-5 w-5" />}
            link="/add"
            title="Tambah"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          />
        </div>

        {/* Riwayat Transaksi */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">
              Riwayat Transaksi
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Daftar pemasukan dan pengeluaran terbaru
            </p>
          </div>

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
          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500">
            {/* Menampilkan {.length} transaksi terbaru */}
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Dashboard Kas • Data diperbarui:{" "}
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
