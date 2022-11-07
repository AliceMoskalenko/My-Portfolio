import React from "react";
import PropTypes from "prop-types";
import "./productCard.scss";
import cx from "classnames";

const ProductCard = ({ name, price, url, id, btn, features }) => {
  return (
    <>
      <div className={cx("card", `card-${id}`)} id={"card" + id}>
        <span className="card__add-to-fav"> </span>
        {features}
        <img
          className="card__album-cover"
          src={url}
          alt="card__album-cover"
          width="200px"
          height="200px"
        />
        <p className="card__title">{name}</p>
        <p className="card__price">
          {" "}
          <span className="card__price-currency">$</span>
          {price}
        </p>
        {btn}
      </div>
    </>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
};

export default ProductCard;
