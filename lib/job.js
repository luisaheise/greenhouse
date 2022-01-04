import { axiosClient } from "../apiClient";

export function listJobs(){
    axiosClient.get('/job_posts')
}

export function getJob(id){
    return axiosClient.get(`/product/${id}`);
}