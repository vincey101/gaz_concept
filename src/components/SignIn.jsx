import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import * as jwtDecode from 'jwt-decode';
import './signin.css';

function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleSuccess = (credentialResponse) => {
        const credentialDecoded = jwtDecode.jwtDecode(credentialResponse.credential);
        console.log('Google Sign-In Success:', credentialDecoded);

        // Here you would typically:
        // 1. Send the token to your backend
        // 2. Verify the token on the server
        // 3. Create a user session
        // 4. Redirect the user

        // For demo purposes, we'll just log the user info and redirect
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    const handleGoogleError = () => {
        console.error('Google Sign-In Failed');
    };

    return (
        <div className="signin-page">
            <h1>Sign In</h1>
            <p className="welcome-text">Welcome back, Please sign in with your credentials</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group password-group">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        )}
                    </button>
                    <a href="#" className="forgot-password">Forget Password?</a>
                </div>

                <button type="submit" className="submit-btn">Submit</button>

                <p className="signup-text">
                    Don't have an account? Click to <a href="/signup">Sign Up</a>
                </p>

                <div className="divider">
                    <span>Or</span>
                </div>

                <div className="social-buttons">
                    <div className="google-btn-container">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleError}
                            type="hidden"
                            useOneTap={false}
                            auto_select={false}
                        />
                        <button
                            type="button"
                            className="google-btn custom-google-btn"
                            onClick={() => document.querySelector('.google-btn-container button[type="button"]').click()}
                        >
                            Continue with Google
                        </button>
                    </div>
                    <button type="button" className="facebook-btn">
                        Continue with Facebook
                    </button>
                    <button type="button" className="linkedin-btn">
                        Continue with LinkedIn
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn; 