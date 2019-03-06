<?php
  // 获得当前页
//header("Content-type: text/html; charset=utf-8")
  $page = $_REQUEST['p'];
  // 模拟从数据库读出的数据
  $arr = [
       array("id"=>'1',"title"=>"宜家的家具01","pic"=>"assets/images/category/l1.jpg"),
       array("id"=>'2',"title"=>"宜家的家具02","pic"=>"assets/images/category/l2.jpg"),
       array("id"=>'3',"title"=>"宜家的家具03","pic"=>"assets/images/category/l3.jpg"),
       array("id"=>'4',"title"=>"宜家的家具04","pic"=>"assets/images/category/l4.jpg"),
       array("id"=>'5',"title"=>"宜家的家具05","pic"=>"assets/images/category/l5.jpg"),
       array("id"=>'6',"title"=>"宜家的家具06","pic"=>"assets/images/category/l6.jpg"),
       array("id"=>'7',"title"=>"宜家的家具07","pic"=>"assets/images/category/l7.jpg"),
       array("id"=>'8',"title"=>"宜家的家具08","pic"=>"assets/images/category/l8.jpg"),
       array('id'=>'9','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l9.jpg'),
	   	array('id'=>'10','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l10.jpg'),
	   	array('id'=>'11','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l11.jpg'),
	   	array('id'=>'12','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l12.jpg'),
	   	array('id'=>'13','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l13.jpg'),
	   	array('id'=>'14','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l14.jpg'),
	   	array('id'=>'15','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l15.jpg'),
	   	array('id'=>'16','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l16.jpg'),
	   	array('id'=>'17','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l17.jpg'),
	   	array('id'=>'18','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l18.jpg'),
	   	array('id'=>'17','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l17.jpg'),
	   	array('id'=>'18','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l18.jpg'),
       array("id"=>'1',"title"=>"宜家的家具01","pic"=>"assets/images/category/l1.jpg"),
       array("id"=>'2',"title"=>"宜家的家具02","pic"=>"assets/images/category/l2.jpg"),
       array("id"=>'3',"title"=>"宜家的家具03","pic"=>"assets/images/category/l3.jpg"),
       array("id"=>'4',"title"=>"宜家的家具04","pic"=>"assets/images/category/l4.jpg"),
       array("id"=>'5',"title"=>"宜家的家具05","pic"=>"assets/images/category/l5.jpg"),
       array("id"=>'6',"title"=>"宜家的家具06","pic"=>"assets/images/category/l6.jpg"),
       array("id"=>'7',"title"=>"宜家的家具07","pic"=>"assets/images/category/l7.jpg"),
       array("id"=>'8',"title"=>"宜家的家具08","pic"=>"assets/images/category/l8.jpg"),
       array('id'=>'9','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l9.jpg'),
	   	array('id'=>'10','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l10.jpg'),
	   	array('id'=>'11','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l11.jpg'),
	   	array('id'=>'12','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l12.jpg'),
	   	array('id'=>'13','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l13.jpg'),
	   	array('id'=>'14','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l14.jpg'),
	   	array('id'=>'15','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l15.jpg'),
	   	array('id'=>'16','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l16.jpg'),
	   	array('id'=>'17','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l17.jpg'),
	   	array('id'=>'18','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l18.jpg'),
	   	array('id'=>'17','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l17.jpg'),
	   	array('id'=>'18','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l18.jpg'),
	   	 array("id"=>'1',"title"=>"宜家的家具01","pic"=>"assets/images/category/l1.jpg"),
       array("id"=>'2',"title"=>"宜家的家具02","pic"=>"assets/images/category/l2.jpg"),
       array("id"=>'3',"title"=>"宜家的家具03","pic"=>"assets/images/category/l3.jpg"),
       array("id"=>'4',"title"=>"宜家的家具04","pic"=>"assets/images/category/l4.jpg"),
       array("id"=>'5',"title"=>"宜家的家具05","pic"=>"assets/images/category/l5.jpg"),
       array("id"=>'6',"title"=>"宜家的家具06","pic"=>"assets/images/category/l6.jpg"),
       array("id"=>'7',"title"=>"宜家的家具07","pic"=>"assets/images/category/l7.jpg"),
       array("id"=>'8',"title"=>"宜家的家具08","pic"=>"assets/images/category/l8.jpg"),
       array('id'=>'9','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l9.jpg'),
	   	array('id'=>'10','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l10.jpg'),
	   	array('id'=>'11','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l11.jpg'),
	   	array('id'=>'12','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l12.jpg'),
	   	array('id'=>'13','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l13.jpg'),
	   	array('id'=>'14','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l14.jpg'),
	   	array('id'=>'15','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l15.jpg'),
	   	array('id'=>'16','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l16.jpg'),
	   	array('id'=>'17','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l17.jpg'),
	   	array('id'=>'18','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l18.jpg'),
	   	array('id'=>'17','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l17.jpg'),
	   	array('id'=>'18','title'=>'宜家家具转角沙发','pic'=>'assets/images/category/l18.jpg')
  ];
  // 所有数据：echo json_encode($arr);
  /*
    每页显示 12条件数据
     第一页 1-12 数据(索引0-11)
     第二页 13-24 数据(索引12-23)
     第三页 25-36 数据(索引24-35)
  */ 
  $offset = ($page-1)*12; //索引
  $length = 12;
  echo json_encode(array_slice($arr,$offset,$length));
?>