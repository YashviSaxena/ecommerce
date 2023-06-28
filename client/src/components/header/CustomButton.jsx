import { Box, Button, Typography, styled } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';


//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled('Box')`
display:flex;
margin:0 3% 0 auto;

& > button, & > p , & > div{
  margin-right:40px;
  font-size:14px;
  align-items:center;
  font-weight:bold;
  font-family: Arial, sans-serif;
}
`;

const Container = styled(Box)`
display:flex;
`;

const LoginButton = styled(Button)`
color:#2874F0;
background:#fff;
text-transform:none;
padding:2px 43px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;

 &:hover {
        background:#fff ;
        color: #2874F0;
        box-shadow:none;
      }
`;
const CustomButton = () => {
 
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  }
  return (
    <Wrapper>

      {
        account ? <Profile account={account} setAccount={setAccount}/> :
         <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
      }
      

      <Typography style={{ marginTop: 5, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 5 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButton