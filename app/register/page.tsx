import Link from 'next/link' // Tambahan buat navigasi ke Login
import { signup } from './action'

export default function RegisterPage() {
  return (
    // 1. Background dibikin agak abu (bg-gray-50) biar kartu putihnya "pop out"
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-sans">
      
      {/* 2. Kartu dipercantik: Rounded lebih gede, shadow lebih halus, border tipis */}
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Buat Akun Baru
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Mulai kelola datamu dengan lebih mudah
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            
            {/* Input Group: Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm transition-all"
                placeholder="nama@email.com"
              />
            </div>

            {/* Input Group: Password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full rounded-b-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm transition-all"
                placeholder="Password (min. 6 karakter)"
              />
            </div>
          </div>

          {/* Tombol Action */}
          <div>
            <button
              formAction={signup}
              className="group relative flex w-full justify-center rounded-lg border border-transparent bg-blue-600 py-3 px-4 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all active:scale-95 shadow-lg shadow-blue-500/30"
            >
              Daftar Sekarang
            </button>
          </div>
        </form>

        {/* Footer Link (Penting buat UX) */}
        <div className="text-center text-sm text-gray-500">
          Sudah punya akun?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
            Masuk di sini
          </Link>
        </div>

      </div>
    </div>
  )
}