import { BsCart2 } from "react-icons/bs"
import { Badge } from "react-bootstrap"
import { useCart } from "../context/CartContext"

const CartWidget = () => {
    const { cartQuantity } = useCart()
    return (
        <div className="cartContainer">
            <BsCart2 className="cart-ico" />
            {cartQuantity() > 0 && <Badge className="cart-badge" bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidget