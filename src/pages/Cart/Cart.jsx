import { useSelector } from "react-redux";
import './cart.scss';
import { useDispatch } from "react-redux";
import { addCart, decrementCart, deleteCart } from "../../redux/reducer";

const Cart = () => {
    const cartData = useSelector(s => s.reducer.cart);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            {
                cartData.map(item =>{
                    return <div className="cart-item" key={item.id}>

                            <div className="cart-item-left">
                                <img src={item.image} alt="" className="cart-item-img" />
                                <h3 className="cart-item-title">{item.title}</h3>
                            </div>

                            <div className="cart-item-right">
                                <div>
                                    <button onClick={()=>{
                                        if(item.count > 1) dispatch(decrementCart(item))
                                    }}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={()=>{
                                        dispatch(addCart(item))
                                    }}>+</button>
                                </div>

                                <p>${(item.price * item.count).toFixed(2)}</p>

                                <button onClick={()=>{
                                    dispatch(deleteCart(item))
                                }}>delete</button>
                            </div>

                    </div>
                })
            }
            <p>Total: ${
                cartData.reduce((acc,rec)=>{
                    return acc + (rec.price * rec.count)
                }, 0)
                }</p>
        </div>
    );
}

export default Cart;
