
//声明组件
var inst = new mdui.Drawer('#drawer');
var rssbtn = new mdui.Fab('#rss');
var rsst = new mdui.Tooltip('#rsso', {
  content: '联系站长'
});

var $$ = mdui.JQ;

$$('#nothing').on('click', function () {
  mdui.snackbar({
    message: '这里什么也没有',
    buttonText: '重试',
    onClick: function(){
      mdui.alert('什么也没有');
    },
    onButtonClick: function(){
      mdui.alert('依然什么也没有');
    },
  });
});

$$('#sup').on('click', function () {
  mdui.snackbar({
    message: '支付宝:htwangds@163.com',
    buttonText: '前往支付宝',
    onClick: function(){
window.location.href='alipay.html';
    },
    onButtonClick: function(){
window.location.href='alipay.html';
    },
  });
});

function ref(){
window.location.reload();
}
function gotoabout(){
window.location.href='#about';
window.location.reload();
}
function gotodl(){
window.location.href='#download';
window.location.reload();
}
function re(){
window.location.href='#index';
window.location.reload();
}
//Drawer
document.getElementById('open').addEventListener('click', function () {
  inst.open();
});

document.getElementById('close').addEventListener('click', function () {
  inst.close();
});

document.getElementById('toggle').addEventListener('click', function () {
  inst.toggle();
});
	
	
//浮动按钮rss
document.getElementById('rssopen').addEventListener('click', function () {
  rssbtn.open();
});

document.getElementById('rssclose').addEventListener('click', function () {
  rssbtn.close();
});

document.getElementById('rsshide').addEventListener('click', function () {
  rssbtn.hide();
});

document.getElementById('rssshow').addEventListener('click', function () {
  rssbtn.show();
});

document.getElementById('getState').addEventListener('click', function () {
  mdui.alert(rssbtn.getState());
});
	
//提示js

document.getElementById('rsstopen').addEventListener('click', function () {
  rsst.open();
});

document.getElementById('rsstclose').addEventListener('click', function () {
  rsst.close();
});
//REF JS
document.getElementById('refo').addEventListener('click', function () {
  ref_btn.open();
});

document.getElementById('refc').addEventListener('click', function () {
  ref_btn.close();
});