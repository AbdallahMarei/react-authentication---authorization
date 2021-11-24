import React, {useState} from 'react';
import "./sign-in.styles.scss";

function SignIn() {
    const [values, setValues] = useState({
        lastName: "",
        firstName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false)


    const handleChange = (e) => {
        const {name, value} = e.target;

        setValues({...value,[name]: value})
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {submitted && values.firstName && values.lastName && values.email? <div className="success-message">Success! Thank you for registering</div> : null}
                <input onChange={handleChange} value={values.firstName} placeholder="First Name" name="firstName" type="text" />
                {(submitted && !values.firstName) ? <span className="message">Please enter a first name</span> : null}
                <input onChange={handleChange} value={values.lastName} placeholder="Last Name" type="text" name="lastName" />
                {(submitted && !values.lastName) ? <span className="message">Please enter a last name</span> : null}
                <input onChange={handleChange} value={values.email} placeholder="Email" type="email" name="email" />
                {(submitted && !values.email) ? <span className="message">Please enter an email name</span> : null}
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default SignIn
