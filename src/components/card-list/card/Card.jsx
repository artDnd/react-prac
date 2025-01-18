import PropTypes from "prop-types";
import { useContext } from "react";
import AppContext from "../../../context";

const Card = ({ title, price, imageUrl, id, isAdded }) => {
  const { handleIsAdded } = useContext(AppContext);
  return (
    <div className="bg-white rounded-xl shadow-xl p-10 relative  hover:-translate-y-2 transition">
      <div>
        <img
          src="/like-1.svg"
          alt="Like"
          className="absolute top-8 left-8 hover:cursor-pointer"
        />
        <img src={imageUrl} alt="Sneakers-1" />
        <p>{title}</p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex flex-col">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img
          src={isAdded ? "/checked.svg" : "/plus.svg"}
          alt={isAdded ? "checked" : "plus"}
          className="hover:cursor-pointer"
          onClick={() => handleIsAdded(id)}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  isAdded: PropTypes.bool,
};

export default Card;
