import { Component } from 'react';

import ITestJobData from '../types/test_job.type';
import TestJobDataService from '../services/test_job.service';

type Props = {}

type State = ITestJobData & {
    submitted: boolean
}

export default class AddTestJob extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

}