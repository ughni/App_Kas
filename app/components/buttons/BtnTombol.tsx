"use client";
import { Delete } from "@/app/delete/action";
import { TrashIcon } from "@heroicons/react/24/outline";

export function TombolHps({ id }: { id: number }) {
  const handleDelete = async () => {
    const sure = confirm("Apakah Kamu Yakin untuk Menhapus data ini");
    if (!sure) return;
    try {
      await Delete(id);
    } catch (error) {
      alert("Gagal Menhapus");
      console.error(error);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="flex items-center text-sm gap-1 text-red-600 hover:text-red-800 transition-colors"
    >
      <TrashIcon className="h-4 w-4" />
    </button>
  );
}
