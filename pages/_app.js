import "@/styles/globals.css";
import Layout from "./components/ui/layout/Layout";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
