import Style from "./style";

export function Subscription() {
    return (
        <Style.Modal>
            <h1>Welcome to CodeLeap network!</h1>
            <Style.SubscriptionForm>
                <h3>Please enter your username</h3>
                <input type="text" placeholder="Ex: John doe" required />
                <button type='submit'>ENTER</button>
            </Style.SubscriptionForm>
        </Style.Modal>
    );
};