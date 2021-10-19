import axiosClient from "../axiosClient";
const ecommerceApi={
    getAll(){
        const url=`/ecommerce`;
        return axiosClient.get(url)
    },
    get(id){
        const url=`/ecommerce/${id}`;
        return axiosClient.get(url)
    },
    Add(data){
        const url=`/ecommerce`;
        return axiosClient.post(url,data)
    },
    Edit(id,data){
        const url=`/ecommerce/${id}`;
        return axiosClient.put(url,data)
    },
     Delete(id){
        const url=`/ecommerce/${id}`;
        return axiosClient.get(url)
    }
}
export default ecommerceApi;