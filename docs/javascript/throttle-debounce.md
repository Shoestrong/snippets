---
title: 节流与去抖
lang: zh-CN
---

```
//节流
funtion throttle(func, wait) {　　
    var lastTime = 0,
        timeout;　　
    return funtion() {　　　　
        var context = this,
            args = arguments,
            delay = wait || 100,
            now = new Date().getTime();　　　　
        if (now - lastTime <= delay) {　　　　　　
            return;　　　　
        }　　　　
        lastTime = now;
        clearTimeout(timeout);　　
        timeout = setTimeout(function() {
            timeout = null;
            func.apply(context, args);
        }, delay)　　
    }
}
// 去抖
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this,
            args = arguments,
            delay = wait || 250;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            func.apply(context, args);
        }, delay);
    };
}


// Demo
//我们先来个节流,每秒输出一次
window.onscroll=function(){
    if(window.onScrollTag == undefined){
        window.onScrollTag=true;
        console.log(new Date());
        setTimeout(function(){
            window.onScrollTag=undefined;
        },1000);
    }
}//先触发
window.onscroll=function(){
    if(window.onScrollTag == undefined){
        window.onScrollTag=setTimeout(function(){
            window.onScrollTag=undefined;
            console.log(new Date());
        },1000);
    }
}//后触发
//从上面的代码可以看出来，我们在一个事件执行的时候就把标记改成不可用。一秒后才可以再次触发操作。
//我们在尝试一下去抖
window.onscroll=function(){
    if(window.onScrollTag != undefined){
        clearTimeout(window.onScrollTag);
    }
    window.onScrollTag=setTimeout(function(){
        console.log(new Date());
    },1000);
}//消抖，消除抖动，感觉这个更好听
```
