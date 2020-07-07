import Link from 'next/link';
import { render } from 'react-dom';
// import logo from '../image/logo.png';


const Nav = () => {
    return(
        <div className="Headerghost">
                <div className="headPar">
                    <div className="logo">
                             <Link href="/">
                                 <img src={require('../image/logo.png')} />
                            </Link>
                        {/* <img src={logo}  alt="MyPhoto" id="logo"/> */}
                    </div>
                        <ul  className="menu">
                            <Link href="/">
                                 <a >Нүүр</a>
                            </Link>
                            <Link href="/about">
                                 <a >Бидний тухай</a>
                            </Link>
                            <Link href="/company">
                                 <a >Байгууллага / Агентлаг</a>
                            </Link>
                            <Link href="/influencer">
                                 <a >Инфлюнсер / Контент бүтээгч</a>
                            </Link>
                        </ul>
                </div>
            </div>
    )
            
};

export default Nav;
