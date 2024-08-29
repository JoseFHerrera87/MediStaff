import "../Styles/mainStyle.css";
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="main__main">
      <div className="main__container-cards">
        <header className="main__header">
          <h1 className="header__title">Todos</h1>
        </header>
        {children}
      </div>
    </main>
  );
};
