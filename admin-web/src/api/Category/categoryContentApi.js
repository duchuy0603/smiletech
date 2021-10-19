import axiosClient from "../axiosClient";

const categoryContentApi = {
    getAll: () => {
        const url = '/content_competition/get-all';
        return axiosClient.get(url, {});
    },
    create: (newData) => {
        const url = '/content_competition';
        return axiosClient.post(url, newData);
    },
    edit: (dataEdited) => {
        const url = `/content_competition/${dataEdited.id}`;
        return axiosClient.put(url, dataEdited);
    },
    delete: (id) => {
        const url = `/content_competition/${id}`;
        return axiosClient.delete(url, {id});
    },
    getAllPrepared: () => {
        const url = '/content_competition/get-all-prepared-data';
        return axiosClient.get(url);
    },
}

export default categoryContentApi;