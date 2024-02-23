import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full bg-[#d9d9d9]">
      <div className="max-w-7xl mx-auto p-6 xl:px-0 flex justify-between">
        <Link href="/">
          <Image src="/tarang_logo.png" alt="logo" width={150} height={50} />
        </Link>
        <div className="w-[50px] h-[50px] bg-white rounded-xl"></div>
      </div>
    </header>
  );
}

export default Header;
