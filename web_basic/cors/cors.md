# CORS

## 課題1（質問）

### CORSの仕組み

CORS(Cross Origin Resource Sharing) は、あるオリジンで動いているアプリケーションのリソースに対して、異なるオリジンからリクエストを受け取った時に、そのリクエストにリソースのアクセス権を与えるようにブラウザに指示する仕組みです。

CORSの動作する仕組みとして、どのようなリクエストを送るかで挙動が変わります。

- 許可されているメソッドのうちの一つであること。
  - GET
  - POST
  - HEAD
- ユーザーエージェントによって自動的に設定されたヘッダーを除いて CORSセーフリクエストヘッダーのもの
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type (但し、下記の要件を満たすもの)
  - DPR
  - Downlink (en-US)
  - Save-Data
  - Viewport-Width
  - Width
- Content-Typeが以下のもの
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain

上記のすべての条件を満たすリクエストのことをsimple request、それ以外のリクエストには、メインのリクエストの直前にpreflight requestがサーバーに送られます。
preflight requestの実態は、メインのリクエストが送られる前にOPTIONメソッドのHTTP リクエストを他のドメインにあるリソースに向けて送り、実際のリクエストを送信しても安全かどうかを確かめます。
どちらの種類のリクエストでも、サーバーはaccess-control-allow-originヘッダーを使用して、アクセス可能なオリジンを指定します。
許可されたオリジンからのリクエスト出会った場合、ブラウザはリクエストのレスポンスで受け取ったリソースに対してアクセスできます。
許可されていないオリジンの場合、ブラウザはレスポンスに対してアクセスすることはできません。
このようにすることでオリジンのアクセス制限を行います。

### Access-Control-Allow-Origin: *が問題となるケース

Access-Control-Allow-Origin: *はどのオリジンからのリクエストでも許可する設定です。
もし、社内向けの閉じた情報や、公開したくない情報を参照できるサイトがあり、Access-Control-Allow-Origin: *が設定されていた場合、
悪意を持った人が他のオリジンから取得することが可能となります。
公開したくない情報であれば、*を設定すべきではありません。

資格情報を含むリクエストの場合、エラーが発生します。
資格情報を含むリクエストは、資格情報に関連するコンテンツを返すことを想定されていて、全てのオリジンに対しては想定されていないから。

### シンプルなリクエストの条件

- 許可されているメソッドのうちの一つであること。
  - GET
  - POST
  - HEAD
- ユーザーエージェントによって自動的に設定されたヘッダーを除いて CORSセーフリクエストヘッダーのもの
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type (但し、下記の要件を満たすもの)
  - DPR
  - Downlink (en-US)
  - Save-Data
  - Viewport-Width
  - Width
- Content-Typeが以下のもの
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain

### シンプルなリクエストの場合でサーバからのレスポンスのAccess-Control-Allow-Originヘッダーに、リクエスト送信元のオリジンが含まれない場合のブラウザの挙動

ブラウザはレスポンスを受け取るが、JSに読み込ませず、以下のエラーが発生させる。
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'

https://developer.mozilla.org/ja/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin


### XMLHttpRequestを使ってクロスオリジンリクエストを発行する際、デフォルトの挙動だとリクエストにクッキーが含まれません。クッキー情報を含むためには、何をする必要があるでしょうか？

リクエストのwithCredentialsという真偽値をtrueにする

## 課題2 クイズ
- Access-Control-Max-Ageを設定して、preflightリクエストによる検証を減らそうと思いましたが、うまくいきません。どのような原因が考えられるでしょうか。

https://httptoolkit.tech/blog/cache-your-cors/#cors-caching-for-cdns

- 資格情報を含むリクエストの場合、`Access-Control-Allow-Origin: *`を設定することはできませんが、`資格情報`とはなにをさすでしょうか。

## 課題4
- CURLからsimple requestに該当しないリクエストをおくっても、preflightリクエストは飛ばない
- つまり、CORS制約は適用されない
- 理由はCORSはブラウザが異なるオリジンリクエストに送る際の制約であるため。
