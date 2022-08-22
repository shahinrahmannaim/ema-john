import './Login.css';
import * as firebase from "firebase/app";
import firebaseConfig from '../../firebaseConfig/firebaseConfig';
import { getAuth,signOut, FacebookAuthProvider ,signInWithPopup ,GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";


export const initializeLoginSection =()=>{firebase.initializeApp(firebaseConfig)};

export const handleGooleSingedIn=()=>{
      const provider = new GoogleAuthProvider();
    const auth = getAuth();
  return  signInWithPopup(auth, provider)
      .then(res => {
        const{displayName, photoURL,email} =res.user
        const signedInUser= {
          isSignedIn:true,
          name:displayName,
          email:email,
          photo:photoURL,
          success:true
        }
      return signedInUser;
    
      })  
       }

   export  const handlefaceBookSingIn=()=>{
    const fbProvider = new FacebookAuthProvider();

        const auth = getAuth();
       return signInWithPopup(auth, fbProvider)
    .then((res) => {
        const{displayName, photoURL,email} =res.user
        const signedInUser= {
          isSignedIn:true,
          name:displayName,
          email:email,
          photo:photoURL
        }
        signedInUser.success=true;
      return signedInUser;
    })
    .catch((error) => {
     
    });
      }

     export  const handleSignedOut=()=>{
        const auth = getAuth();
      return  signOut(auth).then((res) => {
          const signedOutUser ={
            isSignedIn:false,
            name:'',
            email:'',
            photo:'',
            success:false
          }
           return signedOutUser;
  
        }).catch((error) => {
        });
      }
     
      export const signeUserWithEmailandPassword =(name,email,password)=>{
        const auth= getAuth();
       return createUserWithEmailAndPassword(auth,email, password)
           .then( (res)=> {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.success = true;
           return newUserInfo;
           
           })
           .catch(error=> {
             const newUserInfo = {};
             newUserInfo.error = error.message;
             newUserInfo.success = false;
           });
      }
    export const logInUserWithEmailAndPassword =(email,password)=>{
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = "";
          newUserInfo.success = true;
          return newUserInfo;
            
      })
      .catch( error => {
        const newUserInfo ={} ;
            newUserInfo.error = error.message;
            newUserInfo.success = false;
          return newUserInfo;
      });
      }
    //   export const updateUserName =name=>{
       
    //     const auth = getAuth();
    //     const user = auth.currentUser;
    //     if (user !== null) {
    //     // The user object has basic properties such as display name, email, etc.
    //     const displayName = user.displayName;
    //       const email = user.email;
    //       const photoURL = user.photoURL;
    //       const emailVerified = user.emailVerified;

    //     // The user's ID, unique to the Firebase project. Do NOT use
    //     // this value to authenticate with your backend server, if
    //     // you have one. Use User.getToken() instead.
    //     const uid = user.uid;
    //     }

    //   }