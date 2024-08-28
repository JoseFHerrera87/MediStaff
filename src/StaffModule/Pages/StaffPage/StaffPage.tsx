import { StaffLayout } from "./Layouts/HeaderLayout";
import { AsideLayout } from "./Layouts/AsideLayout";
import { MainLayout } from "./Layouts/MainLayout";

import "./Styles/staffPage.css";

export const StaffPage = () => {
  return (
    <>
      <StaffLayout />
      <div className="principal">
        <AsideLayout />
        <MainLayout />
      </div>
    </>
  );
};
