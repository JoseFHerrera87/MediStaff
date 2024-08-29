import { StaffCard } from "../Components/StaffCard";
import { useFetch } from "../../../../hooks/useFetch";

export const AllView = () => {
  const { AllEmployees } = useFetch("http://localhost:3000/employees");
  return (
    <>
      <header className="main__header">
        <h1 className="header__title">Todos</h1>
      </header>
      {AllEmployees.map((employee) => (
        <StaffCard
          firstName={employee.firstName}
          department={employee.department}
          id={employee.id}
          img={employee.img}
          email={employee.email}
          lastName={employee.lastName}
          key={employee.id}
        />
      ))}
    </>
  );
};
