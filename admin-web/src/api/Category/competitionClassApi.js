import axiosClient from "../axiosClient";

const competitionClassApi = {
    getAll: (params) => {
        const url = '/grades/get-all';
        return axiosClient.get(url, {params});
    },
    create: (newData) => {
        const url = '/grades';
        return axiosClient.post(url, newData);
    },
    edit: (dataEdited) => {
        const url = `/grades/${dataEdited.id}`;
        return axiosClient.put(url, dataEdited);
    },
    delete: (id) => {
        const url = `/grades/${id}`;
        return axiosClient.delete(url, {id}); 
    },
    getAllPrepared: () => {
        const url = '/grades/get-all-prepared-data';
        return axiosClient.get(url);
    },
}

export default competitionClassApi;