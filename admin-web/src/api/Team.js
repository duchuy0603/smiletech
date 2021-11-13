import axiosClient from "./axiosClient";
const TeamApi={
    getAll(){
        const url=`/team`;
        return axiosClient.get(url)
    },
    get(id){
        const url=`/team/${id}`;
        return axiosClient.get(url)
    },
    create(data){
        const url=`/team`;
        return axiosClient.post(url,data)
    },
    Edit(edit){
        const url=`/team/${edit.Id}`;
        return axiosClient.put(url,edit)
    },
     Delete(id){
        const url=`/team/${id}`;
        return axiosClient.delete(url)
    }
}
export default TeamApi;