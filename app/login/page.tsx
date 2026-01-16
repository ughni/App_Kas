// 👇 Import fungsi login yang barusan kita buat
import Link from 'next/link'
import { Login } from './actions'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Login Dulu Breyy</h1>
        
        <form className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input 
            name="email" 
            type="email" 
            placeholder="nama@email.com" 
            className="border p-2 rounded text-black"
            required 
          />
          
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input 
            name="password" 
            type="password" 
            placeholder="******" 
            className="border p-2 rounded text-black"
            required 
          />

          {/* 👇 Pasang action login di sini */}
          <button formAction={Login} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-4">
            Masuk
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Belum punya akun?{' '}
          <Link href="/register" className="text-blue-500 hover:underline font-semibold">
            Daftar dulu di sini
          </Link>
        </p>
      </div>
    </div>
  )
}