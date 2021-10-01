<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="utf-8">
    <title>网易云音乐热评</title>
    <!--强制极速模式模式-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--移动适配-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!--UC强制全屏-->
    <meta name="full-screen" content="yes">
    <!--UC应用模式-->
    <meta name="browsermode" content="application">
    <!--QQ强制全屏-->
    <meta name="x5-fullscreen" content="true">
    <!--QQ应用模式-->
    <meta name="x5-page-mode" content="app">
    <!--删除默认的苹果工具栏和菜单栏-->
    <meta content="yes" name="apple-mobile-web-app-capable">
    <!--Cache-Control头域-->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <!--网站关键词-->
    <meta name="keywords" content="">
    <!--网站描述-->
    <meta name="description" content="">
    <!--favicon-->
    <link rel="shortcut icon" href="https://s1.music.126.net/style/favicon.ico?v20180823">
    <!--主体css-->
    <link rel="stylesheet" href="../css/baoguo.css?<?php echo time(); ?>">
    <!--loading-->
    <link rel="stylesheet" href="../css/loading.css?<?php echo time(); ?>">
    <!--baoguo_icon字体图标-->
    <!-- <link rel="stylesheet" type="text/css" href="../plugins/baoguo_icon/baoguo_icon.css"> -->
</head>

<body>
<div class="box">
    <div id="search_button">
        <!--歌曲封面-->
        <div id="pic"><img src=""></div>
        <!--播放按钮-->
        <div id="player_btn"><img src="../images/play.png"></div>
    </div>
    <div id="info_top">
        <!--歌曲名-->
        <div id="info_song"></div>
        <!--歌曲作者-->
        <div id="info_song_auther"></div>
        <!--水波-->
        <div class="watertiv">
            <div class="water_1"></div>
            <div class="water_2"></div>
        </div>
    </div>
    <div class="info">
        <!--评论-->
        <div id="info_tag"></div>
    </div>
    <!--切换下一条-->
    <div class="info" style="border-radius: 20px;margin-top: 10px;text-align: center;">
        <a id="next" style="font-size: 13px;">切换下一条</a>
    </div>
    <!--版权-->
    <div id="about">开发者@<a href="http://wpa.qq.com/msgrd?v=3&uin=840160384&site=qq&menu=yes" target="_blank">我是一份包裹</a>
    </div>
</div>
<!--audio-->
<div id="music" style="display: none"></div>
<!--背景-->
<div class="bg_image"></div>
<div class="bg_image_pattern"></div>
<!--loading-->
<div class="baoguo_loading_frame">
    <div class="loader_overlay"></div>
    <div class="loader_cogs">
        <div class="loader_cogs__top">
            <div class="top_part"></div>
            <div class="top_part"></div>
            <div class="top_part"></div>
            <div class="top_hole"></div>
        </div>
        <div class="loader_cogs__left">
            <div class="left_part"></div>
            <div class="left_part"></div>
            <div class="left_part"></div>
            <div class="left_hole"></div>
        </div>
        <div class="loader_cogs__bottom">
            <div class="bottom_part"></div>
            <div class="bottom_part"></div>
            <div class="bottom_part"></div>
            <div class="bottom_hole"></div>
        </div>
        <!--<p style="font-size:13px">Loading...</p>-->
    </div>
</div>

<!--jQuery-->
<script type="text/javascript" src="//cdn.bootcss.com/jquery/3.0.0/jquery.min.js"></script>
<!--核心js-->
<script type="text/javascript" src="../js/baoguo.js?<?php echo time(); ?>"></script>
</body>

</html>