var posts=["2023/08/04/hello-world/","2024/01/25/枫/","2024/01/17/枯萎的野草-怎配得上栀子花/","2024/02/20/知我/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};