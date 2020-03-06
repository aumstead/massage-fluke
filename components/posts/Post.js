import firebase from "../../firebase";
import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./Post.module.css";

const Post = props => {
  const { id } = props;
  const [post, setPost] = useState([]);
  const [havePost, setHavePost] = useState(false);
  const [error, setError] = useState(false)

  const { imageUrl, body, author, date, title } = post;

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    return firebase.db
      .collection("posts")
      .doc(id)
      .get()
      .then(handleSnapshot);
  };

  const handleSnapshot = doc => {
    if (doc.exists) {
      let data = doc.data();
      setPost(data);
      setHavePost(true);
    } else {
      // doc.data() will be undefined in this case
      setError(true)
    }
  };
  
  const markup = {
    __html: body
  };

  return (
    <main className={styles.container}>
      <div className={styles.space}></div>
      {error && <p className={styles.error}>Error retrieving data. Please go back and try again.</p>}
      {!havePost ? (
        <div className={styles.dummy__image}></div>
      ) : (
        imageUrl && <img className={styles.image} src={imageUrl} alt="user uploaded" />
      )}
      {!havePost ? (
        <div className={styles.dummy__title}></div>
      ) : (
        <h1 className={styles.h1}>{title}</h1>
      )}

      {!havePost ? (
        <div className={styles.dummy__date}></div>
      ) : (
        <p className={styles.date}>{date}</p>
      )}
      <br />
      {!havePost ? (
        <div className={styles.dummy__author}></div>
      ) : (
        <p className={styles.author}>Contributed by {author}</p>
      )}
      <br />
      {!havePost ? (
        <div className={styles.dummy__body}>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <br/>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
          <div className={styles.dummy__p}></div>
        </div>
      ) : (
        <div className={styles.body} dangerouslySetInnerHTML={markup}></div>
      )}
      <div className={styles.backBtn}>
        <Link href="/blog">
          <a className={styles.backBtn__a}>Back to list</a>
        </Link>
      </div>
    </main>
  );
};

export default Post;
