"use client";

import { Button } from "@/components/ui/button";
import HomeHeader from "@/features/home/components/home-header";
import { PenLine, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Typography from "../../components/ui/typography";

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
              Capture Your Thoughts with Elegance
            </h1>
            <p className="text-xl text-primary-600 mb-12">
              A minimalist note-taking experience enhanced with AI capabilities.
              Focus on what matters most - your ideas.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 rounded-lg bg-white shadow-sm border border-primary-100">
              <Sparkles className="h-8 w-8 text-primary-600 mb-4" />

              <Typography variant="h4" className="mb-2">
                AI Enhanced
              </Typography>
              <Typography variant="p">
                Smart suggestions and automatic organization powered by AI
              </Typography>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-sm border border-primary-100">
              <PenLine className="h-8 w-8 text-primary-600 mb-4" />
              <Typography variant="h4" className="mb-2">
                Elegant Design
              </Typography>
              <Typography variant="p">
                Clean, distraction-free interface for focused writing
              </Typography>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-sm border border-primary-100">
              <Shield className="h-8 w-8 text-primary-600 mb-4" />
              <Typography variant="h4" className="mb-2">
                Secure Storage
              </Typography>
              <Typography variant="p">
                Your notes are encrypted and safely stored in the cloud
              </Typography>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
