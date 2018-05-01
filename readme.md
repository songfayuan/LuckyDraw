# 一个HTML+JS编写的抽签（抽奖）程序

### 感谢@gavinjzx（阿提）成熟的源代码与详细的注释

### 我@PillarsZhang（章鱼DS）fork并改进这个项目是为了班级的班队课抽签用的

***

### *以下为原版+补充的readme*

> 把代码分享出来，有需要的朋友可载下来，修改成自己所需要的格式。
>
>因为使用了css3 animation，所以建议使用chrome,firefox,IE10及以上（IE9及以下不支持css3 animation）。

***

- 调用库：
  - js: jquery
  - css: animation

- 文件结构：
  - \index.html  			抽奖主界面
  - \js\index.js	 		JS主程序
  - \js\lib\jquery-1.12.4.min.js	jQuery文件
  - \js\lib\common.js		一些公用函数
  - \css\animate.css		css3 animation库
  - \css\style.less			样式Less文件
  - \css\widget\*.less		style.less引用的less文件
  - \css\img\			页面上所用到的图标文件

- 一些个性化设置
  - \css\img\bg.png 背景图片（包括上方几个字，用PS改，PSD文件已经放在旁边了）

- PillarsZhang所做的改进
  - \js\autozoom.js 自适应缩放
  - \js\settings.js 更改名单及相关设置
  - 是否每次抽取后把人数框清空
  - 去掉跳动的文本框的外框
  - 用unselectable="on"来去掉文本框的光标
  - 开始按钮后显示剩余人数
  - 添加一个“准备就绪”文字（改了好多诶）
  - 还有......
***
### 界面预览
在线演示：[http://demo.pizyds.xyz/LuckyDraw/index.html](http://demo.pizyds.xyz/LuckyDraw/index.html)
