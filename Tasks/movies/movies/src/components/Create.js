export default function Create() {
    return (
        <>
            <h1>Create movie</h1>
            <form>
                <input type="text" name="title" placeholder="Title"/>
                <input type="text" name="year" placeholder="Year"/>
                <input type="text" name="time" placeholder="Time"/>

                <button>Create</button>
            </form>
        </>
    );
}