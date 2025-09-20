import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  styled,
  alpha,
  InputBase,
  useTheme,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const BootstrapSelectInput = styled(InputBase)(({ theme }) => ({
  "& .MuiSelect-select": {
    borderRadius: 12,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid var(--borderColor)",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    color: "var(--cprimary)",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&::placeholder": {
      color: "var(--cprimary)", // or 'var(--cprimary)'
      // opacity: 1,
    },
    "&:focus": {
      borderColor: theme.palette.primary.main,
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
  },
  "& .css-siyuh6-MuiSelect-icon": {
    color: "var(--cprimary)",
  },
}));

export default BootstrapSelectInput;
//  CustomSelect() {
//   const [value, setValue] = React.useState('');

//   return (
//     <div style={{ width: '100%' }}>
//       <InputLabel
//         htmlFor="custom-select"
//         className="text-[8px] text-white mb-1 block c-secondary"
//       >
//         Role
//       </InputLabel>
//       <Select
//         id="custom-select"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         input={<BootstrapSelectInput />}
//         IconComponent={IoIosArrowDown}
//         fullWidth
//         displayEmpty // <-- This line is key
//       >
//         <MenuItem value="" disabled>Select</MenuItem>
//         <MenuItem value="10">Ten</MenuItem>
//         <MenuItem value="20">Twenty</MenuItem>
//       </Select>
//     </div>
//   );
// }
