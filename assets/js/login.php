<?php
$user = $_POST['username'];
   $arr = ['zhangs','lis','wangw','tom'];
     if(in_array($user,$arr)){
      echo '用户被占用';
   }else{
      echo '用户可以使用';
   }
?>