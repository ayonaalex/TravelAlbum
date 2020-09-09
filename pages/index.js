import Layout from '../components/Layout';
import React, { Component } from 'react';
import Fetch from 'isomorphic-unfetch';
import HeadLayout from '../components/Layout';



class Index extends Component {

  //data for the main page
  profiles = [
    {
      userId: 1,
      userName: "aara",
      userImage: "/prf1.png",
      coverImage: "/img1.jpg",
      title: "Nilaweli Beach",
      place: "Srilnka",
      description: "Space Black Stainless Steel Case with Black Sport Band",
      likes: 300,
      tags: "#sunset #blue #cream #river",
    },

    {
      userId: 2,
      userName: "rodney",
      userImage: "/prf2.jpg",
      coverImage: "/img2.jpg",
      title: "maldiwes",
      place: "Norway",
      description: "Space Black Stainless Steel Case with Black Sport Band",
      likes: 400,
      tags: "#sunset #green #cream #river",

    },

  ]


  //function for adding favorite images using post method
  handlefav = async (prf) => {

    let data =
    {
      userId: prf.userId,
      userName: prf.userName,
      userImage: prf.userImage,
      coverImage: prf.coverImage,
      title: prf.title,
      place: prf.place,
      description: prf.description,
      likes: prf.likes,
      tags: prf.tags,
    }


    Fetch('http://localhost:3000/api/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        data)
    })


  }


  render() {
    return (
      <div>
        <Layout
          profiles={this.profiles}
          handlefav={this.handlefav} />
      </div>

    );
  }
}



export default Index;




