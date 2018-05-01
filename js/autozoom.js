
$(function () {
    if (setAutoZoom) {
        //alert("hello!world!");
        zoom();
        /*
        document.addEventListener("fullscreenchange", zoom);
        document.addEventListener("mozfullscreenchange", zoom);
        document.addEventListener("webkitfullscreenchange", zoom);
        document.addEventListener("msfullscreenchange", zoom);
        */
        //这段全屏监听代码没用了
        };
    });

$(window).resize(function(){
    if (setAutoZoom) {
        zoom();
        }
    });

//zoom函数用于计算与调整
function zoom() {
    var winH = $(window).height();
    var winW = $(window).width();
    //获取窗口长宽，同样适用于F11全屏

    var winH2 = winH/650
    var winW2 = winW/650
    //上面两个数字650反复调试得到
    //直接通过除法获得与标准尺寸的比例

    console.log("H=%d W=%d",winH,winW);
    console.log("H2=%f W2=%f",winH2,winW2);
    if (winH2<1 || winW2<1)
        {
        if (winH2<winW2) 
            {
            $("body").css("transform","scale("+winH2+")");
            }
        else
            {
            $("body").css("transform","scale("+winW2+")");
            }
        //按比例缩放
        }
    else 
        {
        $("body").css("transform","scale(1)");
        //处理忽然变全屏事件
        }
    };