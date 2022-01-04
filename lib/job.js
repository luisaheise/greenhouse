import axiosClient from "../apiClient";

export async function listJobs(){
    axiosClient.get('/jobs')
}

export async function getJob(id){
    return axiosClient.get(`/jobs/${id}`);
}

export async function createJob(values){
    return axiosClient.post('/jobs/',
        {
            "template_job_id": values.template_job_id,
            "number_of_openings": values.number_of_openings,
            "job_post_name": values.job_post_name,
            "job_name": values.job_name,
            "external_department_id": values.external_department_id,
            "office_ids": values.office_ids,
            "requisition_id": values.requisition_id,
            "opening_ids": values.opening_ids
        }
    );
}