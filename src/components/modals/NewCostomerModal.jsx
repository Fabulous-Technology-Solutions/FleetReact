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
            {modalMode === "add" ? "New Customer" : "Edit Customer"}
          </Typography>

          <Box className="flex flex-col gap-4 mt-5 max-h-[calc(100vh-300px)] overflow-y-auto">
            <FormControl fullWidth variant="standard">
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
            <FormControl fullWidth variant="standard">
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
            <FormControl fullWidth variant="standard">
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
            <FormControl fullWidth variant="standard">
              <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
                Location
              </InputLabel>
              <BootstrapInput
                placeholder="184 Griffin Street, Gilbert, AZ 85233"
                type="text"
                id="personName"
                defaultValue={data?.role || ""}
              />
            </FormControl>
            <FormControl fullWidth variant="standard">
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
            <FormControl fullWidth variant="standard">
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

export default NewCostomerModal;
