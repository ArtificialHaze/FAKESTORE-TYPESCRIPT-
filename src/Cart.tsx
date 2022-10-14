import CartItem from "./CartItem";
import { CartWrapper } from "./styles";
import { CartItemType } from "./App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotalItemPrice = (items: CartItemType[]) =>
    items.reduce((acc: number, curr) => acc + curr.amount * curr.price, 0);

  return (
    <CartWrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}
      {cartItems.map((item) => (
        <CartItem
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          key={item.id}
        ></CartItem>
      ))}
      <h2>Total: $ {calculateTotalItemPrice(cartItems).toFixed(2)}</h2>
    </CartWrapper>
  );
};

export default Cart;
