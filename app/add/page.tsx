import {
  ArrowLeftIcon,
  CalendarIcon,
  UserCircleIcon,
  TagIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { AddDatas } from "./action";

export default function TambahData() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Header Kecil */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6 px-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-g ray-500 hover:text-blue-600 mb-4 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" /> Kembali ke Dashboard
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">
          Input Transaksi Baru
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Masukan detail pemasukan atau pengeluaran.
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 shadow-lg rounded-2xl border border-gray-100">
          <form className="space-y-5" action={AddDatas}>
            {/* 1. Nama */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="nama"
                  required
                  className="block w-full pl-10 py-2.5 sm:text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Contoh: Budi, Pak RT"
                />
              </div>
            </div>

            {/* 2. Group: Status & Kategori (Sebelah-sebelahan biar hemat tempat) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Status (Masuk/Keluar) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ArrowsRightLeftIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="tipe"
                    className="block w-full pl-10 py-2.5 sm:text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="Masuk">Pemasukan</option>
                    <option value="Keluar">Pengeluaran</option>
                  </select>
                </div>
              </div>

              {/* Kategori */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <TagIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="kategori"
                    required
                    className="block w-full pl-10 py-2.5 sm:text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="" disabled>
                      Pilih...
                    </option>
                    <option value="Iuran">Iuran Warga</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Transport">Transport</option>
                    <option value="Belanja">Belanja Alat</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Nominal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nominal (Rp)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-bold sm:text-sm">Rp</span>
                </div>
                <input
                  type="number"
                  name="nominal"
                  required
                  className="block w-full pl-10 pr-4 py-2.5 sm:text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 font-medium"
                  placeholder="0"
                />
              </div>
            </div>

            {/* 4. Tanggal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  name="tanggal"
                  required
                  className="block w-full pl-10 py-2.5 sm:text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* 5. Keterangan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Keterangan
              </label>
              <textarea
                name="keterangan"
                rows={3}
                className="block w-full p-3 sm:text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm resize-none"
                placeholder="Catatan tambahan..."
              />
            </div>

            {/* Button Simpan */}
            <button className="bg-blue-500 p-2 rounded-lg w-full text-amber-50 hover:bg-blue-800">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
