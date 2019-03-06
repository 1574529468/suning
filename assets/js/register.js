$('.f1').blur(
	//验证手机号码
  function(){ 
    var phone = document.getElementById('phone').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
        $('.mobile_prompt').html("手机号码不正确，请重新输入");  
        return false; 
    }else{
    	$('.mobile_prompt').html("验证通过"),
    	$('.mobile_prompt').css({color:'#0f0'});
    }}
)
$('.input2').blur(
	//验证验证码
  function(){ 
    var phone1 = document.getElementById('phone1').value;
    if(!(/^[0-9]{6}$/.test(phone1))){ 
        $('.mobile_prompt1').html("请输入六位数字验证码");  
        return false; 
    }else{
    	$('.mobile_prompt1').html("验证通过"),
    	$('.mobile_prompt1').css({color:'#0f0'});
    }}
)
//验证码的倒计时
$(function(){
	var Box = document.getElementById('box'),
		    timer; // 获得内容中初始值
		
		Box.onclick = function(){
			var num = 60;
			// 1. 添加定时器每n毫秒,改变一次内容
			timer = setInterval(function(){
				num--;
				// 2.目标通过点击按钮 更 box 中的内容
			    Box.innerHTML = num+'s';
			    // 3. 判断如果 num 到 0 就清除定时器（停止）
				if(num == 0){
					clearInterval(timer);
					Box.innerHTML = '重新发送';
				}
			},100);
			
		}
})
//密码的设置
  $(function(){
  	$('#mm-pwd').focus(function(){
  		$('.text').show();
  	}).blur(function(){
  		$('.text').hide();
  	})
  })
//判断密码的强弱
function show(){
        var a=document.getElementById("mm-pwd").value;       
  if(a.length==0){
        document.getElementById("mm-pd").innerHTML="密码不能为空！"; 
        document.getElementById("lv1").style.borderTopColor="gainsboro";
	    document.getElementById("lv2").style.borderTopColor="gainsboro";
	    document.getElementById("lv3").style.borderTopColor="gainsboro";
    }
    else if(a.length<6){
        document.getElementById("mm-pd").innerHTML="密码长度小于6个字符!";    
    }   
    else if(a.length>=6&&a.length<=16){
        document.getElementById("mm-pd").innerHTML="";
        var reg=/^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/;    //全是数字或全是字母     6-16个字符
        var reg1=/^[A-Za-z0-9]{6,16}$/;     //数字、26个英文字母      6-16个字符
        var reg2=/^\w{6,16}$/;           // 由数字、26个英文字母或者下划线组成的字符串    6-16个字符
            if(a.match(reg)){
                 document.getElementById("lv1").style.borderTopColor="red";    
                 }
            else if(a.match(reg1)){
                document.getElementById("lv1").style.borderTopColor="red";    
                document.getElementById("lv2").style.borderTopColor="yellow";    
            }
            else if(a.match(reg2)){
                document.getElementById("lv1").style.borderTopColor="red";
                 document.getElementById("lv2").style.borderTopColor="yellow";
                 document.getElementById("lv3").style.borderTopColor="green";    
            }
       }
	    else if(a.length>16){
	        document.getElementById("mm-pd").innerHTML="密码长度大于16个字符!";
	        document.getElementById("lv1").style.borderTopColor="gainsboro";
	        document.getElementById("lv2").style.borderTopColor="gainsboro";
	      	document.getElementById("lv3").style.borderTopColor="gainsboro";
	    }
    
     }

//注册协议的显示隐藏
  $('.but').click(function(){
  	$('.xieyi').fadeOut().hide(),
  	$('.footer').fadeIn().show();
  })
  $('.guanbi').click(function(){
  	window.open('index.html');
  	//window.close();关闭浏览器
  })
  //注册协议的拖动
  
  $(function(){
  	//盒子拖动
		var Box = document.querySelector('.xieyi');
		// 1. 鼠标按下事件 onmousedown
		Box.onmousedown =function(e){
			var e = e||window.event;
			// 6.获得鼠标在盒子的偏移距离= 初始鼠标坐标- 初始盒子的坐标
			var disx = e.clientX -Box.offsetLeft;
			var disy = e.clientY -Box.offsetTop;
		    var rConW=document.querySelector('.rConw').clientWidth;
		    var rConH=document.querySelector('.rCon').clientHeight;
            //2. 鼠标移动 onmousemove
            document.onmousemove =function(e){
                //5. 获得盒子坐标移动坐标 = 移动后的鼠标坐标 - 偏移距离
                var e = e||window.event;
                var left = e.clientX -disx;
                var top =  e.clientY -disy;
                // 7. 盒子移动范围
                var maxW =rConW-Box.offsetWidth;
                var maxH =rConH-Box.offsetHeight;
                console.log(maxW);
                console.log(maxH);
                if(left<0){
                	left = 0;
                }else if(left>maxW){
                	left = maxW;
                }
                if(top<0){
                	top = 0;
                }else if(top>maxH){
                	top = maxH;
                }
                //4.目标： 设置盒子坐标
                Box.style.left = left +'px';
                Box.style.top = top +'px';
            }
            //3. 鼠标抬起事件 onmouseup
            document.onmouseup = function(){
                this.onmousemove ='';
                this.onmouseup ='';
            }
		}
  })
 