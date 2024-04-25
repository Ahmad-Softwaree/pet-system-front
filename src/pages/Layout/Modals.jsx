import { ProfileForm } from "@/components/forms";
import { Delete, Opacity } from "@/components/shared";
import { AuthContext } from "@/context/AuthContext";
import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { useContext } from "react";

const Modals = () => {
  const {
    state: { profile },
  } = useContext(UiContext);

  const {
    state: { user },
  } = useContext(AuthContext);
  const {
    state: { wantToDelete },
  } = useContext(UtilContext);
  const flag = Boolean(profile || wantToDelete);
  return (
    <>
      {flag && <Opacity />}
      {wantToDelete && <Delete />}
      {profile && user?.role === "manager" && <ProfileForm />}
    </>
  );
};

export default Modals;
