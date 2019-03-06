//二维码登录切换
 var rightL=$('.rightL'),
 rightM=$('.rightM'),
 A=$('.a'),
 B=$('.b');
 
 A.click(function(){
 	rightL.show();
 	rightM.hide();
 	A.addClass('active').siblings().removeClass('active');
 })
 B.click(function(){
 	rightL.hide();
 	rightM.show();
 	B.addClass('active').siblings().removeClass('active');
 })
//二维码移动
var rightLa=$('.rightLa');
rightLa.mouseover(function(){
	$('.img1').stop().animate({marginLeft:'40px'});
	$('.img2').show();
})
rightLa.mouseout(function(){
	$('.img1').stop().animate({marginLeft:'110px'});
	$('.img2').hide();
})
//判断用户是否被占用  未完成
//var Input = document.getElementsByClassName('user'),
//		    Span = document.querySelector('span');
//		Input.onblur = function(){
//			// 判断 user中value 值是否被占用
//			var user = this.value;
//          var xhr = new XMLHttpRequest();
//          xhr.open('post','login.php',true);
//          xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//          xhr.send('username='+user);
//          xhr.onreadystatechange = function(){
//          	if(xhr.readyState==4 && xhr.status==200){
//          		 //alert(xhr.responseText);
//                   Span.innerHTML = xhr.responseText;
//          	}
//          }
//		}
//用户名的小错号

	$('input').on('input',function(){
		$(this).next('span').show();
		if($(this).val()==''){
			$(this).next('span').hide();
		}
	})
	$('input').blur(function(){
		if($(this).val().length!=0){
			$(this).next('span').show()
		}else{
			$(this).next('span').hide();
		}
	})
	$('span').click(function(){
		$(this).prevAll('input').val(''),
		$('.cuohao').hide();
	})

//登录时判断用户是否存在

$('button').click(function(e){
	var user=$('input[name="user"]').val();
	var pass=$('input[name="password"]').val();
//	console.log(pass);
	if(user ==''||user==' '){
		$('.rightTop').css({visibility:'visible'}).find('a').text('请输入用户名/邮箱/手机号');
		e.preventDefault();
	}else if(pass ==''||pass==' '){
		$('.rightTop').css({visibility:'visible'}).find('a').text('请输入密码');
		e.preventDefault();
	}else if(user!='admin'){
		$('.rightTop').css({visibility:'visible'}).find('a').text('账号错误');
		e.preventDefault();
	}else if(pass!='123'){
		$('.rightTop').css({visibility:'visible'}).find('a').text('密码错误');
		e.preventDefault();
	}else{window.open('index.html')}
})
