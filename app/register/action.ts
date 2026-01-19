'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "../lib/supabase";

export const signup = async (formData: FormData) => {
  
  // const database = supabase;

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