import React from "react";
import PasswordInput from "../../Conponents/settings/PasswordInput";

const SecuritySettings = () => {
  const list = [
    { label: "Current Password", id: "CurrentPassword", placeholder: "Current Password" },
    { label: "New Password", id: "NewPassword", placeholder: "New Password" },
    {
      label: "Confirm New Password",
      id: "ConfirmNewPassword",
      placeholder: "Confirm New Password",
    },
  ];
  return (
    <div>
      <div className="max-w-4xl w-full mx-auto">
        <div>
          <p className="text-lg font-semibold c-primary">Password management</p>
          <div className="text-sm c-secondary">
            Update your password to keep your account secure.
          </div>
        </div>
        <div className="mt-4 bg-cardcontainer rounded-[24px]">
          <div className="flex flex-col gap-4 p-6">
            {list.map((item, index) => (
              <div key={index}>
                <label
                  className="c-secondary font-medium text-sm"
                  htmlFor={item.id}
                >
                  {item.label}
                </label>
                <div className="mt-1">
                  <PasswordInput id={item.id} placeholder={item.placeholder} />
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-main p-6 flex items-center gap-4 justify-end flex-wrap">
            <button className="c-primary gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              Cancel
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Update Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
