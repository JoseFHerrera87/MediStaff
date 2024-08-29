import { EmployeeTest } from "../../../../interface/employee";
export const StaffCard = ({
  firstName,
  lastName,
  email,
  department,
  img,
}: EmployeeTest) => {
  return (
    <article className="container-cards__card">
      <div className="card__container-img">
        <img src={img} alt="perfil" className="card__img" />
      </div>

      <div className="card__contain">
        <h3 className="card__name">{`${firstName} ${lastName}`}</h3>
        <span className="card__email">{email}</span>
      </div>

      <h4 className="card__description">{department}</h4>

      <footer className="card__footer">
        <a href="#" className="footer__link">
          Ver mas
        </a>
      </footer>
    </article>
  );
};
