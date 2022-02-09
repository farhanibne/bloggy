import {useState} from 'react'
import Link from 'next/link'
import {auth} from '../firebase'
export default function login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

       const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
          const result = await auth.signInWithEmailAndPassword(email,password)
          M.toast({html: `welcome ${result.user.displayName}`,classes:"green"})  
        }catch(err){
          M.toast({html: err.message,classes:"red"})    
        }
        
     }
   
    return (
        <div className="container center">
            <h3>Login to Bloggy</h3><br/>
             <form onSubmit={(e)=>handleSubmit(e)}>
                 <div className="input-field">
                     <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                     <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                 </div>
                 <br/>
                 
                <button type="submit" className="btn blue darken-1" >Login</button>
                <Link href="/">
                <button type="submit" style={{marginLeft:'20px'}} className="btn green darken-1" >Back To Home</button></Link> <br/><br/>
                <Link href="/signup"><a><h6>Don't Have a account ?</h6></a></Link>
             </form>
            
        </div>
    )
}
