'use server'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const Login = async (prevState: any, formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Validasi input
  if (!email || !password) {
    return { error: "Email dan password harus diisi" };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("Login Gagal", error.message);
    
    // Pesan error yang lebih spesifik
    let errorMessage = "Terjadi kesalahan saat login";
    
    if (error.message.includes("Invalid login credentials")) {
      errorMessage = "Email atau password salah";
    } else if (error.message.includes("Email not confirmed")) {
      errorMessage = "Email belum dikonfirmasi";
    } else if (error.message.includes("User not found")) {
      errorMessage = "Email tidak terdaftar";
    } else if (error.message.includes("Password is incorrect")) {
      errorMessage = "Password salah";
    } else if (error.message.includes("rate limit")) {
      errorMessage = "Terlalu banyak percobaan login, coba lagi nanti";
    }
    
    return { error: errorMessage };
  }

  revalidatePath("/", "layout");
  redirect("/");
};