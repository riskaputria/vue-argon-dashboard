import { baseApi } from "@/plugins/axios";

const api = "/api/todo";

const list = () => baseApi.get(`${api}`);
const add = (body) => baseApi.post(`${api}`, body);
const edit = (id, body) => baseApi.put(`${api}/${id}`, body);
const del = (id, body) => baseApi.delete(`${api}/${id}`, body);

export { list, add, edit, del };
