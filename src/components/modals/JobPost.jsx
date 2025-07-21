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
  const [value, setValue] = useState("");
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
          {modalMode === "add" ? "New Job Post" : "Edit Job Post"}
        </Typography>

        <Box className="flex flex-col gap-4 mt-5 max-h-[calc(100vh-300px)] overflow-y-auto">
            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="first-name"
                className="text-sm c-secondary"
              >
                Job Title
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Job Title"
                type="text"
                id="first-name"
                defaultValue={data?.firstName || ""}
              />
            </FormControl>

            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="last-name"
                className="text-sm c-secondary"
              >
                Location
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Location"
                type="text"
                id="last-name"
                defaultValue={data?.lastName || ""}
              />
            </FormControl>
          <InputLabel
            htmlFor="custom-select"
            className="text-[8px] text-white mb-1 block c-secondary"
          >
            Type
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
            
            <MenuItem value="10" selected>Hourly</MenuItem>
            <MenuItem value="20">Daily</MenuItem>
          </Select>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Salary
            </InputLabel>
            <BootstrapInput
              placeholder="$1.449,30"
              type="number"
              id="role"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Openings
            </InputLabel>
            <BootstrapInput
              placeholder="10"
              type="number"
              id="role"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Description
            </InputLabel>
            <BootstrapInput
              placeholder="Write here..."
              type="text"
              multiline={true}
              rows={5}
              inputComponent="textarea"
              id="role"
              defaultValue={data?.role || ""}
            />
          </FormControl>
        </Box>
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
      </div>
    </div>
  );
};

export default MemberModal;
