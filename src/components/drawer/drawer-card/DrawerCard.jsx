import PropTypes from "prop-types";

function DrawerCard({ title, price, imgUrl, handleIsAdded }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-xl p-2 relative mb-5">
      <img src={imgUrl} alt="sneakers" className="w-40" />
      <div>
        <p>{title}</p>
        <b className="mt-4">{price} руб.</b>
      </div>
      <img
        src="/close.svg"
        alt="close"
        className="absolute right-10 bottom-5 cursor-pointer"
        onClick={handleIsAdded}
      />
    </div>
  );
}

DrawerCard.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.number,
  handleIsAdded: PropTypes.func,
};

export default DrawerCard;
