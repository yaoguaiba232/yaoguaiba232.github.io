var posts=["2023/08/04/hello-world/","2024/01/25/心墙/","2024/01/17/枯萎的野草-怎配得上栀子花/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};