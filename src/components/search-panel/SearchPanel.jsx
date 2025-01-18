function SearchPanel() {
  return (
    <div className="flex justify-between m-10">
      <h1 className="font-bold text-4xl">Все кроссовки</h1>
      <div className="flex relative">
        <img
          src="/search.svg"
          alt="search"
          className="w-4 absolute top-2 left-3"
        />
        <input
          type="text"
          placeholder="Поиск..."
          className="border border-slate-200 pl-10 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SearchPanel;
