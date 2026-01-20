// import { BanknotesIcon } from "@heroicons/react/24/outline";

// export default function Navbar() {
//   const filteredData = database.filter((item: any) => {
//     return (
//       item.nama?.toLowerCase().includes(query) ||
//       item.keterangan?.toLowerCase().includes(query) ||
//       item.kategori?.toLowerCase().includes(query)
//     );
//   });

//   return (
//     <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200/60 shadow-lg shadow-slate-200/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
//           <div className="flex items-center gap-3 group cursor-pointer">
//             {/* FIX: Style Gradient Button */}
//             <div
//               className="p-2 rounded-xl shadow-lg shadow-blue-500/30 transform group-hover:scale-105 transition-transform duration-300"
//               style={{
//                 background: "linear-gradient(135deg, #2563eb, #4f46e5)",
//               }}
//             >
//               <BanknotesIcon className="h-6 w-6 text-white" />
//             </div>
//             <div className="text-center sm:text-left">
//               <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-blue-700">
//                 Dashboard Kas
//               </h1>
//               <p className="text-xs font-medium text-slate-500">
//                 {formattedDate}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 w-full sm:w-auto">
//             <form action={logout} className="ml-auto sm:ml-0">
//               <button
//                 type="submit"
//                 className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all"
//               >
//                 <ArrowRightOnRectangleIcon className="h-5 w-5" />
//                 <span className="hidden sm:inline">Keluar</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
