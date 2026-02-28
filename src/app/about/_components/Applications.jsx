"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Utensils,
  Droplets,
  ShoppingBag,
  Sparkles,
  Home,
  TreePine,
} from "lucide-react";

export default function Applications() {
  const apps = [
    { title: "Food & Beverage Manufacturers", icon: <Utensils size={24} /> },
    {
      title: "Chemical & Processing Industries",
      icon: <Building2 size={24} />,
    },
    { title: "Water Treatment Facilities", icon: <Droplets size={24} /> },
    { title: "Retail & Private Label Brands", icon: <ShoppingBag size={24} /> },
    { title: "Spa & Wellness Centers", icon: <Sparkles size={24} /> },
    { title: "Construction & Interior Projects", icon: <Home size={24} /> },
    { title: "Agriculture & Livestock", icon: <TreePine size={24} /> },
  ];

  return (
    <section className="py-24 bg-white text-black relative" id="applications">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3rem] bg-[#F8F8F8] p-12 lg:p-20 overflow-hidden border border-black/5 shadow-xl shadow-black/[0.02]">
          {/* Decorative Background grid/dots - subtle on light */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #CA7A7B 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[2px] w-12 bg-[#CA7A7B]" />
                <span className="text-[#CA7A7B] font-bold tracking-[0.2em] uppercase text-xs">
                  Industry Expertise
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-[1.1]">
                Powering Global <br />
                <span className="text-[#CA7A7B]">Industries</span>
              </h2>

              <p className="text-black/60 leading-relaxed text-lg mb-12">
                Our high-purity minerals provide essential solutions across a
                diverse range of sectors, from massive chemical processing
                plants to premium gourmet brands and luxury wellness
                experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 flex-grow w-full">
              {apps.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white hover:bg-[#CA7A7B] border border-black/5 hover:border-[#CA7A7B] p-8 rounded-[2rem] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#CA7A7B]/20"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#CA7A7B]/10 text-[#CA7A7B] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white group-hover:text-[#CA7A7B]">
                      {app.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black leading-tight group-hover:text-white transition-colors">
                      {app.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
