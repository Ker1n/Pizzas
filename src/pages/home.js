import React from 'react'
import { Categories, SortPopup, PizzaBlock } from "../components";

export default function Home({items}) {

  return (
    <>
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={[
          {name:"популярности", type:"POPULAR"}, 
          {name: "цене", type:"PRICE"},
           {name: "алфавиту", type: 'ALPHABET' }]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((itemsData) => (
          <PizzaBlock   {...itemsData} key={itemsData.id}  />
        ))}
      </div>
    </>
  );
}
