import React, { useState } from "react";
import { LockClosed, LockOpened } from "../../CustomIcons";

export default function PasswordInput({ id, placeholder }) {
  const [type, settype] = useState("password");
  return (
    <div className="p-2.5 border border-main rounded-[12px] flex items-center gap-2">
      <input
        className="w-full c-primary outline-0"
        type={type}
        id={id}
        placeholder={placeholder}
      />
      {type === "password" ? (
        <LockClosed
          onClick={() => settype("text")}
          className="text-xl c-secondary cursor-pointer"
        />
      ) : (
        <LockOpened
          onClick={() => settype("password")}
          className="text-xl c-secondary cursor-pointer"
        />
      )}
    </div>
  );
}
