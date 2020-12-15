import React, {useState} from 'react';

const Categories = React.memo(
    function Categories ({items, onCLickItem})  {
    
        const [activeItem, setActiveItem] = useState("");
    
        const onSelectItem = index => {
            setActiveItem(index);
            onCLickItem(index);
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
                        onClick = {(index) => onSelectItem(index)}>Все</li>
                        {itemList}
                  </ul>
            </div>
        )
    }
    )

export default Categories