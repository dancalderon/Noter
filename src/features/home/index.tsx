"use client";

import { Button } from "@/components/ui/button";
import HomeHeader from "@/features/home/components/home-header";
import { FolderSearch, PenLine, Search, Zap } from "lucide-react";

import KeyFeatures from "@/features/auth/components/key-features";
import { motion } from "motion/react";
import HowItWorks from "../auth/components/how-it-works";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <HomeHeader />

      <main className="container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-primary-900 mb-6">
              Capture Ideas Instantly.
              <span className="block mt-2">Let AI Do the Rest.</span>
            </h1>
            <p className="text-xl text-primary-600 mb-12">
              Type a thought, a link, or a quick note—our AI will transform it
              into a complete, structured entry with relevant details, tags, and
              sources. No effort required. AI-enhanced notes that adapt to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-x-4"
          >
            <Button size="lg">Start Taking Notes</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>

          <KeyFeatures />
          <HowItWorks />
        </div>
      </main>
    </div>
  );
}
