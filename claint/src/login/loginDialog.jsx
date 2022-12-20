import { Box, Button, Dialog, TextField, Typography } from "@material-ui/core";

import { styled } from "@mui/material/styles";

import React, { useState } from "react";
import { useContext } from "react";
import { authenticatSignup } from "../service/Api";
import { Datacontext } from "../context/Dataprovider";

const Component = styled(Box)`
  height: 85vh;
  width: 89vh;
  box-shadow: 0 2px 25px 0 rgb(0 0 0/50%);

  border-radius: 16vh;
`;
const Imeg = styled(Box)`
  background: #4d4d4d
    url(https://i.pinimg.com/564x/16/d0/d2/16d0d2b00bf624e18342f74c4e1cc0f4.jpg)
    center 10% no-repeat;
  height: 100%;
  width: 49%;
`;

const Wrapper = styled(Box)`
  background: #4d3d4d
    url(https://i.pinimg.com/564x/8d/f6/c3/8df6c3cdb3d23ea6a47e8ff893c5edd8.jpg)
    center;
  display: flex;
  flex-direction: column;
  padding: 35px 35px;
  & > div,
  & > button,
  & > p {
    margin-top: 10px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #4d3d4d;
  color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/50%);
`;

const Typographytext = styled(Typography)`
  font-size: 12px;
  color: #4d4d4d;
`;

const Typographylink = styled(Typography)`
  font-size: 14px;
  color: #4d4d4d;
  text-align: center;
  color: #2874f0;
  font-weight: 600;

  cursor: pointer;
`;
const Typographyor = styled(Typography)`
  font-size: 14px;
  color: #4d4d4d;
  text-align: center;
  font-weight: 600;
`;

const accountIntitialvalues = {
  login: {
    view: "login",
    heading: "Login",
  },
  signup: {
    view: "signup",
    heading: "Sign-up",
  },
};

const SignupIntitialvalues = {
  Firstname: "",

  lastname: " ",

  Emailornumber: "",

  Password: "",

  RenterPassword: "",
};
export default function LoginDialog({ open, setOpen }) {
  const [account, toggleAccount] = useState(accountIntitialvalues.login);

  const [Signup, setSignup] = useState(SignupIntitialvalues);

  const {setAccount} = useContext (Datacontext)

  const Createanaccount = () => {
    toggleAccount(accountIntitialvalues.signup);
  };

  const handleclose = () => {
    setOpen(false);
    toggleAccount(accountIntitialvalues.login);
  };

  const oninputechang = (e) => {
    setSignup({ ...Signup, [e.target.name]: e.target.value });
  };

  const signupuser = async () => {
    let response = await authenticatSignup(Signup);
    if (!response) return;
    handleclose();
    setAccount(Signup.Firstname)
    
  };

  return (
    <Dialog open={open} onClose={handleclose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Imeg>
            <Box style={{}}>
              <Typography
                variant="h6"
                style={{
                  color: "#4d3d4d",
                  marginLeft: "108px",
                  marginTop: "90px",
                  fontWeight: 600,
                }}
              >
                {account.heading}
              </Typography>
              <Typography
                variant=""
                style={{
                  color: "#4d3d4d",
                  marginLeft: "108px",
                  fontWeight: 600,
                  display: "inline",
                  alignitems: "center",
                  position: "sticky",
                }}
              >
                & get accses
              </Typography>
            </Box>
          </Imeg>

          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile number" />
              <TextField variant="standard" label="password" />
              <Typographytext>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy
              </Typographytext>
              <LoginButton>Login</LoginButton>
              <Typographyor>OR</Typographyor>
              <LoginButton>Request OTP</LoginButton>
              <Typographylink onClick={() => Createanaccount()}>
                To create new account "clik here"
              </Typographylink>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => oninputechang(e)}
                name="Firstname"
                label="Enter your First name"
              />
              <TextField
                variant="standard"
                onChange={(e) => oninputechang(e)}
                name="lastname"
                label="Enter your last name"
              />
              <TextField
                variant="standard"
                onChange={(e) => oninputechang(e)}
                name="Emailornumber"
                label="Enter your Email or number"
              />

              <TextField
                variant="standard"
                onChange={(e) => oninputechang(e)}
                name="Password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => oninputechang(e)}
                name="RenterPassword"
                label="Renter Password"
              />

              <Typographytext>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy
              </Typographytext>

              <LoginButton onClick={() => signupuser()}>
                Please Go Ahead
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}
