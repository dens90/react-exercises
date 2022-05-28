import React, { useEffect, useRef } from "react";

const CarDetails = ({ initialData }) => {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  return (
    <div>
      <form ref={formRef} defaultValue={initialData}>
        <input type="text" defaultValue={initialData.model} name="model" />
        <input type="text" defaultValue={initialData.year} name="year" />
        <input type="text" defaultValue={initialData.color} name="color" />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default CarDetails;
