"use client";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "react-toastify";
import email_icon from "../../public/email.png";
import pass_icon from "../../public/password.png";
import user_icon from "../../public/person.png";
import { useRouter } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_SERVER_ENDPOINT;

const LoginSignup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [isLogin, setLogin] = useState(false);
  const router = useRouter();

  const Signinfunc = async () => {
    const data = await axios.post(
      `${apiUrl}/auth/login`,
      {
        email,
        password: pass,
      },
      { withCredentials: true }
    );

    if (data.data.message === "Login successful") {
      toast(data.data.message);
      router.push("/");
    }
  };

  const Signupfunc = async () => {
    const data = await axios.post(`${apiUrl}/auth/signup`, {
      name,
      email,
      password: pass,
    });
    if (data.status === 201) {
      toast("Signup Successfully");

      setLogin(!isLogin);

      return;
    }
    toast(data.data.message);
  };

  return (
    <>
      <div>
        <div className="container flex flex-col m-auto mt-[0px] pb-[30px]">
          <div className=" flex flex-col items-center gap-[5px] mt-[0px]">
            <div className=" text-[#9f5bff] text-[36px] font-bold">
              {isLogin ? "Sign In" : "Sign Up"}
            </div>
            <div className=" w-[80px] h-[6px] bg-[#9f5bff] rounded-lg"></div>
          </div>
          <div className="mt-[45px] flex flex-col gap-6">
            {!isLogin ? (
              <div className="flex items-center m-auto w-[480px] h-[70px] bg-slate-100 rounded-lg">
                <Image
                  src={user_icon}
                  className=" mt-0 mb-0 mr-7 ml-7"
                  alt=""
                />
                <input
                  type="text"
                  className="h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center m-auto w-[480px] h-[70px] bg-slate-100 rounded-lg">
              <Image src={email_icon} className=" mt-0 mb-0 mr-7 ml-7" alt="" />
              <input
                type="email"
                className="h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="flex items-center m-auto w-[480px] h-[70px] bg-slate-100 rounded-lg ">
              <Image src={pass_icon} className=" mt-0 mb-0 mr-7 ml-7" alt="" />
              <input
                type="password"
                className="h-12 w-[380px] rounded-md bg-transparent outline-none cursor-pointer"
                placeholder="Enter your Password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="pl-[32%] mt-[10px] text-[#797979]">
              Forgot Password?{" "}
              <span className=" text-[#9f5bff] cursor-pointer">Reset</span>
            </div>
            {isLogin && (
              <div className="pl-[32%] text-[#797979]">
                New User?{" "}
                <span
                  className="text-[#9f5bff] cursor-pointer"
                  onClick={() => setLogin(false)}
                >
                  Create account
                </span>
              </div>
            )}
            {!isLogin && (
              <div className="pl-[32%] mt-[10px] text-[#797979]">
                Already Existing User?
                <button
                  className=" text-[#9f5bff] cursor-pointer"
                  onClick={() => setLogin(true)}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-row gap-7 items-center justify-center">
            {isLogin ? (
              <>
                <Button onClick={Signinfunc}>Sign In</Button>
              </>
            ) : (
              <>
                <Button onClick={Signupfunc}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
