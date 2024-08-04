// components/PantryList.js

import { useEffect, useState } from 'react';
import { getPantryItems } from '../services/pantryService';

function PantryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const pantryItems = await getPantryItems();
      setItems(pantryItems);
    };
    fetchItems();
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default PantryList;
