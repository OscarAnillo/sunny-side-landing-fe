import Footer from "./footer";
import NavBar from "./navBar-component";

function Layout({ children }){
    return (
        <div>
            <NavBar />
                {children}
            <Footer />
        </div>
    )
}

export default Layout;