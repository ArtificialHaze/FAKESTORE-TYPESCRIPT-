import Button from "@material-ui/core/Button";
import { CartItemType } from "./App";
import { CartItemDivWrapper } from "./styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
  return (
    <CartItemDivWrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="info">
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.amount}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            REMOVE
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            ADD
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </CartItemDivWrapper>
  );
};

export default CartItem;
