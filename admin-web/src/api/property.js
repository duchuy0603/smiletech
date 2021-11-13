import axiosClient from "./axiosClient";
const PropertyApi={
    getAll(){
        const url=`/product-property`;
        return axiosClient.get(url)
    },
    get(id){
        const url=`/product-property/${id}`;
        return axiosClient.get(url)
    },
    create(create){
        const url=`/product-property`;
        return axiosClient.post(url,create)
    },
    Edit(edit){
        const url=`/product-property/${edit.Id}`;
        return axiosClient.put(url,edit)
    },
     Delete(id){
        const url=`/product-property/${id}`;
        return axiosClient.delete(url)
    }
}
export default PropertyApi;