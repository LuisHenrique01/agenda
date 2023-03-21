import { Agenda } from './../interfaces';
import axios from 'axios';

export async function list_agenda(): Promise<Agenda[]> {
    return await axios.get('http://127.0.0.1:8000/')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}