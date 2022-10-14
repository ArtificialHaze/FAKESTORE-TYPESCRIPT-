import Button from "@material-ui/core/Button";
import { CartItemType } from "./App";
import { ItemDivWrapper } from "./styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item = ({ item, handleAddToCart }: Props) => {
  return (
    <ItemDivWrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>ADD</Button>
    </ItemDivWrapper>
  );
};

export default Item;
