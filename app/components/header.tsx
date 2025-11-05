import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            width={180}
            height={50}
            alt="Matheus Dev Logo"
            className="h-10 w-auto"
          />
        </Link>
        <nav>
          <Button
            asChild
            className="bg-primary-blue hover:bg-primary-blue/90 text-white"
          >
            <a href="#download">Baixar E-book</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
