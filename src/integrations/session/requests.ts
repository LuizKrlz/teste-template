import api from "../../services/api";
import { TLoginData, TUserResponse } from "./types";

export const login = async (data: TLoginData) => {
    try {
        const response = await api.post<TUserResponse>('/login', data)
        
        return response.data
    } catch (error) {
        return Promise.reject(error)
    }
}