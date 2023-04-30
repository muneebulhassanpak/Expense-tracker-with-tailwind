import React, { createContext } from "react";

const FormData = createContext({
  data: [],
  addData: () => {},
});

export default FormData;
