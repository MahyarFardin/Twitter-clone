export const randomNumber= parseInt(Math.random() * 1000000)
export const email=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="text-align:center;">
    <h1></h1>
    <p>Code is: </p>
    <h3 class="code"></h3>
</body>
<script>
    const codeTag = document.getElementsByClassName("code")[0]
    codeTag.innerHTML = ${randomNumber}
</script>

</html>`

