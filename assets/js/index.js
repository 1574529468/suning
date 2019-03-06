//banner图的隐藏显示
		$(function(){
var b_span=$('.b_span');
var open=$('#open');
b_span.click(function(){
	$('.banner').hide(),
	$('#open').show();
})
open.click(function(){
	$('.banner').show(),
	$('#open').hide();;
})
})
	
//返回到顶端：给animate动画
		$(function(){
	$('.icona').click(function(){
            $('body,html').animate({
             	scrollTop:0
             },400);
		})
})
	

//二级菜单的显示隐藏
  		$(function(){
   	 $('.left ul li').eq('1').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'36px'}),
    	$('.erji').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erji').fadeOut().stop(true,true);
    })
    $('.erji span').click(function(){
    	$('.erji').hide();
    })
    
     $('.left ul li').eq('2').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'36px'}),
    	$('.erjia').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjia').fadeOut().stop(true,true);
    })
    
     $('.left ul li').eq('3').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'36px'}),
    	$('.erjib').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjib').fadeOut().stop(true,true);
    })
    
     $('.right ul li').eq('1').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'36px'}),
    	$('.erjic').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjic').fadeOut().stop(true,true);
    })
    
    $('.right ul li').eq('2').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'36px'}),
    	$('.erjid').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjid').fadeOut().stop(true,true);
    })
    
     $('.right ul li').eq('4').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'36px'}),
    	$('.erjie').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjie').fadeOut().stop(true,true);
    })
    
    $('.right ul li').eq('7').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'36px'}),
    	$('.erjif').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjif').fadeOut().stop(true,true);
    })

   })
   
//main轮播图
		$(function(){
	var ImgLi = $('.carousel-img li'), 
             BtnL =  $('.carousel-left'),
             BtnR =  $('.carousel-right'),
             NumLi = $('.carousel-num li'),
             Box =   $('.lunboa');
         var num = 0,  // 图像的索引
             timer,    // 定时器
             len = ImgLi.length; // 图像的总个数
        // 1.图像自动切换播放
        timer = setInterval(function(){
             play(num+1);
        },4000);     
        //2.鼠标移入时图像播放停止，移出图像自动切换播放
        //  并移入显示左右按钮,移出隐藏左右按钮
        Box.mouseover(function(){
           BtnL.show();
           BtnR.show();
            clearInterval(timer);
        }).mouseout(function(){
            BtnL.hide();
            BtnR.hide();
            timer=setInterval(function(){
              play(num+1);
            },4000);
        })  
       // 3.通过数字按钮切换图像
       NumLi.mouseover(function(){
           play($(this).index());
       })
       // 4. 通过点击左右按钮切换图像
      BtnL.click(function(){
           play(num-1);
      })
      BtnR.click(function(){
           play(num+1);
      })
       // 换图函数
        function play(n){
          // (3) 判断 图像循环播放
          if(n>len-1){
            n = 0;
          }
          if(n<0){
            n = len-1;
          }
            //(1) 通过num索引显示对应的图，并且其他图隐藏（隐藏所有图）
            //(2) 通过num索引显示对应数字按，并且其他数字按钮隐藏
            // 将 自增的索引值 赋值给全局变量 num
            num = n;
            ImgLi.eq(num).fadeIn(500).siblings().hide();
            NumLi.eq(num).css('backgroundColor','#f60').siblings().css('backgroundColor','#ccc');

        }
})
   
//main 新闻的滚动效果

		$(function() {
		var $this = $(".toutiao");
		var scrollTimer;
		$this.hover(function() {
		clearInterval(scrollTimer);
		}, function() {
		scrollTimer = setInterval(function() {
		scrollNews($this);
		}, 2000);
		}).trigger("mouseleave");
		function scrollNews(obj) {
		var $self = obj.find("ul");
		var lineHeight = $self.find("li:first").height(); 
		$self.animate({
		"marginTop": -lineHeight + "px"
		}, 600, function() {
		$self.css({
		marginTop: 0
		}).find("li:first").appendTo($self);
		})
		}
})
//苏宁直播图片的转换显示
		$(function(){
	var  TimgLi=$('.timg li'),
	     left=$('.le'),
	     right=$('.ri'),
	     Carouse=$('.carouse li'),
	     Bon=$('.bon');
	var len=Carouse.length;
	var len1=TimgLi.length;
	     Bon.mouseover(function(){
	     	left.show();
	     	right.show();
	     }).mouseout(function(){
	     	left.hide();
	     	right.hide();
	     })
	 Carouse.mouseover(function(){
	 	$(this).children('div').removeClass('black');
	 var suoyin=$(this).index();
	 TimgLi.eq(suoyin).addClass('tjeblock').siblings().removeClass('tjeblock');
	 }).mouseout(function(){
	 	$(this).children('div').addClass('black');
	 })
	 right.click(function(){
	 	Carouse.eq(0).hide();
	 	Carouse.eq(1).hide();
	 	Carouse.eq(2).hide();
	 	Carouse.eq(3).show();
	 	Carouse.eq(4).show();
	 	Carouse.eq(5).show();
	 });
	 left.click(function(){
	 	Carouse.eq(3).hide();
	 	Carouse.eq(4).hide();
	 	Carouse.eq(5).hide();
	 	Carouse.eq(0).show();
	 	Carouse.eq(1).show();
	 	Carouse.eq(2).show();
	 })
})

//楼层的实现
$(function(){
	$('.backtop').click(function(){
		$('body,html').animate({
			scrollTop:0
		},500);
	})
	 //楼层. 通过点击切换楼层位置
    	$('.tbar li').eq(0).click(function(){
    		w($('.l1'),$(this));
    	})
    	$('.tbar li').eq(1).click(function(){
    		w($('.l2'),$(this));
    	})
    	$('.tbar li').eq(2).click(function(){
    		w($('.l3'),$(this));
    	})
    	$('.tbar li').eq(3).click(function(){
    		w($('.l4'),$(this));
    	})
    	$('.tbar li').eq(4).click(function(){
    		w($('.l5'),$(this));
    	})
    	$('.tbar li').eq(5).click(function(){
    		w($('.l6'),$(this));
    	})
    	$('.tbar li').eq(6).click(function(){
    		w($('.l7'),$(this));
    	})
    	$('.tbar li').eq(7).click(function(){
    		w($('.l8'),$(this));
    	})
    	$('.tbar li').eq(8).click(function(){
    		w($('.l9'),$(this));
    	})
    	$('.tbar li').eq(9).click(function(){
    		w($('.cainilove'),$(this));
    	})
    	
    	function w (q,b){
    		b.addClass('active').siblings().removeClass('active');
    		var t =  q.offset().top 
    		$('body,html').animate({
    			scrollTop:t
    		})
    	}
    	
    	if($(window).scrollTop() > 2670){
                $('.tbar').css('display','block');
			}else{
                $('.tbar').css('display','none');
			}

            $(window).scroll(function() {
                
            if($(window).scrollTop()>=$('.l1').offset().top && $(window).scrollTop()<=$('.l2').offset().top){
                $('.tbar li').eq(0).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l2').offset().top && $(window).scrollTop()<=$('.l3').offset().top){
                $('.tbar li').eq(1).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l3').offset().top && $(window).scrollTop()<=$('.l4').offset().top){
                $('.tbar li').eq(2).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l4').offset().top && $(window).scrollTop()<=$('.l5').offset().top){
                $('.tbar li').eq(3).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l5').offset().top && $(window).scrollTop()<=$('.l6').offset().top){
                $('.tbar li').eq(4).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l6').offset().top && $(window).scrollTop()<=$('.l7').offset().top){
                $('.tbar li').eq(5).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l7').offset().top && $(window).scrollTop()<=$('.l8').offset().top){
                $('.tbar li').eq(6).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l8').offset().top && $(window).scrollTop()<=$('.l9').offset().top){
             	$('.tbar li').eq(7).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.l9').offset().top && $(window).scrollTop()<=$('.cainilove').offset().top){
                $('.tbar li').eq(8).addClass('active').siblings().removeClass('active');
            }else if($(window).scrollTop()>=$('.cainilove').offset().top){
                $('.tbar li').eq(9).addClass('active').siblings().removeClass('active');
            }
    	
    	if($(window).scrollTop()>=2610){
              $('.tbar').fadeIn(500);
			}else{
              $('.tbar').fadeOut(500);
			}
	});
})
//$(function(){
//	$('.backtop').click(function(){
//		$('body,html').animate({
//			scrollTop:0
//		},500);
//	})
//	
//	$('.tbar>li').click(function(){
//		var index=$(this).index();
//		console.log(index);
//	})
//	$('.tbar li').click(function(){
//		var index=$(this).index();
//		var top=$('.layer li').eq(index).offset().top;
//		$('body,html').animate({
//			scrollTop:top
//		},500);
//	})
//
//	$(window).scroll(function(){
//		var scrollTop;
//		$('.layer li').each(function(){
//			var layerTop=$(this).offset().top;
//			scrollTop=$(document).scrollTop();
//			console.log(layerTop - scrollTop);
//			if(layerTop-scrollTop<100){
//			$('.tbar li').eq($(this).index()).addClass('active').siblings().removeClass('active');
//			}
//		})
//		if(scrollTop >=2610){
//              $('.tbar').fadeIn(500);
//			}else{
//              $('.tbar').fadeOut(500);
//			}
//	})
//})
	


//菜单挂起
		$(function(){
	$(document).scroll(function(){
	  if($(this).scrollTop()>1500){
	  	$('.caidan').fadeIn();
	  }else{
	  	$('.caidan').fadeOut();
	  }
	})
})



//苏宁抢购的选项卡
		$(function(){
	$('.t-list li').mouseover(function(){
		var z=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.tab-content ul').removeClass('contershow');
		$('.tab-content ul').eq(z).addClass('contershow');
	})
})
