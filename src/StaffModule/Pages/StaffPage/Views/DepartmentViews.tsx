import { Fragment, useEffect, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { StaffCard } from "../Components/StaffCard";
import { groupBy } from "../../../Helpers/groupBy";
export const DepartmentViews = () => {
  const { AllEmployees } = useFetch("http://localhost:3000/employees");

  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "San Francisco" },
    { name: "Charlie", age: 30, city: "New York" },
    { name: "David", age: 25, city: "Los Angeles" },
    { name: "Eve", age: 35, city: "New York" },
  ];

  groupBy(people, "age");

  return <></>;
};

// <>
//   {departments.map((department) => (
//     <Fragment key={department}>
//       <header className="main__header">
//         <h1 className="header__title">{department}</h1>
//       </header>

//       {AllEmployees.map((employee) => (
//         <StaffCard
//           firstName={employee.firstName}
//           department={employee.department}
//           id={employee.id}
//           img={employee.img}
//           email={employee.email}
//           lastName={employee.lastName}
//           key={employee.id}
//         />
//       ))}
//     </Fragment>
//   ))}
// </>
