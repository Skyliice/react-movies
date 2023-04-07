import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";
import axios, { AxiosResponse } from "axios";
import { urlActors } from "../endpoints";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

export default function TypeAheadActors(props: typeAheadActorsProps) {



    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);
    const [isLoading,setIsLoading] = useState(false);
    const [actors,setActors] = useState<actorMovieDTO[]>([]);

    function handleSearch(query: string){
        setIsLoading(true);
        axios.get(`${urlActors}/searchByName/${query}`)
        .then((response: AxiosResponse<actorMovieDTO[]>) =>{
            setActors(response.data);
            setIsLoading(false);
        });
    }

    function handleDragStart(actor: actorMovieDTO){
        setDraggedElement(actor);
    }

    function handleDragOver(actor: actorMovieDTO){
        if(!draggedElement){
            return;
        }

        if(actor.id !== draggedElement.id){
            const draggedElementIndex = props.actors.findIndex(x=> x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x=> x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }


    return (<div className="mb-3">
        <label>{props.displayName}</label>
        <AsyncTypeahead
            id="typeahead"
            onChange={(actors: any) => {
                if (props.actors.findIndex(x => x.id === actors[0].id) === -1) {
                    props.onAdd([...props.actors, actors[0]]);
                }
            }}
            options={actors}
            labelKey={(actor: any) => actor.name}
            filterBy={() => true}
            isLoading={isLoading}
            onSearch={handleSearch}
            placeholder="Write the name of the actor..."
            minLength={1}
            flip={true}
            selected={selected}
            renderMenuItemChildren={(actor: any) => (
                <>
                    <img alt="actor"
                        src={actor.picture} style={{
                            height: "64px",
                            marginRight: "10px",
                            width: "64px"
                        }}></img>
                    <span>{actor.name}</span>
                </>
            )}
        />
        <ul className="list-group">
            {props.actors.map(actor => <li 
            key={actor.id} 
            draggable={true}
            onDragStart={() => handleDragStart(actor)}
            onDragOver={() => handleDragOver(actor)}
            className="list-group-item list-group-item-action">
                {props.listUI(actor)}
                <span className="badge badge-primary badge-pill pointer text-dark" style={{ marginLeft: "0.5rem" }}
                    onClick={() => props.onRemove(actor)}>X</span></li>)}
        </ul>
    </div>)
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}