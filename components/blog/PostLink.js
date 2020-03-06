import truncatise from "truncatise";
import Link from "next/link";
import styles from "./PostLink.module.css";

const PostLink = ({ title, author, date, body, id }) => {
  const options = {
    TruncateLength: 25,
    Strict: false,
    StripHTML: true,
    Suffix: "..."
  };

  const excerpt = truncatise(body, options);

  return (
    <div className={styles.container}>
      <Link href={`/blog/post?id=${id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <p className={styles.date}>{date}</p>
      <p className={styles.author}>Contributed by {author}</p>

      <p className={styles.excerpt}>{excerpt}</p>
      <Link href={`/blog/post?id=${id}`}>
        <a className={styles.readMore}>Read more...</a>
      </Link>
    </div>
  );
};

export default PostLink;
