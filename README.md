# 💰 Kas App - Aplikasi Manajemen Keuangan Komunitas

Aplikasi web modern untuk mencatat dan memantau arus kas (pemasukan & pengeluaran) komunitas secara transparan dan *real-time*. Dibuat sebagai solusi pencatatan keuangan yang cepat, akurat, dan mudah digunakan di HP maupun Laptop.

---

## 🚀 Fitur Unggulan

* **Dashboard Interaktif:** Ringkasan total saldo, pemasukan, dan pengeluaran yang update otomatis.
* **Pencarian Cepat (Smart Search):** Cari riwayat transaksi berdasarkan nama atau keterangan tanpa *reload* halaman.
* **Filter Data:** Tampilan daftar transaksi yang rapi dan mudah dibaca.
* **Mode Demo:** Fitur login khusus tamu untuk mencoba aplikasi tanpa registrasi.
* **Responsive Design:** Tampilan tetap bagus di layar Smartphone, Tablet, dan Desktop.

---
    
## 🛠️ Teknologi (Tech Stack)

Dibangun menggunakan teknologi web terkini untuk performa maksimal:

* **Framework:** Next.js 15 (App Router)
* **Bahasa:** TypeScript
* **Styling:** Tailwind CSS
* **Database:** Supabase (PostgreSQL)
* **Icons:** Heroicons
* **Form Handling:** React Server Actions

---

## 👤 Akun Demo (Cobain Langsung)

Aplikasi ini sudah dilengkapi **Mode Demo**. Anda tidak perlu mendaftar, cukup gunakan akun di bawah ini untuk masuk dan melihat fitur-fiturnya:

* **Email:** `admin@gmail.com`
* **Password:** `12345678`

> *Catatan: Akun ini menggunakan data dummy agar aman untuk uji coba publik.*

---

## 💻 Cara Menjalankan Project (Localhost)

Jika ingin menjalankan kode sumber (source code) ini di komputer Anda:

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/username-kamu/kas-app.git](https://github.com/username-kamu/kas-app.git)
    cd kas-app
    ```

2.  **Install Library**
    ```bash
    npm install
    ```

3.  **Setup Environment**
    Buat file `.env.local` dan masukkan URL & Key Supabase Anda:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=URL_SUPABASE_KAMU
    NEXT_PUBLIC_SUPABASE_ANON_KEY=KEY_SUPABASE_KAMU
    ```

4.  **Jalankan Server**
    ```bash
    npm run dev
    ```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

<p align="center">
  Dibuat dengan 💻 dan ☕ oleh <b>[M. Mughni]</b>
</p>