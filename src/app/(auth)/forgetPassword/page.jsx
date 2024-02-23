"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./forgetPassword.module.css";
import InputGroup from "@/components/InputGroup";
import Button from "@/components/Button";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="max-w-5xl min-h-screen mx-auto flex flex-col justify-center">
      <div className="flex px-10 md:h-[500px]">
        <div className={styles.imgContainer}>
          <Image src="/logo_latin.png" alt="logo" fill className={styles.img} />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10 bg-white">
          <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-10">
            Forget Password
          </h1>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <InputGroup
              title="Please Enter Your Email"
              type="email"
              placeholder="example@mail.com"
              id="email"
            />
            <div className="w-full flex justify-end gap-4">
              <Link
                href="/signIn"
                className="rounded-xl bg-[#2AD5A5] text-white px-4 py-2 md:h-10 font-semibold"
              >
                Cancel
              </Link>
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
