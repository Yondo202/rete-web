import Nav from "./nav"
import Footer from './footer'
// import '../styles/Style.css'
// import '../styles/sass/home.scss'

const Layout = (props) =>{
    return(
        <div>
            <Nav />
            { props.children }
            <Footer />
        </div>
    )
}
export default Layout;