import { useEffect, useState } from "react";
import { EmployeeTest } from "../interface/employee";

export const useFetch = (url: string) => {
  const [employees, setemployees] = useState<EmployeeTest[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setemployees(data));
  }, [url]);

  return employees;
};
