import { StaffCard } from "../Components/StaffCard";
import "../Styles/mainStyle.css";
import { LoadLayout } from "./LoadLayout";

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

        {[...Array(4).keys()].map((ncards) => (
          <StaffCard key={ncards} />
        ))}
      </div>
    </main>
  );
};
