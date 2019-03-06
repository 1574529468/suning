//返回到顶端：给animate动画

	$('.backtop').click(function(){
            $('body,html').animate({
             	scrollTop:0
             },400);
		})

	
//放大镜效果
// 1.鼠标移入显示色块和大盒子
		$('.small').mouseover(function(){
			$('.square').show();
			$('.big').show();
			$('.small').mousemove(function(e){
				// 色块相对小盒子的定位坐标 =鼠标移动坐标-小盒子坐标-色块的宽和高一半
                var l = e.pageX - $('.small').offset().left - $('.square').width()/2;
                var t = e.pageY - $('.small').offset().top -$('.square').height()/2;
				// 3. 判断色块的坐标范围
				var disX = $('.small').width() - $('.square').width();
				var disY = $('.small').height() -$('.square').height();
				if(l<0){
                   l = 0;
				}else if(l>disX){
                   l = disX;
				}
				if(t<0){
                   t = 0;
				}else if(t>disY){
                   t = disY;
				}
				//2. 目标：设置色块坐标
				$('.square').css({left:l,top:t});

				//4.大图的坐标 都是负值
				//  色块的坐标/ 大图的坐标 = 小盒子的宽 / 大图的宽
				$('.big img').css({left:-l*3,top:-t*3});
			})
		}).mouseout(function(){
			$('.square').hide();
			$('.big').hide();
		})
		
		$('.thumb div').click(function(){
			// attr获得和设置属性 src
			$(this).addClass('biankuang').siblings().removeClass('biankuang');
			var imgUrl = $(this).find('img').attr('src');
			//console.log(imgUrl);
			$('.small').find('img').attr('src',imgUrl);
			$('.big').find('img').attr('src',imgUrl);
		})
		
//倒计时
$(function(){
	var hours=2;
var minutes=59;
var seconds=60;
var element=document.getElementById("time").getElementsByTagName("a")[0];
element.textContent=hours+"小时"+minutes+"分钟"+seconds+"秒";
function timer(){
	seconds--;
	if(seconds<0){
		minutes--;
		if(minutes<0){
			hours--;
			if(hours<0&&minutes<0&&seconds<0){
				clearInterval(a); return;}
				else{minutes=59;}
			}
			seconds=59;
		}
		element.textContent=hours+"小时"+minutes+"分钟"+seconds+"秒";
	}
var a=setInterval(timer,1000);

})

//二维码的隐藏和显示
$(function(){
	$('.w4a').mouseover(function(){
		$('.hover').slideDown().stop(true),
		$('.w4a').addClass('w4aa');
	}).mouseout(function(){
		$('.hover').slideUp(),
		$('.w4a').removeClass('w4aa');
	})
})

//图片轮播
$(function(){
	var Imgul=$('.lunbo ul'),
    BtnL=$('.icon-zuo1'),
    BtnR=$('.icon-zuo-copy-copy'),
    anniu=$('.anniu span'),
    a=$('.anniu')
    Box=$('.lunbo');
    var num = 0,  // 图像的索引
             timer,    // 定时器
             len = Imgul.length; // 图像的总个数
   // 1.图像自动切换播放
        timer = setInterval(function(){
             play(num+1);
        },1000);
    //2.鼠标移入时图像播放停止，移出图像自动切换播放
        Imgul.mouseover(function(){
            clearInterval(timer);
        }).mouseout(function(){
            timer=setInterval(function(){
              play(num+1);
            },1000);
        })
         a.mouseover(function(){
            clearInterval(timer);
        }).mouseout(function(){
            timer=setInterval(function(){
              play(num+1);
            },1000);
        })
 // 3.通过数字按钮切换图像
       anniu.click(function(){
           play($(this).index()-1);
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
            Imgul.eq(num).show().siblings().hide();
            anniu.eq(num).addClass('active').siblings().removeClass('active');

        }
})

//热门推荐选项卡
$(function(){
	var Title = document.getElementById('title'),
		    Con =  document.getElementById('con'),
		    Tli = Title.getElementsByTagName('a'),
		    Cli = Con.getElementsByTagName('ul');
		// 1. 给每个 Tli 添加滑过事件
		var len = Tli.length;
        for(var i = 0; i< len; i++ ){
        	// 在每个 Tli[0].index=0 Tli[1].index=1... 将 对应 i 存起来
            Tli[i].index = i;
            Tli[i].onclick = function(){
            	// 2.1 将所有的 Tli 先清除 .active 
            	for(j=0;j<len;j++){
            		Tli[j].className ='';
            		Cli[j].className ='';
            	}
            	// 2.2给当前 一个Tli添加 .active 样式
                this.className ='items';

                // 3 通过 Tli 中对应的索引 找 Cli 对应的内容显示
                //console.log(this.index);
                Cli[this.index].className = 'cur';
            }
        } 
})

//排行榜选项卡
$(function(){
	var Title = document.getElementById('titl'),
		    Con =  document.getElementById('conn'),
		    Tli = Title.getElementsByTagName('li'),
		    Cul = $('.conn ul');
		// 1. 给每个 Tli 添加滑过事件
		var len = Tli.length;
        for(var i = 0; i< len; i++ ){
        	// 在每个 Tli[0].index=0 Tli[1].index=1... 将 对应 i 存起来
            Tli[i].index = i;
            Tli[i].onclick = function(){
            	// 2.1 将所有的 Tli 先清除 .active 
            	for(j=0;j<len;j++){
            		Tli[j].className ='';
            		Cul[j].className ='';
            	}
            	// 2.2给当前 一个Tli添加 .active 样式
                this.className ='click';

                // 3 通过 Tli 中对应的索引 找 Cul 对应的内容显示
                //console.log(this.index);
                Cul[this.index].className = 'conblock';
            }
        } 
})

//商品分类的打开关闭

//菜单挂起
$(function(){
	var Nav = document.querySelector('.nav1');
		// 滚动事件 onscroll
		document.onscroll=function(){
            var scrollT = document.body.scrollTop ||document.documentElement.scrollTop;
            // 当前 scrollT 坐标大于一个范围值时，将菜单挂起，否则不挂起
            if(scrollT > 1320){
                Nav.className = 'nav1 fixed';
            }else{
            	Nav.className = 'nav1';
            }
		}
})

//商品说明二维码的显示和隐藏
$(function(){
	$('.nav1 a').mouseover(function(){
		$('.erwerima').show();
	}).mouseout(function(){
		$('.erwerima').hide();
	})
})

//右面滑块的移动
$(document).scroll(function(){
	var TTop = $(document).scrollTop();
//	console.log(TTop);
	if(TTop<1358){
	  	$('.test').hide();
	  }else if(TTop>11045){
	  	$('.test').hide();
	  }else{
	  		$('.test').show();
	  }
})
  
//二级菜单的显示隐藏

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
    	$(this).children('a').css({background:'#fff',height:'37px'}),
    	$('.erjib').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjib').fadeOut().stop(true,true);
    })
    
     $('.right ul li').eq('1').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'37px'}),
    	$('.erjic').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjic').fadeOut().stop(true,true);
    })
    
    $('.right ul li').eq('2').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'37px'}),
    	$('.erjid').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjid').fadeOut().stop(true,true);
    })
    
     $('.right ul li').eq('4').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'37px'}),
    	$('.erjie').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjie').fadeOut().stop(true,true);
    })
    
    $('.right ul li').eq('7').mousemove(function(){
    	$(this).addClass('erjihover'),
    	$(this).children('a').css({background:'#fff',height:'37px'}),
    	$('.erjif').fadeIn().stop(true,true);
    }).mouseout(function(){
    	$(this).removeClass('erjihover'),
    	$(this).children('a').css({background:'#f5f5f5',height:'35px'}),
    	$('.erjif').fadeOut().stop(true,true);
    })


//商品说明
$('.nav1 li').mouseover(function(){
	$(this).addClass('nav1hover').siblings().removeClass('nav1hover');
})
