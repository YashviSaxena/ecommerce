import React from 'react'
import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchContainer = styled(Box)`
background:#fff;
width:34%;
border-radius:2px;
margin-left:10px;
display:flex;
align-items:center;
padding:1.5px;
`;

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:12px;
font-family:Arial, sans-serif;
font-weight:600;
color:black;

`;

const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px;
display:flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder='Search for products, brands and more' />
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search