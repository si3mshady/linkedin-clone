import React from 'react'
import '../css/Login.css'
export default function Login() {
    
    const register = (e) => {};
    const loginToApp = (e) => {};

    return (
        <div className="login">
            <div className='login_design'>
            <h1>You are not logged{" "} </h1>

< img className="login_design_img"
src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"
/>

            </div> 
           

            <form>
                <input placeholder="Full name (required if registering)" type="text" />

                <input placeholder="Profile Pic URL (optional)"  />


                <input placeholder="Email"  type='email'  />
                <input placeholder="Password" type='password' />
                <button onClick={register} type="submit"> Sign In</button>

            </form>

            <p>Not a member?{" "}
                <span className="login__register"
                onClick={register}
                >Register Now</span>
            </p>

        </div>
    )
}
