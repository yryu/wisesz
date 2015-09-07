$(document).ready(function () {
    //显示模态框
    $(".myModal-btn").click(function () {
        $("#myModal").modal("show");
    });

    //检测结果页面tab切换
    var $content1 = $('#result-nav').next().find('.result-body-01');
    var $content2 = $('#result-nav').next().find('.result-body-02');
    var $content3 = $('#result-nav').next().find('.result-body-03');
    var $li = $('#result-nav').find('li');
    $li.click(function () {
        var index = $(this).index();
        $li.removeClass('active');
        $(this).addClass('active');
        switch (index) {
            case 0:
                $content1.show();
                $content2.hide();
                $content3.hide();
                break;
            case 1:
                $content1.hide();
                $content2.show();
                $content3.hide();
                break;
            default:
                $content1.hide();
                $content2.hide();
                $content3.show();
                break;
        }
    });


    //canvas 画布颜色
    var arr = ['#36bc9b', '#ff9502', '#007cfe', '#ff3c30', '#5757d6'];
    $('.process').process(arr);

    var $bodyTop = $('#js-index-body');
    var indexTop = $bodyTop.prev('.index-header').height();
    $bodyTop.css('top', indexTop + 'px');

});







