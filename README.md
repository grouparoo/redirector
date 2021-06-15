# Redirector

[![test](https://github.com/grouparoo/redirector/actions/workflows/test.yml/badge.svg)](https://github.com/grouparoo/redirector/actions/workflows/test.yml)

A little node app that tells all HTTP requests to go somewhere else

```
$ curl -v localhost:8080

*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 8080 (#0)
> GET / HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.64.1
> Accept: */*
>
< HTTP/1.1 302 Found
< content-type: text/html
< Location: https://www.grouparoo.com
< Date: Sat, 24 Apr 2021 00:47:58 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
<

<body>
  <h1>You are being redirected to https://www.grouparoo.com</h1>
</body>
```

## Configuration

Environment Variables:

```
const port = process.env.PORT || "8080";
const destination = process.env.DESTINATION || `https://www.grouparoo.com`;
const http_code = parseInt(process.env.HTTP_CODE || "302");
```
