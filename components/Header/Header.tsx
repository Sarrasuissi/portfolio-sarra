

"use client";
import data from "@/data/header.json";
import Link from "next/link";
import { useEffect, useState } from "react";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() =>{
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-0 left-0 w-full z-50 font-(family-name:--font-outfit)">
      <div
        className={`transition-all duration-500 ease-in-out px-5 md:px-8 ${scrolled || mobileOpen ? "py-3 bg-black/90 backdrop-blur-xl border-white/5 shadow-[0_8px-40px-rgba(0,0,0,0.4)]" : "py-5 md:py-6 bg-transparent"}`}
      >
        {" "}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/"
          className="flex items-center gap-2.5 group animate-[fadeInLeft_0.7s_ease_0.1s_both z-10">
            <img
              src="/assets/icons/logo-sarra-transparent.webp"
              alt="logo"
              className="h-8 md:h-9 w-auto transition-opacity duration-300 group-hover:opacity-70"
            />
         {/* <span className="w-1.5 h-1.5 rounded-full bg-linear-to-br from-pink-400 to-rose-400 shadow-[0_0_10px_rgba(244,114,182,0.8)] animate-pulse" /> */}
          </Link>
          <nav className="col-span-2">
            <ul className="flex items-center justify-end gap-8">
              {data.menu.map((item, index) => (
                <li key={index} className="">
                  <Link href={item.url} className="hover:text-pink-400">
                    {item.name}
                  </Link>

                  <ul className="">
                    {item.submenu?.map((e, i) => (
                      <li key={i} className="whitespace-nowrap">
                        <Link href={e.urlsubmenu}>{e.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

// version responsive

// "use client";

// import data from "@/data/header.json";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [openMenu, setOpenMenu] = useState<number | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileSubmenu, setMobileSubmenu] = useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Ferme le menu mobile au resize vers desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMobileOpen(false);
//         setMobileSubmenu(null);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 font-(family-name:--font-outfit)">
//       <div
//         className={`transition-all duration-500 ease-in-out px-5 md:px-8 ${
//           scrolled || mobileOpen
//             ? "py-3 bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
//             : "py-5 md:py-6 bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center gap-2.5 group animate-[fadeInLeft_0.7s_ease_0.1s_both] z-10"
//           >
//             <img
//               src="/assets/icons/logo-sarra-transparent.webp"
//               alt="logo"
//               className="h-8 md:h-9 w-auto transition-opacity duration-300 group-hover:opacity-70"
//             />
//             <span className="w-1.5 h-1.5 rounded-full bg-linear-to-br from-pink-400 to-rose-400 shadow-[0_0_10px_rgba(244,114,182,0.8)] animate-pulse" />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-10">
//               {data.menu.map((item, index) => {
//                 const hasSubmenu = item.submenu && item.submenu.length > 0;
//                 const delay = `${0.2 + index * 0.1}s`;

//                 return (
//                   <li
//                     key={index}
//                     className="relative animate-[fadeInDown_0.6s_ease_both]"
//                     style={{ animationDelay: delay }}
//                   >
//                     {hasSubmenu ? (
//                       <>
//                         <button
//                           onClick={() => setOpenMenu(openMenu === index ? null : index)}
//                           onBlur={() => setTimeout(() => setOpenMenu(null), 150)}
//                           className="flex items-center gap-1.5 text-[0.72rem] tracking-[0.18em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-linear-to-r after:from-pink-400 after:to-rose-400 hover:after:w-full after:transition-all after:duration-300 pb-1 bg-transparent border-none outline-none cursor-pointer"
//                         >
//                           {item.name}
//                           <svg
//                             width="10" height="10" viewBox="0 0 10 10" fill="none"
//                             className={`opacity-50 transition-transform duration-300 ${openMenu === index ? "rotate-180" : "rotate-0"}`}
//                           >
//                             <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                           </svg>
//                         </button>

//                         {/* Dropdown desktop */}
//                         <div
//                           className={`absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 min-w-45 transition-all duration-300 ${
//                             openMenu === index
//                               ? "opacity-100 translate-y-0 pointer-events-auto"
//                               : "opacity-0 -translate-y-2 pointer-events-none"
//                           }`}
//                         >
//                           <div className="bg-black/95 backdrop-blur-2xl border border-white/8 rounded-xl py-2 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
//                             {item.submenu!.map((e, i) => (
//                               <Link
//                                 key={i}
//                                 href={e.urlsubmenu}
//                                 onClick={() => setOpenMenu(null)}
//                                 className="block px-5 py-2.5 text-[0.7rem] tracking-[0.12em] uppercase text-white/50 hover:text-pink-400 hover:bg-pink-400/5 hover:pl-6 transition-all duration-200 whitespace-nowrap"
//                               >
//                                 {e.name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.url}
//                         className="text-[0.72rem] tracking-[0.18em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-linear-to-r after:from-pink-400 after:to-rose-400 hover:after:w-full after:transition-all after:duration-300 pb-1"
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* Desktop CTA */}
//           <Link
//             href="/contact"
//             className="hidden md:inline-flex text-[0.72rem] tracking-[0.18em] uppercase font-semibold text-black bg-linear-to-r from-pink-400 to-rose-400 px-5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(244,114,182,0.35)] hover:shadow-[0_8px_28px_rgba(244,114,182,0.55)] hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-200 animate-[fadeInDown_0.6s_ease_0.65s_both] whitespace-nowrap"
//           >
//             Me contacter
//           </Link>

//           {/* Burger mobile */}
//           <button
//             onClick={() => { setMobileOpen(!mobileOpen); setMobileSubmenu(null); }}
//             className="md:hidden z-10 flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer bg-transparent border-none outline-none"
//             aria-label="Menu"
//           >
//             <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
//             <span className={`block h-px w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
//             <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu panel */}
//       <div
//         className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/5 ${
//           mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="px-5 pb-6 pt-2">
//           <ul className="flex flex-col">
//             {data.menu.map((item, index) => {
//               const hasSubmenu = item.submenu && item.submenu.length > 0;
//               return (
//                 <li key={index} className="border-b border-white/5 last:border-none">
//                   {hasSubmenu ? (
//                     <>
//                       <button
//                         onClick={() => setMobileSubmenu(mobileSubmenu === index ? null : index)}
//                         className="w-full flex items-center justify-between py-4 text-[0.72rem] tracking-[0.18em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer"
//                       >
//                         {item.name}
//                         <svg
//                           width="10" height="10" viewBox="0 0 10 10" fill="none"
//                           className={`opacity-50 transition-transform duration-300 ${mobileSubmenu === index ? "rotate-180" : "rotate-0"}`}
//                         >
//                           <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
//                         <ul className="pl-4 pb-2 flex flex-col gap-1">
//                           {item.submenu!.map((e, i) => (
//                             <li key={i}>
//                               <Link
//                                 href={e.urlsubmenu}
//                                 onClick={() => setMobileOpen(false)}
//                                 className="block py-2.5 text-[0.68rem] tracking-[0.14em] uppercase text-white/40 hover:text-pink-400 transition-colors duration-200"
//                               >
//                                 {e.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       href={item.url}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-4 text-[0.72rem] tracking-[0.18em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-200"
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>

//           {/* CTA mobile */}
//           <Link
//             href="/contact"
//             onClick={() => setMobileOpen(false)}
//             className="mt-5 flex items-center justify-center text-[0.72rem] tracking-[0.18em] uppercase font-semibold text-black bg-linear-to-r from-pink-400 to-rose-400 py-3 rounded-full shadow-[0_4px_20px_rgba(244,114,182,0.35)] active:scale-95 transition-all duration-200"
//           >
//             Me contacter
//           </Link>
//         </nav>
//       </div>

//       <style>{`
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-18px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeInDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </header>
//   );
// }

// export default Header;



















// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// // import { NavMenu } from "./NavMenu";

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [openMenu, setOpenMenu] = useState<number | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth >= 768) { setMobileOpen(false); setOpenMenu(null); }
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const closeAll = () => { setMobileOpen(false); setOpenMenu(null); };
//   const toggleItem = (i: number) => setOpenMenu(openMenu === i ? null : i);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 font-(family-name:--font-outfit)">

//       {/* Barre principale */}
//       <div className={`transition-all duration-500 ease-in-out px-5 md:px-8 ${
//         scrolled || mobileOpen
//           ? "py-3 bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
//           : "py-5 md:py-6 bg-transparent"
//       }`}>
//         <div className="max-w-7xl mx-auto flex items-center justify-between">

//           {/* Logo */}
//           <Link href="/" onClick={closeAll} className="flex items-center gap-2.5 group animate-[fadeInLeft_0.7s_ease_0.1s_both] z-10">
//             <img src="/assets/icons/logo-sarra-transparent.webp" alt="logo" className="h-8 md:h-9 w-auto transition-opacity duration-300 group-hover:opacity-70" />
//             <span className="w-1.5 h-1.5 rounded-full bg-linear-to-br from-pink-400 to-rose-400 shadow-[0_0_10px_rgba(244,114,182,0.8)] animate-pulse" />
//           </Link>

//           {/* Nav desktop */}
//           {/* <nav className="hidden md:block">
//             <NavMenu openMenu={openMenu} toggleItem={toggleItem} closeAll={closeAll} />
//           </nav> */}

//           {/* CTA desktop + Burger mobile */}
//           <div className="flex items-center gap-3">
//             <Link
//               href="/contact"
//               className="hidden md:inline-flex text-[0.72rem] tracking-[0.18em] uppercase font-semibold text-black bg-linear-to-r from-pink-400 to-rose-400 px-5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(244,114,182,0.35)] hover:shadow-[0_8px_28px_rgba(244,114,182,0.55)] hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-200 animate-[fadeInDown_0.6s_ease_0.65s_both] whitespace-nowrap"
//             >
//               Me contacter
//             </Link>
//             <button
//               onClick={() => { setMobileOpen(!mobileOpen); setOpenMenu(null); }}
//               className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer bg-transparent border-none outline-none"
//               aria-label="Menu"
//             >
//               <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-1.75" : ""}`} />
//               <span className={`block h-px w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
//               <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Panel mobile */}
//       <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black/95 backdrop-blur-2xl border-b border-white/5 ${
//         mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//       }`}>
//         {/* <nav className="px-5 pb-6 pt-2">
//           <NavMenu openMenu={openMenu} toggleItem={toggleItem} closeAll={closeAll} mobile />
//           <Link
//             href="/contact"
//             onClick={closeAll}
//             className="mt-5 flex items-center justify-center text-[0.72rem] tracking-[0.18em] uppercase font-semibold text-black bg-linear-to-r from-pink-400 to-rose-400 py-3 rounded-full shadow-[0_4px_20px_rgba(244,114,182,0.35)] active:scale-95 transition-all duration-200"
//           >
//             Me contacter
//           </Link>
//         </nav> */}
//       </div>

//       <style>{`
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-18px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeInDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </header>
//   );
// }

// export default Header;

