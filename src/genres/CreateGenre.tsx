import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup'
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";
import axios from "axios";
import { urlGenres } from "../endpoints";

export default function CreateGenre() {
    const history = useHistory();
    async function create(genre: genreCreationDTO)
    {
        try{
            await axios.post(urlGenres,genre);
            history.push("/genres");
        }
        catch(error)
        {
            console.error(error);
        }
    }
    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{name: ""}} onSubmit={ async value => await create(value)}/>
        </>
    )
}