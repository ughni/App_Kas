'use server'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export const Login = async (formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log("Login Gagal", error.message);
    return redirect("/Login?message=Gagal Login, cek email/password");
  }

  revalidatePath("/", "layout");
  redirect("/");
};
