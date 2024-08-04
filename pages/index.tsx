import { FC, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

type Item = {
  name: string;
  quantity: number;
};

const Home: FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const addItem = () => {
    setItems([...items, { name, quantity }]);
    setName('');
    setQuantity(1);
  };

  return (
    <Layout>
      <h2>Add Pantry Item</h2>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
