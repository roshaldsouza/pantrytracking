// components/AddItemForm.js

import { useState } from 'react';
import { addPantryItem } from '../services/pantryService';

function AddItemForm() {
  const [itemName, setItemName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPantryItem({ name: itemName });
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
