import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup'
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";
import axios from "axios";
import { urlGenres } from "../endpoints";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

export default function CreateGenre() {
    const history = useHistory();
    const [errors, setError] = useState<string[]>([]);
    async function create(genre: genreCreationDTO)
    {
        try{
            await axios.post(urlGenres,genre);
            history.push("/genres");
        }
        catch(error: any)
        {
            if(error && error.response)
            {
                setError(error.response.data);
            }
        }
    }
    return (
        <>
            <h3>Create Genre</h3>
            <DisplayErrors errors={errors}/>
            <GenreForm model={{name: ""}} onSubmit={ async value => await create(value)}/>
        </>
    )
}