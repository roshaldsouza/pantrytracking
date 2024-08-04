// components/UpdateItemForm.js

import { useState } from 'react';
import { updatePantryItem } from '../services/pantryService';

function UpdateItemForm({ item }) {
  const [itemName, setItemName] = useState(item.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePantryItem(item.id, { name: itemName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <button type="submit">Update Item</button>
    </form>
  );
}

export default UpdateItemForm;
