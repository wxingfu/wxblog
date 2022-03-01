---
title: Servlet笔记
date: 2022-02-27
categories:
- Servlet
tags:
- Servlet
---

[[toc]]

## Servlet之请求域（HttpServletRequest）
**request用法:**
```java
request.getScheme()用法，request.getscheme

String path = request.getContextPath();

String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

request.getSchema()可以返回当前页面使用的协议，http 或是 https;
request.getServerName()可以返回当前页面所在的服务器的名字;
request.getServerPort()可以返回当前页面所在的服务器使用的端口,就是80;
request.getContextPath()可以返回当前页面所在的应用的名字;

String scheme = request.getScheme();
String serverName = request.getServerName();
int serverPort = request.getServerPort();
String contextPath = request.getContextPath();
String redirect = scheme + "://" + serverName + ":" + serverPort + contextPath + "/";
String redirect = request.getScheme() + "://" +  request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/";
```
