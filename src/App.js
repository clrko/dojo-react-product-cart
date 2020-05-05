import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];

const App = () => {
  return (
    <div className='App'>
      <h1>Ma commande</h1>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Prix total</th>
          </tr>
        </thead>
        <tbody>
          {initialProductList.map(product => <tr>
          <td>{product.name}</td>
          <td>{product.price} €</td>
          <td>{product.quantity}</td>
          <td>{product.quantity * product.price}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
