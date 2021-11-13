import axiosClient from "./axiosClient";
const BrandApi={
    getAll(){
        const url=`/brand`;
        return axiosClient.get(url)
    },
    get(id){
        const url=`/brand/${id}`;
        return axiosClient.get(url)
    },
    create(data){
        const url=`/brand`;
        return axiosClient.post(url,data)
    },
    Edit(edit){
        const url=`/brand/${edit.Id}`;
        return axiosClient.put(url,edit)
    },
     Delete(id){
        const url=`/brand/${id}`;
        return axiosClient.delete(url)
    }
}
export default BrandApi;