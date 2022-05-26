
import React, { useMemo, useState } from "react";

const FilteredList = () => {
  const [persons, setPersons] = useState([
    { name: "Dennis", id: 0, age: 31 },
    { name: "Marco", id: 1, age: 2 },
    { name: "Michele", id: 2, age: 33 },
    { name: "Enzo", id: 3, age: 5 },
    { name: "Manuel", id: 4, age: 35 },
    { name: "Carlo", id: 5, age: 6 },
    { name: "Andrea", id: 6, age: 37 },
    { name: "Alessandro", id: 7, age: 7 },
  ]);

  const filterPersons = useMemo(() => {
    return persons.filter((person) => person.age >= 18);
  }, [persons]);

  return <div>{filterPersons.map((person) => ` ${person.name} `)}</div>;
};

export default FilteredList;
