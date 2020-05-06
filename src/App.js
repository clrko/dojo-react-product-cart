import React, {useState} from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];

const App = () => {
  const [productList, setProductList] = useState(initialProductList)
  const [totalPriceList, setTotalPriceList] = useState(initialProductList.map(product => product.price * product.quantity))
  const [newProduct, setNewProduct] = useState({id:"", name: '', price:'', quantity:1 })

  const addQuantity = e => {
      if (e.target.value === "0" || e.target.value === "") {
        if (window.confirm("Etes-vous sûr de bien vouloir retirer ce produit de la liste ?")) {
          let arr = [...productList]
          let row = arr.find(f => f.id === parseInt(e.target.id))
          arr = arr.filter(f => f !== row)
          setProductList(arr)

        } else {
          setProductList(productList)
        } 
      } else if (e.target.value !== "") {
      let newArr = [...productList]
      newArr[e.target.id -1].quantity = e.target.value
      setProductList(newArr)
      setTotalPriceList(newArr.map(product => product.price * product.quantity))
      }
  }

  const addProduct = e => {
    let tempIndex = Math.floor(Math.random() * 10) + 1
    while (productList.map(product => product.id).includes(tempIndex)) {
      tempIndex = Math.floor(Math.random() * 10)
    } 
    setNewProduct({...newProduct, id: tempIndex})
    e.preventDefault();
    const newArray = [...productList]
    newArray.push(newProduct)
    setProductList(newArray)
  }

  const onChange = e => {
    if (e.target.name === 'name') {
      setNewProduct({...newProduct, name: e.target.value})
    } else if (e.target.name === 'price') {
      setNewProduct({...newProduct, price: parseInt(e.target.value)})
    }
  }


  
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
          {productList.map(product => 
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price} €</td>
            <td><input id={product.id} type="number" value={product.quantity} onChange={addQuantity}/></td>
            <td>{product.quantity * product.price}</td>
          </tr>)}
        </tbody>
      </table>
          <p>Montant de la commande: 
          <span style={{ fontWeight: 'bold' }}> {totalPriceList.reduce((accumulator, currentValue) => accumulator + currentValue
)}€</span></p>
      
      <form onSubmit={addProduct}>
        <h2>Ajouter un produit</h2>
        <div className="field">
          <label htmlFor="name">Nom</label>
          <input type='text' id="name" name="name" onChange={onChange} value={newProduct.name} ></input>
        </div>
        <div className="field">
          <label htmlFor="price" >Prix</label>
          <input type='number' id="price" name="price" onChange={onChange} value={newProduct.price} ></input>
        </div>
        <button>Ajouter</button>
      </form>

    </div>
  );
}

export default App;
