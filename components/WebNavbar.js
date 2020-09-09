import Link from "next/link";
import styled from 'styled-components';
import React, { Component } from 'react'

const Li = styled.div
  `
position:fixed;
top:0;
width:98%;
background-color: #fff	;


`

const MyDesktopNav = styled.div`

.footer{
    display:flex;
    align-items:flex-end;
    margin-top:-10px;
    justify-content:space-between;
    background-color: #E1306C	;
    box-shadow:0 -2px 5px 0px #ddd;
    padding: 10px ;   
  
  }
  .bottomicon1{
    opacity:1;
    width:20px;
    cursor:pointer;

  }
  .Buttons{
    cursor:pointer;

    text-align: right;
    border: none;
    background: transparent;
  } 

`

const Logo = styled.div`
background-color: #fff	;
text-align: center;
margin-top:-220px;
img{
  width:100%;
  height:50px;
}

`
const Name = styled.div`
margin-top:220px;
margin-bottom:0px;
text-align: center;
font-family: "Comic Sans MS", cursive, sans-serif;
font-size:20px;
`


class Navbar extends Component {


  render() {
    return (
      <Li>
        <Logo>
          <Name>          <h1>Travel Album</h1>
          </Name>
        </Logo>
        <MyDesktopNav>
          <div className="footer">
            <Link href='/' className="Buttons"><img src="/home.svg" alt="home Logo" className="bottomicon1" /></Link>
            <Link href='/favorites' className="Buttons"><img className="bottomicon1" src="/heart.svg" /></Link>
          </div>
        </MyDesktopNav>
      </Li>

    )
  }
}

export default Navbar;