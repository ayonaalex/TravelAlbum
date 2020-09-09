import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import Layout from '../components/Layout';


const Favorites = ({ notes }) => {

  return (
    <div>
      <Layout
        profiles={notes}
        handlefav={handler} />
    </div>

  )

}



//fetching favorite image data from mongodb
Favorites.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();
  return { notes: data }
}


const deleteNote = async (_id) => {
  const noteId = _id;
  try {
    const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
      method: "Delete"
    });
    console.log("im here");

    Router.reload();
  } catch (error) {
    console.log(error)
  }
}




const handler = (prf) => { deleteNote(prf._id); };








export default Favorites;