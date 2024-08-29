import { StaffLayout } from "./Layouts/HeaderLayout";
import { AsideLayout } from "./Layouts/AsideLayout";
import { MainLayout } from "./Layouts/MainLayout";
import { StaffCard } from "./Components/StaffCard";
import "./Styles/staffPage.css";
import { useFetch } from "./hooks/useFetch";

export const StaffPage = () => {
  const employees = useFetch("http://localhost:3000/employees");

  console.log(employees);
  return (
    <>
      <StaffLayout />
      <div className="principal">
        <AsideLayout />
        <MainLayout>
          <div>Vacio</div>
        </MainLayout>
      </div>
    </>
  );
};
