import { useFetch } from "../../../../hooks/useFetch";
import { StaffCard } from "../Components/StaffCard";
import { Fragment } from "react/jsx-runtime";

export const DepartmentViews = () => {
  const departments = ["Compras", "Admiciones", "Mantenimiento", "Caja", "IT"];
  const { AllEmployees } = useFetch("http://localhost:3000/employees");

  // const filterByDepartment = AllEmployees.map((employee) => {
  //   return employee;
  // });

  // console.log(filterByDepartment);

  const estructura = {
    Compras: [
      {
        id: 1,
        firstName: "Carlos",
        lastName: "Portillo",
        department: "Compras",
        email: "cportillo@llmc.hn",
        img: "user2.jpg",
      },
      {
        id: 4,
        firstName: "Carlos",
        lastName: "Portillo",
        department: "Compras",
        email: "cportillo@llmc.hn",
        img: "user2.jpg",
      },
      {
        id: 6,
        firstName: "Carlos",
        lastName: "Portillo",
        department: "Compras",
        email: "cportillo@llmc.hn",
        img: "user2.jpg",
      },
    ],
    Admisiones: [
      {
        id: 8,
        firstName: "Carlos",
        lastName: "Portillo",
        department: "Compras",
        email: "cportillo@llmc.hn",
        img: "user2.jpg",
      },
      {
        id: 9,
        firstName: "Carlos",
        lastName: "Portillo",
        department: "Compras",
        email: "cportillo@llmc.hn",
        img: "user2.jpg",
      },
      {
        id: 11,
        firstName: "Carlos",
        lastName: "Portillo",
        department: "Compras",
        email: "cportillo@llmc.hn",
        img: "user2.jpg",
      },
    ],
  };

  console.log(estructura);

  return (
    <>
      {departments.map((department) => (
        <Fragment key={department}>
          <header className="main__header">
            <h1 className="header__title">{department}</h1>
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
        </Fragment>
      ))}
    </>
  );
};
