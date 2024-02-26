import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white border-t-2">
      <div className="max-w-7xl mx-auto p-10 xl:px-0">
        <Link href="/">
          <Image src="/tarang_logo.png" alt="logo" width={150} height={50} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
