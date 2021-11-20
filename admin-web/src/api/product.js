import axiosClient from "./axiosClient";
const ProductApi={
    getAll(){
        const url=`/products`;
        return axiosClient.get(url)
    },
    get(id){
        const url=`/products/${id}`;
        return axiosClient.get(url)
    },
    create(dataAdd){
        const url=`/products`;
      
        return axiosClient.post(url, dataAdd)
    },
    Edit(edit){
        const url=`/products/${edit.Id}`;
        return axiosClient.put(url,edit)
    },
     Delete(id){
        const url=`/products/${id}`;
        return axiosClient.delete(url)
    }
}
export default ProductApi;