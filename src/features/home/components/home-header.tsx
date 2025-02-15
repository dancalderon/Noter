import ThemeToggler from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { PenLine } from "lucide-react";
import Link from "next/link";
export default function HomeHeader() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <header className="container mx-auto px-6 ">
          <Link
            href="/"
            className="flex items-center space-x-2 w-fit cursor-pointer user-select-none"
          >
            <PenLine className="h-6 w-6 text-primary-900" />
            <span className="text-xl font-semibold text-primary-900">
              Noter
            </span>
          </Link>
        </header>
        <div className="space-x-4 user-select-none flex items-center">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
}
