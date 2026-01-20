"use client";

import { Login } from "./actions";
// PERBAIKAN 1: Ganti import dari 'react-dom' ke 'react', dan ganti nama hook-nya
import { useActionState, useState } from "react"; 

import {
  EnvelopeIcon,
  LockClosedIcon,
  BanknotesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(Login, { error: "" });

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 font-sans text-slate-900"
      style={{ background: "linear-gradient(135deg, #f8fafc, #f1f5f9)" }}
    >
      {/* Container Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100">
        {/* Header Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="p-3 rounded-2xl shadow-lg shadow-blue-500/30 mb-4 transform hover:scale-105 transition-transform duration-300"
            style={{ background: "linear-gradient(135deg, #2563eb, #4f46e5)" }}
          >
            <BanknotesIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Selamat Datang</h1>
          <p className="text-slate-500 text-sm mt-1">
            Silakan masuk untuk akses dashboard
          </p>
        </div>

        {/* Info Akun Demo */}
        <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm flex flex-col gap-1">
          <p className="font-semibold flex items-center gap-2 text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Mode Demo Aktif
          </p>
          <p className="opacity-80 text-xs text-blue-600">
            Akun telah terisi otomatis. Silakan langsung masuk.
          </p>
        </div>

        {/* Error Message */}
        {state?.error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-7a1 1 0 00-1 1v3a1 1 0 002 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {state.error}
          </div>
        )}

        <form action={formAction} className="flex flex-col gap-5">
          {/* Input Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">
              Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                name="email"
                type="email"
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 sm:text-sm"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Input Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                name="password"
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 sm:text-sm"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Button Submit */}
          <button
            type="submit"
            // Tambahkan disabled={isPending} biar tombolnya mati pas lagi loading
            disabled={!email || !password || isPending}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(to right, #2563eb, #4f46e5)",
            }}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {/* Kalau lagi loading (isPending), ganti icon panah jadi spinner loading */}
              {isPending ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <ArrowRightIcon className="h-5 w-5 text-blue-300 group-hover:text-blue-100 transition-colors" />
              )}
            </span>
            {isPending ? "Sedang Memproses..." : "Masuk Sekarang"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">© 2026 Kas App.</p>
        </div>
      </div>
    </div>
  );
}