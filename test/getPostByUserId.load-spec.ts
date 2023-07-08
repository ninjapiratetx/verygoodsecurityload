import http from 'k6/http'
import { check, sleep} from 'k6'
import {uri, userIdParams} from '../src/static_variables.ts'

export const options = {
    stages: [
        { duration: '10s', target: 0},
        { duration: '10s', target: 50},
        { duration: '10s', target: 0},
    ]
}

export default function() {
    const res = http.get(uri, userIdParams)
    check(res, {
        'status is 200': (r) => r.status === 200,
    })
    sleep(1)
}