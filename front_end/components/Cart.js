import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
} from "../styles/CartStyles";
import { GiShoppingCart } from "react-icons/gi";

export default function Cart() {
  const { cartItems } = useStateContext();

  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && <h1>You have more shopping to do 😉</h1>}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
