import "../Styles/mainStyle.css";

export const MainLayout = () => {
  return (
    <main className="main">
      <header className="main__header">
        <h1 className="header__title">Todos</h1>
      </header>

      <div className="main__container-cards">
        <article className="container-cards__card">
          <div className="card__container-img">
            <img
              src="../../../../../public/user1.jpg"
              alt="perfil"
              className="card__img"
            />
          </div>

          <div className="card__contain">
            <h3 className="card__name">Melissa Lanza</h3>
            <span className="card__email">mlanza@llmc.hn</span>
          </div>

          <h4 className="card__position">Gerente de compras</h4>

          <footer className="card__footer">
            <a href="#" className="footer__link">
              Ver mas
            </a>
          </footer>
        </article>

        <article className="container-cards__card">
          <div className="card__container-img">
            <img
              src="../../../../../public/user1.jpg"
              alt="perfil"
              className="card__img"
            />
          </div>

          <div className="card__contain">
            <h3 className="card__name">Melissa Lanza</h3>
            <span className="card__email">mlanza@llmc.hn</span>
          </div>

          <h4 className="card__position">Gerente de compras</h4>

          <footer className="card__footer">
            <a href="#" className="footer__link">
              Ver mas
            </a>
          </footer>
        </article>

        <article className="container-cards__card">
          <div className="card__container-img">
            <img
              src="../../../../../public/user1.jpg"
              alt="perfil"
              className="card__img"
            />
          </div>

          <div className="card__contain">
            <h3 className="card__name">Melissa Lanza</h3>
            <span className="card__email">mlanza@llmc.hn</span>
          </div>

          <h4 className="card__position">Gerente de compras</h4>

          <footer className="card__footer">
            <a href="#" className="footer__link">
              Ver mas
            </a>
          </footer>
        </article>
      </div>
    </main>
  );
};
