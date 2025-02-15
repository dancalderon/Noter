import { PenLine } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function AuthHeader({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto px-6 py-6">
        <Link
          href="/"
          className="flex items-center space-x-2 w-fit cursor-pointer user-select-none"
        >
          <PenLine className="h-6 w-6 text-primary-900" />
          <span className="text-xl font-semibold text-primary-900">Noter</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
