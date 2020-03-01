import FirebaseProvider from "../../firebase/FirebaseProvider";
import Create from "../../components/blog/Create";
import Layout from "../../components/Layout";

function create(props) {
  return (
    <Layout>
      <FirebaseProvider>
        <Create />
      </FirebaseProvider>
    </Layout>
  );
}

export default create;
