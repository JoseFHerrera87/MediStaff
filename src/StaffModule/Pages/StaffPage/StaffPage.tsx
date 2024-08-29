import { useAsideNavigation } from "../../../hooks/useAsideNavigation.tsx";
import { HeaderLayout, AsideLayout, MainLayout } from "./Layouts/index.ts";
import "./Styles/staffPage.css";

export const StaffPage = () => {
  const { View, focusOption } = useAsideNavigation();

  return (
    <>
      <HeaderLayout />
      <div className="principal">
        <AsideLayout focusOption={focusOption} />
        <MainLayout>{View}</MainLayout>
      </div>
    </>
  );
};
