import React, { useState } from "react";
import MuiPagination from "./MuiPagination";

const Table = ({ headers = [], rows = [], rowsPerPage = 5 }) => {
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);
  return (
    <div className="border border-main rounded-[12px] overflow-hidden">
      <div className="main-table overflow-x-auto">
        <table className="w-full text-nowrap border-separate border-spacing-0">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  className="text-left py-3 px-4 font-medium c-secondary text-xs bg-cardcontainer border-b border-main"
                  key={index}
                >
                  <div>{header}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              <>
                {paginatedRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        className={`c-secondary bg-sidebar text-sm p-4 border-b border-main`}
                        key={cellIndex}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ) : (
              <tr key="no-data">
                <td className="p-4 bg-sidebar" colSpan={headers.length}>
                  <div className="flex flex-col items-center w-full p-5">
                    <p className="c-secondary font-medium text-xs">
                      No data available
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="c-secondary border-t border-main bg-sidebar text-sm p-4">
        <MuiPagination
          page={page}
          setPage={setPage}
          count={rows.length}
          rowsPerPage={rowsPerPage}
        />
      </div>
    </div>
  );
};

export default Table;
