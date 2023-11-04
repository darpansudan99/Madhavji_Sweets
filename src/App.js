import React, {useEffect, useState} from 'react'
import { createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/about-page/AboutPage";
import Cart from "./Components/cart/Cart";
import Checkout from "./Components/checkout/Checkout";
import Footer from "./Components/footer/Footer";
import Main from "./Pages/main/Main";
import Menu from "./Components/menu/Menu";
import NavBar from "./Components/navbar/NavBar";
import Login from "./Pages/auth/Login";
import SignIn from "./Pages/auth/SignUp";
import Product from "./Pages/product/Product";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
} from "@mui/material";

import { clearCart, removeFromCart } from "./redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const user = createContext();

function App() {
  // Dialog Box state
  const [open, setOpen] = useState({
    open: false,
    html: "",
    type: "",
    value: null,
  });
  // Snackbar State
  const [openSnack, setOpenSnack] = useState({
    open: false,
    html: "",
    severity: "success",
    time: "800",
  });
  // State for login
  const [logged, setLogged] = useState(localStorage.getItem("user") != null);
  const [userName, setUserName] = useState(localStorage.getItem("user"));
  // state for counting total Value
  const [total, setTotal] = useState(0);
  // State for Modal
  const [openModal, setOpenModal] = useState({ val: [], open: false });
  // State for theme switcher
  const [theme, setTheme] = useState("light");

  const dispatch = useDispatch();

  // Dialog box confirm function
  const confirm = () => {
    if (open.type === "trash") {
      dispatch(removeFromCart(open.value));
      setOpen({ ...open, open: false });
      setOpenSnack({
        open: true,
        html: `${open.value.strMeal} removed from cart !`,
      });
    }
    if (open.type === "empty") {
      dispatch(clearCart());
      setOpen({ ...open, open: false });
      setOpenSnack({ open: true, html: ` Your cart is emptied !!` });
    }
  };

  return (
    <>

      <user.Provider
        value={{
          open,
          setOpen,
          openSnack,
          setOpenSnack,
          logged,
          setLogged,
          userName,
          setUserName,
          total,
          setTotal,
          openModal,
          setOpenModal,
        }}
      >
        <div className={theme === "light" ? "body" : "darkTheme"} style={{ backgroundColor: "var(--bg)" }}>
          <Router>
            <NavBar theme={theme} setTheme={setTheme} />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<SignIn />} />
              <Route path="product/:ID" element={<Product />} />
              <Route path="menu/product/:ID" element={<Product />} />
            </Routes>
            <Footer />
          </Router>

          {/* Dialog component from MUI */}
          <Dialog
            open={open.open}
            onClose={() => {
              setOpen({ ...open, open: false });
            }}
          >
            <DialogTitle> {open.html} </DialogTitle>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  setOpen({ ...open, open: false });
                }}
              >
                Cancel
              </Button>
              <Button onClick={confirm}>Ok</Button>
            </DialogActions>
          </Dialog>

          {/* Snackbar Component from MUI */}
          <Snackbar
            open={openSnack.open}
            autoHideDuration={Number(openSnack.time)}
            onClose={() => {
              setOpenSnack({ ...open, open: false });
            }}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => {
                setOpenSnack({ ...openSnack, open: false });
              }}
              severity={openSnack.severity}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {openSnack.html}
            </Alert>
          </Snackbar>

          {/* Modal for Products details */}
        </div>
      </user.Provider>
    </>
  );
}

export default App;

export const CartState = () => {
  return useContext(user);
};
