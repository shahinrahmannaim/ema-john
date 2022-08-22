import {useState} from 'react';
import './Login.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import {   handlefaceBookSingIn, handleGooleSingedIn, handleSignedOut, initializeLoginSection, logInUserWithEmailAndPassword, signeUserWithEmailandPassword,  } from './LoginManager';

function Login() { 
  const [newUser,setNewUser]=useState(false);
  const [user,setUser]=useState({
    isSignedIn:false,
    name:'',
    email:'',
    photo:''

  });


  initializeLoginSection();


  const [loggedInUser,setLoggedInUser]= useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  let {from}=location.state || {from: {pathname: "/"}}

  const googleSignIn=()=>{
    handleGooleSingedIn()
    .then(res=>

        {
            handleResponse(res,true)
        })
            
  }

  const facebookSignIn =()=>{
    handlefaceBookSingIn()
    .then(res=>

        {
            handleResponse(res,true)
        })
            
  }

  const signOut=()=>{
    handleSignedOut()
    .then(res=>{
      handleResponse(res,false)
    })
  }

 const handleResponse=(res,redirect)=>{
    setUser(res)
    setLoggedInUser(res)
    if(redirect){
        navigate(from, { replace: true });
    }
  }
   
    const handleForm=(e)=>{
      console.log(e.target.value)
      let isFormValid;
      if(e.target.name==='email'){
       isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        console.log(isFormValid);
        
      }
      if(e.target.name==='password'){
        isFormValid = e.target.value.length > 6;
        console.log(isFormValid);
      }

      if(isFormValid){
        const newUserInfo={...user};
        newUserInfo[e.target.name]=e.target.value;
        setUser(newUserInfo);
      }

    }
    const handleSubmit=(e)=>{
      if(newUser && user.email && user.password){
        signeUserWithEmailandPassword(user.name,user.email,user.password)
        .then(res=>{
            handleResponse(res,true)
        })
    }
       // handle logging option
       if(!newUser && user.email && user.password){
        logInUserWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            handleResponse(res,true)

        } )
      }
    e.preventDefault();
    }
 
   
       
  return (
    <div className="login">            
      
       {  
        user.isSignedIn?  <button onClick={signOut} >Sign out</button> :
        <button onClick={googleSignIn} >Sign in with Google </button>
        }    
        <br />
        <button onClick={facebookSignIn} >Sign in with Face-B</button>
      { user.isSignedIn &&
       <div>
        <p>Welcome</p>
        <h3> Name: {user.name} </h3>
      <h3> Name: {user.email} </h3>
      <img src={user.photo} style={{width:'20%'}} alt="" />
     
      </div>
      }
      <br />
       <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id="" />
       
          <label style={{color:'white'}} htmlFor="newUser">New User</label>
         
         <form onSubmit={handleSubmit}>
        
        { newUser && <input type="text" name="name" onChange={handleForm} placeholder="Full name" require/>}
          <br />
          <input type="email" name="email" onChange={handleForm} placeholder="Email" require/>
          <br />
          <input type="password" name="password" onChange={handleForm} placeholder="Password" require/>
          {/* <br /> */}
          {/* {newUser && <input type="number" placeholder='Mobile Number' />} */}
          <br />
          <input type="submit"  value="submit" />
      </form>
      <p style={{color:"red"}}> {user.error}  </p>
      {user.success && <p style={{color:"green"}}> User { newUser? 'Created' : 'Logged in'} successfully! </p>}
      
        
    </div>
  );
}


export default Login;
