'use server'

// 1. PERHATIKAN: Import dari utils lokal, BUKAN @supabase/supabase-js
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "../lib/supabase";

// 2. PERHATIKAN: Nama fungsi diperbaiki jadi 'signup'
export const signup = async (formData: FormData) => {
  
  // createClient() ini otomatis baca cookies & env, jadi gak butuh argumen
  const database = await supabase;

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(error);
    return redirect('/register?error=true');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}