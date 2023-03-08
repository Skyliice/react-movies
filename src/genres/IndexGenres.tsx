import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../utils/Button";
import customConfirm from "../utils/customConfirm";
import GenericList from "../utils/GenericList";
import IndexEntity from "../utils/IndexEntity";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import { genreDTO } from "./genres.model";

export default function IndexGenres() {


    return (
        <>
            <IndexEntity<genreDTO>
                url={urlGenres} createUrl="genres/create"
                title="Genres" entityName="Genre">
                {(genres, buttons) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres?.map(genre =>
                            <tr key={genre.id}>
                                <td>
                                    {buttons(`genres/edit/${genre.id}`,genre.id)}
                                </td>
                                <td>
                                    {genre.name}
                                </td>
                            </tr>)}
                    </tbody>
                </>}
            </IndexEntity>
        </>
    )
}