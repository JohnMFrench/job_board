import { Component } from "react";

import { PropsWithChildren } from 'react';
import TestJobDataService from '../services/test_job.service';
import ITestJobData from '../types/test_job.type';

type Props = {}

type State = {
    test_jobs: Array<ITestJobData>,
    currentIndex: number
}

export default class TestJobList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            test_jobs: [],
            currentIndex: 1
        }
    }

    componentDidMount(): void {
        this.retrieveTestJobs();
    }

    retrieveTestJobs() {
        TestJobDataService.getAll()
            .then((response: any) => {
                this.setState({
                    test_jobs: response.data,
                });
            })
            .catch((e: Error) => {
                console.log(e);
            })
    }

    render() {
        const { test_jobs } = this.state;
        return (
            <div className="p-2 border-2 margin-2">
                {
                    test_jobs &&
                    test_jobs.map((job: ITestJobData) => (
                        <div className="">{job.tj_name}</div>
                    )
                    )
                }
            </div>

        );
    }
}