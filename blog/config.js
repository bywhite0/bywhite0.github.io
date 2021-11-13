if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
      };
Fancybox.bind('img[data-fancybox]');
new Docute({
        target: '#app',
darkThemeToggler: true,
nav: [
    {
      title: '首页', 
      link: '/'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/bywhite0/bywhite0.github.io'
    }
  ],
footer: `<a href="https://bywhite0.github.io">鸽子窝的二楼</a>｜<a href="https://bywhite.vercel.app">平行世界的二楼</a>｜<a href="https://github.com/bywhite0/bywhite0.github.io">二楼仓库</a><div id="wl" class="docute-footer"></div><v-script>new MiniValine({
			el: '#wl',
			backend: 'waline',
			serverURLs: 'https://bywl.vercel.app',
			mode: 'DesertsP',
			placeholder: '来发评论吧~',
			avatarUrl: 'https://gravatar.loli.net/avatar',
			barrager: 2,
			emoticonUrl: ['https://cdn.jsdelivr.net/gh/MiniValine/bilibilis@latest', 'https://cdn.jsdelivr.net/npm/alus@latest', 'https://cdn.jsdelivr.net/gh/MiniValine/MiniValine/imgs/funny', 'https://cdn.jsdelivr.net/gh/MiniValine/tieba@latest', 'https://cdn.jsdelivr.net/gh/MiniValine/twemoji@latest', 'https://cdn.jsdelivr.net/gh/MiniValine/weibo@latest', 'https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/热词系列一','https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili','https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq','https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/洛天依','https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/2020拜年祭','https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/2233白色情人节表情包','https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/泠鸢yousa','https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/阴阳师·平安物语','https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/原神','https://cdn.jsdelivr.net/gh/lrhtony/BiliEmoji@master/src/时光代理人', ]
		});</v-script>
	`,
sidebar: [
    // A sidebar item, with child links
    {
      title: '待办',
      link: '/todo',
    },
    {
      title: '公告',
      children: [
        {
          title: '为什么网站在中国大陆无法访问？',
          link: '/site/down-china'
        },
        {
          title: '《天气简报》更新调整公告',
          link: '/weather'
        },
        {
          title: '关于网站暂停新内容更新的通知',
          link: '/site/paused'
        }
     ]
    },
    {
      title: '鸽子窝の史料',
      children: [
        {
          title: '鸽子窝の变迁',
          link: '/log/1f'
        },
        {
          title: '二楼装修记',
          link: '/log/2f'
        }
     ]
    },
    {
      title: '干货',
      children: [
        {
          title: '初中英语语法规则速查速记',
          link: '/m/eng'
        }
     ]
    },
    {
      title: '书柜',
      children: [
        {
          title: '完全自杀手册',
          link: '/CSM'
        }
     ]
    }
  ],
  detectSystemDarkTheme: true,
      })