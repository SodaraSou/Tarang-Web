import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full bg-white border-b-2 sticky top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto p-6 xl:px-0 flex justify-between items-center">
        <Link href="/">
          <Image src="/tarang_logo.png" alt="logo" width={150} height={50} />
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
