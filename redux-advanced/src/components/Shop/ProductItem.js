import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import styles from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  // const cart = useSelector((state) => state.cart);

  const { id, title, price, description } = props;

  const dispatchAction = useDispatch();

  const addItemHandler = () => {
    // const updatedItemsQuantity = cart.itemsQuantity + 1;

    // const updatedItems = cart.items.slice();
    // const existingItem = updatedItems.find((item) => item.id === id);

    // if (existingItem) {
    //   const updatedExistingItem = { ...existingItem };
    //   updatedExistingItem.quantity++;
    //   updatedExistingItem.totalPrice = updatedExistingItem.totalPrice + price;

    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedExistingItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     totalPrice: price,
    //     quantity: 1,
    //     price: price,
    //     title: title,
    //   });
    // }

    // const updatedCart = {
    //   itemsQuantity: updatedItemsQuantity,
    //   items: updatedItems,
    // };

    // dispatchAction(cartActions.updateCart(updatedCart));

    dispatchAction(
      cartActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addItemHandler}>Добавить в Корзину</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
