export default function Edit() {
    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Event</h2>
                <form className="edit-form">
                    <input type="text" name="name" id="name" placeholder="Event"/>
                    <input type="text" name="imageUrl" id="event-image" placeholder="Event Image"/>
                    <input type="text" name="category" id="event-category" placeholder="Category"/>


                    <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

                    <label htmlFor="date-and-time">Event Time:</label>
                    <input type="text" name="date" id="date" placeholder="When?"/>

                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}