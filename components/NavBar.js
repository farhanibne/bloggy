import Link from 'next/link'
import {auth} from '../firebase'
export default function NavBar({user}) {
    
    return (
        <nav>
        <div className="nav-wrapper #212325 black ">
          <Link href="/"><a className="logo" style={{marginLeft:'10px', fontSize:'25px'}}>Bloogy</a></Link>
          <ul id="nav-mobile" className="right">
            {user?
            <>
              <li><Link href="/createblog"><a className='btn blue'>Create Blog</a></Link></li>
              <li> <button  className="btn red" style={{marginRight:'10px'}} onClick={()=>auth.signOut()}>Logout</button></li>
            </>
            
            :
                <>
                <li><Link href="/signup"><a className='btn blue'>Signup</a></Link></li>
                <li><Link href="/login"><a className='btn blue'>Login</a></Link></li>
                </>
            }
            
          </ul>
        </div>
      </nav>
    )
}
