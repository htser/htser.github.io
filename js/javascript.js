var inst = new mdui.Drawer('#drawer');

mdui.JQ('#baoming').on('click', function(){
  mdui.dialog({
    title: '内测报名',
    content: '预计<b>2018年2月份</b>开放报名 敬请期待<br>欢迎加群获得最新消息',
    buttons: [
      {
        text: '好'
      },
      {
        text: '加群',
        onClick: function(inst){
          mdui.alert('欢迎加入Hiten ROM总群：570801469');
        }
      }
    ]
  });
});


document.getElementById('open').addEventListener('click', function () {
  inst.open();
});
document.getElementById('close').addEventListener('click', function () {
  inst.close();
});
document.getElementById('toggle').addEventListener('click', function () {
  inst.toggle();
});