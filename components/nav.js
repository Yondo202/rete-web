import Link from 'next/link';
import { render } from 'react-dom';
// import logo from '../image/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosMenu} from 'react-icons/io'


const Nav = () => {
    return(
        <div className="Headerghost">
                <div className="headPar">
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkBtn">
                          <IoIosMenu />
                    </label>
                    <div className="logo">
                             <Link href="/">
                                 <img src={require('../image/logo.png')} />
                            </Link>
                        {/* <img src={logo}  alt="MyPhoto" id="logo"/> */}
                    </div>
                        <ul  className="menu">
                            <Link href="/">
                                <li><a className="active">Нүүр</a></li> 
                            </Link>
                            <Link href="/about">
                                <li><a >Бидний тухай</a></li> 
                            </Link>
                            <Link href="/company">
                                <li><a >Байгууллага / Агентлаг</a></li> 
                            </Link>
                            <Link href="/influencer">
                                <li><a >Инфлюнсер / Контент бүтээгч</a></li> 
                            </Link>
                        </ul>
                </div>
            </div>
    )
            
};

export default Nav;
