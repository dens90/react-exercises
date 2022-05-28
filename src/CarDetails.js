import React, { useEffect, useRef } from "react";

const CarDetails = ({ initialData }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.reset();
  }, [initialData]);

  return (
    <div>
      <form ref={inputRef} defaultValue={initialData}>
        <input type="text" defaultValue={initialData.model} name="model" />
        <input type="text" defaultValue={initialData.year} name="year" />
        <input type="text" defaultValue={initialData.color} name="color" />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default CarDetails;
