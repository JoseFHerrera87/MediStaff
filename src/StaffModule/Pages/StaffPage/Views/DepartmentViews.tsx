import { useFetch } from "../../../../hooks/useFetch";
import { StaffCard } from "../Components/StaffCard";

export const DepartmentViews = () => {
  const departments = ["Compras", "Admiciones", "Mantenimiento"];
  const { AllEmployees } = useFetch("http://localhost:3000/employees");

  return (
    <>
      {departments.map((department, i) => (
        <>
          <header className="main__header" key={i}>
            <h1 className="header__title">{department}</h1>
          </header>
        </>
      ))}
    </>
  );
};
