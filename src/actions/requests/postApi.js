import api from "./api";

export async function createPost(data) {
    const response = await api.post("", data);
    return response.data;
}
export async function getPosts(url) {
    const response = await api.get(url);
    return response.data;
}

export async function deletePost(id) {
    const response = await api.delete(`${id}/`);
    return response.data;
}

export async function editPost(id, data) {
    const response = await api.patch(`${id}/`, data);
    return response.data;
}