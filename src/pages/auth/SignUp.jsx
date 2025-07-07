import React from "react";
import loginImg from "../../assets/images/loginImg.png";
import { useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid md:grid-cols-2 w-screen h-screen">
        <div className="w-full h-screen bg-body flex flex-col items-center justify-between p-4">
          <div className="mb-10 w-full">
            <h1 className="text-2xl font-bold c-primary">LOGO</h1>
          </div>
          <div className="w-full max-w-md bg-body">
            <div className="flex flex-col gap-6">
              <div className="text-center">
                <h2 className="text-3xl font-semibold c-primary">
                  Sign up
                </h2>
                <p className="c-secondary mt-1">
                  Enter your details to sign up.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div>
                  <label className="block mb-1 text-sm c-secondary">
                    First name
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Olivia"
                      className="w-full px-3 py-2 rounded-md c-primary border border-main"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-sm c-secondary">
                    Last name
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Rhye"
                      className="w-full px-3 py-2 rounded-md c-primary border border-main"
                    />
                  </div>
                </div>
                </div>
                <div>
                  <label className="block mb-1 text-sm c-secondary">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full ps-9 pe-3 py-2 rounded-md c-primary border border-main"
                    />
                    <IoMailOutline className="absolute left-3 top-3 c-secondary text-xl" />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm c-secondary">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pe-9 ps-3 py-2 rounded-md c-primary border border-main"
                    />
                    <CiLock className="absolute right-3 top-3 c-secondary text-xl" />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm c-secondary">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pe-9 ps-3 py-2 rounded-md c-primary border border-main"
                    />
                    <CiLock className="absolute right-3 top-3 c-secondary text-xl" />
                  </div>
                </div>

                <button
                  className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px] w-full"
                  onClick={() => navigate("/dashboard")}
                >
                  Sign up
                </button>

                <button className="w-full flex items-center justify-center gap-2 border border-main py-2 rounded-md c-primary hover:bg-[#2A2A2A]">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Sign up with Google
                </button>
              </div>

              <p className="text-center text-sm c-secondary mt-4">
                Already have an account?{" "}
                <span className="text-blue hover:underline cursor-pointer" onClick={() => navigate("/sign-in")}>
                  Sign in
                </span>
              </p>
            </div>
          </div>
          <div className="h-10"></div>
        </div>

        <div className=" md:max-h-screen max-h-[0px] md:visible invisible">
          <img
            src={loginImg}
            className="w-full h-full object-fill"
            alt="Login Illustration"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
