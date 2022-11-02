import type { Table, Tuple } from "@/types/Table";

const flipTable = (data: Table) => {
  return data.reduce((acc: Table, row: Tuple) => {
    for (let i = 0; i < row.length; i++) {
      if (!acc[i]) {
        acc[i] = [];
      }
      acc[i].push(row[i]);
    }
    return acc;
  }, [] as Table);
};

export default flipTable;
