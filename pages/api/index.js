const template=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            border: 1px solid black;
            width: 30rem;
            height: 10rem;
            margin: 10rem auto;
            background-color: rgb(113, 173, 225);
        }

        .inner{
            width: 20rem;
            height: 6rem;
            margin: 2rem auto;
            background-color: #333;
            color: white;
        }

        .title{
            padding-top: .5rem;
        }

        .val{
            font-weight: bold;
            font-size: 20px;
        }
    </style>
</head>

<body style="text-align:center;">
    <div class="box">
        <div class="inner">
            <h3 class="title">Code:</h3>
            <p class="val">  </p>
        </div>
    </div>
</body>


</html>`


const randomNumber= parseInt(Math.random() * 1000000)

function sendMail(reciver) {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "08a11853132a9c",
        pass: "c59bf12e778907",
    },
});

    const option = {
        from: "mahyarfardinfar@gmail.com",
        to: reciver,
        subject: "verification email",
        html: template,
    };

    transport.sendMail(option, function (e, data) {
        if (e) {
        return console.log(e);
    }
        console.log("email sent , data :" + data);
    });
};


module.exports = {sendMail}