/* jshint devel:true */

(function($){
      'use strict';
      $(window).scroll(function () {
        var $nScrollTop = $(this).scrollTop();//滚动条距离窗口顶部的高度
        // console.log($nScrollTop);
        if ($nScrollTop >= 140)//若大于等于140
        {
          $('.navbar-brand').text('"Hello, "Reader!');
           if ($nScrollTop >= 400)//若大于等于140
          {
            $('#section-wipes .panel-one img').addClass('bounceInDown');
          }else {
            $('#section-wipes .panel-one img').removeClass('bounceInDown');
          }
        }
        else {
          $('.navbar-brand').text('sofichael@126.com');
        }
      });
})(jQuery);

