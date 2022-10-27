import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../components/home/CartProducts";
import CategoriFilter from "../components/home/CategoriFilter";
import InputSearch from "../components/home/InputSearch";
import OrderByPrice from "../components/home/OrderByPrice";
import PriceFilter from "../components/home/PriceFilter";
import { getAllProducts } from "../store/slices/products.slices";
import stylesModal from "../components/styles/stylesModal.css";
const Home = () => {
  const products = useSelector((state) => state.products);
  const [inputText, setInputText] = useState("");
  const [filterByTetxt, setFilterByTetxt] = useState();
  const [objPrices, setObjPrices] = useState({
    from: 0,
    to: Infinity,
  });
  console.log(inputText);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    if (inputText !== "") {
      const cb = (product) =>
        product.title
          .toLowerCase()
          .includes(inputText.toLocaleLowerCase().trim());
      setFilterByTetxt(products.filter(cb));
    } else {
      setFilterByTetxt(products);
    }
    // .then(res =>console.log(res.data))
  }, [inputText, products]);
  // console.log(filterByTetxt);
  /* -----------------------------------------------------------------------------------------*/

  // useEffect(() => {
  //    const filter = products?.filter(e =>{
  //      const price = +e.price
  //      const min = objPrices.from
  //      const max = objPrices.to
  //      if (min && max ) {

  //       return min <= price && price <= max
  //     }else if (min && !max) {
  //       return min <= price
  //     } else if (!min && max) {
  //      return price <= max
  //  } else {
  //     return true
  //      }
  //     })

  //   console.log(filter);
  // }, [objPrices.to, objPrices.from])

  // console.log(products);
  const callBackFilterPrice = (products) => {
    return +products.price > objPrices.from && +products.price <= objPrices.to;
  };
  console.log(objPrices);
  return (
    <main className="home">
          <input type="checkbox" id="btn-modal"  />
          <label htmlFor="btn-modal" className="btn__Crud">
            Filter <i className="icon__Filter fa-solid fa-filter"></i>
          </label>
      <aside className="box__filter modal">
        <div className="contenedor">

          
        
            <header>Filter <i className="icon__Filter fa-solid fa-filter"></i></header>
            <label htmlFor="btn-modal" className="btn__modal">
            <i className="fa-regular fa-circle-xmark"></i>
            </label>
            <div className="contenido">
            </div>
        
          
          
          <div className="box__serch">
            <InputSearch setInputText={setInputText} inputText={inputText} />
          </div>
          <div className="box__type-category">
            <CategoriFilter />
          </div>
          <div className="box__OrderByPrice">
            <OrderByPrice />
          </div>
          <div className="box_category_prices">
            <PriceFilter setObjPrices={setObjPrices} />
            
            
          </div>
        </div>
      </aside>
      <div className="home_container">
        {filterByTetxt?.filter(callBackFilterPrice).map((product) => (
          <CartProducts key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
