import axiosClient from "../axiosClient";

const feesApi = {
    getAll: (params) => {
        const url = '/fees/get-all';
        return axiosClient.get(url, {params});
    },
    create: (newData) => {
        const url = '/fees';
        return axiosClient.post(url, newData);
    },
    edit: (dataEdited) => {
        const url = `/fees/${dataEdited.id}`;
        return axiosClient.put(url, dataEdited);
    },
    delete: (id) => {
        const url = `/fees/${id}`;
        return axiosClient.delete(url, {id});
    },
}

export default feesApi;