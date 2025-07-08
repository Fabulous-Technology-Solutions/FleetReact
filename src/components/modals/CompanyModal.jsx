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
import BootstrapSelectInput from "../CustomSelect";
import { IoIosArrowDown } from "react-icons/io";

const CompanyModal = ({ show, onHide, modalMode = "add", data }) => {
  const [selectOne, setSelectOne] = useState("");
  if (!show) return null;

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
          {modalMode === "add" ? "Add New Company" : "Edit Company"}
        </Typography>

        <Box className="flex flex-col gap-4 mt-5 ">
          
          <FormControl fullWidth variant="standard">
            <InputLabel
              shrink
              htmlFor="role"
              className="text-[14px] c-secondary"
            >
              User Name
            </InputLabel>
            <BootstrapInput
              placeholder="Olivia"
              id="customerName"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel
              shrink
              htmlFor="role"
              className="text-[14px] c-secondary"
            >
              Email
            </InputLabel>
            <BootstrapInput
              placeholder="olivia@gmail.com"
              type="email"
              id="customerName"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <div className="w-full">
            <InputLabel
              id="select-one-label"
              className="text-[10px] c-secondary mb-1 block"
            >
              Subscription Plan
            </InputLabel>
            <Select
              labelId="select-one-label"
              id="select-one"
              value={selectOne}
              onChange={(e) => setSelectOne(e.target.value)}
              input={<BootstrapSelectInput />}
              IconComponent={IoIosArrowDown}
              fullWidth
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </Select>
          </div>
          <hr className="w-full border-t border-[var(--borderColor)] mt-5" />
          <Box className="flex gap-3 mt-4 justify-end">
            <button
              className="text-sm font-semibold c-primary bg-[var(--bgcardcontainer)] border border-[var(--borderColor)] c-inverted py-3 px-4 rounded-[12px]"
              onClick={() => onHide()}
            >
              Cancel
            </button>
            <button
              className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]"
              onClick={() => onHide()}
            >
              Save
            </button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CompanyModal;
