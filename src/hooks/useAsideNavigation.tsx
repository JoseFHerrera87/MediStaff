import { useState } from "react";
import {
  AllView,
  DepartmentViews,
  BirthDayView,
  DetachedView,
} from "../StaffModule/Pages/StaffPage/Views";

export const useAsideNavigation = () => {
  const [View, setView] = useState(<AllView />);

  const focusOption = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const elementoPadre = e.currentTarget.parentElement;

    elementoPadre?.childNodes.forEach((li) => (li.className = "nav__option"));

    e.currentTarget.classList.add("nav__option--active");

    const currentFilter =
      e.currentTarget.childNodes[0].childNodes[1].textContent;

    switch (currentFilter) {
      case "Departamento":
        setView(<DepartmentViews />);
        break;
      case "Cumpleaños":
        setView(<BirthDayView />);
        break;
      case "Desvinculados":
        setView(<DetachedView />);
        break;
      default:
        setView(<AllView />);
        break;
    }
  };

  return { View, focusOption };
};
