---
title: '垂直水平居中'
lang: zh-CN
---

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>垂直水平居中</title>
    <style type="text/css">
        *{margin: 0;padding: 0;}
        .parents{height: 200px;width: 100%;}
        .parents:nth-child(odd){background-color: #ccc;}
        .child{width: 180px;height: 80px;background-color: #aaa;box-shadow: 0 0 10px rgba(0,0,0,.8);border:1px solid #ccc;border-radius: 5px;padding: 10px;}
        .parentsBox1{
            position: relative;
        }
        .childBox1{
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -100px;
        }
        .parentsBox2{
            position: relative;
        }
        .childBox2{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
        .parentsBox3{
            position: relative;
        }
        .childBox3{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        .parentsBox4{
            display: table;
        }
        .childBox4{
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }
        .parentsBox5{
            display: flex;
            justify-content: center;
            align-items:center;
        }
        .childBox5{
            
        }
        .parentsBox6{
            text-align:center;
        }
        .childBox6{
            display:inline-block;
            vertical-align:middle;
            text-align:left;
        }
        .vamb{
            display:inline-block;
            height:100%;
            vertical-align:middle;
        }
    </style>
</head>
<body>
    <div class="parents parentsBox1">
        <div class="child childBox1">定位和需要定位的元素的margin减去宽高的一半</div>
    </div>
    <div class="parents parentsBox2">
        <div class="child childBox2">定位和margin:auto</div>
    </div>
    <div class="parents parentsBox3">
        <div class="child childBox3">定位和transfrom</div>
    </div>
    <div class="parents parentsBox4">
        <div class="child childBox4">diplay：table-cell</div>
    </div>
    <div class="parents parentsBox5">
        <div class="child childBox5">flexBox居中</div>
    </div>
    <div class="parents parentsBox6">
        <b class="vamb"></b>
        <div class="child childBox6">
            宽高不定<br>
            垂直水平居中
        </div>
    </div>
</body>
</html>
```