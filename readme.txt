苏宁易购文档说明
   登录页面用户名为admin，密码为123

login.html 登录页面
实现的效果：
1.二维码与登录的切换（点击事件，显示和隐藏show()/hide(),添加样式和移除样式add
class()/removeClass()/siblings()）
2.二维码的移动（mouseover()/mouseout()）
3.用户名密码内容清空（获取焦点blur(),if判断值的长度val().length是否等于0）
4.登录时判断用户是否存在（if判断user与password的内容是否等于admin/123）
如果是admin/123登录成功跳转首页否则出现提示文字不能登录。

register.html注册页面
实现的效果：
1.注册协议弹框（点击事件的显示隐藏click()/fadeout()/fadeIn() 如果点击同意进入注册页面
否则跳出转入首页）
2.注册协议的拖动（鼠标按下事件onmousedown()获取盒子的坐标,判断鼠标在盒子的偏移距离
鼠标移动onmousemove()获得盒子的移动坐标，判断盒子的移动范围，实现盒子的左右拖动）
3.手机号码和验证码的验证（使用正则判断实现验证/^1[34578]\d{9}$/,/^[0-9]{6}$/）
4.密码设置，判断密码的强弱（弱/^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/;    //全是数字或全是字母     6-16个字符
     	如：123456a_	中 /^[A-Za-z0-9]{6,16}$/;     //数字、26个英文字母      6-16个字符
      			强 /^\w{6,16}$/;           // 由数字、26个英文字母或者下划线组成的字符串    6-16个字符）
5.获取验证码的倒计时（使用定时器来添加定义倒计时SetInterval(function(){},100);）


index.html首页
实现的效果：
1.banner图的显示和隐藏
2.返回顶端Top（点击事件，$('body,html').animate({scrollTop:0},400);）
3.二级菜单的显示隐藏
4.轮播图的无缝切换（通过换图函数，判断图像的循环播放）
5.新闻的滚动效果
6.苏宁抢购的选项卡切换
7.苏宁直播的图片切换（mouseover()/mouseout()的显示隐藏）
8.楼层点击切换的实现
9.菜单挂起（判断scrollTop()的高度如果超过则挂起否则隐藏）

product.html产品详情页
实现的效果：
1.Top返回顶部
2.固定时间的倒计时
3.扫一扫购买，（二维码的显示隐藏）
4.看了又看，（图片的轮播）
5.店铺热销/热门推荐的选项卡切换（通过循环li对应的索引将其内容显示）
6.女装排行榜的选项卡切换
7.商品的放大镜效果（盒子的定位与盒子的宽高）


category.html列表页
实现的效果：
1.菜单挂起
2.导航栏的左右按钮切换
3.瀑布流的调用
4.用户交互侧边栏显示隐藏


shopCar.html购物车
实现的效果：
1.级联菜单
2.购物车的结算/全选与不选
3.商品和店铺的弹层删除


