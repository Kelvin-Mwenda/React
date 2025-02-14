import { useState, useEffect } from 'react';
import './index.css'

const InputValidationForm = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    // Email validation function
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // useEffect to validate email whenever it changes
    useEffect(() => {
        if (email === '') {
            setIsValid(true); // Empty input is considered valid (no error)
            setErrorMessage('');
        } else if (!validateEmail(email)) {
            setIsValid(false);
            setErrorMessage('Invalid email format');
        } else {
            setIsValid(true);
            setErrorMessage('');
        }
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            alert(`Email submitted: ${email}`);
        }
    };

    return (
        <div>
            <h2>Email Validation Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={isValid ? '' : 'error'}
                    />
                    {!isValid && <p className="error-message">{errorMessage}</p>}
                </div>
                <button type="submit" disabled={!isValid}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default InputValidationForm;