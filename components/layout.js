import Nav from "./nav"
import Footer from './footer'
// import '../styles/Style.css'
// import '../styles/sass/home.scss'

const Layout = (props) => {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}
export default Layout;