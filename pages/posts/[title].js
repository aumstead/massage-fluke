import { useRouter } from "next/router";
import Post from '../../components/posts/Post'
import BlogLayout from '../../components/BlogLayout'
import Footer from '../../components/Footer'

const post = () => {
  const router = useRouter();
  // console.log('props:' + props)
  const queryId = router.query.id;
  const queryTitle = router.query.title;
  return (
    <BlogLayout>
      <Post queryId={queryId} queryTitle={queryTitle} />
      <Footer />
    </BlogLayout>
  );
};

export default post;