import { ManagerForm, PetForm, ProfileForm } from "@/components/forms";
import EmployeeForm from "@/components/forms/EmployeeForm";
import { Operation, Opacity } from "@/components/shared";
import { AuthContext } from "@/context/AuthContext";
import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { useContext } from "react";

const Modals = () => {
  const {
    state: { profile, manager, employee, customer, pet, product },
  } = useContext(UiContext);

  const {
    state: { user },
  } = useContext(AuthContext);
  const {
    state: { operation },
  } = useContext(UtilContext);
  const flag = Boolean(
    profile || operation || manager || employee || customer || pet || product
  );
  return (
    <>
      {flag && <Opacity />}
      {operation && <Operation />}
      {profile && ["manager", "high_manager"].includes(user?.role) && (
        <ProfileForm />
      )}
      {manager && ["high_manager"].includes(user?.role) && <ManagerForm />}
      {employee && ["high_manager", "manager"].includes(user?.role) && (
        <EmployeeForm />
      )}
      {pet && ["high_manager", "manager", "employee"].includes(user?.role) && (
        <PetForm />
      )}
      {customer && user?.role === "manager" && <ProfileForm />}
      {product && user?.role === "manager" && <ProfileForm />}
    </>
  );
};

export default Modals;
