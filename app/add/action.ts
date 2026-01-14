"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase";
import { redirect } from "next/navigation";

export const AddDatas = async (formData: FormData) => {
  const nama = formData.get("nama") as string;
  const tipe = formData.get("tipe") as string;
  const kategori = formData.get("kategori") as string;
  const nominal = Number(formData.get("nominal"));
  const tanggal = formData.get("tanggal") as string;
  const keterangan = formData.get("keterangan") as string;


  const { data, error } = await supabase
    .from("app_kas")
    .insert([
      {
        nama: nama,
        tipe: tipe,
        kategori: kategori,
        nominal: nominal,
        tanggal: tanggal,
        keterangan: keterangan,
      },
    ]);
    if(error) {
        console.log('Gagal Menambahkan data Kawan', error);
    }
    console.log('data udah ditambah', data);
    revalidatePath('/')
  redirect('/')
};
