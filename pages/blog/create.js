import FirebaseProvider from "../../firebase/FirebaseProvider";
import Create from "../../components/blog/Create";
import BlogLayout from "../../components/BlogLayout";

function create(props) {
  return (
    <BlogLayout>
      <FirebaseProvider>
        <Create />
      </FirebaseProvider>
    </BlogLayout>
  );
}

export default create;
