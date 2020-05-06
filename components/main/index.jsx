import React, { useContext } from "react";
import ContextNacion from "../../context/context";

const Main = () => {
  const { response } = useContext(ContextNacion);

  console.log(response);
  return (
    <>
      <h1>Hola desde Main</h1>
      <div>
        {response.map(resp => {
          console.log(resp);
          return <div key={resp._id}>{resp.headlines.basic}</div>;
        })}
      </div>
    </>
  );
};

export default Main;
