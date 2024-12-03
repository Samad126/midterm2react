import { useState } from "react"

function User() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(){
        setIsLoggedIn((prev) => !prev);
    }

    return (
        <section>
            <h2>{isLoggedIn ? "Welcome" : "Please log in"}</h2>
            <button onClick={handleChange}>{isLoggedIn ? "Log Out" : "Log in"}</button>
        </section>
    )
}

export default User