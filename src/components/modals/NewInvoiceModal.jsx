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

const NewInvoiceModal = ({ show, onHide, modalMode = "add", data }) => {
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
          {modalMode === "add" ? "New Invoice" : "Edit Invoice"}
        </Typography>
        {/* <CustomSelect /> */}
        <Box className="flex flex-col gap-4 mt-5 ">
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Vendor Name
            </InputLabel>
            <BootstrapInput
              placeholder="Enter"
              type="text"
              id="role"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <InputLabel
            htmlFor="custom-select"
            className="text-[8px] text-white mb-1 block c-secondary"
          >
            Category
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
            <MenuItem value="" disabled>
              Select
            </MenuItem>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
          <Box className="flex gap-3 w-full">
            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="first-name"
                className="text-sm c-secondary"
              >
                Date Issued
              </InputLabel>
              <BootstrapInput
                placeholder="Enter date issued"
                type="date"
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
                Due Date
              </InputLabel>
              <BootstrapInput
                placeholder="Enter due date"
                type="date"
                id="last-name"
                defaultValue={data?.lastName || ""}
              />
            </FormControl>
          </Box>
          <Box className="flex gap-3 w-full">
            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="first-name"
                className="text-sm c-secondary"
              >
                Amount
              </InputLabel>
              <BootstrapInput
                placeholder="Enter amount"
                type="number"
                id="first-name"
                defaultValue={data?.firstName || ""}
              />
            </FormControl>
            <div className="w-full">
              <InputLabel
                htmlFor="custom-select"
                className="text-[8px] text-white mb-1 block c-secondary"
              >
                Status
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
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </div>
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
        </Box>
      </div>
    </div>
  );
};

export default NewInvoiceModal;
