"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase";

export const Delete = async (id:number) => {
  const { error } = await supabase.from("app_kas").delete().eq("id", id);
  if (error) {
    console.log("terjadi kesalahan untuk mehapus", error);
    throw new Error('Gagal Mehapus Data')
  }
  revalidatePath("/");
};
