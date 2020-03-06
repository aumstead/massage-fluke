import Head from "next/head";
import Home from "../components/home/Home";
import Layout from "../components/Layout";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Massage Fluke</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default index;
