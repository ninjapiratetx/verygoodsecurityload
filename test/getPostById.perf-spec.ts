import http from 'k6/http'
import { check, sleep} from 'k6'
import {uri, idParams} from '../src/static_variables.ts'

export const options = {
    stages: [ { duration: '10s', target: 1},]
}

export default function() {
    const res = http.get(uri, idParams)
    check(res, {
        'status is 200': (r) => r.status === 200,
    })
    sleep(1)
}