import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import ArrowIcon from "../CustomIcons/ArrowIcon";

export default function MuiPagination({
  count = 50,
  page = 1,
  onChange,
  limit = 5,
}) {
  return (
    <div className="overflow-x-auto scroll-x-hidden">
      <div>
        <Pagination
          count={Math.ceil(count / limit)}
          page={page}
          onChange={(event, value) => onChange(event, value)}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              slots={{
                previous: () => (
                  <div
                    className="flex items-center justify-center gap-2 font-semibold"
                    style={{ padding: "0 8px" }}
                  >
                    <div>
                      <ArrowIcon />
                    </div>
                    Prev
                  </div>
                ),
                next: () => (
                  <div
                    className="flex items-center justify-center gap-2 font-semibold"
                    style={{ padding: "0 8px" }}
                  >
                    Next
                    <div className="transform rotate-180">
                      <ArrowIcon />
                    </div>
                  </div>
                ),
              }}
            />
          )}
          siblingCount={0}
          sx={{
            "& .MuiPagination-ul": {
              flexWrap: "nowrap",
              "& li": {
                "&:first-of-type": {
                  marginRight: "auto",
                  "& .MuiButtonBase-root": {
                    border: "1px solid var(--borderColor)",
                    backgroundColor: "var(--bgcardcontainer)",
                  },
                },
                "&:last-of-type": {
                  marginLeft: "auto",
                  "& .MuiButtonBase-root": {
                    border: "1px solid var(--borderColor)",
                    backgroundColor: "var(--bgcardcontainer)",
                  },
                },
              },
            },
            "& .MuiButtonBase-root": {
              border: "none",
              color: "var(--csecondary)",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&.Mui-selected": {
                backgroundColor: "var(--bgcardcontainer)",
                border: "none",
                color: "var(--navlinkbg)",
                "&:hover": {
                  backgroundColor: "var(--bgcardcontainer)",
                },
              },
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "var(--csecondary)",
            },
          }}
        />
      </div>
    </div>
  );
}
