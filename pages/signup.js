import {useState} from 'react'
import Link from 'next/link'
import {auth} from '../firebase'

export default function Signup() {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = async (e)=>{
       e.preventDefault()
       try{
         const result = await auth.createUserWithEmailAndPassword(email,password)
       await result.user.updateProfile({
           displayName:name
       })
       M.toast({html: `welcome ${result.user.displayName}`,classes:"green"})  
       }catch(err){
        M.toast({html: err.message,classes:"red"})    
       }
       
    }
    return (
        <div className="container center">
            <h4>Sign in to Continue Bloggy </h4>
             <form onSubmit={(e)=>handleSubmit(e)}>
                 <div className="input-field">
                     <input type="text" placeholder="type your name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                     <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                     <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                 </div>
                 <button type="submit" className="btn blue darken-1" style={{borderRadious:'10px'}}>Signup</button> <br/><br/><br/>
                <Link href="/login"><a><h6>   Already have an account ? </h6></a></Link>
             </form>
            
        </div>
    )
}
