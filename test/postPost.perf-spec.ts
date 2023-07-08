import http from 'k6/http'
import { check, sleep} from 'k6'
import {uri, query, headerParams} from '../src/static_variables.ts'

export const options = {
    stages: [ { duration: '1m', target: 1}, ]
}

export default function() {
    const res = http.post(uri, query, headerParams)
    check(res, {
        'status is 200': (r) => r.status === 201,
    })
    sleep(1)
}