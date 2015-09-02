$(document).ready(function () {
    //显示模态框
    $(".myModal-btn").click(function () {
        $("#myModal").modal("show");
    });

    //选择套餐
    var $ul = $(".fruit-buy-package ul");
    var $li = $(".fruit-buy-package ul").find("li");
    var unitPrice = $ul.find('.active').children('em').html();
    $("#total").html(parseFloat(unitPrice).toFixed(2));
    $num = $(".fruit-buy-number ul li.num");
    $li.click(function () {
        var THIS = $(this);
        var index = $li.index(this);
        if (THIS.hasClass("active")) {//点击的时候选中

        } else {
            //先将所有的样式去掉
            $li.find("span.glyphicon-ok").remove();
            $li.removeClass("active");
            $ul.siblings("p").removeClass("selected");
            //添加样式
            var $span = '<span class="glyphicon glyphicon-ok"></span>';
            THIS.append($span);
            THIS.addClass("active");
            $ul.siblings("p").eq(index).addClass("selected");
            unitPrice = THIS.children('em').html();
            $("#total").html(setTotal(unitPrice));
        }
    });

    //选择套餐数量
    $minus = $(".fruit-buy-number ul  li.minus");
    $plus = $(".fruit-buy-number ul li.plus");
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

});







