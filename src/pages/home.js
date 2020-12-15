import React from 'react'
import { Categories, SortPopup, PizzaBlock } from "../components";
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from '../redux/actions/filters'

const categoriesNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

 function Home() {

  const dispatch = useDispatch()
  const {items} = useSelector(({pizzas}) => { 
    return { 
      items: pizzas.items,
    }
  });

  const onSelectCategory = React.useCallback((index) => { 
    dispatch(setCategory(index))
  }, []);
  
  return (
    <>
      <div className="content__top">
        <Categories
          onCLickItem={onSelectCategory}
          items={categoriesNames}
        />
        <SortPopup items={[
          {name:"популярности", type:"POPULAR"}, 
          {name: "цене", type:"PRICE"},
          {name: "алфавиту", type: 'ALPHABET' }]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((itemsData) => (
          <PizzaBlock   {...itemsData} key={itemsData.id}  />
        ))}
      </div>
    </>
  );
} 
export default Home


