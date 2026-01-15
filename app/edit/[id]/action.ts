"use server";

import { supabase } from "@/app/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Mengambil data lama (Tidak ada perubahan di sini)
export const AmbilDataId = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("app_kas")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return null;
    return data;
  } catch (error) {
    console.error("Error fetch:", error);
    return null;
  }
};

// Update data (INI YANG DIPERBAIKI)
export const EditData = async (id: number, formData: FormData) => {
  const nama = formData.get("nama") as string;
  const tipe = formData.get("tipe") as string;
  const kategori = formData.get("kategori") as string;
  const nominal = Number(formData.get("nominal"));
  const tanggal = formData.get("tanggal") as string;
  const keterangan = formData.get("keterangan") as string;

  try {
    const { error } = await supabase
      .from("app_kas")
      .update({
        nama,
        tipe,
        kategori,
        nominal,
        tanggal,
        keterangan,
      })
      .eq("id", id);

    if (error) throw new Error(error.message);

    revalidatePath("/");
    
  } catch (error) {
    console.error("Gagal update:", error);
    throw new Error("Gagal menyimpan data");
  }

  redirect("/");
};