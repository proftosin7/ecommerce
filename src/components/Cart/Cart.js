import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import styles from "./cart.module.css";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
const Cart = ({
  cart,
  handleRemoveFromCart,
  handleEmptyCart,
  handleUpdateCartQty,
}) => {
  if (!cart.line_items) return "...loading";

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have nothing in cart, <Link to="/">start adding some</Link>
      </Typography>
    );
  };
  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <CartItem
                  item={item}
                  onUpdateCartQty={handleUpdateCartQty}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              </Grid>
            );
          })}
        </Grid>
        <div>
          <Typography>
            subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button type="button" color="secondary" onClick={handleEmptyCart}>
              Empty Cart
            </Button>
            <Button
              component={Link}
              to="/checkout"
              type="button"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };
  return (
    <Container>
      <div className={styles.toolbar} />
      <Typography variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
