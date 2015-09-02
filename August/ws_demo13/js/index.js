$(document).ready(function () {

    //优惠券使用规则
    $(".rules").click(function () {
        $("#myModal").modal("show");
    });

    //点击领取优惠券
    $(".get-coupon").click(function () {
        $("#myModal2").modal("show");
    });

    //延迟加载
    //var wait_load = $('.item');
    ////wait_load.fadeOut();
    //$(window).on('load', _wait_load);
    //$(window).on('scroll', _wait_load);
    ////$(window).on('resize', _wait_load);
    //
    //function _wait_load() {
    //    setTimeout(function () {
    //        for (var i = 0; i < 5; i++) {
    //            var _this = wait_load.get(i);
    //            var html = '';
    //            if ($(window).height() + $(window).scrollTop() >= $(_this).offset().top) {
    //                html += '<div class="item">' +
    //                '            <div class="content clearfix">' +
    //                '                <div class="fl clearfix">' +
    //                '                    <div class="logo"><img src="img/logo.png" alt="优惠券"></div>' +
    //                '                    <div class="info">' +
    //                '                        <p class="title"><strong>星巴克</strong>(28店通用)</p>' +
    //                '                        <p class="discount"><strong>8.8</strong> 折</p>' +
    //                '                    </div>' +
    //                '                </div>' +
    //                '                <div class="fr">' +
    //                '                    <div class="js-coupon get-coupon">点击领取</div>' +
    //                '                </div>' +
    //                '            </div>' +
    //                '            <div class="time-out">有效期：2015.08.01 - 2015.10.30</div>' +
    //                '        </div>';
    //                $('.coupon-body').append(html);
    //            }
    //        }
    //    }, 100);
    //}

    //$('.list').DataLazyLoad({
    //    page: 1,
    //    offset: 0,
    //    load: function (page, unLocked) {
    //        var html = '';
    //        var max = 5;
    //        //Generate the data
    //        for (var i = 0; i < 1; i++) {
    //            html += '<div class="item">' +
    //            '            <div class="content clearfix">' +
    //            '                <div class="fl clearfix">' +
    //            '                    <div class="logo"><img src="img/logo.png" alt="优惠券"></div>' +
    //            '                    <div class="info">' +
    //            '                        <p class="title"><strong>星巴克</strong>(28店通用)</p>' +
    //            '                        <p class="discount"><strong>8.8</strong> 折</p>' +
    //            '                    </div>' +
    //            '                </div>' +
    //            '                <div class="fr">' +
    //            '                    <div class="js-coupon get-coupon">点击领取</div>' +
    //            '                </div>' +
    //            '            </div>' +
    //            '            <div class="time-out">有效期：2015.08.01 - 2015.10.30</div>' +
    //            '        </div>';
    //        }
    //        $(html).appendTo('.list');
    //        //Check whether to end
    //        page = page >= max ? 0 : page + 1;
    //        //You must call after loading the data, To prevent repeated load, The first parameter to the next page, No page is 0
    //        unLocked(page);
    //        if (page == 0) {
    //            $("<div class='item-end'>数据已全部加载完毕!</div>").appendTo('.list');
    //        }
    //    }
    //});
    //datalazyload.init({
    //    mod: 'auto'
    //});
    //datalazyload.addCallBack($('.coupon-body'), function (event) {
    //
    //    alert('');
    //});
});







