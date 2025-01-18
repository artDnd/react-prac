import Card from "./card/Card";
import { useContext } from "react";
import AppContext from "../../context";

const CardList = () => {
  const { items } = useContext(AppContext);

  const elem = items?.map((el) => (
    <Card
      title={el.title}
      imageUrl={el.imgUrl}
      price={el.price}
      key={el.id}
      id={el.id}
      isAdded={el.isAdded}
    />
  ));
  return <div className="grid grid-cols-4 gap-5 m-10">{elem}</div>;
};

export default CardList;
