import http from "../http-common";
import ITestJobData from "../types/test_job.type";

class TestJobDataService {
    getAll() {
        return http.get<Array<ITestJobData>>("/jobs");
    }

    get(tj_id: number) {
        return http.get<ITestJobData>(`/jobs/${tj_id}`);
    }

    create(data: ITestJobData) {
        return http.post<ITestJobData>("/jobs/", data);
    }
}

export default new TestJobDataService