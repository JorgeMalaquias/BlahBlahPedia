import Style from "./style";

export function EditPostModal() {
    return (
        <Style.Container>
            <Style.Modal>
                <h1>Edit item</h1>
                <h3>Title</h3>
                <input type="text" placeholder="Ex: Hello world" />
                <h3>Content</h3>
                <textarea placeholder="Ex: Content here" required cols="30" rows="10"></textarea>
                <Style.Options>
                    <button>Cancel</button>
                    <button type="submit">Save</button>
                </Style.Options>
            </Style.Modal>
        </Style.Container>
    );
}