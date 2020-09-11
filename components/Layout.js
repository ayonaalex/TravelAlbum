import styled from 'styled-components';
import Navbar from './WebNavbar';
import MobileNav from './MobileNav';
import React, { Component } from "react";
import useWindowSize from "./ScreenSize"


const EmptyImgBox = styled.h1`
border-radius: 3px;
font-family: 'PT Sans', sans-serif;
font-weight: bold;
font-size:  10px;  
margin-top: 150px;
margin-right: 20%;
margin-left : 38%;

@media (max-width: 425px) {
  font-size: 9px;
  margin-right: 20%;
  margin-left : 28%;
}
`


const MainBox = styled.div`

    border-radius: 3px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    margin-top: 120px;
    margin-bottom: 0px;
    margin-left : 30%;
    margin-right: 30%;
    flex-direction: column;
    display: flex;
    font-family: 'PT Sans', sans-serif;
    




    @media (max-width: 425px) {
        flex-direction: column;
        margin-top: 30px;
        margin-left : 10%;
        margin-right: 10%;


      }
`


const PostUser = styled.div`

    display: flex;
    padding: 2px;
    align-items: center;  
`


const PostUserAvatarimg = styled.div`

  img{
    width: 50px;
    height: 50px;
  }
  `

const PostUserNickname = styled.div`

    margin-left: 12px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    
    @media (max-width: 425px) {
        font-size: 16px;
    }
    @media (max-width: 360px) {
      font-size: 15px;
    }


`

const Namedisplay = styled.div`
font-size: 1.0em;  
display: flex;
align-items:center;
padding:0px 10px;
justify-content:space-between;
`


const PostImageBg = styled.div`


img{
    width: 100%;
    height: 610px;

    @media (max-width:425px) {
        width: 100%;
        height: 310px;
      }

}
`

const PlaceTitle = styled.div`
  padding-left: 0.5%;
  color: white;
  position: relative;
  top: -70px;
  left: 5px;  
  padding: 5px;
  `


const PostImageImg = styled.div`

display: flex-flow;

  .heartlink{
  
    margin-left:780px;
    margin-right:50px;
    margin-top:-50px;
    width:50px;
   
   }
  
  .captiondisplay{
    font-size: 0.7em;
  }
`


const PlaceContainer = styled.div`
 margin-top: -18px;
 font-size: 0.7em;
 margin-left: 10px;
 `




const Likebuttonstyle = styled.div`

button{
  background-color: Transparent;
  border: none;
  cursor:pointer;
  overflow: hidden; 
  margin: -50px 0px -20px 500px ;

@media (max-width:425px) {
  margin: -55px 0px 50px 270px ;
}

@media (max-width:411px) {
margin: -55px 0px 60px 250px ;
}

@media (max-width:360px) {
margin: -55px 0px 50px 210px ;
}

@media (max-width:360px) {
  margin: -55px 0px 50px 190px ;
  }

img{
  width: 28px;
  height: 20px;
}
`


const Comments = styled.div`
margin-top: -70px;
margin-left: 10px;
margin-bottom:10px;


@media (max-width:425px) {
  margin-top: -120px;
  margin-left: 10px;
  margin-bottom:8px;
}

`


const Likescounter = styled.div`
margin-left:-9px;
margin-top:-15px;
display: flex;
align-items:center;

img{
  width:4%;  

  @media (max-width:425px) {
    width:8%;  
  }

}
`

const Tagscounter = styled.div`
margin-top:-10px;
@media (max-width:425px) {
  margin-top:-15px;
}
`

const Commentscounter = styled.div`
margin-top:-10px;
@media (max-width:425px) {
  margin-top:-19px;
}
`









const Layout = (props) => {
  const size = useWindowSize();
  console.log("width " + size.width)


  if (props.profiles.length == 0) {
    return (
      <div>
        {size.width > 440 ? (

          <div>
            <Navbar />
            <EmptyImgBox>
               <h1>Sorry you don't have any favorite images!!!! </h1>
            </EmptyImgBox>

          </div>
        ) :
          (
            <div>
            <EmptyImgBox>
               <h1>Sorry you don't have any favorite images!!!! </h1>
            </EmptyImgBox>
              <MobileNav />
            </div>
          )
        }
      </div>

    )

  }


  let prflist = props.profiles.map(prf => {

    return (
      <MainBox key={prf.userId}>
        <PostUser>
          <PostUserAvatarimg>
            <img src={prf.userImage} alt={prf.userName} />
          </PostUserAvatarimg>
          <PostUserNickname>
            <span>{prf.userName}</span>
          </PostUserNickname>
        </PostUser>
        <PostImageImg>
          <PostImageBg>
            <img alt="Icon Living" src={prf.coverImage} />
          </PostImageBg>
          <PlaceTitle>
            <Namedisplay>
              <p> {prf.title} </p>
            </Namedisplay>
            <PlaceContainer><span>{prf.place}</span>
              <Likebuttonstyle>
                <button onClick={() => props.handlefav(prf)}>
                  <img src="like.png" />
                </button>
              </Likebuttonstyle>
            </PlaceContainer>
          </PlaceTitle>
        </PostImageImg>
        <Comments>
          <Likescounter>
            <img src="likes1.png" />
            <p>{prf.likes} Likes</p>
          </Likescounter>
          <Tagscounter>
            {prf.tags}
          </Tagscounter>
          <Commentscounter>
            <p> View all 100 comments </p>
          </Commentscounter>
        </Comments>
      </MainBox>
    )

  })


  return (
    <div>
      {size.width > 440 ? (

        <div>
          <Navbar />
          {prflist}
        </div>
      ) :
        (
          <div>
            {prflist}
            <MobileNav />
          </div>
        )
      }
    </div>
  )

}




export default Layout;