import "../styles/globals.css";
import Layout from "../components/Layout";
import { ScrollContextProvider } from "../context/ScrollContext";

function MyApp({ Component, pageProps }) {
  return (
    <ScrollContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScrollContextProvider>
  );
}

export default MyApp;
