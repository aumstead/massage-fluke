import Post from '../../components/posts/Post'
import BlogLayout from '../../components/BlogLayout'
import Footer from '../../components/Footer'

const post = (props) => {
  return (
    <BlogLayout>
      <Post id={props.id}/>
      <Footer />
    </BlogLayout>
  );
};

export default post;

post.getInitialProps = context => {
  const id = context.query.id;
  return {
    id: id
  }
}