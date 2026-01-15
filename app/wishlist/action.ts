"use server";

import { supabase } from "../lib/supabase";

export const fetchData = async () => {
  const { data, error } = await supabase
    .from("app_kas")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.log("terjadi kesalahan mengambil data", error);
    return [];
  }
  return data;
};

export const FetchTotal = async () => {
  const { data, error } = await supabase.from("app_kas").select("nominal");

  if (error) {
    console.error(error);
    return 0;
  }

  const total = data.reduce((acc, item) => {
    return acc + Number(item.nominal);
  }, 0);
  return total;
};
