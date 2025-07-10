"use client";
import React from "react";
import { motion } from "framer-motion";

const EmpGrowth = () => {
  const months = [
    { label: "MARCH 2025" },
    { label: "APRIL 2025" },
    { label: "MAY 2025" },
    { label: "JUNE 2025" },
    { label: "JULY 2025" },
  ];

  return (
    <motion.div
      className="flex flex-col items-center gap-14 text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Founder - Timeline - Co-Founder */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

        {/* Founder */}
        <motion.div
          className="flex flex-col items-center w-[220px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative w-56 h-32">
            <img src="/images/WREATHH.png" alt="Wreath" className="w-full h-full object-contain" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                bg-clip-text text-transparent font-[Poppins] text-sm font-bold tracking-widest">
                Alumni Of
              </p>
              <p className="bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                bg-clip-text text-transparent font-[Poppins] text-sm font-bold tracking-widest">
                C B I T
              </p>
            </div>
          </div>
          <p className="text-[#C0C0C0] mt-4 text-lg font-semibold">FOUNDER</p>
          <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest 
            bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
            bg-clip-text text-transparent font-[Poppins]">
            VINAY TEJA
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="w-full px-2"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="flex justify-center items-center gap-4 p-4 rounded-3xl flex-wrap sm:flex-nowrap">
            {months.map((month, idx) => (
              <motion.div
                key={idx}
                className="relative px-4 py-6 w-[100px] backdrop-blur-md border-2 rounded-xl transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.15 }}
                style={{
                  borderImage:
                    "linear-gradient(90deg, #956D13, #FFD87C, #E6BE69, #FFEC94, #D3A84C, #A47A1E) 1",
                  borderImageSlice: 1,
                  boxShadow:
                    "0 0 10px rgba(255, 215, 0, 0.2), 0 0 20px rgba(255, 215, 0, 0.08)",
                }}
              >
                <div className="text-[#C0C0C0] font-serif font-extrabold uppercase text-xs text-center space-y-1">
                  <p>{month.label.split(" ")[0]}</p>
                  <p>{month.label.split(" ")[1]}</p>
                </div>
                <div
                  className="mt-2 h-[2px] w-6 mx-auto rounded-full"
                  style={{
                    background: "linear-gradient(to right, #FFD87C, #E6BE69, #FFEC94)",
                    boxShadow: "0 0 4px #ffd700cc",
                  }}
                ></div>
                {idx < months.length - 1 && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden sm:block">
                    <p className="text-yellow-400 text-lg font-bold">↠</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Co-Founder */}
        <motion.div
          className="flex flex-col items-center w-[220px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative w-64 h-32">
            <img src="/images/WREATHH.png" alt="Wreath" className="w-full h-full object-contain" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                bg-clip-text text-transparent font-[Poppins] text-sm font-bold tracking-widest">
                Alumni Of
              </p>
              <p className="bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                bg-clip-text text-transparent font-[Poppins] text-sm font-bold tracking-widest">
                Anurag
              </p>
            </div>
          </div>
          <p className="text-[#C0C0C0] mt-4 text-lg font-semibold">CO-FOUNDER</p>
          <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest 
            bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
            bg-clip-text text-transparent font-[Poppins] px-4 py-1 whitespace-nowrap">
            VAMSHI KRISHNA
          </p>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        className="max-w-3xl mt-8 space-y-4 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest 
          bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
          bg-clip-text text-transparent font-[Poppins]">
          FROM TWO FOUNDERS TO A SCALABLE EDTECH WORKFORCE
        </p>
        <p className="text-[#C0C0C0] text-bold sm:text-lg font-light leading-relaxed">
          At VisionTech, growth is a journey from intern to innovator. Our team members evolve into leaders through real-world projects, rapid upskilling, and continuous mentorship — all fueled by passion, discipline, and vision.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EmpGrowth;
