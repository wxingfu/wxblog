# Forest使用分享

## 一、Forest基本介绍

### 什么是 Forest？

​       Forest是一个开源的Java HTTP客户端框架，它能够将HTTP的所有请求信息（包括URL、Header以及Body等信息）绑定到自定义的Interface方法上，能够通过调用本地接口方法的方式发送HTTP请求

### 为什么使用 Forest?

​       使用Forest就像使用类似Dubbo那样的RPC框架一样，只需要定义接口，调用接口即可，不必关心具体发送HTTP请求的细节。同时将HTTP请求信息与业务代码解耦，可以方便统一管理大量HTTP的URL、Header等信息。而请求的调用方完全不必在意HTTP的具体内容，即使该HTTP请求信息发生变更，大多数情况也不需要修改调用发送请求的代码

### Forest 如何使用?

​        Forest不需要编写具体的HTTP调用过程，只需要定义一个接口，然后通过Forest注解将HTTP请求的信息添加到接口的方法上即可。请求发送方通过调用定义的接口便能自动发送请求和接受请求的响应

### Forest 的工作原理

​        Forest会将定义好的接口通过动态代理的方式生成一个具体的实现类，然后组织、验证HTTP请求信息，绑定动态数据，转换数据形式，SSL验证签名，调用后端HTTP API(httpclient等API)执行实际请求，等待响应，失败重试，转换响应数据到Java类型等脏活累活都由这动态代理的实现类给包了。请求发送方调用这个接口时，实际上就是在调用这个干脏活累活的实现类

### Forest 的架构

<img src="/images/forest-architecture.svg" alt="forest-architecture" style="zoom: 80%;" />

#### **前端部分**

1. Forest 配置： 负责管理 HTTP 发送请求所需的配置。
2. Forest 注解： 用于定义 HTTP 发送请求的所有相关信息，一般定义在 interface 上和其方法上。
3. 动态代理： 用户定义好的 HTTP 请求的`interface`将通过动态代理产生实际执行发送请求过程的代理类。
4. 模板表达式： 模板表达式可以嵌入在几乎所有的 HTTP 请求参数定义中，它能够将用户通过参数或全局变量传入的数据动态绑定到 HTTP 请求信息中。
5. 数据转换： 此模块将字符串数据和`JSON`或`XML`形式数据进行互转。目前 JSON 转换器支持`Jackson`、`Fastjson`、`Gson`三种，XML 支持`JAXB`一种。
6. 拦截器： 用户可以自定义拦截器，拦截指定的一个或一批请求的开始、成功返回数据、失败、完成等生命周期中的各个环节，以插入自定义的逻辑进行处理。
7. 过滤器： 用于动态过滤和处理传入 HTTP 请求的相关数据。
8. SSL： Forest 支持单向和双向验证的 HTTPS 请求，此模块用于处理 SSL 相关协议的内容。

#### **后端部分**

​       后端为实际执行 HTTP 请求发送过程的第三方 HTTP API，目前支持`okHttp3`和`httpclient`两种后端 API。

### 所需环境

JDK 8+

### 名字由来

​        Forest就字面意思而言，就是森林的意思。但仔细看可以拆成`For`和`Rest`两个单词，也就是“为了Rest”（Rest为一种基于HTTP的架构风格）。 而合起来就是森林，森林由很多树木花草组成（可以理解为各种不同的服务），它们表面上看独立，实则在地下根茎交错纵横、相互连接依存，这样看就有点现代分布式服务化的味道了。 最后，这两个单词反过来读就像是`Resultful`。

### 特点

#### 容易上手

> 10分钟可完成请求的定义、发送、接收、解析、错误处理、日志打印等过程，此外还有直观的API和详尽的文档

#### 简单优雅

> 将繁复的HTTP请求细节封装成Java接口+注解的形式，不必关心请求发送的具体过程

#### 扩展灵活

> 能使用自定义拦截器和自定义注解来扩展Forest的能力，即使面对意想不到的场景也能轻松应对

## 二、极速入门

​        在Forest中，所有的HTTP请求信息都要绑定到某一个接口的方法上，不需要编写具体的代码去发送请求。请求发送方通过调用事先定义好HTTP请求信息的接口方法，自动去执行HTTP发送请求的过程，其具体发送请求信息就是该方法对应绑定的HTTP请求信息

以下例子基于Spring Boot

### 第一步：添加Maven依赖

```xml
<dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-spring-boot-starter</artifactId>
    <version>1.5.31</version>
</dependency>
```

### 第二步：创建接口

```java
public interface AmapClient {
    @Get("http://ditu.amap.com/service/regeo?longitude={0}&latitude={1}")
    Map getLocation(String longitude, String latitude);
}
```

### 第三步：扫描接口

在Spring Boot的配置类或者启动类上加上`@ForestScan`注解，并在`basePackages`属性里填上远程接口的所在的包名。

> 1.5.1以后版本可以跳过此步，不需要 @ForestScan 注解来指定扫描的包范围

```java
@SpringBootApplication
@Configuration
@ForestScan(basePackages = "com.yoursite.client")
public class MyApplication {
  public static void main(String[] args) {
      SpringApplication.run(MyApplication.class, args);
   }
}
```

### 第四步：调用接口

```java
// 注入接口实例
@Autowired
private AmapClient amapClient;
...
// 调用接口
Map result = amapClient.getLocation("121.475078", "31.223577");
System.out.println(result);
```

**发送JSON数据**

```java
/**
 * 将对象参数解析为JSON字符串，并放在请求的Body进行传输
 */
@Post("/register")
String registerUser(@JSONBody MyUser user);
```

**发送XML数据**

```java
/**
 * 将一个通过JAXB注解修饰过的类型对象解析为XML字符串
 * 并放在请求的Body进行传输
 */
@Post("/message")
String sendXmlMessage(@XMLBody MyMessage message);
```

**文件上传**

```java
/**
 * 用@DataFile注解修饰要上传的参数对象
 * OnProgress参数为监听上传进度的回调函数
 */
@Post("/upload")
Map upload(@DataFile("file") String filePath, OnProgress onProgress);
```

**多文件批量上传**

```java
/**
 * 上传Map包装的文件列表，其中 {_key} 代表Map中每一次迭代中的键值
 */
@Post("/upload")
ForestRequest<Map> uploadByteArrayMap(
    @DataFile(value = "file", fileName = "{_key}") Map<String, byte[]> byteArrayMap);
```

**文件下载**

```java
/**
 * 在方法上加上@DownloadFile注解
 * dir属性表示文件下载到哪个目录
 * OnProgress参数为监听上传进度的回调函数
 * {0}代表引用第一个参数
 */
@Get("http://localhost:8080/images/xxx.jpg")
@DownloadFile(dir = "{0}")
File downloadFile(String dir, OnProgress onProgress);
```

**基本签名验证**

```java
@Post("/hello/user?username={username}")
@BasicAuth(username = "{username}", password = "bar")
String send(@DataVariable("username") String username);
```

**等等…**

## 三、安装配置说明

### 如何安装

Forest 可适配集成 Springboot、Spring 等多种不同的项目环境，也可直接在普通的 Java 项目中使用

可以根据项目需要，选择不同的环境进行安装

- Springboot环境安装

  引入依赖

  ```xml
  <!--Forest Starter-->
  <dependency>
      <groupId>com.dtflys.forest</groupId>
      <artifactId>forest-spring-boot-starter</artifactId>
      <version>1.5.28</version>
  </dependency>
  ```

- Spring环境安装

  引入依赖

  ```xml
  <!--Forest核心-->
  <dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-core</artifactId>
    <version>1.5.28</version>
  </dependency>
  <!--Forest和Spring整合包-->
  <dependency>
    <groupId>com.dtflys.forest</groupId>
    <artifactId>forest-spring</artifactId>
    <version>1.5.28</version>
  </dependency>
  ```

- 原生Java环境安装

  引入依赖

  ```xml
  <!--Forest核心-->
  <dependency>
      <groupId>com.dtflys.forest</groupId>
      <artifactId>forest-core</artifactId>
      <version>1.5.28</version>
  </dependency>
  <!--JSON-->
  <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-core</artifactId>
      <version>2.9.10</version>
  </dependency>
  <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-databind</artifactId>
      <version>2.9.10</version>
  </dependency>
  <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-annotations</artifactId>
      <version>2.9.10</version>
  </dependency>
  <!--日志-->
  <dependency>
      <groupId>org.slf4j</groupId>
      <artifactId>slf4j-api</artifactId>
      <version>1.7.36</version>
  </dependency>
  <dependency>
      <groupId>ch.qos.logback</groupId>
      <artifactId>logback-classic</artifactId>
      <version>1.2.11</version>
  </dependency>
  ```

### 如何配置

Forest 遵循约定大于配置的理念，大多数情况下不需要进行配置，或填写非常简单的配置即可

但不同项目环境配置方式各有不同，需要根据项目需要，选择不同的环境进行配置

- Springboot环境配置

  简单配置：在`application.yaml` / `application.properties`中配置的 HTTP 基本参数

  ```yaml
  forest:
    max-connections: 1000        # 连接池最大连接数
    connect-timeout: 3000        # 连接超时时间，单位为毫秒
    read-timeout: 3000           # 数据读取超时时间，单位为毫秒
  ```

- Spring环境配置

  简单配置：

  配置 XML SCEHEMA

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns:forest="http://forest.dtflyx.com/schema/forest"
         xsi:schemaLocation="http://www.springframework.org/schema/beans
         http://www.springframework.org/schema/beans/spring-beans.xsd
         http://forest.dtflyx.com/schema/forest
         http://forest.dtflyx.com/schema/forest/forest-spring.xsd">
     ...
  </beans>
  ```

  添加Forest基本配置的定义

  ```xml
  <!-- Forest 全局配置 -->
  <!-- maxConnections 每个路由的最大连接数 -->
  <!-- connectTimeout 连接超时时间，单位为毫秒 -->
  <!-- readTimeout 数据读取超时时间，单位为毫秒 -->
  <forest:configuration
          id="configuration"
          maxConnections="500"
          connectTimeout="10000"
          readTimeout="3000">
      <!-- 定义 Forest 客户端接口所在的包名 -->
      <!-- 扫描 base-package 属性定义包，然后会将该包名下符合条件的接口进行动态代理并注入到 Spring 的上下文中 -->
      <forest:scan configuration="configuration" base-package="com.yoursite.client"/>
  </forest:configuration>
  ```

- 原生Java环境配置

  简单配置：

  ```java
  // 获取 Forest 全局配置对象
  ForestConfiguration configuration = Forest.config();
  // 连接池最大连接数
  configuration.setMaxConnections(1000);
  // 连接超时时间，单位为毫秒
  configuration.setConnectTimeout(2000);
  // 数据读取超时时间，单位为毫秒
  configuration.setReadTimeout(2000);
  ```

### 如何使用

Forest 提供两种开发使用模式：`声明式`和`编程式`

`声明式`需要定义Java接口，以及请求对应的接口方法，这样会有一个非常清晰的网络接口结构，十分有利于API管理

声明式的模式在不同项目环境中也有所不同，需要根据项目需要，选择不同的方式进行开发

- Springboot环境使用
- Spring环境使用
- 原生Java环境使用

Forest也提供了快捷的编程式接口，以满足非声明式的开发模式

`编程式`接口短小精悍，快速便捷，十分有利于开发那些数量少、或大量参数（如URL）不固定的API

## 四、声明式开发模式

### 第一步：定义Java接口

```java
public interface MyClient {

    @Get("http://localhost:8088/test/hello-get")
    String helloGet();
    
    @Post("http://localhost:8088/test/hello-post")
    String helloPost(@Body User user);

    /**
     * 通过@Request注解，将simpleRequest()方法绑定了一个 HTTP 请求，
     * 其 URL 为http://localhost:8080/hello ，并默认使用GET方式，
     * 且将请求响应的数据以String的方式返回给调用者
     */
    @Request("http://localhost:8080/hello")
    String simpleRequest();

    /**
     * sendRequest方法绑定的 HTTP 请求，定义了 URL 信息，以及把Accept:text/plain加到了请求头中，
     * 方法的参数String username绑定了注解@Query("uname")，
     * 它的作用是将调用者传入入参 username 时，自动将username的值加入到 HTTP 的请求参数uname中
     */
    @Request(url = "http://localhost:8080/hello/user",headers = "Accept: text/plain")
    String sendRequest(@Query("uname") String username);
}
```

### 第二步：调用接口

```java
@Slf4j
@SpringBootTest
public class ForestClientAppTest {
    
    @Resource
    private MyClient myClient;
    
    @Test
    public void test1() {
        String s = myClient.helloGet();
    }
    
    @Test
    public void test2() {
        User user = new User("post", 123, "男");
        String s = myClient.helloPost(user);
    }
    
    @Test
    public void test3() {
        String s = myClient.simpleRequest();
    }
    
    @Test
    public void test4() {
        String s = myClient.sendRequest("小明");
    }
}
```



### 请求代码解析

Forest 使用不同的**请求注解**来标识某个接口方法来进行发送不同类型的请求，其支持的HTTP方法如下表所示:

| HTTP 请求方法 | 请求注解                      | 描述               |
| ------------- | ----------------------------- | ------------------ |
| **GET**       | `@Get`、`@GetRequest`         | 获取资源           |
| **POST**      | `@Post`、`@PostRequest`       | 传输实体文本       |
| **PUT**       | `@Put`、`@PutRequest`         | 上传资源           |
| **HEAD**      | `@HeadRequest`                | 获取报文首部       |
| **DELETE**    | `@Delete`、`@DeleteRequest`   | 删除资源           |
| **OPTIONS**   | `@Options`、`@OptionsRequest` | 询问支持的方法     |
| **TRACE**     | `@Trace`、`@TraceRequest`     | 追踪路径           |
| **PATCH**     | `@Patch`、`@PatchRequest`     | 更新资源的某一部分 |
| **不定方法**  | `@Request`                    | 可动态传入HTTP方法 |

**接口注解：**

`@BaseRequest `

> `@BaseRequest`注解定义在接口类上，在`@BaseRequest`上定义的属性会被分配到该接口中每一个方法上，但方法上定义的请求属性会覆盖`@BaseRequest`上重复定义的内容。 因此可以认为`@BaseRequest`上定义的属性内容是所在接口中所有请求的默认属性。

```java
/**
 * @BaseRequest 为配置接口层级请求信息的注解
 * 其属性会成为该接口下所有请求的默认属性
 * 但可以被方法上定义的属性所覆盖
 */
@BaseRequest(
    baseURL = "http://localhost:8080",     // 默认域名
    headers = {
        "Accept:text/plain"                // 默认请求头
    },
    sslProtocol = "TLS"                    // 默认单向SSL协议
)
public interface MyClient {
  
    // 方法的URL不必再写域名部分
    @Get("/hello/user")
    String send1(@Query("username") String username);

    // 若方法的URL是完整包含http://开头的，那么会以方法的URL中域名为准，不会被接口层级中的baseURL属性覆盖
    @Get("http://www.xxx.com/hello/user")
    String send2(@Query("username") String username);
  
    @Get(
        url = "/hello/user",
        headers = {
            "Accept:application/json"      // 覆盖接口层级配置的请求头信息
        }
    )     
    String send3(@Query("username") String username);
}
```

**既可以做接口注解也可以做方法注解：**

`@Backend`：为接口下的每一个方法请求设置HTTP后端框架

`@Address`：将URL地址提取出来，方便管理

```java
/**
 * @Backend 是一个方法维度的注解，但也可以挂在接口上
 * 它可以为接口下的每一个方法请求设置HTTP后端框架
 * 所以该接口下所有请求默认都会使用 OkHttp3
 */
@Backend("okhttp3")
@Address(host = "localhost", port = "8080")
public interface MyClient {

    /**
     * 使用接口默认后端框架，即 OkHttp3
     */
    @Post("/data1")
    String sendData1(@Body MyData data);

    /**
     * 使用接口默认后端框架，即 OkHttp3
     */
    @Post("/data2")
    @Address(host = "localhost", port = "8088")
    String sendData2(@Body MyData data);

    /**
     * 使用了接口上相同的注解 @Backend
     * 覆盖了改接口默认后端框架配置
     * 所以该请求会使用 HttpClient 作为后端框架
     */
    @Backend("httpclient")
    @Post("/data3")
    String sendData3(@Body MyData data);
}
```

### 接收数据

Forest请求会自动将响应的返回数据反序列化成想要的数据类型。想要接受指定类型的数据需要完成两步操作：

**第一步**：定义`dataType`属性

`dataType`属性指定了该请求响应返回的数据类型，目前可选的数据类型有三种: `text`, `json`, `xml`

```java
/**
 * dataType为text或不填时，请求响应的数据将以文本字符串的形式返回回来
 */
@Request(url = "http://localhost:8080/text/data",
    dataType = "text")
String getData();
```

**第二步**：指定反序列化的目标类型

反序列化需要一个目标类型，而该类型其实就是方法的返回值类型，如返回值为`String`就会反序列成`String`字符串，返回值为`Map`就会反序列化成一个HashMap对象，也可以指定为自定义的Class类型

```java
/**
 * dataType属性指明了返回的数据类型为JSON
 */
@Get(url = "http://localhost:8080/user?id=${0}",
    dataType = "json")
User getUser(Integer id);
```

#### 返回请求对象

将`ForestRequest`作为请求方法的返回值类型，调用该方法时不会立即执行请求发送的过程，而是直接返回一个`ForestRequest`对象，可以延迟发送HTTP请求，并对要即将发送的请求参数做进一步的修改和加工

```java
public interface MyForestClient {
    @Get("/test")
    ForestRequest<?> getForestRequest();
}
```

在调用`getForestRequest()`方法后获得该请求方法所对应的请求对象。获得 Forest 请求对象时并不会自动发送请求，需要调用`execute()`或`execute(Class)`这类方法手动执行请求发送的过程。

```java
ForestRequest<?> request = myForestClient.getForestRequest();
String path = request.path();
String ret = request.execute(String.class); 
```

#### 返回响应对象

直接用普通的对象类型作为请求方法的返回类型，可以将响应数据方便的反序列化，以满足大部分的需求。但还有很多时候不光需要获取响应内容，也需要得到响应头等信息，这时候就需要 `ForestResponse` 来处理

将`ForestResponse`作为请求方法的返回值类型

```java
@Post("http://localhost:8080/user")
ForestResponse<String> postUser(@JSONBody User user);
```

用`ForestResponse`对象接到请求响应数据后便可以获取响应内容

```java
// 以ForestResponse类型变量接受响应数据
ForestResponse<String> response = client.postUser(user);
// 用isError方法去判断请求是否失败
if (response.isError()) {
    ... ...
}
// 用isSuccess方法去判断请求是否成功
if (response.isSuccess()) {
    ... ...
}
// 以字符串方式读取请求响应内容
String text = response.readAsString();
// getContent方法可以获取请求响应内容文本
// 和readAsString方法不同的地方在于，getContent方法不会读取二进制形式数据内容，
// 而readAsString方法会将二进制数据转换成字符串读取
String content = response.getContent();
// 获取反序列化成对象类型的请求响应内容
// 因为返回类型为ForetReponse<String>, 其泛型参数为String
// 所以这里也用String类型获取结果        
String result = response.getResult();
// 以字节数组的形式获取请求响应内容
byte[] byteArray = response.getByteArray();
// 以输入流的形式获取请求响应内容
InputStream in = response.getInputStream();
```

#####  拦截器中获取响应对象

```java
public class SimpleInterceptor1 implements Interceptor<String> {
    @Override
    public void afterExecute(ForestRequest request, ForestResponse response) {
        // 执行在发送请求之后处理的代码
        int status = response.getStatusCode(); // 获取请求响应状态码
        String content = response.getContent(); // 获取请求的响应内容
        String result = response.getResult(); // 获取方法返回类型对应的最终数据结果
    }
}
```

##### 回调函数中获取响应对象

```java
@Post("http://localhost:8080/user")
void postUser(@JSONBody User user, OnSuccess<String> onSuccess);

... ...
    
client.postUser(user, (String resText, ForestRequest request, ForestResponse response) -> {
    // 在成功接收请求响应后处理
    int status = response.getStatusCode(); // 获取请求响应状态码
    String content = response.getContent(); // 获取请求的响应内容
    String result = response.getResult(); // 获取方法返回类型对应的最终数据结果
});
```

##### 获取响应头

```java
ForestResponse<String> response = client.textXXX();
// 根据响应头名称获取单个请求响应头
ForestHeader header = response.getHeader("Content-Type");
// 响应头名称
String headerName = header.getName();
// 响应头值
String headerValue = header.getValue();
// 根据响应头名称获取请求响应头列表
List<ForestHeader> heaers = response.getHeaders("Content-Type");
// 根据响应头名称获取请求响应头值
String val = response.getHeaderValue("Content-Type");
// 根据响应头名称获取请求响应头值列表
List<String> vals = response.getHeaderValues("Content-Type");
```

#### 数据转换

##### 序列化

**序列化**是指，将原始的 Java 类型数据对象转化为 HTTP 请求想要发送的数据格式（如：**JSON**、**XML**、**Protobuf** 等）

**Content-Type 请求头**

Forest中对数据进行序列化可以通过指定`contentType`属性或`Content-Type`头指定内容格式

```java
@Post(url = "http://localhost:8080/hello/user",
      contentType = "application/json"    // 指定contentType为application/json
)
String postJson(@Body MyUser user);   // 自动将user对象序列化为JSON格式
```

**请求体类型**
可以通过`@BodyType`注解指定`type`属性

```java
// 自动将user对象序列化为JSON格式
// 但此方式不会在请求中带有 Content-Type 请求头
@Post("http://localhost:8080/hello/user")
@BodyType("json")
String postJson(@Body MyUser user);
```

**Encoder**

```java
// 指定仅仅使用 Jackson 转换器来序列化数据
@Post("http://localhost:8080/hello/user")
@BodyType(type = "json", encoder = ForestJacksonConverter.class)
String postJson(@Body MyUser user);
```

##### 反序列化

**反序列化**则是正好与**序列化**的逆过程，是将远端服务接受到的原始数据格式（如：**JSON**、**XML**、**Protobuf** 等）转换为在 Java 程序中可以方便读取操作的 Java 数据对象

**自动识别结果数据类型**

Forest 会将根据返回结果自动识别响应的数据格式，并进行反序列化转换

```java
// 如结果是一串类似 {"a": 1, "b": 2} 形式的JSON字符串
// 则会自动识别并进行转换
@Get("http://localhost:8080/data")
Map getDataAsMap();// 自动识别转换为 Map 对象

@Get("http://localhost:8080/data")
MyData getMyData();  // 自动识别转换为自定义类型对象

// 如结果是一串 XML 字符串
// 也能自动识别并转换
// 但前提是自定义的类型要有 JAXB 注解标注        
MyXmlData getXmlData();

// 如果结果是一串类似 [{"name": "xxx"}, {"name": "yyy"}] 格式的 JSON 数组字符串
// Forest 也一样能自动识别并转换为 Java 集合对象
@Get("http://localhost:8080/data/list")
List<MyData> getDataList();
```

**指定结果数据类型**

可以通过`dataType`指定返回数据的反序列化格式

```java
@Get(url = "http://localhost:8080/data",
    dataType = "json" // 指定dataType为json，将按JSON格式反序列化数据
)
Map getData(); // 请求响应的结果将被转换为Map类型对象
```

 **Decoder**

Forest 也可以通过请求注解 (诸如：`@Request`、`@Get`、`@Post` 等) 的`decoder`属性来指定具体处理该请求结果的反序列化的转换器

```java
// 指定由 Jackson 转换器处理请求的反序列化
@Get(url = "http://localhost:8080/data",
    decoder = ForestJacksonConverter.class
)
Map getData();
```

**Forest提供了默认的转换器**，其分成五大类：文本转换器、JSON转换器、XML转换器、二进制转换器、自动转换器。 各大类还可以继续细分为更具体的转换器，可以按类继承理解其分类。

可以替换和使用的转换器类如下表：

| 转换器类                | 类型   | 描述                                                         |
| ----------------------- | ------ | ------------------------------------------------------------ |
| DefaultTextConverter    | text   | 默认文本数据转换器                                           |
| ForestFastjsonConverter | json   | 基于Fastjson框架的JSON转换器                                 |
| ForestJacksonConverter  | json   | 基于Jackson框架的JSON转换器                                  |
| ForestGsonConverter     | json   | 基于Gson框架的JSON转换器                                     |
| ForestJaxbConverter     | xml    | 基于Jaxb框架的XML转换器                                      |
| DefaultBinaryConverter  | binary | 默认二进制转换器，多在文件下载时使用                         |
| DefaultAutoConverter    | auto   | 自动类型转换器，可以根据响应返回的数据自动嗅探数据类型并使用对应的转换器进行转换 |

**配置全局转换器**

```properties
# 转换器配置，支持 json, xml, text, binary 四种数据类型的配置
# JSON转换器
# JSON转换器设置为Jackson的转换器
forest.converters.json.type=com.dtflys.forest.converter.json.ForestJacksonConverter
# JSON转换器设置为GSON转换器
# forest.converters.json.type=com.dtflys.forest.converter.json.ForestGsonConverter
# JSON转换器设置为Fastjson转换器
# forest.converters.json.type=com.dtflys.forest.converter.json.ForestFastjsonConverter
# 转换器的参数设置
# JSON数据转换器的全局日期格式化配置
forest.converters.json.parameters.dateFormat: yyyy/MM/dd HH:mm:ss   
# XML转换器
# 配置为JAXB转换器
forest.converters.xml.type=com.dtflys.forest.converter.xml.ForestJaxbConverter
# 二进制转换器
# 配置为Forest默认二进制转换器
forest.converters.binary.type: com.dtflys.forest.converter.binary.DefaultBinaryConverter
# 文本转换器
# 配置为Forest默认文本转换器
forest.converters.text.type: com.dtflys.forest.converter.text.DefaultTextConverter
```

**配置接口/方法级别转换器**

使用`@BodyType`注解定义**encoder**

```java
// 接口级别转换器定义
@BodyType(type = "json", encoder = ForestJacksonConverter.class)
public interface MyClient {
    // 方法级别转换器定义
    @Get("/data")
    @BodyType(type = "json", encoder = ForestFastjsonConverter.class)
    String sendData(@Body MyData data);
}
```

> 此外`Forest`还有 
>
> 请求**成功/失败条件**处理、请求**重试机制**、请求**重定向**、**Gzip解压**、**日志管理**
>
> **回调函数**、**异步请求**、**HTTPS**、**Cookie**使用、**代理**使用、**上传下载**、**异常处理**等功能

## 五、编程式开发模式

直接使用Forest静态类调用方法

**Get请求**

```java
@Test
public void test2() {
    // Get请求
    // 并以 String 类型接受数据
    String str = Forest.get("http://localhost:8088/test/hello-get").executeAsString();
    log.info(str);
}
```

**Post请求**

```java
@Test
public void test3() {
    // Post请求
    // 并以自定义的 MyResult 类型接受
    MyResult myResult = Forest.post("http://localhost:8088/test/hello-post3")
        .execute(MyResult.class);
    log.info(myResult.toString());
}
```

**以自定义类型形式接受响应数据**

```java
@Test
public void test3() {
    // Post请求
    // 并以自定义的 MyResult 类型接受
    MyResult myResult = Forest.post("http://localhost:8088/test/hello-post3")
        .execute(MyResult.class);
    log.info(myResult.toString());
}
```

**以带复杂泛型参数的类型形式接受响应数据**

```java
@Test
public void test4() {
    // 通过 TypeReference 引用类传递泛型参数
    // 就可以将响应数据以带复杂泛型参数的类型接受了
    Result<List<User>> userList = Forest
        .post("http://localhost:8088/test/hello-post4")
        .execute(new TypeReference<Result<List<User>>>() {
        });
    String s = userList.toString();
    log.info(s);
}
```

**定义请求的各种参数**

```java
@Test
public void test6() {
    // 定义各种参数
    // 并以 Map 类型接受
    Map<String, Object> map = Forest.post("http://localhost:8088/test/hello-post5")
        .backend("okhttp3")  // 设置后端为 okhttp3
        .host("127.0.0.1")         // 设置地址的host为 127.0.0.1
        .port(8088)                // 设置地址的端口为 8080
        .contentTypeJson()         // 设置 Content-Type 头为 application/json
        .addBody("a", 1)           // 添加 Body 项(键值对)： a, 1
        .addBody("b", 2)           // 添加 Body 项(键值对：  b, 2
        .maxRetryCount(3) // 设置请求最大重试次数为 3
        // 设置 onSuccess 回调函数
        .onSuccess((data, req, res) -> {
            log.info("success!");
        })
        // 设置 onError 回调函数
        .onError((ex, req, res) -> {
            log.info("error!");
        })
        // 设置请求成功判断条件回调函数
        .successWhen((req, res) -> res.noException() && res.statusOk())
        // 执行并返回Map数据类型对象
        .executeAsMap();
    log.info(map.toString());
}
```

> 其他诸多功能与声明式一致，只是使用方式为编程式

## 六、模板表达式和高级特性

### 模板表达式

在`@Request`的各大属性中大多数都是用`String`字符串填值的，如果要在这些字符串属性中动态地关联参数数据，用Java原生字符串连接(如`+`)是不行的，而且也不够直观。所以Forest为了帮助您参数数据动态绑定到这些属性上，提供了模板表达式

Forest的模板表达式是在普通的Java字符串中嵌入`{表达式}`来实现字符串和数据的动态绑定。嵌入的表达式由左花括号`{`开始，到右花括号`}`结束，在两边花括号中间填写的内容是表达式的本体。最简单的表达式可以是一个`@Var`标注的变量名，或是一个全局配置中定义的全局变量名

简单例子：

```java
public interface MyClient {
    
    @Request(url = "http://localhost:8080/hello/{name}")
    String send(@Var("name") String name);
}
```

或者

```java
public interface MyClient {

    @Request(url = "http://localhost:8080/hello/${name}")
    String send(@Var("name") String name);
}
```

#### {表达式} 与 ${表达式}

**`{表达式}`代表一个Query参数**

`{表达式}`模板参数，在`?a={a}`的情况下，会被认为是一个Query参数，即便变量可能包含"1&x=10&y=20"这样多个参数的字符串，也会被转义成一个Query参数

```java
public interface MyClient {

    @Get("http://localhost/data?a={a}&b={b}")
    String getData(@Var("a") String a, @Var("b") String b);
}

...

// 最终产生的URL是
// http://localhost/data?a=1%26x%3D10%26y%3D20&b=hello
// 也就是只会有 a 和 b 两个Query参数
myClient.getData("1&x=10&y=20", "hello");

```

**`${表达式}`可以包含多个Query参数**

而 `${表达式}`模板参数，可以认为是一种字符串替换，替换完再对URL参数进行解析，所以一个模板参数引用的变量中可能包含多个参数，也会被解析成多个参数

```java
public interface MyClient {

    @Get("http://localhost/data?a=${a}&b=${b}")
    String getData(@Var("a") String a, @Var("b") String b);
}

...

// 最终产生的URL是
// http://localhost/data?a=1&x=10&y=20&b=hello
// 也就是只会有 a、x、y、b 四个Query参数
myClient.getData("1&x=10&y=20", "hello");
```

**推荐使用`{表达式}`作为模板参数**

基于这两种模板参数各自的特性，都各有各的用处，但一般情况下，**推荐使用`{表达式}`**

因为它更结构化、更语义化，也更容易让人理解，不容易出错，尤其是在URL参数中传递另一个URL地址时的作用更为突出

比如，要传一个带参数的子URL：`https://search.gitee.com/?type=repository&q=forest`

接到父URL后为 `http://localhost/data?call={url}`

`${表达式}`产生的效果

```java
public interface MyClient {

    @Get("/data?call=${url}")
    String getData(@Var("url") String url);
    // 最后产生的URL是
    // http://localhost/data?call=https://search.gitee.com/?type=repository&q=forest
}
```

`{表达式}`产生的效果

```java
public interface MyClient {

    @Get("/data?call={url}&x={x}")
    String getData(@Var("url") String url, @Var("x") String x);
    // 最后产生的URL是
    // http://localhost/data?call=https://search.gitee.com/?type=repository%26q=forest&x=xxx
}
```

#### 配置属性引用

自 `1.5.3` 版本起，Forest 支持在模板表达式中直接引用 Properties 配置中的任意属性值

语法格式: 使用井号字符`#`跟一对花括号`{}`形式，将变量名包裹起来，如 `#{username}`

配置：

```yaml
mydata:
    username: foo
    password: bar
```

引用：

```java
public interface MyClient {

    @Get(url = "http://localhost:8080/?u=#{mydata.username}&pwd=#{mydata.password}")
    String getData();
    // 产生URL:
    // http://localhost:8080/?u=foo&pwd=bar
}
```

#### 变量引用

模板表达式最原始的目的就是各种各样的数据动态绑定到HTTP请求的各个属性中，要完成这一步就要实现对外部数据的引用。

Forest的模板表达式提供了两种最基本的数据引用方式： `变量名引用`、`参数序号引用`

如上面简单例子所示，表达式中可以直接引用`@Var`或 `@DataVariable` 所标注的变量名。除此之外也可以直接引用全局配置中定义的全局变量名

全局变量：

```ymal
forest:
  variables:
    a: foo
    b: bar
```

全局变量引用：

```java
public interface MyClient {

    @Request(url = "http://localhost:8080/{a}/{b}")
    String send();
    // 产生的URL: http://localhost:8080/foo/bar
}
```

参数变量：

`@Var`注解的`value`属性为变量名

```java
public interface MyClient {

    @Request(url = "http://localhost:8080/{a}/{b}")
    String send(@Var("a") String a, @Var("b") String b);
    // 产生的URL：http://localhost:8080/xxx/yyy
}
```

此外还有**动态变量绑定**、**静态变量绑定**、**参数序号引用**、**引用对象属性**、 **调用对象方法**等表达式用法



### 高级特性

#### 拦截器

> 在很多个请求发送之前或之后做一些事情（如打印日志、计数等等），拦截器是个好帮手

##### 构建拦截器

定义一个拦截器需要实现`com.dtflys.forest.interceptor.Interceptor`接口

```java
public class SimpleInterceptor<T> implements Interceptor<T> {

    @Override
    public void onInvokeMethod(ForestRequest req, ForestMethod method, Object[] args) {
        
    }
    
    @Override
    public boolean beforeExecute(ForestRequest req) {
        return true;
    }

    @Override
    public void afterExecute(ForestRequest req, ForestResponse res) {
        
    }
    ...
}
```

##### 配置拦截器

Forest有三个地方可以添加拦截器：`@Request`、`@BaseRequest`、全局配置，这三个地方代表三个不同的作用域

**@Request上的拦截器**：指定的拦截器只作用在指定的请求上

```java
public interface SimpleClient {

    /**
     * \@Request注解配置拦截器
     */
    @Request(url = "http://localhost:8080/hello/user?username=foo", headers = {"Accept:text/plain"},
            interceptor = SimpleInterceptor.class)
    String simple();

    /**
     * \@Request注解配置多个拦截器
     */
    @Request(url = "http://localhost:8080/hello/user?username=foo", headers = {"Accept:text/plain"},
            interceptor = {SimpleInterceptor.class, SimpleInterceptor2.class})
    String simple2();
}
```

**@BaseRequest 上的拦截器**：`interface`内的所有请求方法都被会`SimpleInterceptor`和`SimpleInterceptor2`拦截器拦截

```java
/**
 * \@BaseRequest注解配置拦截器
 */
@BaseRequest(
        baseURL = "http://localhost:8080",
        interceptor = {SimpleInterceptor.class, SimpleInterceptor2.class}
)
public interface SimpleClient2 {
    
    @Request(url = "/hello/user1?username=foo")
    String send1();

    @Request(url = "/hello/user2?username=foo")
    String send2();
}
```

**全局拦截器**：全局生效

```yaml
forest:
  interceptors:    #可配置1到多个拦截器
     - com.your.site.client.SimpleInterceptor1
     - com.your.site.client.SimpleInterceptor2
```

#### 自定义注解

Forest提供了很多内置的注解，比如 `@Request`, `@Get`, `@DownloadFile` 等等。Forest对于请求接口的构建也是基于这些注解来工作的， 那么总有一些需求是光靠这些内置注解是满足不了的，比如公司内部定义的加签加密方式，自定义数据转换类型等等。

自定义注解在技术结构上基于拦截器，本质上就是把拦截器封装成了一个个注解

**定义一个注解**：签名加密注解

```java
/**
 * 用Forest自定义注解实现一个自定义的签名加密注解
 * 凡用此接口修饰的方法或接口，其对应的所有请求都会执行自定义的签名加密过程
 * 而自定义的签名加密过程，由这里的@MethodLifeCycle注解指定的生命周期类进行处理
 * 可以将此注解用在接口类和方法上
 */
@Documented
/** 重点： @MethodLifeCycle注解指定该注解的生命周期类*/
@MethodLifeCycle(MyAuthLifeCycle.class)
@RequestAttributes
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
public @interface MyAuth {
    String username();
    String password();
}
```

**使用自定义注解**：

```java
public interface MyAuthClient {

    /**
     * 在请求接口上加上自定义的 @MyAuth 注解
     * 注解的参数可以是字符串模板，通过方法调用的时候动态传入
     * 也可以是写死的字符串
     */
    @Get(url = "http://localhost:8080/hello/user?username=${username}", headers = {"Accept:text/plain"})
    @MyAuth(username = "${username}", password = "bar")
    String send(@Var("username") String username);
}
```

#### 组合注解

Forest 除了能用生命周期来自定义注解外，也允许把已有的 Forest 注解组合成一个新的注解

**组合一个注解**：

```java
/**
 * 用Forest组合注解实现一个自定义的请求头注解
 * 此注解加上了 @Headers 注解，并为注解的参数赋了值
 * 那么以后使用此注解的接口和方法，会自动添加上 @Headers 注解以及它的参数值
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
// 被组合的注解
@Headers({
        "Accept: text/plain",
        "Content-Type: application/json",
        // 在组合注解中可以在模板字符串中引用变量
        // 它会从全局变量或方法的参数中获取变量值
        "Token: ${token}"
})
public @interface MyHeaders {
    
}
```

**使用组合后的注解**：

```java
public interface MyCombineAnnoClient {
    // 该方法使用了自定义的组合注解 @MyHeaders
    // 所以该方法发送的请求会自动添加以下请求头:
    // Accept: text/plain
    // Content-Type: application/json
    // Token: xxx (从形参 token 中传入的值)
    @Get("/data")
    @MyHeaders
    String getData(@Var("token") String token);
}
```

**组合多个注解**：

```java
/**
 * Forest 可以同时组合多个注解
 * 如方法使用该自定义的 @MySite 注解
 * 那么就等同使用这里被组合的 @Headers 注解和 @Address 注解
 * 以及它们的参数值
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
// 组合第一个注解
@Headers({"Accept: text/plain", "Content-Type: application/json"})
// 组合第二个注解
// 可以从全局变量或方法参数中获取变量值
@Address(host = "${my-site.host}", port = "${my-site.port}")
public @interface MySite {
    
}
```



> 注意
>
> 定义组合注解的时候要注解不要组合自身，以及组合过自身的其它注解，以免引起循环引用



#### 自定义转换器

在Forest中，每个转换类型都对应一个转换器对象，比如`JSON`格式的转换器有`ForestFastjsonConverter`、`ForestGsonConverter`、`ForestJacksonConverter`三种，分别是基于`FastJson`、`Gson`、`Jackson`三种不同的`JSON`序列化框架。

当然也支持自定义转换器，以适应自己项目的需要。

**第一步**：实现 ForestConverter 接口

```java
/**
 *  自定义一个Protobuf的转换器，并实现ForestConverter接口下的convertToJavaObject方法
 */
public class MyProtobufConverter implements ForestConverter, ForestEncoder {
    public <T> T convertToJavaObject(String source, Class<T> targetType) {
        // 将字符串参数source转换成目标Class对象
    }
    public <T> T convertToJavaObject(String source, Type targetType) {
        // 将字符串参数source转换成目标Type(可能是一个泛型类型)对象
    }
}
```

**第二步**：注册全局自定义转换器

```properties
# JSON转换器
# JSON转换器设置为MyJsonConverter转换器
forest.converters.json.type=com.xxx.MyJsonConverter
# XML转换器
# 配置为MyXmlConverter转换器
forest.converters.xml.type=com.xxx.MyXmlConverter
```

**第三步**：接口/方法级别引用自定义转换器

```java
// 接口级别转换器定义
@BodyType(type = "protobuf", encoder = MyProtobufConverter.class)
public interface MyClient {
    // 方法级别转换器定义
    @Get("/data")
    @BodyType(type = "protobuf", encoder = MyProtobufConverter2.class)
    String sendData(@Body MyData data);
}
```



