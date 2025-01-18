import Header from "./components/header/Header";
import CardList from "./components/card-list/CardList";
import SearchPanel from "./components/search-panel/SearchPanel";
import Drawer from "./components/drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import AppContext from "./context";

function App() {
  const [isOppenedDrawer, setIsOppenedDrawer] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://678aa268dd587da7ac2aec22.mockapi.io/items/todo")
      .then((resp) => setItems(resp.data));
  }, []);

  const handleIsAdded = (id) => {
    const newItem = items.map((el) =>
      el.id == id ? { ...el, isAdded: !el.isAdded } : el
    );
    setItems(newItem);
  };

  return (
    <AppContext.Provider value={{ items, setIsOppenedDrawer, handleIsAdded }}>
      <div className="bg-white w-4/5 m-auto my-10 rounded-xl shadow-xl pb-10">
        <Header />
        <SearchPanel />
        <CardList />
        {isOppenedDrawer && <Drawer />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
