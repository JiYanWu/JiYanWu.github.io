$(document).ready(function(){
    //header下拉選單
    $(".had_sub_menu").bind("click", function(e){
      $(".menu-hover").each(function(){
        $(this).hide();
      });
      $(this).closest("li").find(".menu-hover").show();
      return false;

    });
    $(".had_sub_menu").hover(function(){
        $(".menu-hover").hide();
        $(this).closest("li").find(".menu-hover").show();
    });
    $(".menu-hover").hover(function(){},function(){$(".menu-hover").hide();});


    $(function() {
        // 先取得必要的元素並用 jQuery 包裝
        // 再來取得 $block 的高度及設定動畫時間
        var $block = $('#abgneBlock'),
                $slides = $('ul.list', $block),
                _width = $block.width(),
                $li = $('li', $slides),
                _animateSpeed = 600;

        // 產生 li 選項
        var _str = '';
        for (var i = 0, j = $li.length; i < j; i++) {
            // 每一個 li 都有自己的 className = playerControl_號碼
            _str += '<li class="playerControl_' + (i + 1) + '"></li>';
        }

        // 產生 ul 並把 li 選項加到其中
        // 並幫 li 加上 mouseover 事件
        $('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent()).css('left', function() {
            // 把 .playerControl 移到置中的位置
            return (_width - $(this).width()) / 2;
        }).find('li').mouseover(function() {
            var $this = $(this);
            $this.addClass('current').siblings('.current').removeClass('current');

            // 移動位置到相對應的號碼
            $slides.stop().animate({
                left: _width * $this.prevAll().length * -1
            }, _animateSpeed);

            return false;
        }).eq(0).trigger('mouseover');
    });

});

$(function(){

	$("#MENU").on("click",OPEN);

	function OPEN(){

		$("#SUBMENU").slideToggle(400);

		$("article").on('touchstart click',CLOSE);

	}

	function CLOSE(){

		$("#SUBMENU").hide(100);

		$("article").off('touchstart click');

	}

});

$(function(){

	$("#MENU2").on("click",OPEN);

	function OPEN(){

		$("#SUBMENU2").slideToggle(300);
		$("#SUBMENU3").hide(100);

		$("article").on('touchstart click',CLOSE);

	}

	function CLOSE(){

		$("#SUBMENU2").hide(100);

		$("article").off('touchstart click');

	}

});

$(function(){

	$("#MENU3").on("click",OPEN);

	function OPEN(){

		$("#SUBMENU3").slideToggle(300);
		$("#SUBMENU2").hide(100);

		$("article").on('touchstart click',CLOSE);

	}

	function CLOSE(){

		$("#SUBMENU3").hide(100);

		$("article").off('touchstart click');

	}

});

$(function(){

	$("#MENU4").on("click",OPEN);

	function OPEN(){

		$("#SUBMENU4").slideToggle(300);
		$("#SUBMENU5").hide(100);

		$("article").on('touchstart click',CLOSE);

	}

	function CLOSE(){

		$("#SUBMENU4").hide(100);

		$("article").off('touchstart click');

	}

});

$(function(){

	$("#MENU5").on("click",OPEN);

	function OPEN(){

		$("#SUBMENU5").slideToggle(300);
		$("#SUBMENU4").hide(100);

		$("article").on('touchstart click',CLOSE);

	}

	function CLOSE(){

		$("#SUBMENU5").hide(100);

		$("article").off('touchstart click');

	}

});

<!--
$(function(){
	// 預設標題區塊 .abgne_tip_gallery_block .caption 的 top
	var _titleHeight = 40;
	$('.mainPic01').each(function(){
		// 先取得區塊的高及標題區塊等資料
		var $this = $(this),
			_height = $this.height(),
			$caption = $('.caption', $this),
			_captionHeight = $caption.outerHeight(true),
			_speed = 200;

		// 當滑鼠移動到區塊上時
		$this.hover(function(){
			// 讓 $caption 往上移動
			$caption.stop().animate({
				top: _height - _captionHeight
			}, _speed);
		}, function(){
			// 讓 $caption 移回原位
			$caption.stop().animate({
				top: _height - _titleHeight
			}, _speed);
		});
	});
});
$(function(){
	// 預設標題區塊 .abgne_tip_gallery_block .caption 的 top
	var _titleHeight = 26;
	$('.abgnee_tip_gallery_block').each(function(){
		// 先取得區塊的高及標題區塊等資料
		var $this = $(this),
			_height = $this.height(),
			$caption = $('.caption', $this),
			_captionHeight = $caption.outerHeight(true),
			_speed = 200;

		// 當滑鼠移動到區塊上時
		$this.hover(function(){
			// 讓 $caption 往上移動
			$caption.stop().animate({
				top: _height - _captionHeight
			}, _speed);
		}, function(){
			// 讓 $caption 移回原位
			$caption.stop().animate({
				top: _height - _titleHeight
			}, _speed);
		});
	});
});
//-->

$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於88時，關閉或開啟區塊
　　if($this_Top < 46){
　　　$('#top-bar').stop().css({top:"-90px"});//負的值要大於欲顯示出來的區塊高度
　　　}
　　　　if($this_Top > 46){
　　　　$('#top-bar').stop().css({top:"0px"});
　　　 }
　　}).scroll();
　});
});
