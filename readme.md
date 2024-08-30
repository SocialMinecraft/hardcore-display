# Overview
This produces a really basic ui on top of the hardcore-api.

API url is an environment variable that can be set like
```sh
API_SERVER="http://api:3030"
```
Honestly, no clue if this actually works with nextjs. 

# How to build Docker
```sh
tagname="$(date '+%Y%m%d-%H%M%Z')"
servicename=somc-hardcore-display
docker build --no-cache -t dmgarvis/$servicename:$tagname .
docker push dmgarvis/$servicename:$tagname
docker tag dmgarvis/$servicename:$tagname dmgarvis/$servicename:latest
docker push dmgarvis/$servicename:latest
```