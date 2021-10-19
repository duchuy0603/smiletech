import axiosClient from "../axiosClient";

const ageApi = {
    getAll: (params) => {
        const url = '/ages/get-all';
        return axiosClient.get(url, {params});
    },
    create: (newData) => {
        const url = '/ages';
        return axiosClient.post(url, newData);
    },
    edit: (dataEdited) => {
        const url = `/ages/${dataEdited.id}`;
        return axiosClient.put(url, dataEdited);
    },
    delete: (id) => {
        const url = `/ages/${id}`;
        return axiosClient.delete(url, {id});
    },
}

export default ageApi;