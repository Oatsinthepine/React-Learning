import {useState, useEffect} from "react";



function Mycomponent () {

    const DEFAULT_NAME = "Please enter your name"

    const [name, setName] = useState(DEFAULT_NAME);

    const changeName = (e) => {
        return setName(e.target.value)
    }

    const [vote, setVote] = useState(0)
    const voteUp = () => {
        return setVote(vote + 1)
    }

    const [payment, setPayment] = useState("");
    const choosePayment = (e) => {
        setPayment(e.target.value)
    }

    const [shipping, setShipping] = useState();
    const chooseShipping = (e) => {
        setShipping(e.target.value)
    }

    useEffect(() => {
        setVote(0);
    }, [name])

    return (
        <div>
            <p>Name: {name} <br/><span>Vote: {vote}</span></p>
            <br/>
            <div>
                <select value = {payment} onChange={choosePayment}>
                    <option value="">Select an sponsor option</option>
                    <option value="Visa">Visa</option>
                    <option value="Master Card">Master Card</option>
                    <option value="Bitcoin">Bitcoin</option>
                </select>
                <p>Payment method: {payment}</p>
            </div>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={changeName}></input>
            <button onClick = {voteUp} disabled={name === DEFAULT_NAME || name === ""}> Vote this person </button>
            <div>
                <label>
                    <input type="radio" value ="Pick Up" checked={shipping === "Pick Up"} onChange={chooseShipping}/>Pick up
                </label>
                <label>
                    <input type="radio" value ="Delivery" checked={shipping === "Delivery"} onChange={chooseShipping}/>Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </div>
    )

}

export default Mycomponent;