import axiosClient from "../axiosClient";

const categoryDanceApi = {
    getAll: (params) => {
        const url = '/dance-types/get-all';
        return axiosClient.get(url, {params});
    },
    create: (newData) => {
        const url = '/dance-types';
        return axiosClient.post(url, newData);
    },
    edit: (dataEdited) => {
        const url = `/dance-types/${dataEdited.id}`;
        return axiosClient.put(url, dataEdited);
    },
    delete: (id) => {
        const url = `/dance-types/${id}`;
        return axiosClient.delete(url, {id});
    },
}

export default categoryDanceApi;