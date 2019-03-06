//菜单挂起
$(function(){
	$(document).scroll(function(){
	  if($(this).scrollTop()>30){
	  	$('.header').addClass('fixedheader');
	  }else{
	  	$('.header').removeClass('fixedheader');
	  }
	})
})

$(function(){
	$(document).scroll(function(){
	  if($(this).scrollTop()>40){
	  	$('.warp-top').addClass('fixedheader1');
	  }else{
	  	$('.warp-top').removeClass('fixedheader1');
	  }
	})
})

//导航栏的切换
$(function(){
	$('.warpa li').click(function(){
		$(this).addClass('warphover').siblings().removeClass();
	})
	$('.prev').click(function(){
	$('.warpa li.warphover').prev().addClass('warphover').siblings().removeClass();
    })
    $('.next').click(function(){
	$('.warpa li.warphover').next().addClass('warphover').siblings().removeClass();
    })
})

//瀑布流的调用
$(function(){
		// 当前页
	  var page = 1;
        show();
        function show(){
            var uls = document.querySelectorAll('.warp-list'),
                lis = document.querySelectorAll('.warp-list .t1');
//          console.log(lis);
                $.get('assets/js/page.php','p='+page,function(data){
                    for(var i in data){
                        var li = lis[0].cloneNode(true);
//                      console.log(li);
                        li.style.display='block';
                        li.children[0].children[0].setAttribute('src',data[i]['pic']);
                    /*    li.children[0].children[1].children[0].innerHTML = data[i]['title'];*/
                        var index = i % uls.length;
                        uls[index].appendChild(li);
                    }
//                  console.log(data);
                },'json')
        }
        window.onscroll=function(){
            var zh =document.body.scrollHeight || document.documentElement.scrollHeight,
                kh= document.documentElement.clientHeight,
                hd = document.body.scrollTop || document.documentElement.scrollTop;
                if(zh-kh-hd<=1000){
                    page++;
                    show();
                }

        }
})

//图片的懒加载
//$(function(){
//	 render();
//  $(window).on('scroll',function () {//当页面滚动的时候绑定事件
//      render();
//  })
//  function render(){
//     setTimeout(function(){
//      $('.zsq-palam-list img').each(function () {//遍历所有的img标签
//          if (checkShow($(this)) && !isLoaded($(this)) ){
//              // 需要写一个checkShow函数来判断当前img是否已经出现在了视野中
//              //还需要写一个isLoaded函数判断当前img是否已经被加载过了
//              $(this).attr('src',$(this).attr('data-src')); //符合上述条件之后，再写一个加载函数加载当前img
//          }
//      })
//     },600);
//  }
//  function checkShow($img) { // 传入一个img的jq对象
//      var scrollTop = $(window).scrollTop();  //即页面向上滚动的距离
//      var windowHeight = $(window).height(); // 浏览器自身的高度
//      var offsetTop = $img.offset().top;  //目标标签img相对于document顶部的位置
//
//      if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { //在2个临界状态之间的就为出现在视野中的
//          return true;
//      }
//      return false;
//  }
//  function isLoaded ($img) {
//      return $img.attr('data-src') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了
//  }
//})

//加载页面
//$(function(){  
//		    //为ajax绑定loading_bottom  
//		    $(document).ajaxStart(function(){  
//		        $("#loading").show();//在ajax请求开始的时候启用loading  
//		    }).ajaxStop(function(){  
//		        $('#loading').delay(10000).hide(0);//在ajax请求结束后隐藏loading  
//		    });  
//
//          //ajax调用
//		    $.get('d.php',function(data){
//               console.log(data);
//		    },'json');
//		}); 

//用户交互侧边栏显示隐藏
$(function(){
	$(document).scroll(function(){
	  if($(this).scrollTop()>500){
	  $('.ju-user-sidebar').show();
	  }
	})
	$('.sidebar li').mouseover(function(){
		$(this).children('div').show();
		$(this).children('a').show();
	}).mouseout(function(){
		$(this).children('div').hide();
		$(this).children('a').hide();
	})
	$('.fanhui').click(function(){
		$('body,html').animate({
             	scrollTop:0
             },400);
	})
	
})