---
title: JavaScript笔记
date: 2022-02-27
categories:
- 前端
tags:
- JavaScript
---

## JavaScript倒计时功能
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<input type="button" style="height:32px;width:120px;" value="点击发送验证码" onclick="sendCode(this)" />
<script type="text/javascript">
	 var clock = '';
	 var nums = 10;
	 var retnums = 10;
	 var btn;
	 function sendCode(thisBtn)
	 { 
		btn = thisBtn;
		// 将按钮置为不可点击
		btn.disabled = true; 
		btn.value = nums+'秒后可重新获取';
		// 一秒执行一次
		clock = setInterval(doLoop, 1000); 
	 }
	 function doLoop()
	 {
		 nums--;
		 if(nums > 0){
			btn.value = nums+'秒后可重新获取';
		 }else{
			// 清除js定时器
			clearInterval(clock); 
			btn.disabled = false;
			btn.value = '点击发送验证码';
			// 重置时间
			nums = retnums;
		}
	 }
</script>
```
