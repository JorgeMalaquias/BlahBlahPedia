import { useState } from "react";
import Style from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function SubscriptionModal() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const username = window.localStorage.getItem("username");

    useEffect(() => {
        if (username) {
            navigate("/main-screen");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleSubscription(event) {
        event.preventDefault();
        window.localStorage.setItem("username", name);
        navigate("/main-screen");
    };

    return (
        <Style.Modal >
            <h1>Welcome to CodeLeap network!</h1>
            <Style.SubscriptionForm isNameEmpty={(name === "")} onSubmit={handleSubscription}>
                <h3>Please enter your username</h3>
                <input value={name} type="text" placeholder="Ex: John doe" required onChange={(e) => setName(e.target.value)} />
                <button type='submit' disabled={((name === ""))}>ENTER</button>
            </Style.SubscriptionForm>
        </Style.Modal>
    );
};