export default function Remove() {
    return (
        <>
            <h1>Remove cars</h1>

            <form>
                <input type="text" name="brand" placeholder="Brand" />
                <input type="text" name="model" placeholder="Model" />
                <input type="submit" value='Remove' />
            </form>
        </>
    );
}