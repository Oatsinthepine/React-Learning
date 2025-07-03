
function Button () {
    let count = 0;
    const handleClick = (name) => {
        if (count < 3) {
            count += 1;
            console.log(`${name} clicked ${count} times`);
        } else {
            console.log("stop clicking me");
        }
    }
    return (
        <button onClick={() => handleClick("bro")}>Click Me</button>
    )
}

export default Button;