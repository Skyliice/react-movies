import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: typeAheadActorsProps){
    
    const actors: actorMovieDTO[] = [
        {id: 1, name:"Bogdan", character: "", picture: "https://sun9-east.userapi.com/sun9-57/s/v1/if1/uU-JQ0Eou4m9KENUzK0pylthOm6uvDN2AO-wcn6l_LZLKilwr0j7yRbRnm-sAHMU0M1IF73i.jpg"},
        {id: 2, name:"Vlad", character: "", picture: "https://sun9-85.userapi.com/c9817/u62741640/-6/w_6b1233d6.jpg"},
        {id: 3, name:"Nikita", character: "", picture: "https://sun9-18.userapi.com/c9844/u62553290/-6/x_60482ff1.jpg"}
    ];
    
    return(<div className="mb-3">
    <label>{props.displayName}</label>
    <Typeahead 
        id="typeahead"
        onChange={actor =>{
            console.log(actor);
        }}
        labelKey="name"
        options={actors}
        filterBy={["name"]}
        placeholder="Write the name of the actor..."
        minLength={1}
    />
    </div>)
}

interface typeAheadActorsProps{
    displayName: string;
    actors: actorMovieDTO[];
}