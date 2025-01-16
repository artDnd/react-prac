import PropTypes from "prop-types";

const Card = ({ title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-10 relative hover:cursor-pointer hover:-translate-y-2 transition">
      <div>
        <img src="/like-1.svg" alt="Like" className="absolute top-8 left-8" />
        <img src="/sneakers/sneakers-1.jpg" alt="Sneakers-1" />
        <p>{title}</p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex flex-col">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img src="/plus.svg" alt="Plus" />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
