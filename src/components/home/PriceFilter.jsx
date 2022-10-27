import React from "react";

const PriceFilter = ({setObjPrices}) => {
 
    const submit = e =>{
        e.preventDefault()
       const  from = +e.target.fromPrice.value
            const to = +e.target.toPrice.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity
        }
        setObjPrices(obj);
    }

  return (
    <form onSubmit={submit}>
      PriceFilter
      <h3>Prices</h3>
      <ul>
        <li>
          <label htmlFor="fromPrice"></label>
          <input type="number" id="fromPrice" />
        </li>
        <li>
          <label htmlFor="toPrice"></label>
          <input type="number" id="toPrice" />
        </li>
      </ul>
 <button>Filter Prices</button>
    </form>
  );
};

export default PriceFilter;
