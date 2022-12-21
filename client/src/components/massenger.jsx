import React from 'react'
import {AppBar,Toolbar,styled} from "@mui/material"
import { Login } from './account/login'
import { Box } from '@mui/system'
import { useContext } from 'react'
import { AccountContext } from '../content/accountprovider'
import ChatDialodgue from './chat/chatdialodgue'
const Component=styled(Box)`
height:100vh;
width:auto;
background-color:#DCDCDC;
`
const Header= styled(AppBar)`
height:225px;
background-color:#00bfa5;
box-shadow:none;
`
export const Massenger = () => {
const {account}=useContext(AccountContext)

  return (
    <Component>
      {
        account ? <ChatDialodgue/> 
        :
        <>
     <Header>
      <Toolbar>
        
      </Toolbar>
    </Header>
 <Login/>
 </>}
    </Component>
  )
}
