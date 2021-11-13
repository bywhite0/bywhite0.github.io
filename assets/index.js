function showsth() {
	var time = mdui.$("li#love");
	time.removeClass("mdui-hidden");
	time.mutation();
};

function devtEruda() {
	var script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/npm/eruda@1.10.3/eruda.min.js';
	document.body.appendChild(script);
	script.onload = function() {
		eruda.init();
		eruda.add(erudaMemory);
		eruda.add(erudaTiming);
		eruda.add(erudaDom);
	};
	$('#code').remove();
};
var dialog = document.getElementById('jumpTo');
var ckc = new mdui.Dialog('#jumpTo');

function checkYes() {
	mdui.$('.mdui-textfield').removeClass('mdui-textfield-invalid')
};

function checkCmd() {
	var cmd = $('input#command').val();
	if (cmd == "99") {
		mdui.snackbar("验证成功，正在跳转..");
		setTimeout(location.assign('./amusic/ncmdemo.html'), 5000);
		checkYes()
	} else if (cmd == "yt") {
		showsth();
		mdui.snackbar("你发现了一些不得了的东西~");
		checkYes()
	} else {
		mdui.$('.mdui-textfield').addClass('mdui-textfield-invalid');
	};
	$('input#command').val('')
};
dialog.addEventListener('closed.mdui.dialog', function() {
	ckc.destroy();
	$('input#command').val('');
	checkYes()
});
dialog.addEventListener('confirm.mdui.dialog', function() {
	checkCmd();
	checkYes()
});
var player = new APlayer({
	container: document.getElementById('you'),
	lrcType: 1,
	autoplay: true,
	audio: {
		name: 'Without You',
		artist: 'Avicii/Sandro Cavazza',
		url: 'https://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_187582414&response=res&type=convert_url',
		cover: 'https://p2.music.126.net/jkmwhYe2k0oONjJr0WWCmg==/18776360069542158.jpg',
		theme: '#000000',
		lrc: '[00:00.00]Avicii/Sandro Cavazza - Without You\n[00:02.35]...\n[00:17.83]You said that we would always be\n[00:21.33]你曾说过我们会永远在一起\n[00:21.33]Without you I feel lost at sea\n[00:24.76]没有你我犹如迷失深海\n[00:24.76]Through the darkness you’d hide with me\n[00:28.29]黑暗中你刻意回避着我\n[00:28.29]Like the wind we’d be wild and free\n[00:32.32]如风一般，我们自由而狂野\n[01:43.86]我是多么想你能在我身边\n[00:32.32][01:43.86]You\n[00:34.46][01:45.90]你\n[00:34.46][01:45.90]Said you’d follow me anywhere\n[00:38.46][01:49.94]曾说你愿意陪我去任何地方\n[00:38.46][01:49.94]But your eyes\n[00:41.49][01:52.83]但你的眼神\n[00:41.49][01:52.83]Tell me you won’t be there\n[00:45.88][01:57.30]出卖了你的内心\n[00:45.88][01:57.30]I’ve gotta learn how to love without you\n[00:49.36][02:00.55]我得学会习惯没有你的生活\n[00:49.36][02:00.55]I’ve gotta carry my cross without you\n[00:52.70][02:04.03]我得学会自己背负十字架艰难前行\n[00:52.70][02:04.03]Stuck in the riddle and I’m just about to[00:56.13][02:07.33]现在我身陷囹圄\n[00:56.13][02:07.33]Figure it out without you\n[00:59.78][02:11.11]没有你，我只能迎难而上\n[00:59.78][02:11.11]And I done sitting home without you\n[01:03.21][02:14.69]没有你，我不能再坐卧享乐\n[01:03.21][02:14.69]Fuck I’m going out without you\n[01:07.29][02:18.53]没有你，我必须拼死前行\n[01:07.29][02:18.53]I’m gonna tear this city down without you\n[01:10.68][02:21.97]我决定洗劫这座没有你的城市\n[01:10.68][02:21.97]I’m going Bonnie and Clyde without you\n[01:14.37][02:26.79]没有你，我早已无所顾忌\n[01:14.37][02:26.79]\[Drop\]\n[01:29.06]Now I’m running away my dear\n[01:32.55]亲爱的我正在逃避\n[01:32.55]From myself and the truth I fear\n[01:35.98]逃避着自己，逃避着自己害怕的真相\n[01:35.98]My heart is beating I can’t see clear\n[01:39.58]心脏剧烈跳动着 看不见看不清\n[01:39.58]How I’m wishing that you were here'
	}
});

function hitokotoCopy() {
	var cb = new ClipboardJS(".cb-btn");
	var hitokoto_text = document.getElementById("hitokoto_pan").contentWindow.document.getElementById("hitokoto").innerHTML;
	var output = document.getElementById("hitokoto_output");
	output.value = hitokoto_text;
	mdui.snackbar("已复制");
};

function rf() {
	mdui.$('*').mutation()
};