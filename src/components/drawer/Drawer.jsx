import DrawerCard from "./drawer-card/DrawerCard";
import { useContext } from "react";
import AppContext from "../../context";

function Drawer() {
  const { items, setIsOppenedDrawer, handleIsAdded } = useContext(AppContext);

  const isAddedItems = items.filter((el) => el.isAdded);
  const totalPrice = isAddedItems.reduce((sum, obj) => sum + obj.price, 0);

  const elementItem = isAddedItems.map((el, i) => {
    return (
      <DrawerCard
        title={el.title}
        price={el.price}
        imgUrl={el.imgUrl}
        key={i}
        handleIsAdded={() => handleIsAdded(el.id)}
      />
    );
  });

  return (
    <div className="absolute top-0 left-0 backdrop-opacity-10 bg-black/80 w-full h-full ">
      <div className="flex flex-col justify-between absolute top-0 right-0 bg-white w-1/5 h-full p-10 overflow-auto touch-auto">
        <div>
          <div className="flex justify-between mb-10 ">
            <h2 className="font-bold text-3xl">Корзина</h2>
            <img
              src="/close.svg"
              alt="close"
              className="cursor-pointer"
              onClick={() => setIsOppenedDrawer(false)}
            />
          </div>
          {/* Карточка товара */}
          {elementItem.length ? (
            elementItem
          ) : (
            <b className="font-bold text-4xl">Ваша корзина пуста</b>
          )}
          {/* Карточка товара */}
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <span>Итого:</span>
            <b>{totalPrice} руб.</b>
          </div>
          <div className="flex justify-between">
            <span>Скидка 5%:</span>
            <b>{(totalPrice / 100) * 5} руб.</b>
          </div>
          <button className="w-full h-10 bg-green-500 rounded-xl text-slate-100 mt-10">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
