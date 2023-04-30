// en
import "./Login.css"
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import auth from 'firebase/compat/app';
// import { login } from './features/userSlice';
// import auth from 'firebase/compat/app';


function Login() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name,setName] = useState("");
//     const [profilePic,setprofilePic] = useState("");
//     const dispatch = useDispatch();


//     const register = () => {   
//         if(!name){
//             return alert("Please enter a full name");
//         }

//         auth.createUserWithEmailAndPassword(email,password)
//         .then((userAuth) => { 
//             userAuth.user.updateProfile({
//                 displayName: name,
//                 photoURL: profilePic,
//             })
//             .then(()=> {
//                 dispatch(login ({

//                     email: userAuth.user.email,
//                     uid: userAuth.user.uid,
//                     displayName: name,
//                     photoURL: profilePic

//                 }))
//             })
//          }).catch(error => alert(error));

//     };
//     const LoginToApp =(e) => {

//         e.preventDefault();

//         auth.signInWithEmailAndPassword(email,password)
//         .then(userAuth => {
//             dispatch(login({

//                 email: userAuth.user.email,
//                 uid: userAuth.user.uid,
//                 displayName: userAuth.user.displayName,
//                 profileUrl: userAuth.user.photoURL,
//             }))
//         }).catch(error => alert(error));

//     };



  return (

    <div className='login'>
        <img src="/linkedin-logo.PNG" alt="" />

    <form>
        <input /*value={name} onChange={(e) => setName(e.target.value)} */ placeholder='Full name (required if registering)' type='text'/>
        <input /*value={profilePic}  onChange={(e) => setprofilePic(e.target.value)} */ placeholder='Profile pic URl (optional)' type="text"/>
        <input /*value={email} onChange={(e) => setEmail(e.target.value)}  */placeholder='Email' type='email'/>
        <input /*value={password} onChange={(e) => setPassword(e.target.value)} */ placeholder='Password' type='password'/>
        <button type='submit' /* onClick= {LoginToApp}*/>Sign In</button>

    </form>

    <p>Not a member?
        <span className='login_register' /*onClick={register}*/> Register Now</span>
    </p>


        </div>
  )
}



export default Login