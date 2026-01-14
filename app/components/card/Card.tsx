interface TypeData {
    kasNama: string;
    jumlah:number | string;
}
export function Card({kasNama,jumlah}: TypeData) {
  return (
    <section className="bg-blue-100 p-2 rounded-2xl px-23  border-l-15 border-l-green-500">
      <h1 className="text-black text-2xl ">{kasNama}</h1>
      <h1 className="text-emerald-400 text-4xl font-bold">{jumlah}</h1>
    </section>
  );
}
