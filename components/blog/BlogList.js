import firebase from "../../firebase";
import { useEffect, useState } from "react";
import PostLink from "./PostLink";
import DummyPost from "./DummyPost";
import styles from "./BlogList.module.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [havePosts, setHavePosts] = useState(false);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    firebase.db
      .collection("posts")
      .get()
      .then(handleSnapshot);
  };

  const handleSnapshot = snapshot => {
    const posts = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    setPosts(posts);
    setHavePosts(true);
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Massage Fluke Blog</h2>
      <div className={styles.blogs}>
        {!havePosts && (
          <>
            <DummyPost />
            <DummyPost />
            <DummyPost />
          </>
        )}
        {posts.map(post => {
          return (
            <PostLink
              title={post.title}
              author={post.author}
              date={post.date}
              body={post.body}
              key={post.id}
              id={post.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
