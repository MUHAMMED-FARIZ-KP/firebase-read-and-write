import React from 'react';
import { firestore } from './firebase/config';
import { useState } from 'react';
import firebase from 'firebase/compat/app';

function App() {
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [products, setProducts] = useState([]);
  const db = firebase.firestore();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContact((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addDoc = (e) => {
    e.preventDefault();
    db.collection('products')
      .add({
        name: contact.name,
      })
      .then((docRef) => {
        const docId = docRef.id;
        console.log(docId);
      })
      .catch((err) => {
        console.log('Error: ' + err.message);
      });
  };

  const fetchProducts = () => {
    firestore
      .collection('products')
      .get()
      .then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsData);
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          fetchProducts();
        }}
      >
        Click Me to read files from Firebase
      </button>

      <h1>Firebase Fetching</h1>
      <form onSubmit={addDoc}>
        <input type="text" name="name" value={contact.name} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
