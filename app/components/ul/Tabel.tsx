import {
  CalendarDateRangeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { BtnLink } from "../buttons/BtnLink";
import { TombolHps } from "../buttons/BtnTombol";

interface HeadType {
  id: number;
  nama: string;
  kategori: string;
  tipe: string;
  nominal: number;
  keterangan: string;
  tanggal: string;
}

interface TypeProps {
  headers: string[];
  data: HeadType[];
}

export default function Tabel({ data, headers }: TypeProps) {
  const hendleDelete = async () => {};

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((item, index) => (
              <th
                key={index}
                className="px-4 text-sm py-2 text-center font-semibold text-gray-600 uppercase tracking-wider"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 text-center text-lg">{index + 1}</td>
              <td className="px-4 py-2 text-center text-sm">{item.nama}</td>
              <td className="px-4 py-2 text-center text-sm">{item.kategori}</td>
              <td className="px-4 py-2 text-center text-sm">{item.tipe}</td>
              <td className="px-4 py-2 text-center text-sm">{item.nominal}</td>
              <td className="px-4 py-2 text-center text-sm">
                {item.keterangan}
              </td>

              {/* Kolom tanggal */}
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CalendarDateRangeIcon className="h-4 w-4 text-sm  text-gray-400" />
                  <span className="text-sm">{item.tanggal}</span>
                </div>
              </td>

              {/* Kolom aksi */}
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-3">
                  <BtnLink
                    link={`/edit/${item.id}`}
                    className="flex items-center text-sm gap-1 text-green-600 hover:text-green-800 transition-colors"
                    icon={<PencilSquareIcon className="h-5 w-5" />}
                  />
                  <TombolHps id={item.id}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
