import { useEffect, useState } from "react";
import { EmployeeTest } from "../interface/employee";

export const useFetch = (url: string) => {
  const [AllEmployees, setData] = useState<EmployeeTest[]>([]);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Ocurrio un problema con la conexion");
        }
        const employees: EmployeeTest[] = await response.json();
        setData(employees);
      } catch (error) {
        throw new Error(`Fallo en llamar a la API: ${error}`);
      }
    };

    getAllEmployees();
  }, [url]);

  return { AllEmployees };
};
