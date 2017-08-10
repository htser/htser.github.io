<?php

$hitenlink=$_SERVER["QUERY_STRING"];

if($hitenlink=="")

{

die("参数空，无法执行！By.HitenStudio");

}

else

{

$urlhiten="http://pan.baidu.com/share/link?".$hitenlink;

header("location:$urlhiten");

}

?>