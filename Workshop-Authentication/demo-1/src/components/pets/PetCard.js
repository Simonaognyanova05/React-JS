export default function PetCard({
    pets
}) {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{pets.type}</h5>
                    <p class="card-text">{pets.breed}</p>
                    <a href="#" class="btn btn-primary">Edit</a>
                    <a href="#" class="btn btn-primary">Delete</a>
                    <a href="#" class="btn btn-primary">Like</a>

                </div>
        </div>
    );
}