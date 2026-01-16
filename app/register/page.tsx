import { signup } from './action'

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Daftar Akun Baru</h1>
      
      <form className="flex flex-col gap-4 w-full max-w-md border p-8 rounded-lg shadow-md">
        
        <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
          className="border p-2 rounded text-black"
          placeholder="nama@email.com"
        />

        <label htmlFor="password">Password:</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          required 
          className="border p-2 rounded text-black"
          placeholder="******"
        />

        {/* Tombol memanggil Server Action 'signup' */}
        <button formAction={signup} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Daftar Sekarang
        </button>
        
      </form>
    </div>
  )
}