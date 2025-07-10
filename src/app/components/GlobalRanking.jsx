"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import IMAGE from "../Utils/images";

const RANKINGS = [
  {
    title: "CB RANKING",
    image: IMAGE.CBINSIGHTS,
    logo: IMAGE.CRUNCHBASE,
    trend: "+15% this month",
  },
  {
    title: "INSTAGRAM",
    image: IMAGE.INSTAINSIGHTS,
    logo: IMAGE.INSTA,
    trend: "+22% this month",
  },
  {
    title: "LINKEDIN",
    image: IMAGE.LINKDNINSIGHTS,
    logo: IMAGE.LINKDN,
    trend: "+18% this month",
  },
  {
    title: "AWS RANK",
    image: IMAGE.AWSINSIGHTS,
    logo: IMAGE.AWS,
    trend: "+10% this month",
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
      {/* Title with golden gradient */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase 
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
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {RANKINGS.map((rank, i) => (
          <motion.div
            key={i}
            className="relative bg-[#0f0c29] rounded-xl px-4 py-6 shadow-lg border border-[#FFD700]/30 hover:scale-105 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Trend Percentage */}
            <div className="absolute top-3 right-4 text-green-400 text-xs font-semibold">
              {rank.trend}
            </div>

            {/* Logos and Charts */}
            <img
              src={rank.logo}
              alt={rank.title}
              className="w-10 h-10 mx-auto  rounded-xl mb-3 drop-shadow"
              loading="lazy"
            />
            <img
              src={rank.image}
              alt={`${rank.title} chart`}
              className="w-full h-32 object-contain mb-3 rounded-md"
            />
            <p
              className="text-sm sm:text-base font-bold uppercase tracking-wider 
                         bg-gradient-to-r from-[#956D13] via-[#FFD87C] to-[#A47A1E]
                         bg-clip-text text-transparent font-[Poppins]"
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
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            className="bg-[#0f0c29] border border-[#FFD700]/20 rounded-xl px-6 py-5 shadow-xl flex items-center gap-4 hover:scale-105 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
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
              {review.count && (
                <p className="text-xs text-white/60">{review.count}</p>
              )}
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
