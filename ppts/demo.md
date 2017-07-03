title: vue介绍
speaker: 李亮
url: https://github.com/zkyeu
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]
# 前端框架Vuejs

<small>作业帮-直播课研发团队-教师端  李亮</small>

[slide]
##不学自知，不问自晓，古今行事，未之有也
----
不用学习就知道,不用提问就明白,这种事无论古今都是绝无仅有的.教导我们要勤奋,好学,不懂就问 {:&.rollIn}


[slide]
# 主流框架

[slide]
<img src="/img/all.png">
----
*  Knockout|Polymer|Jquery[Zepto]|Riot|Dojo|Avalon等等 {:&.rollIn}
* 纯模板引擎：最少的就是纯模板引擎，只管状态到界面的映射
* React和Vue：两者都专注只做状态到界面映射，以及组件
* Backbone：更多一些架构指导
* Angular：做的事情多，有自己的路由,生态体系
* Ember：相比Angular，Ember做得就更加彻底，它会将一切都帮你设计好打包好，你就开箱用就可以了
* Meteor：Meteor只是一个极端，它是从前到后全都包含，从前端到数据层到数据库，全都帮你打包好


[slide]
----
* React和Vue有一个共同特点，都有各自的配套工具，核心只解决一个很小的问题 {:&.rollIn}
* 有生态圈及配套的可选工具，逐个加进来，就可以组合成非常强大的栈[渐进式]
* <img src="/img/all2.png">


[slide]
# MVC & MVVM
* 软件中最核心的，最基本的东西是什么? 是数据。我们写的所有代码，都是围绕数据的 {:&.rollIn}
* 围绕着数据的产生、修改等变化，出现了业务逻辑
* 围绕着数据的显示，出现了不同的界面技术

[slide]
<img src="/img/mvc.png" style="width: 500px;">
----
* View 传送指令到 Controller {:&.rollIn}
* Controller 完成业务逻辑后，要求 Model 改变状态
* Model 将新的数据发送到 View，用户得到反馈
## 缺点 {:&.rollIn}
* > 必须等待服务器端的指示，如果是异步模式的话，所有html节点、数据、页面结构都是后端请求过来。
* > 前端渲染的页面结构，几乎是后端服务器包扎一堆数据一起发送过来
* > 一发而动全身。数据、显示不分离！

[slide]
<img src="/img/mvvm.png" style="width: 500px;">
----
* 双向绑定,V的变动,自动反映在VM,反之亦然,M数据的变动,也自动展示给页面显示 {:&.rollIn}
* VM负责把M的数据同步到V显示出来,还负责把V的修改同步回M



[slide]
# Vue作者
<img src="/img/yyx.jpg">

> http://evanyou.me/


[slide]
# Vue发展史
----
* 2014年3月，Vue.js 0.10 开源发布[官方定位是视图管理]  {:&.zoomIn}
* 2014年10月，大范围使用
* 2015年12月 NPM下载量: 382,184, ~52k每月
* 2016年4月，Vue2版本发布[官方定位是渐进式框架]
* 2016年5月，vuejs的starts数超过angular
* 2016年12月 NPM下载量: 1,943,567(比2015, +300%)
* 2017年1月 vue-devtools 发布[调试]
* 2017年2月 版本2.2发布[webpack结合]
* 2017年6月 github star 全球排名12[7🈷️3日 第11]
* <img src="/img/angular.png">
* <img src="/img/vue.png">



[slide]
## 为什么选择Vue
----
* 易用 {:&.rollIn}
* > 已经会了HTML,CSS,JavaScript？阅读指南即可构建
* 灵活
* > 简单小巧，渐进式技术栈，足以应付任何规模的应用
* 性能
* > 17kb大小 超快虚拟DOM
* <img src="/img/v1.png" style="width:300px;height:260px;margin-top: 20px;"> <img src="/img/v2.png"  style="width:300px;height:260px;">

[slide]
# Vue应用情况 {:&.zoomIn}
<img src="/img/logo.jpg">


[slide]
# 基本语法和样式演示
----
* 生命周期 {:&.bounceIn}
* 安装
* 指令
* 模板语法
* 表单控件
* 组件
* 事件通信
* ...

[slide]
# 生命周期 {:&.rollIn}
<img src="/img/lifecycle.png" style="width:500px;margin: 0 auto;">

[slide]
# 安装
----
方式一：npm安装
<pre><code class="javascript">npm install vue</code></pre>

方式二：script直接引入
<pre><code class="javascript">&lt;script src="./vue.js"&gt;&lt;/script&gt;</code></pre>

###基本结构
  <pre><code class="javascript">
    &lt;meta charset="UTF-8"&gt;
    &lt;script src="js/vue.js"&gt;&lt;/script&gt;
    &lt;div id="app"&gt;
        {{ text }}
    &lt;/div&gt;

    &lt;script&gt;
        new Vue({
            el : '#app',
            data : {
                text : '我是vue的数据'
            },
            ......
        });
    &lt;/script&gt;

    </code></pre>


[slide]
#基本语法--指令
----
指令（Directives）是带有 v- 前缀的特殊属性。

<pre>
    <code class="markdown">
    v-if | v-on | v-bind | v-repeat | v-model | v-show.....
    </code>
</pre>

<pre><code class="markdown">
&lt;input type="text" v-model="inputData"&gt;
&lt;div v-bind:click="event"&gt;&lt;/div&gt;
&lt;div v-on:click="event"&gt;&lt;/div&gt;
&lt;div @click="event"&gt;&lt;/div&gt;
...
</code>
</pre>


[slide]
# 基本语法--模板语法
----
主要包含 {:&.zoomIn}
* 插值 {:&.zoomIn}
* HTML
* 属性
* 表达式

[slide]
插值
----
<pre><code class="markdown">msg: '我是vue文字'</code></pre>
<pre><code class="markdown">&lt;span&gt;Message: {{ msg }}&lt;/span&gt;</code></pre>
数据绑定使用 “Mustache” 语法（双大括号）的文本插值.

[slide]
#HTML
----
使用 v-html 指令用于输出 html 代码
<pre><code class="markdown">message: '&lt;h1&gt;作业帮&lt;/h1&gt;'</code></pre>
<pre><code class="markdown">&lt;div v-html="message"&gt;&lt;/div&gt;</code></pre>
<pre><code class="markdown">/*vue1.0可用*/
&lt;div&gt;{{{message}}}&lt;/div&gt;</code></pre>

[slide]
#属性
----
判断 class1 的值，如果为 true 使用 class1 类的样式，否则不使用该类
<pre><code class="markdown">&lt;div v-bind:class="{'class1': class1}"&gt;&lt;/div&gt;</code></pre>
<pre><code class="markdown">&lt;div v-bind:class="{'class1': class1, 'calss2': calss2}"&gt;&lt;/div&gt;</code></pre>
<pre><code class="markdown">&lt;div v-bind:class="{'class1': 1 === 1}"&gt;&lt;/div&gt;</code></pre>
<pre><code class="markdown">&lt;div v-bind:class="{'class1': 5 > (3+1)}"&gt;&lt;/div&gt;</code></pre>


[slide]
#表达式
----
提供了完全的 JavaScript 表达式支持
<pre><code class="markdown">&lt;div&gt;{{5+5}}&lt;/div&gt;</code></pre>
<pre><code class="markdown">&lt;div&gt;{{ true ? 'YES' : 'NO' }}&lt;/div&gt;</code></pre>
<pre><code class="markdown">&lt;div&gt;{{ message.split('').reverse().join('') }}&lt;/div&gt;</code></pre>


[slide]
#基本语法--表单控件
----
{:&.zoomIn}
> v-model 指令在表单控件元素上创建双向数据绑定。
* input & textarea
* radio checkbox select
<pre><code class="markdown">&lt;input v-model="message"&gt;
&lt;p&gt;{{ message }}&lt;/p&gt;
&lt;textarea v-model="msg"&gt;&lt;/textarea&gt;
&lt;p&gt;{{ msg }}&lt;/p&gt;
&lt;input type="checkbox" id="checkbox" v-model="checked"&gt;
&lt;p&gt;{{ checked }}&lt;/p&gt;
</code></pre>


[slide]
#基本语法--组件(Component)  {:&.zoomIn}
Vue.js 最强大的功能之一
----
<img src="/img/com.png" style="width:500px;margin: 0 auto;"> 

[slide]
#注册组件
----
方式一：
<pre><code class="JavaScript">Vue.component('my-component', {
  // 选项
})</code></pre>
方式二：
<pre><code class="JavaScript"> var comName = Vue.extend({
 // 选项
 });</code></pre>



[slide]
#引用组件
-----
<pre><code class="JavaScript">&lt;div id="app"&gt;
    &lt;my-component&gt;&lt;/my-component&gt;
    &lt;comName&gt;&lt;/comName&gt;
&lt;/div&gt;
</code></pre>

[slide]
#基本语法--事件&通信
----
##监听事件(v-on)
> click dbclick onmouseover onmouseenter onfocus onblur
====
##事件修饰
<pre><code class="JavaScript">/*阻止单击事件冒泡*/
&lt;a v-on:click.stop="doThis"&gt;&lt;/a&gt;
/*提交事件不再重载页面*/
&lt;form v-on:submit.prevent="onSubmit"&gt;&lt;/form&gt;
/*修饰符可以串联*/
&lt;a v-on:click.stop.prevent="doThat"&gt;&lt;/a&gt;
/*只有修饰符*/
&lt;form v-on:submit.prevent&gt;&lt;/form&gt;
/*添加事件侦听器时使用事件捕获模式*/
&lt;div v-on:click.capture="doThis"&gt;...&lt;/div&gt;
/*只当事件在该元素本身（而不是子元素）触发时触发回调*/
&lt;div v-on:click.self="doThat"&gt;...&lt;div&gt;
</code></pre>


[slide]
#通信

[slide]
<img src="/img/com.jpg" style="width:500px;margin: 0 auto;">

[slide]
##通信方式一
<pre><code class="JavaScript">
/*广播*/
$broadcast(eventName, [data])

this.$broadcast('get', {
        data : ’作业帮‘
    })
</code></pre>

<pre><code class="JavaScript">
/*派发*/
$dispatch(eventName, [data])


this.$dispatch('send', {
        data : '作业帮'
    })
</code></pre>

[slide]
##通信方式二[父子]
<pre><code class="JavaScript">
/*父子通信*/
语法：v-bind:propsName="value"

实例：&lt;child :zuoyebang="作业帮"&gt;&lt;/child&gt;

{
    ...
    props : ['zuoyebang']
    ...
}
</code></pre>

[slide]
##通信方式二[子父]
<pre><code class="JavaScript">
/*子父通信*/
语法：&lt;HtmlTags v-on:eventName="event" ...&gt;&lt;/HtmlTags&gt;

实例：&lt;child :zuoyebang="作业帮" v-on:add="count"&gt;&lt;/child&gt;
</code></pre>

<pre><code class="JavaScript">
    /*子组件*/
    ...
    methods : {
        add : function(){
            /*处理逻辑*/
            this.$emit('add',{
                data : '作业帮'
            });
        }
    }...
</code></pre>

<pre><code class="JavaScript">

    /*父组件*/
    ...
    methods : {
        count : fn(r);
    }
    ...
</code></pre>

[slide]
##通信方式二[组件间]

<pre><code class="JavaScript">
用法：
    发出--> hub.$emit(eventName, data);
    接收--> hub.$on(eventName, fn)
</code></pre>


<pre><code class="JavaScript">
/*post*/
methods: {
    add: function () {
        bus.$emit('inc', data)
    }
}
</code></pre>
<pre><code class="JavaScript">
/*get*/
created: function () {
    bus.$on('inc', function (data) {
        /*逻辑*/
    });
}
</code></pre>












[slide]
#其他
----
* 过滤器 {:&.zoomIn}
* 计算属性
* Vuex
* Vue-router
* axios & vue-resource
* Vue-cli
* ...

[slide]
#Vue实例
----
* 豆瓣电影 https://github.com/Recklesslmz/vue-douban.git  {:&.zoomIn}
* <a href="https://hj0503.github.io/vue-buy-tickets/#/home/trainticket">火车票</a> https://github.com/hj0503/vue-buy-tickets.git
* <a href="https://zsqio.github.io/vuex-meitu-demo/index.html#/">美图官网</a> https://github.com/zsqio/vue-meitu.git
* 简书 https://github.com/jiayisheji/jianshu.git
* <a href="https://luxroid.com/lianjia/#/" target="_blank">链家</a> https://github.com/mixihome/lianjia.git
* 滴滴出行 https://github.com/uncleze2017/Imitation-DIDI-project.git
*  <a href="https://yuxiuting.github.io/qqMusic/#/" target="_blank">QQ音乐</a> https://github.com/yuxiuting/Vue-qqMusic.git
* <a href="http://ntrmusic.duapp.com/#/home/newmusic/" target="_blank">网易云音乐</a> https://github.com/lichddd/ntrmusic.git
* QQ https://github.com/jiangqizheng/vue2-MiniQQ.git
* <a href='http://zhaohaodang.com:8888/' target="_blank">微信</a> https://github.com/zhaohaodang/vue-WeChat.git



[slide]
#千里之行,始于足下.

[slide]
#THANKS


