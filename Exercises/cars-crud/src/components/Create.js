export default function Create() {
    return (
        <>
            <h1>Create cars</h1>

            <form>
                <input type="text" name="brand" placeholder="Brand" />
                <input type="text" name="model" placeholder="Model" />
                <input type="text" name="year" placeholder="Year" />
                <input type="submit" value='Create' />
            </form>
        </>
    );
}