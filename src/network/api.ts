import { Agenda } from './../interfaces';
import axios from 'axios';

const API = axios.create({ baseURL: 'https://agenda-api-8nau.onrender.com/' })

export async function list_agenda(): Promise<Agenda[]> {
    return await API.get('')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

export async function list_mock_agenda(): Promise<Agenda[]> {
    return await API.get('/mock')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}