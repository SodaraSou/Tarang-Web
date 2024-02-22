import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

function HeaderOwn() {
  return (
    <header className="w-full fixed top-0 bg-[#d9d9d9]">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        {/* <div className={styles.imgContainer}>
          <Image
            src="/logo_latin.png"
            alt="logo"
            className="object-contain"
            width={100}
            height={100}
          />
        </div> */}
        <h1 className="text-4xl">Tarang</h1>
        <p>HeaderOwn</p>
      </div>
    </header>
  );
}

export default HeaderOwn;
