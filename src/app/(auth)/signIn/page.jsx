"use client";
// import { useState } from "react";
import { useFormState } from "react-dom";
import { login } from "@/services/actions";
import Image from "next/image";
import Link from "next/link";
import styles from "./signIn.module.css";
import InputGroup from "@/components/InputGroup";
import Button from "@/components/Button";

const initialState = {
  message: "",
};

function SignInPage() {
  const [state, formAction] = useFormState(login, initialState);
  // const [inputData, setInputData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const onChange = (e) => {
  //   e.preventDefault();
  //   setInputData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }));
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <section className="max-w-5xl min-h-screen mx-auto flex flex-col justify-center">
      <div className="flex px-10 md:h-[500px]">
        <div className={styles.imgContainer}>
          <Image src="/logo_latin.png" alt="logo" fill className={styles.img} />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10 bg-white">
          <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-10">
            Sign In
          </h1>
          <form action={formAction} className="flex flex-col gap-4">
            <InputGroup
              title="Email"
              type="email"
              placeholder="example@mail.com"
              id="email"
              name={"email"}
            />
            <InputGroup
              title="Password"
              type="password"
              placeholder="********"
              id="password"
              name={"password"}
            />
            <div className="w-full flex justify-end">
              <Link
                href="/forgetPassword"
                className="underline text-sm md:text-base"
              >
                Forget Password
              </Link>
            </div>
            <Button type="submit">Sign In</Button>
          </form>
          <p className="text-center mt-4 text-sm md:text-base">
            Don&apos;t Have Account?{" "}
            <Link href="/signUp" className="underline">
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
