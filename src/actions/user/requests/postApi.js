import axios from "axios";

export async function createPost(data) {
    const response = await axios.post("https://dev.codeleap.co.uk/careers/", data);
    return response.data;
}