import $api from "../http";
import {AxiosResponse} from 'axios';
import type {AuthResponse} from "../models/AuthResponse";

export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post('/login', {email, password})

    }
    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post('/registration', {email, password})

    }
    static async logout(email: string, password: string): Promise<void>{
        return $api.post('/logout')

    }

}
