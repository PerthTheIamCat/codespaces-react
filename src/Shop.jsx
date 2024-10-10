import './Shop.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

function Item(props) {
    return (
        <div key={props.id} onClick={e=>props.callback(props)}>
            <img src={props.img} width={200} height={200}/><br/>
            id : {props.id}<br/>
            name: {props.name}<br/>
            price: {props.price}<br/>
        </div>
    );
}


export default function Shop() {
    const [cart, setCart] = useState([]);
    const [total_price, setTotal_price] = useState(0);
    function addCart(item) {
        alert("Add success!");
        setCart([...cart, {id: item.id, name: item.name, price: item.price, img: item.img}]);
        setTotal_price(total_price+item.price);
    }
    function removeCart(item) {
        alert("Remove " + item.name + " from cart");
        setCart(cart.filter(_item => _item !== item));
        setTotal_price(total_price-item.price);
    }
    function clearCart() {
        alert("Cart is been Clear!!");
        setCart([]);
        setTotal_price(0);
    }

    const [products, setProducts] = useState([]);
    const URL = "https://laughing-space-yodel-r5gvj99vq6jhpqr6-5000.app.github.dev";

    useEffect(() => {
        axios.get(URL+'/api/products')
        .then(Response=>{
            setProducts(Response.data);
        })
        .catch(Error=>{
            console.log("error");
        })
    },[]);

    const productList = products.map(item=><Item {...item} callback={addCart}/>);
    const cartList=cart.map(item=><><li>{item.id} {item.name} {item.price} <button onClick={(e)=>removeCart(item)}>remove</button></li></>);
    return (
        <>
            <div className='grid-container'>
                {productList}
            </div>
            CartList total price {total_price}<br/>
            <button onClick={clearCart}>Clear Cart</button>
            <ol>
                {cartList}
            </ol>
        </>
    );
}