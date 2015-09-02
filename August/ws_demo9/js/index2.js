$(document).ready(function () {
    //显示模态框
    $(".myModal-btn").click(function () {
        $("#myModal").modal("show");
    });

    //选择套餐
    var $ul = $(".fruit-buy-package ul");
    var $li = $(".fruit-buy-package ul").find("li");
    var unitPrice = $ul.find('.active').children('em.new').html();
    var oldPrice = $ul.find('.active').children('em.old').html();
    $("#total-new").find('em').html(parseFloat(unitPrice).toFixed(2));
    $("#total-old").find('em').html(parseFloat(oldPrice).toFixed(2));

    $li.click(function () {
        var THIS = $(this);
        var index = $li.index(this);
        if (!THIS.hasClass("active")) {
            //先将所有的样式去掉
            $li.find("span.glyphicon-ok").remove();
            $li.removeClass("active");
            //添加样式
            var $span = '<span class="glyphicon glyphicon-ok"></span>';
            THIS.append($span);
            THIS.addClass("active");
            unitPrice = THIS.children('em.new').html();
            oldPrice = THIS.children('em.old').html();
            $("#total-new").find('em').html(setTotal($("#total-new"), unitPrice));
            $("#total-old").find('em').html(setTotal($("#total-old"), oldPrice));
        }
        switch (index) {
            case 1:
                $ul.next('.selected').html('套餐一说明：穹窿山门票50元/张（原价80元）+ 黄桃79.9元/箱（原价100元）');
                break;
            case 2:
                $ul.next('.selected').html('套餐二说明：万鸟园门票30元/张（原价60元）+ 黄桃79.9元/箱（原价100元）');
                break;
            case 3:
                $ul.next('.selected').html('套餐三说明：孙武文化园门票40元/张（原价80元）+ 黄桃79.9元/箱（原价100元）');
                break;
            case 4:
                $ul.next('.selected').html('穹窿山门票单买说明：单独售价65元/张（原价80元）');
                break;
            case 5:
                $ul.next('.selected').html('万鸟园门票单买说明：单独售价40元/张（原价60元）');
                break;
            case 6:
                $ul.next('.selected').html('孙武文化园门票单买说明：单独售价50元/张（原价80元）');
                break;
            default :
                $ul.next('.selected').html('黄桃单品说明：单果4-5两，12只/箱 79.9元（原价100元）');
        }
    });

    //选择套餐数量
    $minus = $(".fruit-buy-number ul  li.minus");
    $plus = $(".fruit-buy-number ul li.plus");
    $num = $(".fruit-buy-number ul li.num");
    var t = $num.html();
    $plus.click(function () {
        $num.html(parseInt(++t));
        setTotal($("#total-new"), unitPrice);
        setTotal($("#total-old"), oldPrice);
    });
    $minus.click(function () {
        if (t > 1) {
            $num.html(parseInt(--t));
            setTotal($("#total-new"), unitPrice);
            setTotal($("#total-old"), oldPrice);
        }
    });

    //套餐总价格
    function setTotal(current, value) {
        var price = value * parseInt(t);
        current.find('em').html(price.toFixed(2));
    };

});








