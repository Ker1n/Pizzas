import React, { useState} from 'react';


export default function Categories ({items})  {

    const [activeItem, setActiveItem] = useState("");

    const onSelectItem = index => {
        setActiveItem(index)
       
    };
    
    const itemList = items?.map((item, index) => (
    <li className={activeItem === index ? 'active' : ''} 
        onClick ={() => onSelectItem(index)}
        key={`${item}_${index}`}>
        {item}
    </li>
    ));

    return (
        <div className="categories">
              <ul>  
                <li className={activeItem === null ? 'active' : ''} 
                    onClick = {() => onSelectItem(null)}>Все</li>
                    {itemList}
              </ul>
        </div>
    )
};

