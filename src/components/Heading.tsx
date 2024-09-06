// import {ReactNode } from "react";

import { useState } from "react";

const Heading = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  console.log(count);

  return (
    <>
      {title}
      <h1>{count}</h1>
      <button type="button" onClick={handleAdd}>
        add
      </button>
    </>
  );
};

export default Heading;
