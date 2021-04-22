let html = document.querySelector("#html");
let str = `/*我是dy，我在0基础学习web前端
*我要演示一下做八卦图的过程：
*首先我要准备一个div*/
#div1{
    border:2px solid black;
    width:200px;
    height:200px;
}
/*我要让它变成一个八卦图，那么把div变成一个⚪：*/
#div1{
    border-radius:50%;
    box-shadow:#FC0 1px 0 10px;
    border:none;
}
/*八卦是阴阳两极形成的，颜色我喜欢粉紫色*/
#div1{
    background: rgb(155,148,233);
    background: linear-gradient(90deg, rgba(155,148,233,1) 50%, rgba(226,170,206,1) 50%);
}
/*接下来我会加两个小球和两个小小球*/
#div1::before{
    width:100px;
    height:100px;
    background: rgba(155,148,233,1);
    left:50%;
    top:0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(155,148,233,1) 25%, rgba(226,170,206,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    background:rgba(226,170,206,1);
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(226,170,206,1) 25%,rgba(155,148,233,1) 25%);
}`;
let n = 0;
let str1 = '';

function step() {
    setTimeout(() => {
        if (str[n] == '\n') {
            str1 = str1 + '<br>'; //html里的回车
        } else if (str[n] == ' ') {
            str1 = str1 + '&nbsp;'; //html里的空格
        } else {
            str1 = str1 + str[n];
        }

        html.innerHTML = str1;
        style.innerHTML = str.substring(0, n);
        n = n + 1;

        if (n < str.length) {
            step();
        }
        window.scrollTo(0, 99999); //设置滚动条到最底部，自动滚动
        html.scrollTo(0, 99999);
    }, 50);
}
step();