import React, { useState, useContext } from "react";
import Form from "./Components/Form";
import Expenses from "./Components/Expenses/Expenses";
//importing context
import FormData from "./context/FormData";
let outerData = [];
const App = () => {
  const [data, setData] = useState(outerData);
  const incomingData = (item) => {
    console.log("From App.jsx i am loging");
    console.log(item);
    setData((prev) => {
      return [item, ...prev];
    });
  };
  return (
    <div className="grid place-items-center bg-slate-950 w-screen min-h-screen">
      <div className="max-w-2xl w-full bg-slate-500  p-3 rounded-md">
        <FormData.Provider value={{ data: data, addData: incomingData }}>
          <Form />
          <Expenses />
        </FormData.Provider>
      </div>
    </div>
  );
};

export default App;
