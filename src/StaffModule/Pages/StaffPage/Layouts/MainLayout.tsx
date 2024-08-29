import { StaffCard } from "../Components/StaffCard";
import "../Styles/mainStyle.css";
import { LoadLayout } from "./LoadLayout";

const getEmployees = async () => {
  try {
    const res = await fetch("http://localhost:3000");

    if (!res.ok) {
      throw new Error("Error al hacer fetch");
    }

    const employees = await res.json();
    console.log(employees);
  } catch (error) {
    console.error("Failed to fetch employees:", error);
  }
};

getEmployees();
export const MainLayout = () => {
  const isLoading: boolean = false;
  if (isLoading)
    return (
      <main className="main__main">
        <LoadLayout />
      </main>
    );

  return (
    <main className="main__main">
      {isLoading && <LoadLayout />}

      <div className="main__container-cards">
        <header className="main__header">
          <h1 className="header__title">Todos</h1>
        </header>

        {/* {employees.map((employee) => (
          <StaffCard
            id={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            department={employee.department}
            email={employee.email}
            img={employee.img}
            key={employee.id}
          />
        ))} */}
      </div>
    </main>
  );
};
