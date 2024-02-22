"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./signUp.module.css";
import InputGroup from "@/components/InputGroup";
import Button from "@/components/Button";

function SignUp() {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="max-w-5xl min-h-screen mx-auto flex flex-col justify-center">
      <div className="flex p-10">
        <div className={styles.imgContainer}>
          <Image src="/logo_latin.png" alt="logo" fill className={styles.img} />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10 bg-white">
          <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-10">
            Sign Up
          </h1>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <InputGroup
              title="Username"
              type="text"
              placeholder="Username"
              id="username"
            />
            <InputGroup
              title="Email"
              type="email"
              placeholder="example@mail.com"
              id="email"
            />
            <InputGroup
              title="Password"
              type="password"
              placeholder="********"
              id="password"
            />
            <InputGroup
              title="Confirm Password"
              type="password"
              placeholder="********"
              id="confirmPassword"
            />
            <Button type="submit">Sign Up</Button>
          </form>
          <p className="text-center mt-4 md:mt-10 text-sm md:text-base">
            Already Have Account?{" "}
            <Link href="/signIn" className="underline">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
