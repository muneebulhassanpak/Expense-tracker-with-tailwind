import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import FormData from "../../context/FormData";

const Expenses = () => {
  const dataPushing = useContext(FormData);
  let data = dataPushing.data;
  return (
    <div className="py-2">
      {data.length > 0 &&
        data.map((item) => (
          <ExpenseItem
            title={item.title}
            price={item.price}
            date={item.date}
            key={Math.random()}
          />
        ))}
      {data.length == 0 && (
        <p className="text-center text-white text-lg">
          🙌 Add Items to See... ✌
        </p>
      )}
    </div>
  );
};

export default Expenses;
