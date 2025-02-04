import { useState } from 'react';
import { auth } from '../firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const login = async (e) => {
        e.preventDefault(); // Prevents page reload
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
        } catch (err) {
            console.error(err);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="login">
            <header>
                <div className='logo'>
                    <img src={require('../Images/Logo/Logo1.png')} />
                </div>

                <div className="links">
                    <ul>
                        <Link to={'/'}><li>login</li></Link>
                        {/* <Link to={'#'}><li>من نحن</li></Link> */}
                    </ul>

                    <div className="profile">
                        <img src={require('../Images/Icons/user.png')} />
                    </div>
                </div>
            </header>
            <div className="loginForm">
                <div className="left">
                    <img src={require('../Images/full-bird.png')} alt="Welcome Bird" />
                </div>

                <div className="right">
                    <h1 className='h1welcome'>مرحبا بعودتك</h1>
                    <div className="title">
                        {/* <h2>تسجيل الدخول</h2> */}
                        <p>مرحبًا بك في موقع EngFarm لتعليم اللغة الإنجليزية</p>
                    </div>

                    <form onSubmit={login}>
                        <div className="inp">
                            <label>الايميل</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="inp">
                            <label>الرقم السري</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <p>ليس لديك حساب؟ <Link to={'/Signup'}>إنشاء حساب</Link></p>

                        <button className="btn" type="submit">تسجيل الدخول</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
