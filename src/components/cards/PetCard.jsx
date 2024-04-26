import { TableCell, TableRow } from "@/components/ui/table";
import Delete from "../icons/Delete";
import Update from "../icons/Update";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";
import { UtilContext } from "@/context/UtilContext";
export default function PetCard({ index, val }) {
  const { dispatch } = useContext(UiContext);
  const { dispatch: util } = useContext(UtilContext);

  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>
        {val.image_url !== "" && (
          <img
            className="w-[200px] h-[200px] object-contain"
            src={val?.image_url}
            alt={val?.image_name}
          />
        )}
      </TableCell>
      <TableCell>{val?.name}</TableCell>
      <TableCell>{val?.breed}</TableCell>
      <TableCell>{val?.color}</TableCell>
      <TableCell>{val?.gender}</TableCell>
      <TableCell>{val?.adoption_history}</TableCell>
      <TableCell>{val?.age}</TableCell>
      <TableCell>{val?.checked ? "Yes" : "No"}</TableCell>
      <TableCell>
        <Update
          onClick={() =>
            dispatch({
              type: CONTEXT_TYPEs.PET_FORM,
              payload: {
                id: val.id,
                data: val,
                type: "update",
              },
            })
          }
          variant="tertiary"
          size="sm"
        />
      </TableCell>{" "}
      <TableCell>
        <Delete
          onClick={() =>
            util({
              type: CONTEXT_TYPEs.OPERATION,
              payload: {
                id: val.id,
                image: val.image_name,
                method: CONTEXT_TYPEs.DELETE_PET,
              },
            })
          }
          variant="red"
          size="sm"
        />
      </TableCell>
    </TableRow>
  );
}
