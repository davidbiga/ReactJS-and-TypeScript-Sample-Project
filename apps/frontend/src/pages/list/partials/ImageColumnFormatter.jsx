import React from "react";

export function ImageColumnFormatter(
  cellContent,
  row,
  rowIndex,
) {
  return (
    <>
      <img src={row.url} width={100} height={100} />
    </>
  );
}
