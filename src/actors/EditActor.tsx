import ActorForm from "./ActorForm";


export default function EditActor()
{
    return(
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{name: "Tom Holland", dateOfBirth: new Date("1996-01-01T00:00:00"),
            pictureURL:"https://i01.fotocdn.net/s125/4f170c01e296d95a/public_pin_m/2847815512.jpg"}} 
            onSubmit={values => console.log(values)} />
        </>
    )
}