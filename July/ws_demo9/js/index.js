$(document).ready(function () {
    //显示模态框
    $(".myModal-btn").click(function () {
        $("#myModal").modal("show");
    });

    //选择套餐
    var $ul = $(".show-buy-package ul");
    var $li = $(".show-buy-package ul").find("li");
    var $arry_ul = $(".show-buy-time ul");
    var $arry_li = $(".show-buy-time ul").find("li");
    var unitPrice = $ul.find('.active').children('em').html();
    $("#total").html(parseInt(unitPrice).toFixed(2));
    $num = $(".show-buy-number ul li.num");
    //选择票价
    $li.click(function () {
        var THIS = $(this);
        if (!THIS.hasClass("active")) {
            //先将所有的样式去掉
            $li.removeClass("active");
            //添加样式
            THIS.addClass("active");
            unitPrice = THIS.children('em').html();
            $("#total").html(setTotal(unitPrice));
        }
    });

    //选择时间
    $arry_li.click(function () {
        var THIS = $(this);
        if (!THIS.hasClass("active")) {
            //先将所有的样式去掉
            $arry_li.removeClass("active");
            //添加样式
            THIS.addClass("active");
        }
    });
    //选择套餐数量
    $minus = $(".show-buy-number ul  li.minus");
    $plus = $(".show-buy-number ul li.plus");
    var t = $num.html();
    $plus.click(function () {
        $num.html(parseInt(++t));
        setTotal(unitPrice);
    });
    $minus.click(function () {
        if (t > 1) {
            $num.html(parseInt(--t));
            setTotal(unitPrice);
        }
    });

    //套餐总价格
    function setTotal(value) {
        var price = value * parseInt(t);
        $("#total").html(price.toFixed(2));
    };

    //选择邮寄方式
    $('.ipt-group-radio input:radio').click(function () {
        if ($(this).val() == '0') {
            $(this).parent().siblings('.area').show();
            $(this).parent().siblings('.address').hide();
        } else {
            $(this).parent().siblings('.area').hide();
            $(this).parent().siblings('.address').show();
        }
    });
});





