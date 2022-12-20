import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchcontainer = styled(Box)`
background: #fff;
width: 34%;
height:15px
margin-left: 5px;
border-radius: 5px;
display:flex





  
  
  
  
  
`;

const InputSearchBase = styled(InputBase);

const InputesearchBase = styled(InputBase)`
  padding-left: 20px;
  color: black;
  width: 100%;
`;

const SearchIconbar = styled(Box)`
color:black;
padding-top:3px
display:flex
`;
export default function Search() {
  return (
    <Searchcontainer>
      <InputesearchBase placeholder="Find your picks by search" />
      <SearchIconbar>
        <SearchIcon />
      </SearchIconbar>
    </Searchcontainer>
  );
}
