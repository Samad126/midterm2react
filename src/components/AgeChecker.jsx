import { useState } from "react"

function AgeChecker() {
    const [isAdult, setIsAdult] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const age = fd.get("age");
        
        setIsAdult(Number(age) >= 18 ? true : false); 
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input onChange={() => setIsAdult(null)} type="number" name="age" id="age" />
                <button>Check</button>
            </form>
            <p>{isAdult != null ? isAdult ? "Adult" : "Child" : ""}</p>
        </section>
    )
}

export default AgeChecker