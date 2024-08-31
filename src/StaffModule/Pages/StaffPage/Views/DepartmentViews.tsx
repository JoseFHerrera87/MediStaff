import { Fragment } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { StaffCard } from "../Components/StaffCard";
import { groupBy } from "../../../Helpers/groupBy.ts";
import { EmployeeTest } from "../../../../interface/employee.ts";

export const DepartmentViews = () => {
  const { AllEmployees } = useFetch("http://localhost:3000/employees");

  if (AllEmployees.length < 1) {
    <div>No hay Empleados que mostrar</div>;
    return;
  }
  const byDepartment = groupBy(AllEmployees, "department");

  return (
    <>
      {Object.keys(byDepartment).map((department) => (
        <Fragment key={department}>
          <header className="main__header">
            <h1 className="header__title">{department}</h1>
          </header>

          {byDepartment[department].map((employee: EmployeeTest) => (
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
        </Fragment>
      ))}
    </>
  );
};
