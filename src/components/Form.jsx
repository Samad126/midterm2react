import { useState } from "react"

function Form() {
    const [formData, setFormData] = useState(null);


    function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());
        setFormData(data);
    }
    
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" id="userName" />
                </p>
                <p>
                    <label htmlFor="userName">email</label>
                    <input type="email" name="email" id="email" />
                </p>
                <button>Send</button>
            </form>

            {!formData
                ? <p>Waiting for submit</p>
                :
                <div>
                    <p>Username : {formData.userName}</p>
                    <p>Email : {formData.email}</p>
                </div>
            }
        </section>
    )
}

export default Form