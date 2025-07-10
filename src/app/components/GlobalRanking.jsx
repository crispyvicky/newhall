"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import IMAGE from "../Utils/images";

// Dynamically import ApexCharts (no SSR)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Data with charts included
const RANKINGS = [
  {
    title: "CB RANKING",
    logo: IMAGE.CRUNCHBASE,
    trend: "+15% this month",
    series: [{ name: "CB", data: [10, 20, 40, 60] }],
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  {
    title: "INSTAGRAM",
    logo: IMAGE.INSTA,
    trend: "+22% this month",
    series: [{ name: "Instagram", data: [30, 45, 65, 80] }],
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  {
    title: "LINKEDIN",
    logo: IMAGE.LINKDN,
    trend: "+18% this month",
    series: [{ name: "LinkedIn", data: [20, 30, 45, 70] }],
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  {
    title: "AWS RANK",
    logo: IMAGE.AWS,
    trend: "+10% this month",
    series: [{ name: "AWS", data: [40, 50, 60, 70] }],
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
];

const REVIEWS = [
  {
    platform: "AMBITION BOX",
    rating: "4.9/5",
    count: "",
    logo: IMAGE.AMBITIONBOX,
  },
  {
    platform: "GOOGLE BUSINESS",
    rating: "4.9/5",
    count: "",
    logo: IMAGE.GOOGLE,
  },
];

const GlobalRanking = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-16 text-center text-white">
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold tracking-wider  uppercase 
                   bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E] 
                   bg-clip-text text-transparent font-[Poppins] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Global Rankings & Public Recognition
      </motion.h2>

      {/* Chart Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {RANKINGS.map((rank, i) => (
          <motion.div
            key={i}
            className="relative bg-[#0f0c29] rounded-xl px-4 py-6 shadow-lg border border-[#FFD700]/30 hover:scale-105 transition-all duration-300"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {/* Trend */}
            <div className="absolute top-3 right-4 text-green-400 text-xs font-semibold">
              {rank.trend}
            </div>

            {/* Logo */}
            <img
              src={rank.logo}
              alt={rank.title}
              className="w-10 h-10 mx-auto rounded mb-3 drop-shadow"
              loading="lazy"
            />

            {/* Apex Chart */}
            <Chart
  options={{
    chart: {
      id: `${rank.title}-barchart`,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "50%",
        distributed: true,
      },
    },
    colors: ["#FFD87C", "#E6BE69", "#D4AF37", "#A47A1E"],
    xaxis: {
      categories: rank.categories,
      labels: { show: false },
    },
    yaxis: { show: false },
    tooltip: { enabled: false },
    grid: { show: false },
  }}
  series={rank.series}
  type="bar"
  height={120}
/>


            {/* Title */}
            <p
              className="text-sm sm:text-base font-bold uppercase tracking-wider 
                         bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                         bg-clip-text text-transparent font-[Poppins] mt-3"
            >
              {rank.title}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Reviews Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 rounded-xl sm:grid-cols-2 gap-8 justify-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
      >
        {REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            className="bg-[#0f0c29] border border-[#FFD700]/20 rounded-xl px-6 py-5 shadow-xl flex items-center gap-4 hover:scale-105 transition-all duration-300"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src={review.logo} alt={review.platform} className="w-10 h-10" />
            <div className="text-left">
              <div
                className="flex items-center mb-1 font-extrabold 
                           bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E] 
                           bg-clip-text text-transparent font-[Poppins]"
              >
                <FaStar />
                <span className="ml-2">{review.rating}</span>
              </div>
              <p
                className="text-sm font-semibold 
                           bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                           bg-clip-text text-transparent font-[Poppins]"
              >
                {review.platform}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GlobalRanking;
