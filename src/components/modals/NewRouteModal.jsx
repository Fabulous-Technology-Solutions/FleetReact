import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import BootstrapInput from "../BootstrapInput";
import BootstrapSelectInput from "../CustomSelect";

const NewRouteModal = ({ show, onHide, modalMode = "add", data }) => {
  const [selectOne, setSelectOne] = useState('');
  const [selectTwo, setSelectTwo] = useState('');
  const [selectThree, setSelectThree] = useState('');

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
          {modalMode === "add" ? "New Route" : "Edit Member"}
        </Typography>

        <Box className="flex flex-col gap-4 mt-5">
          <Box className="flex gap-3 w-full">
            <div className="w-full">
              <InputLabel id="select-one-label" className="text-[10px] c-secondary mb-1 block">
                Start Route
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
                <MenuItem value="" disabled>Location</MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </div>

            <div className="w-full">
              <InputLabel id="select-two-label" className="text-[10px] c-secondary mb-1 block">
                End Route
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
                <MenuItem value="" disabled>Location</MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </div>
          </Box>

          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-[14px] c-secondary">
              Stops
            </InputLabel>
            <BootstrapInput
              placeholder="3024 Joes Road, Albany, NY 12207"
              type="text"
              id="stops"
              defaultValue={data?.role || ""}

            />
          </FormControl>
          <div className="w-full">
            <Select
              labelId="select-three-label"
              id="select-three"
              value={selectThree}
              onChange={(e) => setSelectThree(e.target.value)}
              input={<BootstrapSelectInput />}
              IconComponent={IoIosArrowDown}
              fullWidth
              displayEmpty
            >
              <MenuItem value="" disabled>Location</MenuItem>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </Select>
          </div>
          <a href="" className="flex text-[#0058E8] justify-end underline">Add stop</a>

          <Box className="flex gap-3 w-full">
            <div className="w-full">
              <InputLabel id="select-one-label" className="text-[10px] c-secondary mb-1 block">
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
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </div>

            <div className="w-full">
              <InputLabel id="select-two-label" className="text-[10px] c-secondary mb-1 block">
                Assigned Driver
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
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </div>
          </Box>
          <FormControl fullWidth variant="standard" >
            <InputLabel shrink htmlFor="role" className="text-[14px] c-secondary">
              Departure Time
            </InputLabel>
            <BootstrapInput
              placeholder="Enter Customer Name"
              type="date"
              id="customerName"
              defaultValue={data?.role || ""}

            />
          </FormControl>
          <hr className="w-full border-t border-[var(--borderColor)] mt-5" />

          <Box className="flex gap-3 mt-4 justify-end">
            <button
              onClick={onHide}
              className="text-sm font-semibold c-primary bg-[var(--bgcardcontainer)] border border-[var(--borderColor)] c-inverted py-3 px-4 rounded-[12px]"
            >
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

export default NewRouteModal;
