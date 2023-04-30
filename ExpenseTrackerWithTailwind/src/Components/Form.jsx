import React, { useState, useRef } from "react";

const Form = () => {
  const [visibility, setVisibility] = useState(false);
  const expensename = useRef();
  const expenseprice = useRef();
  const expensedate = useRef();
  const changeVisibility = () => {
    setVisibility(!visibility);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(expensename.current.value);
    console.log(expenseprice.current.value);
    let date = expensedate.current.value;
    date = new Date(date);
    console.log(date.getMonth());
  };
  return (
    <>
      {visibility ? (
        <form onSubmit={formSubmissionHandler}>
          <div className="w-full">
            <div className="my-1">
              <label
                className="block text-white mb-1"
                htmlFor="expenseItemName"
              >
                Name
              </label>
              <input
                className="block w-full bg-white rounded-lg px-2 py-3 focus:bg-slate-200 focus:border-none focus:outline-1 focus:outline-blue-400"
                type="text"
                name="expense-name"
                id="expenseItemName"
                ref={expensename}
              />
            </div>
            <div className="my-1">
              <label
                className="block text-white mb-1"
                htmlFor="expenseItemPrice"
              >
                Price
              </label>
              <input
                className="block w-full bg-white rounded-lg px-2 py-3 focus:bg-slate-200 focus:border-none focus:outline-1 focus:outline-blue-400"
                type="number"
                name="expense-price"
                id="expenseItemPrice"
                min="0.01"
                step="0.01"
                ref={expenseprice}
              />
            </div>
            <div className="my-1">
              <label
                className="block text-white mb-1"
                htmlFor="expenseItemDate"
              >
                Date
              </label>
              <input
                className="block w-full bg-white rounded-lg px-2 py-3 focus:bg-slate-200 focus:border-none focus:outline-1 focus:outline-blue-400"
                type="date"
                name="expense-date"
                id="expenseItemDate"
                ref={expensedate}
              />
            </div>
            <div className="text-right my-4">
              <button
                className="text-slate-300 mr-4 font-normal"
                onClick={changeVisibility}
              >
                Cancel
              </button>
              <input
                type="submit"
                value="Submit"
                className="px-5 py-2 rounded-lg bg-orange-500 text-white"
              />
            </div>
          </div>
        </form>
      ) : (
        <div className=" text-center">
          {visibility && (
            <button
              className="text-slate-300 mr-2 font-normal"
              onClick={changeVisibility}
            >
              Cancel
            </button>
          )}

          <button
            className="border-none px-6 py-3 bg-orange-500  text-white uppercase text-center font-medium rounded-md"
            onClick={changeVisibility}
          >
            Add New Expense
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
