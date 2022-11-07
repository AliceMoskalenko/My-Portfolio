import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { getData } from "../../selects";

import ProductCard from "../ProductCard/ProductCard.jsx";
import {
  AddToFavAction,
  HandleSelectedOnLoad,
} from "../AddToFavAction/AddTofavAction.jsx";
import CartModalBtn from "../CartModalBtn/CartModalBtn.jsx";

const ProductList = () => {
  let data = useSelector(getData);

  const key = "listKey";
  const storageKey = "favourite";

  HandleSelectedOnLoad(storageKey);
  return (
    <>
      <div className="cards-wrapper">
        {data.map((element) => {
          return (
            <ProductCard
              key={key + element.id}
              name={element.name}
              price={element.price}
              url={element.url}
              id={element.id}
              colour={element.colour}
              btn={<CartModalBtn id={element.id} />}
              features={<AddToFavAction id={element.id} />}
            />
          );
        })}
      </div>
    </>
  );
};

ProductList.propTypes = {
  data: PropTypes.array,
};

export default ProductList;
