if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
      };
Fancybox.bind('img');
new Docute({
        target: '#app',
darkThemeToggler: true,
nav: [
    {
      title: '首页', 
      link: '/'
    },
    {
      title: '待办',
      link: '/todo'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/bywhite0/bywhite0.github.io'
    }
  ],
footer: `<a href="https://bywhite.wodemo.net">鸽子窝</a>｜<a href="https://bywhite0.github.io">二楼</a>｜<a href="https://bywhite.vercel.app">平行世界的二楼</a>｜<a href="https://github.com/bywhite0/bywhite0.github.io">二楼仓库</a>`,
sidebar: [
    // A sidebar item, with child links
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
          link: '/1f'
        },
        {
          title: '二楼装修记',
          link: '/2f'
        }
     ]
    },
    {
      title: '干货',
      children: [
        {
          title: 'MIDI集',
          link: '/music/midi'
        },
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