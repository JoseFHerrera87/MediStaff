export const StaffCard = () => {
  const description = "Gerente de Compras";
  return (
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

      <h4 className="card__description">{description}</h4>

      <footer className="card__footer">
        <a href="#" className="footer__link">
          Ver mas
        </a>
      </footer>
    </article>
  );
};
