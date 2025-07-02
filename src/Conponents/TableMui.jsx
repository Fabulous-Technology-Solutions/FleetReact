import React, { useEffect, useRef, useState } from "react";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { LoadingOverlaySmall } from "./LoadingOverlay";
import MuiPagination from "./MuiPagination";

export default function TableMui({
  th,
  td,
  styleTableTh,
  styleTableContainer,
  styleTableThead,
  headerRounded,
  rowRounded,
  customFields,
  loading = true,
}) {
  const found = (key) => customFields?.find((obj) => obj.name === key);
  const tableRef = useRef(null);
  const [tableWidth, setTableWidth] = useState(0);

  useEffect(() => {
    if (tableRef.current) {
      setTableWidth(tableRef.current.offsetWidth);
    }
  }, [loading, td]);
  return (
    <>
      <TableContainer
        style={{
          marginTop: -12,
          scrollbarWidth: loading ? "none" : "auto",
          minHeight: 230,
        }}
      >
        <Table
          ref={tableRef}
          aria-label="simple table"
          style={{
            borderCollapse: "separate",
            minWidth: "900px",
            minHeight: "150px",
          }}
        >
          <Header
            headerRounded
            values={{
              styleTableThead,
              th,
              loading,
              styleTableTh,
            }}
          />
          {!loading && (
            <TableBody className="position-relative ">
              {td?.length > 0 ? (
                td?.map((row, index) => (
                  <MuiTableRow
                    rowRounded
                    values={{ row, th, index, found, customFields }}
                  />
                ))
              ) : (
                <div
                  className="text-center p-3 position-absolute translate-middle"
                  style={{ top: "50%", left: "50%" }}
                >
                  No Data Available
                </div>
              )}
            </TableBody>
          )}
        </Table>
        <div style={{ width: tableWidth, paddingTop: 10 }}>
          <MuiPagination
          // count={count}
        // page={page}
        // limit={limit}
        // onChange={(e, page) => setPage(page)}
          />
        </div>
      </TableContainer>
      {loading && <LoadingOverlaySmall open={loading} />}
    </>
  );
}
const MuiTableRow = ({ values, rowRounded }) => {
  const { row, th, index, found, customFields } = values;
  const rowStyle = {
    backgroundColor: "transparent",
    
  };
  return (
    <TableRow key={index} sx={{ ...rowStyle }}>
      {Object.keys(th).map((key, ind) => (
        <TableCell
          key={ind}
          className=""
          style={{ whiteSpace: "nowrap", color: "var(--csecondary)", borderColor: "var(--borderColor)" }}
          align="start"
        >
          {customFields && found(key)
            ? found(key).data(row[key], row)
            : getNestedValue(row, key)}
          {key === "sr" && index + 1}
        </TableCell>
      ))}
    </TableRow>
  );
};
const Header = ({ values, headerRounded }) => {
  const { styleTableThead, th, loading, styleTableTh } = values;

  return (
    <TableHead className="" sx={{ ...styleTableThead }}>
      <TableRow>
        {Object.entries(th).map(([key, value], index) => (
          <TableCell
            key={index}
            align="start"
            // sx={styleTableTh}
            sx={{
              fontWeight: "bold",
              color: "var(--csecondary)",
              backgroundColor: "var(--bgcardcontainer)",
              textWrap: "nowrap",
              borderColor: "var(--borderColor)"
            }}
          >
            {/* {value === 'Select' || value === 'select' ? (
        <input type="checkbox" className="form-check-input me-2" />
      ) : null} */}
            {value}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
const getNestedValue = (obj, key) => {
  const keys = key.split(".");
  return keys.reduce(function (acc, currentKey) {
    return acc && acc[currentKey] !== undefined ? acc[currentKey] : "";
  }, obj);
};
