import Style from "./style";

export function DeletePostModal() {
    return (
        <Style.Container>
            <Style.Modal>
                <h1>Are you sure you want to delete this item?</h1>
                <Style.Options>
                    <button>Cancel</button>
                    <button>Delete</button>
                </Style.Options>
            </Style.Modal>
        </Style.Container>
    );
}