
//�������
var inst = new mdui.Drawer('#drawer');
var rssbtn = new mdui.Fab('#rss');
var rsst = new mdui.Tooltip('#rsso', {
  content: '��ϵվ��'
});

var $$ = mdui.JQ;

$$('#nothing').on('click', function () {
  mdui.snackbar({
    message: '����ʲôҲû��',
    buttonText: '����',
    onClick: function(){
      mdui.alert('ʲôҲû��');
    },
    onButtonClick: function(){
      mdui.alert('��ȻʲôҲû��');
    },
  });
});

$$('#sup').on('click', function () {
  mdui.snackbar({
    message: '֧����:htwangds@163.com',
    buttonText: 'ǰ��֧����',
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
	
	
//������ťrss
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
	
//��ʾjs

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