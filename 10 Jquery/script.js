(function($) {
    $(function() {
      
      $('div.tab-link').on('click', 'div:not(.link-wrapper-link-active)', function() {
        $(this)
        .closest('div.tab-link').find('div.link__wrapper').removeClass('link-wrapper-link-active').eq($(this).index()).addClass('link-wrapper-link-active')
        .addClass('link-wrapper-active').siblings().removeClass('link-wrapper-active')
        .closest('div.card-wrapper').find('div.main-items').removeClass('active').eq($(this).index()).addClass('active');
      });
      $('a.link-wrapper-link').on('click',function(e){
        //отменяем стандартное действие браузера
        e.preventDefault();
        
      });
    });
    })(jQuery);