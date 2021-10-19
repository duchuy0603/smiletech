import axiosClient from "../axiosClient";

const danceApi = {
    getAll: (params) => {
        const url = '/dances/get-all';
        return axiosClient.get(url, {params});
    },
    create: (newData) => {
        const url = '/dances';
        return axiosClient.post(url, newData);
    },
    edit: (dataEdited) => {
        const url = `/dances/${dataEdited.id}`;
        return axiosClient.put(url, dataEdited);
    },
    delete: (id) => {
        const url = `/dances/${id}`;
        return axiosClient.delete(url, {id});
    },
}

export default danceApi;