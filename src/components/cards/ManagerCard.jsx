import { TableCell, TableRow } from "@/components/ui/table";
export default function ManagerCard({ index, val }) {
  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{val?.name}</TableCell>
      <TableCell>{val?.email}</TableCell>
      <TableCell>{val?.gender}</TableCell>
      <TableCell>{val?.age}</TableCell>
      <TableCell>{val?.salary}</TableCell>
    </TableRow>
  );
}
