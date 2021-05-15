# curl & postman
[課題](https://airtable.com/tblg8ePOEQRDtIGiY/viwV3pAlEvPOOgmHF/recEM4COzMtz03WWs?blocks=hide)

## curl
### ①
 `curl https://httpbin.org/headers -H 'X-Test:hello'`

```
$ curl https://httpbin.org/headers -H 'X-Test:hello'
{
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.64.1",
    "X-Amzn-Trace-Id": "Root=1-609d1e37-76b9fa7331ae3b87564af749",
    "X-Test": "hello"
  }
}
```

### ②
`curl -X POST -H 'Content-Type:application/json' -d '{"name": "hoge"}' https://httpbin.org/post`

```
$ curl -X POST -H 'Content-Type:application/json' -d '{"name": "hoge"}' https://httpbin.org/post
{
  "args": {},
  "data": "{\"name\": \"hoge\"}",
  "files": {},
  "form": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "16",
    "Content-Type": "application/json",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.64.1",
    "X-Amzn-Trace-Id": "Root=1-609d2033-3d8b8ae0783bbec11ccd2ba5"
  },
  "json": {
    "name": "hoge"
  },
  "origin": "133.32.224.133",
  "url": "https://httpbin.org/post"
}
```



### ③
`curl -X POST -d "name=hoge" https://httpbin.org/post`

```
$ curl -X POST -d "name=hoge" https://httpbin.org/post
{
  "args": {},
  "data": "",
  "files": {},
  "form": {
    "name": "hoge"
  },
  "headers": {
    "Accept": "*/*",
    "Content-Length": "9",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.64.1",
    "X-Amzn-Trace-Id": "Root=1-609d2244-2e08ecdd009ca5de21c7701a"
  },
  "json": null,
  "origin": "133.32.224.133",
  "url": "https://httpbin.org/post"
}
```

### ④
`curl -X POST -H 'Content-Type:application/json' -d '{"userA":{"name":"hoge", "age": 29}}' https://httpbin.org/post`

```
$ curl -X POST -H 'Content-Type:application/json' -d '{"userA":{"name":"hoge", "age": 29}}' https://httpbin.org/post
{
  "args": {},
  "data": "{\"userA\":{\"name\":\"hoge\", \"age\": 29}}",
  "files": {},
  "form": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "36",
    "Content-Type": "application/json",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.64.1",
    "X-Amzn-Trace-Id": "Root=1-609d2402-44fa2a942a9afba55d828199"
  },
  "json": {
    "userA": {
      "age": 29,
      "name": "hoge"
    }
  },
  "origin": "133.32.224.133",
  "url": "https://httpbin.org/post"
}
```

## postman
結果のリンク
https://www.getpostman.com/collections/9e0d32bd509f2a325a14


## クイズ
### curl
Q. curlでsessionをCookieから取得したい時にはどのようにすれば良いでしょう

### postman
Q. postmanからcurlコマンドを生成するにはどのようにすれば良いでしょうか。
