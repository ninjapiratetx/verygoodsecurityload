# verygoodsecurityload
This is the load tests of the api provided.  It used K6 to test and is written in Typescript.
For the functional test see: verygoodsecurity

# how to install k6
see here:
https://k6.io/docs/get-started/installation/
since I'm using a mac:
brew install k6

# how to run
from the directory: verygoodsecurityload
cd test
for i in *.load-spec.ts; do echo "Running: $i\n"; k6 run $i; sleep 0; done
for i in *.pref-spec.ts; do echo "Running: $i\n"; k6 run $i; sleep 0; done

# the test
getPostById.load-spec.ts - test is a load test with 50 vues total hitting the server on the call get https://jsonplaceholder.typicode.com/posts?id=1
getPostById.perf-spec.ts - test is a smaller load test just 1 vue over 1 minute hitting`the server on the call get https://jsonplaceholder.typicode.com/posts?id=1
getPostByUserId.load-spec.ts - test is a load test with 50 vues total hitting the server on the call get https://jsonplaceholder.typicode.com/posts?userId=1 
getPostByuserId.perf-spec.ts - test is a smaller load test just 1 vue over 1 minute hitting`the server on the call get https://jsonplaceholder.typicode.com/posts?userId=1 
postPosts.load-perf.ts -  test is a load test with 50 vues total hitting the server on the call post https://jsonplaceholder.typicode.com/posts 
postPosts.perf-spec.ts - test is a smaller load test just 1 vue over 1 minute hitting`the server on the call post https://jsonplaceholder.typicode.com/posts 

# the screenshots
getPostByid.load.spec.ts
![Alt text](/imgs/getPostById.load.png?raw=true "getPostById.load.spec.ts")