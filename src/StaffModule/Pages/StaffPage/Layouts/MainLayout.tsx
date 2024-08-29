import "../Styles/mainStyle.css";
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="main__main">
      <div className="main__container-cards">{children}</div>
    </main>
  );
};
