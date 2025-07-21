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
      <div class="relative p-[1px] w-full max-w-[400px] min-w-[300px] rounded-[12px] bg-gradient-to-br from-[#0058E8] to-[#00318200]">
        <div
          className="bg-[var(--bgcardcontainer)] rounded-[12px] c-primarys shadow-lg p-6 "
          onClick={(e) => e.stopPropagation()}
        >
          <Typography variant="h6" component="h2" className="c-primary">
            {modalMode === "add" ? "New Invoice" : "Edit Invoice"}
          </Typography>
          {/* <CustomSelect /> */}
          <Box className="flex flex-col gap-4 mt-5 max-h-[calc(100vh-300px)] overflow-y-auto">
            <FormControl fullWidth variant="standard">
              <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
                Invoice no.
              </InputLabel>
              <BootstrapInput
                placeholder="Enter"
                type="text"
                id="role"
                defaultValue={data?.role || ""}
              />
            </FormControl>
            <FormControl fullWidth variant="standard">
              <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
                Bus no.
              </InputLabel>
              <BootstrapInput
                placeholder="Enter"
                type="text"
                id="role"
                defaultValue={data?.role || ""}
              />
            </FormControl>
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
            <div className="w-full">
              <InputLabel
                htmlFor="custom-select"
                className="text-sm text-white mb-1 block c-secondary"
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
            </div>
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
                  className="text-sm text-white mb-1 block c-secondary"
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
            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="role"
                className="text-sm c-primary block"
              >
                Picture
              </InputLabel>
              <small className="c-secondary my-5">
                Take a picture, ai scan it itemize it links
              </small>
              <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
                Take a Pictue
              </button>
            </FormControl>

            <hr className="w-full border-t border-[var(--borderColor)] mt-5" />
          </Box>
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
    </div>
  );
};

export default NewInvoiceModal;
