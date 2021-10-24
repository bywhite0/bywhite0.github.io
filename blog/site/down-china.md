### 为什么网站在中国大陆无法访问？<Badge type="warning">该问题可能长期存在</Badge>
##### 2021.10.22

受**中国大陆政策及GFW**(Great Firewall,中国国家防火墙)影响，目前网站的[主体](https://bywhite0.github.io)在中国大陆境内会遭到**定期屏蔽**。
> 目前已知中国**联通**网络下**SNI阻断**，无法直接访问。<br />
> 中国**移动**网络下已[解除访问限制](https://github.com/521xueweihan/GitHub520/issues/53#issuecomment-927062078)(2021.09.25)，可直接访问。<br />
> 中国**电信**网络下出现定期屏蔽IP，会有访问速度慢等问题。

如果网站打不开，可以暂时使用[这个链接](https://bywhite.now.sh)。
<Note type="tip" label="提示"><br />主站与镜像站的<a id="msg" href="">留言板</a>数据不互通。</Note>
更多信息请查看:[GitHub520#53](https://github.com/521xueweihan/GitHub520/issues/53)
<details>
<summary> <a href="https://github.com/XIU2">@XIU2</a>在该Issue的<a href="https://github.com/521xueweihan/GitHub520/issues/53#issuecomment-809901490">回复</a>：

</summary>

> <a href="https://github.com/dwing4g">@dwing4g</a>
> 
> 
> 
> 目前我测试的结果是，任意 IP 指向 Github 访问，都会 443 端口超时。
> 
> 哪怕这个 IP 和 Github 无关（比如 Cloudflare CDN IP，只要 443 端口通顺，就可以拿来测试）。
> 
> 
> 
> 经过测试是可以精细到共享同一个宽带 IP 的 NAT 用户下（也就是没有公网 IP）。
> 
> 即该 IP 的 443 端口超时后，只会影响你自己的宽带，不会影响和你共享公网 IP 的 NAT 下其他宽带用户。
> 
> 
> 
> ****
> 
> 
> 
> 我认为之所以不完全封死，而是时能访问时不能（这个是因为 DNS 解析结果一直在变化，不能访问的时候说明解析到了无法使用的 IP，能访问的时候说明解析到了暂时可用的 IP），主要是为了模拟丢包、伪装成 Github 网站自身网络问题，这种方法对不懂技术的网民很有效，它们没有能力分辨。
> 
> 
> 
> 而有能力分辨的人，也都有科学上网手段，遇到 Github 无法访问的问题，都会去配置其走代理。
> 
> 
> 
> ****
> 
> 
> 
> 要知道**当年 Github 被封**的时候，可是大量程序员反抗才恢复的。
> 
> 而现在没什么人会去反抗了，反而只会去说： **你没有梯子吗？你不会挂代理吗？** 之类的话。
> 
> 
> 
> 看来**温水煮青蛙**策略很成功~
</details>
<v-script>
document.getElementById('msg').href = window.location.hostname + '/msg'
</v-script>

<v-style>h1{display:none}</v-style>
# 为什么网站在中国大陆无法访问？
