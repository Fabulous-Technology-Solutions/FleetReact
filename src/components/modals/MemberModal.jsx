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
import BootstrapSelectInput from "../CustomSelect";
import { IoIosArrowDown } from "react-icons/io";

const MemberModal = ({ show, onHide, modalMode = "add", data }) => {
  const [value, setValue] = useState('');
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
          {modalMode === "add" ? "New Member" : "Edit Member"}
        </Typography>

        <Box className="flex flex-col gap-4 mt-5 ">
          <Box className="flex gap-3 w-full">
            <FormControl fullWidth variant="standard">
              <InputLabel shrink htmlFor="first-name" className="text-sm c-secondary">
                First Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter first name"
                type="text"
                id="first-name"
                defaultValue={data?.firstName || ""}
              />
            </FormControl>

            <FormControl fullWidth variant="standard">
              <InputLabel shrink htmlFor="last-name" className="text-sm c-secondary">
                Last Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter last name"
                type="text"
                id="last-name"
                defaultValue={data?.lastName || ""}
              />
            </FormControl>
          </Box>
          <InputLabel htmlFor="custom-select" className="text-[8px] text-white mb-1 block c-secondary">
           Role
          </InputLabel>
          <Select
            id="custom-select"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            input={<BootstrapSelectInput />}
            IconComponent={IoIosArrowDown}
            fullWidth
            displayEmpty // <-- This line is key
          >
            <MenuItem value="" disabled>Select</MenuItem>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
            {/* <CustomSelect /> */}
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
        </Box>
      </div>
    </div>
  );
};

export default MemberModal;
