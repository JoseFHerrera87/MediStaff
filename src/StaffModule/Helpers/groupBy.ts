type GroupedByKey<T> = {
  [key: string]: T[];
};

export const groupBy = <T extends Record<string, any>>(
  array: T[],
  orderBy: keyof T
): object => {
  const grouped: GroupedByKey<T> = {};

  array.forEach((element) => {
    if (!(orderBy in element)) {
      console.error("Propiedad no contenida en groupBy");
      return;
    }

    const objkey = element[orderBy] as unknown as string;

    if (!grouped[objkey]) {
      grouped[objkey] = [];
    }

    grouped[objkey].push(element);
  });

  return grouped;
};

// {
//   25: [
//     { name: "Bob", age: 25, city: "San Francisco" },
//     { name: "David", age: 25, city: "Los Angeles" }
//   ],
//   30: [
//     { name: "Alice", age: 30, city: "New York" },
//     { name: "Charlie", age: 30, city: "New York" }
//   ],
//   35: [
//     { name: "Eve", age: 35, city: "New York" }
//   ]
// }
