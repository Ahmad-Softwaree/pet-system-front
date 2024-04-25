import { ManagerCard } from "@/components/cards";

const ManagersGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <ManagerCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default ManagersGrid;
