import React from "react";
import loginImg from "../../assets/images/loginImg.png";
import { useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

const CheckEmail = () => {
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
                  Check your email
                </h2>
                <p className="c-secondary mt-1">
                  We sent you a password reset link to{" "}
                </p>
                <p className="text-[var(--catblue)]">admin@example.com</p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  className="text-center text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px] w-full"
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Email
                </a>
              </div>
              <p className="text-center text-sm c-secondary mt-4">
                Remember your password? Go back to{" "}
                <span
                  className="text-blue hover:underline cursor-pointer"
                  onClick={() => navigate("/")}
                >
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

export default CheckEmail;
