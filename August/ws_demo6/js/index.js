$(document).ready(function () {
    //显示模态框
    $('.myModal-btn').click(function () {
        $('#myModal').modal('show');
    });

    //选择套餐
    var $price = $('.child-buy-price');
    var $li = $price.find('li');   //价格一,儿童剧门票的票价
    var $price2 = $price.next('.child-buy-price2');
    var $li2 = $price2.find("li"); //价格二,亲子采摘游的票价
    var $li_type = $('.child-buy-type').find('li'); //类型
    var $li_time = $('.child-buy-time').find('li'); //日期
    var unitPrice = '60';
    $("#total").html(parseInt(unitPrice).toFixed(2));
    //类型
    $li_type.click(function () {
        var THIS = $(this);
        var index = $li_type.index(this);
        if (!THIS.hasClass("active")) {//点击的时候选中
            //先将所有的样式去掉
            $li_type.find("span.glyphicon-ok").remove();
            $li_type.removeClass("active");
            //添加样式
            var $span = '<span class="glyphicon glyphicon-ok"></span>';
            THIS.append($span);
            THIS.addClass("active");
        }
        if (index == 0) {
            unitPrice = $price.find('.active').children('em').html();
            setTotal(unitPrice);
            $price.show();
            $price2.hide();
        } else {
            unitPrice = $price2.find('.active').children('em').html();
            setTotal(unitPrice);
            $price2.show();
            $price.hide();
        }
    });
    //日期
    $li_time.click(function () {
        var THIS = $(this);
        var index = $li_time.index(this);
        if (!THIS.hasClass("active")) {//点击的时候选中
            //先将所有的样式去掉
            $li_time.find("span.glyphicon-ok").remove();
            $li_time.removeClass("active");
            //添加样式
            var $span = '<span class="glyphicon glyphicon-ok"></span>';
            THIS.append($span);
            THIS.addClass("active");
        }
    });
    //票价
    $li.click(function () {
        var THIS = $(this);
        var index = $li.index(this);
        if (!THIS.hasClass("active")) { //点击的时候选中
            //先将所有的样式去掉
            $li.find("span.glyphicon-ok").remove();
            $li.removeClass("active");
            //添加样式
            var $span = '<span class="glyphicon glyphicon-ok"></span>';
            THIS.append($span);
            THIS.addClass("active");
            unitPrice = THIS.children('em').html();
            $("#total").html(setTotal(unitPrice));
        }
    });

    //选择套餐数量
    $num = $(".child-buy-number ul li.num");
    $minus = $(".child-buy-number ul  li.minus");
    $plus = $(".child-buy-number ul li.plus");
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
            $(this).parent().siblings('.tips').hide();
        } else {
            $(this).parent().siblings('.area').hide();
            $(this).parent().siblings('.tips').show();
        }
    });

});







