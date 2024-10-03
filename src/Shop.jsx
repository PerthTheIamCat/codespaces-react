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

    const products = [
        {id:0, name:"Notebook AcerSwift", price:45900, img:"https://img.advice.co.th/images_nas/pic_product4/A0147295/A0147295_s.jpg"},
        {id:1, name:"Notebook AsusVivo", price:19900, img:"https://img.advice.co.th/images_nas/pic_product4/A0146010/A0146010_s.jpg"},
        {id:2, name:"Notebook LenovoIdeapad", price:32900, img:"https://img.advice.co.th/images_nas/pic_product4/A0149009/A0149009_s.jpg"},
        {id:3, name:"Notebook MSIPrestige", price:54900, img:"https://img.advice.co.th/images_nas/pic_product4/A0149954/A0149954_s.jpg"},
        {id:4, name:"Notebook DELLXPS", price:99900, img:"https://img.advice.co.th/images_nas/pic_product4/A0146335/A0146335_s.jpg"},
        {id:5, name:"Notebook HPEnvy", price:46900, img:"https://img.advice.co.th/images_nas/pic_product4/A0145712/A0145712_s.jpg"}
    ];

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