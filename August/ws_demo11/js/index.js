$(document).ready(function () {

    //医院详情展开
    var detail_more = $('#detail-more');
    var detail_more_p = detail_more.find('p');
    var detail_more_btn = detail_more.find('.body-more');
    var p_height = detail_more_p.height();
    if (p_height > 66) { //大于3行，显示展开按钮
        detail_more_btn.show();
        detail_more_p.css({
            height: '66px',
            overflow: 'hidden'
        });
    }
    detail_more_btn.click(function () {
        if (detail_more_p.height() == 66) {
            detail_more_p.css('height', 'auto');
            $(this).find('em').addClass('up');
            detail_more_btn.find('span').html('收起');
        } else {
            detail_more_p.css('height', '66px');
            $(this).find('em').removeClass('up');
            detail_more_btn.find('span').html('展开');
        }
    });

    //医院科室展开
    var item_more = $('#item-more');
    var item = $('#item-more').find('.item');
    var item_title = $('#item-more').find('.item-title');
    item_title.click(function () {
        var index = item_title.index(this);
        if (!item_title.eq(index).parent('.item').hasClass('active')) {
            item.removeClass('active');
            item.find('em').removeClass('on');
            item.eq(index).addClass('active');
            item.eq(index).find('em').addClass('on');
        } else {
            item.eq(index).removeClass('active');
            item.find('em').removeClass('on');
        }
    });


    var opts = {
        lines: 10 // The number of lines to draw
        , length: 5 // The length of each line
        , width: 3 // The line thickness
        , radius: 5 // The radius of the inner circle
        , scale: 2.0 // Scales overall size of the spinner
        , corners: 1 // Corner roundness (0..1)
        , color: '#f06' // #rgb or #rrggbb or array of colors
        , opacity: 0.25 // Opacity of the lines
        , rotate: 0 // The rotation offset
        , direction: 1 // 1: clockwise, -1: counterclockwise
        , speed: 1 // Rounds per second
        , trail: 100 // Afterglow percentage
        , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        , zIndex: 2e9 // The z-index (defaults to 2000000000)
        , className: 'spinner' // The CSS class to assign to the spinner
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , shadow: false // Whether to render a shadow
        , hwaccel: false // Whether to use hardware acceleration
        , position: 'absolute' // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target);

});







