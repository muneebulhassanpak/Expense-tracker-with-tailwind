import React from "react";

const ExpenseItem = (props) => {
  let month = props.date.getMonth();
  let year = props.date.getFullYear();
  let day = props.date.getDate();
  let title = props.title;
  let price = props.price;
  return (
    <div className="flex bg-slate-950 justify-between items-center py-2 px-2 rounded-md my-2">
      <div className="w-[100px] shrink-0  rounded-xl bg-slate-600 text-center px-4 py-2">
        <p className="font-normal mt-1 text-white">{month}</p>
        <p className="font-normal mt-1 text-white">{year}</p>
        <h3 className="text-2xl font-medium text-yellow-50">{day}</h3>
      </div>
      <h2 className="text-white text-lg">{title}</h2>
      <div className="max-w-[300px] px-4 py-2 rounded-lg bg-orange-500 border-2 border-white">
        <h3 className="text-white">${price}</h3>
      </div>
    </div>
  );
};

export default ExpenseItem;
