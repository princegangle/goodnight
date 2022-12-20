import { Box, Button, Typography } from "@material-ui/core";
import LoginDialog from "../../login/loginDialog";
import { useContext } from "react";
import { Datacontext } from "../../context/Dataprovider";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";


import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 0% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 25px;
    font-size: 16px;

    align-items: centor;
  }
`;
const Container = styled(Box)`
  display: flex;
`;
const LoginButton = styled(Button)`
  text-transform: none;
  padding: 5px 40px;
  font-weight: 600;
  height: 31px;
  color: #2874f0;
`;
const Icons = styled(ShoppingCart)`
  color: #ff8000;
`;

export default function CustonButtons() {
  const [open, setOpen] = useState(false);
  const {account} =useContext(Datacontext)

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
       
       {
        account ? <Profile account={account}/>:
      <LoginButton variant="contained " onClick={() => openDialog()}>
        
        Login
      </LoginButton>
       }

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <Icons />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
