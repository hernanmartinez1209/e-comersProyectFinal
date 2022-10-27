import React from "react";
import stylesPricesBox from'../styles/stylesPricesBox.css'
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
    <form className="from__prices" onSubmit={submit}>
      
      <h3>Prices</h3>
      <ul className="list__category-prices">
        <li>
          <label htmlFor="fromPrice">From</label>
          <input className="input__category-prices" type="number" id="fromPrice" />
        </li>
        <li>
          <label htmlFor="toPrice">To</label>
          <input className="input__category-prices" type="number" id="toPrice" />
        </li>
      </ul>
 <button className="btn__category-prices">Filter Prices</button>
    </form>
  );
};

export default PriceFilter;
