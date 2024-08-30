export const groupBy = (array: object[], orderBy: string) => {
  const grouped: object = {};
  array.map((element) => {
    if (!Object.keys(element).includes(orderBy)) {
      console.error("Propiedad no contenida en groupBy");
      return;
    }

    const objProps: string | number | object = element[orderBy];

    if (!grouped[objProps] || !grouped[objProps] === element) {
      grouped[objProps] = [element];
    }
  });

  console.log(grouped);
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
