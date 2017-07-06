title: vue介绍
speaker: 李亮
url: https://github.com/zkyeu
transition: slide3
files: /js/vue.js,/css/vue.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]
# 前端框架Vuejs

<small><span class="blue">作业帮-直播课研发团队-教师端  李亮</span></small>

<small><span>2017.07.05</span></small>

[slide]
##不学自知，不问自晓，古今行事，未之有也
----
<span class="yellow3">不用学习就知道,不用提问就明白,这种事无论古今都是绝无仅有的.教导我们要勤奋,好学,不懂就问</span>{:&.rollIn}


[slide]
# 主流框架
[note]
<img src="/img/ifram.jpg" style="width: 100%;">
[/note]
[slide]
<img src="/img/all.png">
----
*  Knockout|Polymer|Jquery[Zepto]|Riot|Dojo|*Avalon*等等 {:&.rollIn}
* 纯模板引擎：最少的就是纯模板引擎，只管状态到界面的映射
* React和Vue：两者都专注只做状态到界面映射，以及组件
* Backbone：更多一些架构指导，不是数据双向绑定
* Angular：做的事情多，有自己的路由,生态体系
* Ember：相比Angular，Ember做得就更加彻底，它会将一切都帮你设计好打包好，你就开箱用就可以了
* Meteor：Meteor只是一个极端，它是从前到后全都包含，从前端到数据层到数据库，全都帮你打包好


[slide]
----
* React和Vue有一个共同特点，都有各自的配套工具，核心只解决一个很小的问题 {:&.rollIn}
* 有生态圈及配套的可选工具，逐个加进来，就可以组合成非常强大的栈[*渐进式*]
* <img src="/img/all2.png">


[slide]
# *MVC* & MVVM
* 软件中最核心的，最基本的东西是什么? 是数据。我们写的所有代码，都是围绕数据的 {:&.rollIn}
* 围绕着数据的产生、修改等变化，出现了业务逻辑
* 围绕着数据的显示，出现了不同的界面技术

[slide]
[note]
##MVC优点
----
*   由于MVC很好的分离了视图层和业务层，所以它具有以下优点
*  耦合性低
*   开发速度快
*   可维护性高
*   没有控件的概念，对html没有封装，易于理解
*  和其它平台(java, php)等更加相似。便于人才获取
[/note]
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
[note]
<img src="/img/vue2.png" style="width: 100%;">
[/note]
<img src="/img/mvvm.png" style="width: 500px;">
----
* 双向绑定,V的变动,自动反映在VM,反之亦然,M数据的变动,也自动展示给页面显示 {:&.rollIn}
* VM负责把M的数据同步到V显示出来,还负责把V的修改同步回M



[slide]
# Vue作者
<img src="/img/yyx.jpg">

> http://evanyou.me/


[slide]
# Vue发展简史
----
* 2014年3月，Vue.js 0.10 开源发布[官方定位是视图管理]  {:&.zoomIn}
* 2014年10月，大范围使用
* 2015年 NPM下载量: 382,184, ~52k每月
* 2016年4月，Vue2版本发布[官方定位是渐进式框架]
* 2016年5月，vuejs的starts数超过angular
* 2016年12月 NPM下载量: 1,943,567(比2015, +300%)
* 2017年2月 版本2.2发布[webpack结合]
* 2017年6月 github star 全球排名12[7月3日 *第11*]
* <img src="/img/angular.png">
* <img src="/img/vue.png">



[slide]
## 为什么选择Vue

[slide data-transition="vertical3d"]
<img src="/img/speed.png" style="width: 100%">

[slide]
# 渲染 10,000 个列表项 100次
<small style="font-size: 1.2rem;">Chrome52 2014年MacBook Air,每个参照项目分开运行20次</small>
---
| Vue | React
:-------|:------:|-------
Fastest| 23ms   | 63ms
Median | 42ms  |  81ms
Average| 51ms  |  94ms
95th Perc. | 73ms  |  164ms
Slowest | 343ms |  453ms



[slide]

* *易用* {:&.rollIn}
* > 已经会了HTML,CSS,JavaScript？阅读指南即可构建
* *灵活*
* > 简单小巧，渐进式技术栈，足以应付任何规模的应用
* *性能*
* > 17kb大小 超快虚拟DOM
* <img src="/img/v1.png" style="width:300px;height:260px;margin-top: 20px;"> <img src="/img/v2.png"  style="width:300px;height:260px;">

[slide]
# Vue应用情况
----
<img src="/img/logo.jpg"> {:&.zoomIn}


[slide]
# 基本语法
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
# 生命周期 
----
<img src="/img/lifecycle.png" style="width:500px;margin: 0 auto;"> {:&.rollIn}

[slide]
# 安装
----
方式一：npm安装
<pre><code class="javascript">npm install vue</code></pre>

方式二：script直接引入
<pre><code class="javascript">&lt;script src="./vue.js"&gt;&lt;/script&gt;</code></pre>


[slide]
#基本结构
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
<pre><code class="markdown">msg: '作业帮'</code></pre>
<pre><code class="markdown">&lt;span&gt;Message: *{{ msg }}*&lt;/span&gt;</code></pre>
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
#基本语法--组件(Component)
----
Vue.js 最强大的功能之一
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
[note]
* 阻止单击事件冒泡
<pre><code class="JavaScript">&lt;a v-on:click.stop="doThis"&gt;&lt;/a&gt;</code></pre>

* 添加事件侦听器时使用事件捕获模式
<pre><code class="JavaScript">&lt;div v-on:click.capture="doThis"&gt;...&lt;/div&gt;
</code></pre>

* 只当事件在该元素本身（而不是子元素）触发时触发回调<pre><code class="JavaScript">&&lt;div v-on:click.self="doThat"&gt;...&lt;/div&gt;
</code></pre>


* 只有在 keyCode 是 13 时调用 vm.submit()
<pre><code class="JavaScript">&lt;input v-on:keyup.13="submit"&gt;
&lt;input v-on:keyup.enter="submit"&gt;
&lt;input @keyup.enter="submit&gt;
</code></pre>

* Ctrl + Click
<pre><code class="JavaScript">&lt;div @click.ctrl="doSomething">Do something&lt;/div&gt;
</code></pre>

[/note]

#基本语法--事件

<pre><code class="JavaScript">
#事件修饰
.stop .prevent .capture .self.once
#键值修饰符
.enter.tab.delete.esc.space.up.dow.left.right
#修饰键
.ctrl.alt.shift.meta
#滑鼠按键修饰符
.left.right.middle
</code></pre>


[slide]
#基本语法-通信

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
# 基本语法--路由

[slide]
<img src="/img/router.png" style="width:600px;margin: 0 auto;">

[slide]

<img src="/img/router.gif" style="width:600px;margin: 0 auto;">

[slide]
## 语法

<pre><code class="JavaScript">/*引用形式*/
&lt;router-link to="跳转地址1"&gt;菜单1&lt;/router-link&gt;
&lt;router-link to="跳转地址2"&gt;菜单2&lt;/router-link&gt;
/*展现*/
&lt;router-view&gt;&lt;/router-view&gt;
</code></pre>

[slide]
#使用方式
<pre><code class="JavaScript">/*引用形式*/
&lt;router-link to="跳转地址1"&gt;菜单1&lt;/router-link&gt;
&lt;router-link to="跳转地址2"&gt;菜单2&lt;/router-link&gt;
/*展现*/
&lt;router-view&gt;&lt;/router-view&gt;

/*全局注册*/
    var router = new VueRouter({
        routes : [
            {
                path : '跳转地址1',
                component : 显示的组件名称
            },
            {
                path : '跳转地址2',
                component : 显示的组件名称
            },
            ......
        ]
    });
    /*挂载*/
    router : router
</code></pre>

[slide]
#其他
----
* 过滤器 {:&.zoomIn}
* 计算属性
* Vuex
* axios & vue-resource
* Vue-cli
* 服务器渲染
* 单元测试
* ...


[slide]
#Vue实例1
<iframe data-src="http://ntrmusic.duapp.com/#/home/newmusic/" src="about:blank;"></iframe>
[slide]
#Vue实例2
<iframe data-src="https://luxroid.com/lianjia/#/" src="about:blank;"></iframe>



[slide]
#Vue实例
----
* <a href="https://github.com/Recklesslmz/vue-douban.git" target="_blank">豆瓣电影</a>  {:&.zoomIn}
* <a href="https://juejin.im/post/58fed39cb123db260cb30587" target="_blank">今日头条</a>
* <a href="https://zsqio.github.io/vuex-meitu-demo/index.html#/" target="_blank">美图官网</a>
* <a href="https://luxroid.com/lianjia/#/" target="_blank">链家</a>
* <a href="https://github.com/uncleze2017/Imitation-DIDI-project.git" target="_blank">滴滴出行</a>
* <a href="https://yuxiuting.github.io/qqMusic/#/" target="_blank">QQ音乐</a>
* <a href="http://ntrmusic.duapp.com/#/home/newmusic/" target="_blank">网易云音乐</a>
* <a href="https://github.com/jiangqizheng/vue2-MiniQQ.git" target="_blank">QQ</a>
* <a href='http://zhaohaodang.com:8888/' target="_blank">微信</a>
* <a href="https://sukura7.github.io/vue-xianyu-demo/index.html#/" target="_blank">阿里闲鱼</a>


[slide]
# 千里之行，始于足下。

[slide]
# Thanks


