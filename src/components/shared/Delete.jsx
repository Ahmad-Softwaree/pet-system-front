import { UtilContext } from "@/context/UtilContext";
import { CONTEXT_TYPEs } from "@/context";
import { useContext } from "react";
import { Loader } from ".";

export default function Delete() {
  const {
    dispatch,
    state: { id, method, image, type },
  } = useContext(UtilContext);

  const flag = Boolean(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        switch (method) {
          default:
            return;
        }
      }}
      data-aos="fade-up"
      className={`bg-black-500 text-white-500 z-[1500] fixed inset-0 m-auto w-fit h-fit p-10 rounded-lg  flex flex-col justify-center items-center transition-all duration-200  gap-5 shadow-xl`}>
      <h2>You sure want to delete this data?</h2>
      <div className="flex flex-row w-full justify-center items-center gap-5">
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: CONTEXT_TYPEs.DELETE,
              payload: null,
            });
          }}
          className="p-2 px-10 bg-red-500 cursor-pointer rounded-lg bg-green text-black-500">
          No
        </button>
        <button
          type="submit"
          disabled={flag}
          className="p-2 px-10 text-white-500 bg-primary-500 cursor-pointer rounded-lg disabled:bg-gray-500">
          {flag ? <Loader /> : "Yes"}
        </button>
      </div>
    </form>
  );
}
