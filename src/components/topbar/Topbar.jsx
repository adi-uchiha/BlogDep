
import "./topbar.css";
import {Link} from 'react-router-dom'
import {user} from '../../App' 

export default function Topbar() {
  return (
    <div className="top">
       <div className="topLeft"> 
       <i className="topIcon fa-brands fa-facebook-square"></i>
       <i className="topIcon fa-brands fa-twitter-square"></i>
       <i className="topIcon fa-brands fa-pinterest-square"></i>
       <i className="topIcon fa-brands fa-instagram-square"></i> 
       </div>
       <div className="center">
         <ul className="topList">
           <li className="topListItem">
            <Link className="link" to='/'>HOME</Link>
           </li>
           <li className="topListItem">
            <Link className="link" to='/about'> ABOUT</Link>
           </li>
           <li className="topListItem">
            <Link className="link" to='/contact'>CONTACT</Link>
           </li>
           <li className="topListItem">
            <Link className="link" to='/write'>WRITE</Link>
           </li>
           <li className="topListItem">
            {user&&'LOGOUT'}
           </li>
          </ul>
        
       </div>
       <div className="topRight">
        {
          user ?
          <img className="topImg" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="  "  />
          :   <ul className="topList">
            <li className="topListItem">
              <Link className="link" to='/register'>REGISTER</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to='/login'>LOGIN</Link>
            </li>
          </ul>
        }
       <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>

       </div>

    </div>
  )
}
