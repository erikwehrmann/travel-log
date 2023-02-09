import { useEffect, useState } from 'react';
import axios from 'axios';
import SmallPostItem from "../components/SmallPostItem";
import Navbar from '../components/Navbar';
import "../styles/SmallPostItem.scss"

export default function HomePage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_API_KEY)
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
      });
  }, []);

  const postsArray = posts.map(post => {
    return (
      < SmallPostItem
        key={post.id}
        id={post.id}
        title={post.title}
        photo={post.photo_link}
        address={post.address}
      />
    );
  });

  return (
    <main>
      <Navbar />
      <div class="container">
        <div class="row row-cols-4">
         {postsArray}
        </div>
      </div>
    </main>
  )
}