import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
             <li>
                <Link to="/github">Github</Link>
            </li>
       </ul>
 </nav>
 );
};

export default NavBar;