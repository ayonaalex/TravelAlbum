import Link from "next/link";
import styled from 'styled-components';
import React, { Component } from 'react'


const MyDesktopNav = styled.nav`

.footer{
    align-items:flex-end;
    padding:10px 10px;
    justify-content:space-between;
    background-color: #E1306C	;
    box-shadow:0 -2px 5px 0px #ddd;
    position:fixed;
    margin-right:30px;
    bottom:0px;
    width:100%;
    left: 0;

  
  }
  .bottomicon1{
    opacity:1;
    width:20px;
  }

  .bottomicon2{
    opacity:1;
    width:20px;
    margin-left:369px;

    
  }


`

class Navbar extends Component {


  render() {
    return (
      <MyDesktopNav>
        <div className="footer">

          <Link href='/'><img src="/home.svg" alt="home Logo" className="bottomicon1" /></Link>
          <Link href='/favorites'><img className="bottomicon2" src="/heart.svg" /></Link>

        </div>
      </MyDesktopNav>


    )
  }
}

export default Navbar;