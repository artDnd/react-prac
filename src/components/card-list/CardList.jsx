import Card from "./card/Card";

const CardList = () => {
  return (
    <div className="grid grid-cols-4 gap-5 m-10">
      <Card
        title="Мужские Кроссовки Nike Blazer Mid Suede"
        imageUrl="/sneakers/sneakers-1.jpg"
        price="12 990"
      />
    </div>
  );
};
export default CardList;
