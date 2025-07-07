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

const NewMaintenanceModal = ({ show, onHide, modalMode = "add", data }) => {
  const [role, setRole] = useState("");
  const [selectOne, setSelectOne] = useState("");
  const [selectTwo, setSelectTwo] = useState("");
  if (!show) return null;
  const roles = [
    { label: "Admin", value: "admin" },
    { label: "Editor", value: "editor" },
    { label: "Viewer", value: "viewer" },
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
          {modalMode === "add" ? "New Maintenance Log" : "Edit Member"}
        </Typography>

        <Box className="flex flex-col gap-4 mt-5 ">
          <Box className="flex gap-3 w-full">
            <div className="w-full">
              <InputLabel
                id="select-one-label"
                className="text-[10px] c-secondary mb-1 block"
              >
                Vehicle
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

            <div className="w-full">
              <InputLabel
                id="select-two-label"
                className="text-[10px] c-secondary mb-1 block"
              >
                Type
              </InputLabel>
              <Select
                labelId="select-two-label"
                id="select-two"
                value={selectTwo}
                onChange={(e) => setSelectTwo(e.target.value)}
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
          </Box>
          <FormControl fullWidth variant="standard">
            <InputLabel
              shrink
              htmlFor="role"
              className="text-[14px] c-secondary"
            >
              Last Service Date
            </InputLabel>
            <BootstrapInput
              placeholder="Enter Customer Name"
              type="date"
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
              Next Service Date
            </InputLabel>
            <BootstrapInput
              placeholder="Enter Customer Name"
              type="date"
              id="customerName"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <div className="w-full">
            <InputLabel
              id="select-one-label"
              className="text-[10px] c-secondary mb-1 block"
            >
              Assigned Mechanic
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
            <button className="text-sm font-semibold c-primary bg-[var(--bgcardcontainer)] border border-[var(--borderColor)] c-inverted py-3 px-4 rounded-[12px]">
              Cancel
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Save
            </button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default NewMaintenanceModal;
