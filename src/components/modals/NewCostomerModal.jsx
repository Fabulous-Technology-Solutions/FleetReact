import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import BootstrapInput from "../BootstrapInput";
import CustomSelect from "../CustomSelect";

const NewCostomerModal = ({ show, onHide, modalMode = "add", data }) => {
  const [role, setRole] = useState('');
  if (!show) return null;
  const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' },
];
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };


  return (
    <div
      className="fixed inset-0 bg-gray-800/10 backdrop-blur-sm flex items-center justify-center z-1100"
      onClick={onHide}
    >
      <div
        className="bg-[var(--bgcardcontainer)] c-primary rounded-lg shadow-lg p-6 w-full max-w-[400px] min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <Typography variant="h6" component="h2">
          {modalMode === "add" ? "New Customer" : "Edit Member"}
        </Typography>

        <Box className="flex flex-col gap-4 mt-5 h-[calc(100vh-300px)] overflow-y-auto">
          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Email
            </InputLabel>
            <BootstrapInput
              placeholder="Enter email"
              type="email"
              id="role"
              defaultValue={data?.role || ""}

            />
          </FormControl>
          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Customer Name
            </InputLabel>
            <BootstrapInput
              placeholder="Enter Customer Name"
              type="text"
              id="customerName"
              defaultValue={data?.role || ""}

            />
          </FormControl>
          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Company
            </InputLabel>
            <BootstrapInput
              placeholder="Enter Company"
              type="text"
              id="Company"
              defaultValue={data?.role || ""}

            />
          </FormControl>
          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Contact Person Name
            </InputLabel>
            <BootstrapInput
              placeholder="Enter Contact Person Name"
              type="text"
              id="personName"
              defaultValue={data?.role || ""}

            />
          </FormControl>
          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Email
            </InputLabel>
            <BootstrapInput
              placeholder="Enter email"
              type="email"
              id="role"
              defaultValue={data?.role || ""}

            />
          </FormControl>
          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Phone number
            </InputLabel>
            <BootstrapInput
              placeholder="Enter phone number"
              type="number"
              id="role"
              defaultValue={data?.role || ""}

            />
          </FormControl>
            
          </Box>
          <hr className="w-full border-t border-[var(--borderColor)] mt-5" />
          <Box className="flex gap-3 mt-4 justify-end">
             <button className="text-sm font-semibold c-primary bg-[var(--bgcardcontainer)] border border-[var(--borderColor)] c-inverted py-3 px-4 rounded-[12px]"
              >
              Cancel
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]"
              >
              Save
            </button>
        </Box>
      </div>
    </div>
  );
};

export default NewCostomerModal;
