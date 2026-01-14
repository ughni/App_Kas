import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="flex 
       justify-between items-center bg-blue-500 p-6"
    >
      <h1 className="text-3xl font-bold">📑 Kas Masyarakat</h1>
      <div className="flex justify-between items-center gap-5">
        <h2 className="text-2xl">Selamat Datang Admin</h2>
        <Link href="" className="w-6 ">
          <ArrowRightOnRectangleIcon />{" "}
        </Link>
      </div>
    </header>
  );
}
