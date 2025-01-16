const Header = () => {
  return (
    <header className="flex justify-between p-10 border-b-2 mb-10">
      <div className="flex gap-3">
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
        <div>
          <h1 className="uppercase font-bold">React Sneakers</h1>
          <p className="text-slate-500">
            Покупайте лучшие кросовки только у нас!
          </p>
        </div>
      </div>
      <ul className="flex gap-5">
        <li className="flex items-center gap-2 cursor-pointer">
          <img src="/cart.svg" alt="cart" />
          <b className="text-slate-500 hover:text-black">1200 руб.</b>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <img src="/heart.svg" alt="heart" />
          <span className="text-slate-500 hover:text-black">Корзина</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <img src="/profile.svg" alt="profile" />
          <span className="text-slate-500 hover:text-black">Профиль</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
