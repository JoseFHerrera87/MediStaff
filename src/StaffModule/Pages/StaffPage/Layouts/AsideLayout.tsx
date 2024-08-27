import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faBuildingUser,
  faFileSignature,
  faRankingStar,
  faFile,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/asideStyle.css";
import { ReactElement } from "react";

const focusOption = (e: React.MouseEvent<HTMLLIElement>) => {
  const elementoPadre = e.currentTarget.parentElement;

  elementoPadre?.childNodes.forEach((li) => (li.className = "nav__option"));

  e.currentTarget.classList.add("nav__option--active");
};

export const AsideLayout = () => {
  return (
    <>
      <aside>
        <header className="aside__header">
          <h1>Filtros</h1>
          <svg className="header__polka"></svg>
        </header>

        <nav className="aside__nav">
          <li className="nav__option nav__option--active" onClick={focusOption}>
            <div className="option__container">
              <FontAwesomeIcon icon={faFilter} className="option__icon" />
              <span className="option__text">Todos</span>
            </div>
          </li>
          <li className="nav__option" onClick={focusOption}>
            <div className="option__container">
              <FontAwesomeIcon icon={faBuildingUser} className="option__icon" />
              <span className="option__text">Departamento</span>
            </div>
          </li>
          <li className="nav__option" onClick={focusOption}>
            <div className="option__container">
              <FontAwesomeIcon
                icon={faFileSignature}
                className="option__icon"
              />
              <span className="option__text">Nombre</span>
            </div>
          </li>
          <li className="nav__option" onClick={focusOption}>
            <div className="option__container">
              <FontAwesomeIcon icon={faRankingStar} className="option__icon" />
              <span className="option__text">Puesto</span>
            </div>
          </li>
        </nav>

        <a href="#" className="aside__button">
          <FontAwesomeIcon icon={faFile} className="button__icon" />
          <span className="button__text">Agregar Reporte E/S</span>
        </a>

        <div className="aside__exit">
          <a className="exit__btn" href="#">
            <FontAwesomeIcon icon={faRightFromBracket} className="btn__icon" />
            <span className="btn__text">Salir</span>
          </a>
        </div>
      </aside>
    </>
  );
};
