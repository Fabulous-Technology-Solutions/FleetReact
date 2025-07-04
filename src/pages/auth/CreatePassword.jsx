import React from "react";
import loginImg from "../../assets/images/loginImg.png";
import { useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

const CreatePassword = () => {
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
                  Create Password
                </h2>
                <p className="c-secondary mt-1">
                  Update your password to regain secure access to your account.
                </p>
              </div>

              <div className="flex flex-col gap-4">
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
                  onClick={() => navigate("/password-reset")}
                >
                  Create Password
                </button>
              </div>
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

export default CreatePassword;
