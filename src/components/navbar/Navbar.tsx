import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../assets/img/The_Green-Final.png";
import useLocalStorage from "react-use-localstorage";
import { useSelector, useDispatch } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { addToken } from "../../store/tokens/action";

function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const history = useNavigate();

  const back = () => {
    dispatch(addToken (""));
    history("/login");
  };
  return (
    <>
      <AppBar
        className="header"
        position="static"
        style={{ backgroundColor: "#f4f0e2", color: "#2d5540" }}
      >
        <Toolbar variant="dense">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Link to={"/home"}>
              <Box style={{ cursor: "pointer" }}>
                <Typography variant="h5" color="inherit">
                  <img height={100} src={Logo} alt="" />
                </Typography>
              </Box>
            </Link>

            <Box display="flex" justifyContent="start">
              <Link
                to="/home"
                style={{ alignItems: "center", display: "flex" }}
              >
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link
                to="/sobre"
                style={{ alignItems: "center", display: "flex" }}
              >
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    Sobre
                  </Typography>
                </Box>
              </Link>
              <Link to="/categorias" style={{ alignItems: "center", display: "flex" }}>
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    Categorias
                  </Typography>
                </Box>
              </Link>
              <Link to="/produtos" style={{ alignItems: "center", display: "flex" }}>
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    Produtos
                  </Typography>
                </Box>
              </Link>

              {token !== "" ? (
                <Box
                  onClick={back}
                  style={{ alignItems: "center", display: "flex" }}
                >
                  <Box
                    mx={1}
                    style={{ cursor: "pointer", alignItems: "center" }}
                  >
                    <Typography variant="h6" color="inherit">
                      logout
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Link
                  to="/login"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  <Box
                    mx={1}
                    style={{ cursor: "pointer", alignItems: "center" }}
                  >
                    <Typography variant="h6" color="inherit">
                      Login
                    </Typography>
                  </Box>
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
