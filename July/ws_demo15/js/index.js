$(document).ready(function () {
    //显示模态框
    $(".submit-bargain").click(function () {
        $("#myModal").modal("show");
    });

    $(".submit-refresh").click(function () {
        window.location.reload(true);
        window.location.hash = "#price";
    });

    //倒计时,活动时间2015年7月24日上午10:00
    function leftTime() {
        var nowtime = new Date();
        var endtime = new Date('2015/7/24,10:00:00');
        var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);    //得到总共还剩多少秒
        var d = parseInt(lefttime / (24 * 60 * 60));                            //得到还剩多少天
        var h = parseInt(lefttime / (60 * 60) % 24);                            //得到还剩多少小时
        var m = parseInt(lefttime / 60 % 60);                                   //得到还剩多少分钟
        var s = parseInt(lefttime % 60);                                        //得到还剩多少秒
        m = checkTime(m);
        s = checkTime(s);
        function checkTime(i) {
            if (i < 10) {
                i = '0' + i;
            }
            return i;
        }

        var $submit = $('.sky-submit');
        if (lefttime > 0) {
            $submit.find('p').html('离活动开始还剩: ' + d + '天' + h + '小时' + m + '分钟' + s + '秒');
            var t = setTimeout(leftTime, 500);
        } else {
            //倒计时结束后，显示我要杀价和立即抢购按钮
            $submit.find('.sky-group').show();
            $submit.find('p').hide();
            //先验证为手机注册用户，我要杀价只能杀一次（减5元），杀完显示刷新价格按钮
            $submit.find('.submit-bargain').one('click', function () {
                $(this).hide();
                $(this).next('.submit-refresh').show();
                //价格减5元
                var text = $submit.siblings('.sky-price').find('.price').find('span').html();
                $submit.siblings('.sky-price').find('.price').find('span').html(text - 5);
            });
        }
    }

    leftTime();

});
