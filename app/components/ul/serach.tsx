"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    // 1. Ambil params yang ada sekarang
    const params = new URLSearchParams(searchParams);
    
    // 2. Set query baru
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    
    // 3. Update URL (Ini kuncinya biar page.tsx tau ada perubahan)
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        className="peer block w-full rounded-xl border border-slate-200 py-2 pl-10 text-sm outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 peer-focus:text-blue-600" />
    </div>
  );
}