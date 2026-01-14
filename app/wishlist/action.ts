"use server";

import { supabase } from "../lib/supabase";

export const fetchData = async () => {
  const { data, error } = await supabase
    .from("app_kas")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.log("terjadi kesalahan mengambil data", error);
    return []
  }
  return data;
};
