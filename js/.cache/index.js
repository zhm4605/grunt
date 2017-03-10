/*TMODJS:{"version":5,"md5":"2b633a95b007d1704bb0050ca3876148"}*/
template('index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,$out='';$out+='<h1>grunt测试</h1> <div>';
$out+=$escape(name);
$out+='</div> ';
return new String($out);
});