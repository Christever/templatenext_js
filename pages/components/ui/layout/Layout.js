import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout(props) {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="grow  container">{props.children}</div>
            <Footer />
        </div>
    );
}
