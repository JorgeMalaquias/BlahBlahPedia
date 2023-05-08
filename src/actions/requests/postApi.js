import axios from "axios";
import api from "./api";

export async function createPost(data) {
    const response = await api.post("", data);
    return response.data;
}
export async function getPosts() {
    const response = await api.get("");
    return response.data;
}