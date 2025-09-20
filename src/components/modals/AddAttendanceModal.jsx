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

const AddAttendanceModal = ({ show, onHide, modalMode = "add", data }) => {
  const [driver, setDriver] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800/10 backdrop-blur-sm flex items-center justify-center z-1100"
      onClick={onHide}
    >
      <div className="relative p-[1px] w-full max-w-[400px] min-w-[300px] rounded-[12px] bg-gradient-to-br from-[#0058E8] to-[#00318200]">
        <div
          className="bg-[var(--bgcardcontainer)] rounded-[12px] c-primarys shadow-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <Typography variant="h6" component="h2" className="c-primary">
            Add Attendance
          </Typography>

          <Box className="flex flex-col gap-4 mt-5 max-h-[calc(100vh-300px)] overflow-y-auto sc">
            {/* Select Driver */}
            <div className="w-full">
              <InputLabel
                id="driver-select-label"
                className="text-[10px] c-secondary mb-1 block"
              >
                Select Driver
              </InputLabel>
              <Select
                labelId="driver-select-label"
                id="driver-select"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                input={<BootstrapSelectInput />}
                IconComponent={IoIosArrowDown}
                fullWidth
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value="driver1">Driver 1</MenuItem>
                <MenuItem value="driver2">Driver 2</MenuItem>
                <MenuItem value="driver3">Driver 3</MenuItem>
              </Select>
            </div>

            {/* Start Time */}
            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="start-time"
                className="text-[14px] c-secondary"
              >
                Start Time
              </InputLabel>
              <BootstrapInput
                type="datetime-local"
                id="start-time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </FormControl>

            {/* End Time */}
            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="end-time"
                className="text-[14px] c-secondary"
              >
                End Time
              </InputLabel>
              <BootstrapInput
                type="datetime-local"
                id="end-time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </FormControl>

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
                onClick={() => {
                  // TODO: handle save logic here
                  onHide();
                }}
              >
                Save
              </button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AddAttendanceModal;
