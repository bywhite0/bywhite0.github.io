const home = {template:`<div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">公告</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><ul class="mdui-list mdui-list-dense"><li class="mdui-list-item"><div class="mdui-list-item-content"><div class="mdui-list-item-text"> <!-- ● 点击左上角菜单按钮畅游本站<br />● 也试试右下角的按钮叭~ --> 暂停维护，等待重构</div></div></li></ul></div></div></div>
<!-- <div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">近期更新</div><div class="mdui-panel-item-summary">当前版本 v2.6.0-alpha.2</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><ul class="mdui-list mdui-list-dense">
<li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><div class="mdui-list-item-title">v2.5.0 <small class="mdui-typo sm">2021.10.21</small></div><div class="mdui-list-item-text">
  ● 新增生日页面(测试)<br />
  ● 留言板更换后端<br />
  ● 解决主页加载过慢的问题<br />
  ● 解决误操作导致版本错误回退的问题 </div></div></li>
<li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><div class="mdui-list-item-title">v2.4.7 <small class="mdui-typo sm">2021.10.07</small></div><div class="mdui-list-item-text">
  ● 网站启用新名称<br />
  ● 新增书柜<br />
  ● 新增留言板</div></div></li>
<li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><div class="mdui-list-item-title">v2.4.6.1 <small class="mdui-typo sm">2021.10.05</small></div><div class="mdui-list-item-text">
  ● 修复字体大小问题<br />
  ● 更新主页面板至v2.4.6.1
</div></div></li>
<li class="mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><div class="mdui-list-item-title">v2.4.6 <small class="mdui-typo sm">2021.10.05</small></div><div class="mdui-list-item-text">
  ● 全站字体改为苹方<br />
  ● 留声机样式调整<br />
  ● 留声机新增薛之谦《动物世界》<br />
  ● 「国庆头像生成」使用CDN加速<br />
  ● 修复Vercel端链接跳转错误的问题</div></div></li>
</ul></div></div></div> -->
<!-- <div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">开发进度</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><div class="mdui-container"><div class="mdui-row"><div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-4" mdui-tooltip="{content: '主站功能的完善进度'}"><div class="mdui-container"><div class="mdui-row mdui-valign"><div class="mdui-col-xs-4"><div class="progress-ti">主站建设</div></div><div class="mdui-col-xs-8"><div class="mdui-progress"><div class="mdui-progress-determinate" style="width: 20%;"></div></div></div></div></div></div><div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-4" mdui-tooltip="{content: '主站资源的兼容进度'}"><div class="mdui-container"><div class="mdui-row mdui-valign"><div class="mdui-col-xs-4"><div class="progress-ti">兼容性</div></div><div class="mdui-col-xs-8"><div class="mdui-progress"><div class="mdui-progress-determinate" style="width: 70%;"></div></div></div></div></div></div><div class="mdui-col-xs-12 mdui-col-sm-6 mdui-col-md-4" mdui-tooltip="{content: '深色模式兼容进度'}"><div class="mdui-container"><div class="mdui-row mdui-valign"><div class="mdui-col-xs-4"><div class="progress-ti">深色兼容</div></div><div class="mdui-col-xs-8"><div class="mdui-progress"><div class="mdui-progress-determinate" style="width: 100%;"></div></div></div></div></div></div></div></div></div></div></div> -->
<div class="mdui-panel" mdui-panel><div class="mdui-panel-item" style="margin:6px"><div class="mdui-panel-item-header"><div class="mdui-panel-item-title">一言</div><i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><div class="mdui-panel-item-body"><iframe src="hitokoto.html" id="hitokoto_pan" style="border:0px;" width=100%></iframe><div class="mdui-panel-item-actions"><button class="mdui-btn mdui-ripple cb-btn"  data-clipboard-target="#hitokoto_output" onclick="hitokotoCopy()">复制</button><button class="mdui-btn mdui-ripple" onclick="document.getElementById('hitokoto_pan').contentWindow.location.reload(true);">再来一条</button></div></div></div><textarea id="hitokoto_output" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;"></textarea></div>`}
