import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  {add, remove, removeAll} from './slices/ItemReducer.js'

const CartItems = () => {
  
const item= useSelector(state=>state.item.item)
const dispatch = useDispatch()

  const products = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Ij8W5U9vL._AC_UL320_.jpg",
      title: "shoe",
      category: "shoe",
      price: "2500/-",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71T5NVOgbpL._SX679_.jpg",
      title: "iPhone 14 pro Max",
      category: "mobile",
      price: "135000/-",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61QQiKLROFL._AC_UL320_.jpg",
      title: "Jacket",
      category: "jacket",
      price: "7500/-",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2017/08/28/02/59/suit-2688317__340.jpg",
      title: "Men's suit",
      category: "suit",
      price: "8500/-",
    },
    {
      id: 5,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41i+KMBAFjL._SY450_.jpg",
      title: "Sony Head Phone",
      category: "headphone",
      price: "2999/-",
    },
    {
      id: 6,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71KkKkxNAbL._SY450_.jpg",
      title: "JBl speaker",
      category: "speaker",
      price: "6450/-",
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hJpBtWr9L._UX679_.jpg",
      title: "cap",
      category: "cap",
      price: "850/-",
    },
  ];

  return (
    <>
      <hr />
      <div className="d-flex justify-content-evenly">
        <h2 className="text-center">Cart Items</h2>
        <button className ="btn btn-danger btn-sm" onClick={()=>dispatch(removeAll())} >Remove All</button>
        <h5>Cart Items : <span className="badge bg-danger">{item}</span></h5>

      </div>

      <hr />
      <div className="container d-flex flex-wrap justify-content-center">
        {products.map((elem) => {
          const { title, category, price, id, img } = elem;
          return (
            <div className="card mx-3 my-3" key={id} style={{ width: "18rem" }}>
              <img
                src={img}
                className="card-img-top"
                alt="img"
                style={{ height: "260px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{category}</p>
                <h5 className="text-dark fw-semibold">{price}</h5>
                <button className="btn btn-primary" onClick={()=>dispatch(add())} >Add to cart</button>
                <button disabled={item<=0} className="btn btn-danger mx-3" onClick={()=>dispatch(remove())}>Remove cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartItems;
