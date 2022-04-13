---
title: 零散笔记
date: 2022-04-13
categories:
- 个人笔记
tags:
- 笔记
---

::: tip
零零散散的记录
:::

<!--more-->



## Java BigDecimal


简介:
> Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算
> 
> 对于不需要准确计算精度的数字，可直接使用Float和Double处理，但是Double.valueOf(String) 和Float.valueOf(String)会丢失精度。
> 故在开发中，如果我们需要精确计算的结果，则需要使用BigDecimal类来操作


构造函数:
> BigDecimal(int), 创建一个具有参数所指定整数值的对象
>
> BigDecimal(double), 创建一个具有参数所指定双精度值的对象
>
> BigDecimal(long), 创建一个具有参数所指定长整数值的对象
>
> BigDecimal(String), 创建一个具有参数所指定以字符串表示的数值的对象, **推荐使用**
> 
> 1.参数类型为double的构造方法的结果有一定的不可预知性
> 2.String 构造方法是完全可预知的
> 3.当double必须用作BigDecimal的源时, 先使用Double.toString(double)方法，然后使用BigDecimal(String)构造方法，将double转换为String


常用方法:
> add(BigDecimal), BigDecimal对象中的值相加，返回BigDecimal对象
>
> subtract(BigDecimal), BigDecimal对象中的值相减，返回BigDecimal对象
>
> multiply(BigDecimal), BigDecimal对象中的值相乘，返回BigDecimal对象
>
> divide(BigDecimal), BigDecimal对象中的值相除，返回BigDecimal对象
>
> toString(), 将BigDecimal对象中的值转换成字符串
>
> doubleValue(), 将BigDecimal对象中的值转换成双精度数
>
> floatValue(), 将BigDecimal对象中的值转换成单精度数
>
> longValue(), 将BigDecimal对象中的值转换成长整数
>
> intValue(), 将BigDecimal对象中的值转换成整数


BigDecimal大小比较:
> java中对BigDecimal比较大小一般用的是bigdemical的compareTo方法
> ```java
> int a = bigdemical.compareTo(bigdemical2)
> a = -1,表示bigdemical小于bigdemical2；
> a = 0,表示bigdemical等于bigdemical2；
> a = 1,表示bigdemical大于bigdemical2；
> ```


BigDecimal格式化:
> 由于NumberFormat类的format()方法可以使用BigDecimal对象作为其参数，可以利用BigDecimal对超出16位有效数字的货币值，百分值，以及一般数值进行格式化控制。 
> 
> 以利用BigDecimal对货币和百分比格式化为例。首先，创建BigDecimal对象，进行BigDecimal的算术运算后，
> 分别建立对货币和百分比格式化的引用，最后利用BigDecimal对象作为format()方法的参数，输出其格式化的货币值和百分比。
> ```java
> NumberFormat currency = NumberFormat.getCurrencyInstance(); //建立货币格式化引用
> NumberFormat percent = NumberFormat.getPercentInstance();  //建立百分比格式化引用
> percent.setMaximumFractionDigits(3); //百分比小数点最多3位
>
> BigDecimal loanAmount = new BigDecimal("15000.48"); //贷款金额
> BigDecimal interestRate = new BigDecimal("0.008"); //利率
> BigDecimal interest = loanAmount.multiply(interestRate); //相乘
>
> System.out.println("贷款金额:\t" + currency.format(loanAmount));
> System.out.println("利率:\t" + percent.format(interestRate));
> System.out.println("利息:\t" + currency.format(interest));
> ```


工具类:
```java
/**
 * 用于高精确处理常用的数学运算
 */
public class ArithmeticUtils {
    //默认除法运算精度
    private static final int DEF_DIV_SCALE = 10;

    /**
     * 提供精确的加法运算
     *
     * @param v1 被加数
     * @param v2 加数
     * @return 两个参数的和
     */

    public static double add(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.add(b2).doubleValue();
    }

    /**
     * 提供精确的加法运算
     *
     * @param v1 被加数
     * @param v2 加数
     * @return 两个参数的和
     */
    public static BigDecimal add(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.add(b2);
    }

    /**
     * 提供精确的加法运算
     *
     * @param v1    被加数
     * @param v2    加数
     * @param scale 保留scale 位小数
     * @return 两个参数的和
     */
    public static String add(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.add(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的减法运算
     *
     * @param v1 被减数
     * @param v2 减数
     * @return 两个参数的差
     */
    public static double sub(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.subtract(b2).doubleValue();
    }

    /**
     * 提供精确的减法运算。
     *
     * @param v1 被减数
     * @param v2 减数
     * @return 两个参数的差
     */
    public static BigDecimal sub(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.subtract(b2);
    }

    /**
     * 提供精确的减法运算
     *
     * @param v1    被减数
     * @param v2    减数
     * @param scale 保留scale 位小数
     * @return 两个参数的差
     */
    public static String sub(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.subtract(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1 被乘数
     * @param v2 乘数
     * @return 两个参数的积
     */
    public static double mul(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.multiply(b2).doubleValue();
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1 被乘数
     * @param v2 乘数
     * @return 两个参数的积
     */
    public static BigDecimal mul(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.multiply(b2);
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1    被乘数
     * @param v2    乘数
     * @param scale 保留scale 位小数
     * @return 两个参数的积
     */
    public static double mul(double v1, double v2, int scale) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return round(b1.multiply(b2).doubleValue(), scale);
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1    被乘数
     * @param v2    乘数
     * @param scale 保留scale 位小数
     * @return 两个参数的积
     */
    public static String mul(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.multiply(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供（相对）精确的除法运算，当发生除不尽的情况时，精确到
     * 小数点以后10位，以后的数字四舍五入
     *
     * @param v1 被除数
     * @param v2 除数
     * @return 两个参数的商
     */

    public static double div(double v1, double v2) {
        return div(v1, v2, DEF_DIV_SCALE);
    }

    /**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 表示表示需要精确到小数点以后几位。
     * @return 两个参数的商
     */
    public static double div(double v1, double v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.divide(b2, scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 表示需要精确到小数点以后几位
     * @return 两个参数的商
     */
    public static String div(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v1);
        return b1.divide(b2, scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的小数位四舍五入处理
     *
     * @param v     需要四舍五入的数字
     * @param scale 小数点后保留几位
     * @return 四舍五入后的结果
     */
    public static double round(double v, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b = new BigDecimal(Double.toString(v));
        return b.setScale(scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 提供精确的小数位四舍五入处理
     *
     * @param v     需要四舍五入的数字
     * @param scale 小数点后保留几位
     * @return 四舍五入后的结果
     */
    public static String round(String v, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b = new BigDecimal(v);
        return b.setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 取余数
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 小数点后保留几位
     * @return 余数
     */
    public static String remainder(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.remainder(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 取余数  BigDecimal
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 小数点后保留几位
     * @return 余数
     */
    public static BigDecimal remainder(BigDecimal v1, BigDecimal v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        return v1.remainder(v2).setScale(scale, BigDecimal.ROUND_HALF_UP);
    }

    /**
     * 比较大小
     *
     * @param v1 被比较数
     * @param v2 比较数
     * @return 如果v1 大于v2 则 返回true 否则false
     */
    public static boolean compare(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        int bj = b1.compareTo(b2);
        boolean res;
        if (bj > 0)
            res = true;
        else
            res = false;
        return res;
    }
}
```
---

## Thread.sleep

Thread.sleep(0)的作用:
> 触发操作系统立刻重新进行一次CPU竞争

原理： 操作系统进程调度算法
> Unix系统使用的是时间片算法，而Windows则使用的是抢占式算法

时间片算法：
> 在时间片算法中，所有的进程排成一个队列
> 操作系统按照他们的顺序，给每个进程分配一段时间，即该进程允许运行的时间
> 如果在时间片结束时进程还在运行，则CPU将被剥夺并分配给另一个进程
> 如果进程在时间片结束前阻塞或结束，则CPU当即进行切换

抢占式：
> 在抢占式操作系统中，操作系统会根据进程的优先级、饥饿时间等，计算进程的优先级，然后分配CPU给优先级最高的进程。
> 当进程执行完毕或者自己主动挂起后，操作系统就会重新计算所有进程的优先级，重新分配CPU给优先级最高的进程。
---


## 常用正则表达式

> 整数或者小数：^[0-9]+\.{0,1}[0-9]{0,2}$
> 
> 只能输入数字：^[0-9]*$
>
> 只能输入n位的数字：^\d{n}$
>
> 只能输入至少n位的数字：^\d{n,}$
>
> 只能输入m~n位的数字：^\d{m,n}$
> 
> 只能输入零和非零开头的数字：^(0|[1-9][0-9]*)$
> 
> 只能输入有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
> 
> 只能输入有1~3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
> 
> 只能输入非零的正整数：^\+?[1-9][0-9]*$
> 
> 只能输入非零的负整数：^\-[1-9][]0-9″*$
> 
> 只能输入长度为3的字符：^.{3}$
> 
> 只能输入由26个英文字母组成的字符串：^[A-Za-z]+$
> 
> 只能输入由26个大写英文字母组成的字符串：^[A-Z]+$
> 
> 只能输入由26个小写英文字母组成的字符串：^[a-z]+$
> 
> 只能输入由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
> 
> 只能输入由数字、26个英文字母或者下划线组成的字符串：^\w+$
> 
> 验证用户密码：^[a-zA-Z]\w{5,17}$
> 
> 只能输入汉字：^[\u4e00-\u9fa5]{0,}$
> 
> 验证Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
> 
> 验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$
> 
> 验证电话号码：^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$
> 
> 验证身份证号（15位或18位数字）：^\d{15}|\d{18}$
> 
> 验证一年的12个月：^(0?[1-9]|1[0-2])$
> 
> 验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$
> 
> 匹配中文字符的正则表达式： [\u4e00-\u9fa5]
> 
> 匹配双字节字符(包括汉字在内)：[^\x00-\xff]
> 
> 匹配空行的正则表达式：\n[\s| ]*\r
> 
> 匹配html标签的正则表达式：<(.*)>(.*)<\/(.*)>|<(.*)\/>
> 
> 匹配首尾空格的正则表达式：(^\s*)|(\s*$)
>
> 匹配Email地址的正则表达式：\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
> 
> 匹配正整数^-[1-9]\d*$
> 
> 匹配负整数^-?[1-9]\d*$
> 
> 匹配整数^[1-9]\d*|0$
> 
> 匹配非负整数（正整数 + 0）^-[1-9]\d*|0$
> 
> 匹配非正整数（负整数 + 0）^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$
> 
> 匹配正浮点数^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$
> 
> 匹配负浮点数^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$
> 
> 匹配浮点数^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
> 
> 匹配非负浮点数（正浮点数 + 0）^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$　　
> 匹配非正浮点数（负浮点数 + 0）评注：处理大量数据时有用，具体应用时注意修正匹配特定字符串：^[A-Za-z]+$
> 
> 匹配由26个英文字母组成的字符串^[A-Z]+$
> 
> 匹配由26个英文字母的大写组成的字符串^[a-z]+$
> 
> 匹配由26个英文字母的小写组成的字符串^[A-Za-z0-9]+$
> 
> 匹配由数字和26个英文字母组成的字符串^\w+$
> 
> 匹配由数字、26个英文字母或者下划线组成的字符串评注：最基本也是最常用的一些表达式整理出来的一些常用的正则表达式 所属分类: JScript
> 
> Email : /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/
> 
> isEmail1 : /^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/;
> 
> isEmail2 : /^.*@[^_]*$/;
> 
> Phone : /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/
> 
> Mobile : /^((\(\d{3}\))|(\d{3}\-))?13\d{9}$/
> 
> Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"\"])*$/
> 
> IdCard : /^\d{15}(\d{2}[A-Za-z0-9])?$/
> 
> Currency : /^\d+(\.\d+)?$/
> 
> Number : /^\d+$/
> 
> Code : /^[1-9]\d{5}$/
> 
> QQ : /^[1-9]\d{4,8}$/
> 
> Integer : /^[-\+]?\d+$/
> 
> Double : /^[-\+]?\d+(\.\d+)?$/
> 
> English : /^[A-Za-z]+$/
> 
> Chinese : /^[\u0391-\uFFE5]+$/
> 
> UnSafe : /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\’\”]*)|.{0,5})$|\s/
> 
> PassWord :^[\\w]{6,12}$
> 
> ZipCode : ^[\\d]{6}/^(\+\d+ )?(\(\d+\) )?[\d ]+$/;
>
> 匹配空行的正则表达式：\n[\s| ]*\r
> 
> 匹配HTML标记的正则表达式：/<(.*)>.*<\/\1>|<(.*) \/>/
> 
> 匹配首尾空格的正则表达式：(^\s*)|(\s*$)
> 
> 匹配Email地址的正则表达式：\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
> 
> 匹配网址URL的正则表达式：http://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?^\d+$　　
> 
> 匹配非负整数（正整数 + 0）^[0-9]*[1-9][0-9]*$　　
> 
> 匹配正整数^((-\d+)|(0+))$　　
> 
> 匹配非正整数（负整数 + 0）^-[0-9]*[1-9][0-9]*$　　
> 
> 匹配负整数^-?\d+$　　　　
> 
> 匹配整数^\d+(\.\d+)?$　　
> 
> 匹配非负浮点数（正浮点数 + 0）^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$　
> 
> 匹配正浮点数^((-\d+(\.\d+)?)|(0+(\.0+)?))$　　
> 
> 匹配非正浮点数（负浮点数 + 0）^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$ 
> 
> 匹配负浮点数^(-?\d+)(\.\d+)?$
---

## 分页的总页数算法
> 设总记录数：totalRecordl
> 
> 每页最大记录数：maxResult
> 
> 总页数：totalPage
> 
> 算法一:
> 
> totalPage = totalRecord % maxResult == 0 ? totalRecord / maxResult : totalRecord / maxResult + 1 ;
>
> 算法二：（推荐）
> 
> totalPage = (totalRecord + maxResult -1) / maxResult;    其中 maxResult  - 1 就是 totalRecord / maxResult 的最大的余数
>
> 算法三：
> 
> totalPage  = (int) Math.ceil(totalRecord/ maxResult);

---
## Oracle分页查询
1 Oracle采用ROWNUM实现分页

1.1 SQL脚本1(推荐)：
```sql
SELECT *
FROM (
         SELECT temp.*, ROWNUM rn
         FROM (SELECT * FROM 表名 WHERE 条件 ORDER BY ROWID) temp
         WHERE ROWNUM <= end(page * pagesize)
     )
WHERE rn > start (page - 1) * pagesize
```
SQL脚本1示例：
```sql
-- 查询员工信息的6-10条数据 第二页数据
select rownum, t.* from (select rownum r, e.* from emp e where rownum <= 10) t where r > 5;

-- 分页查询员工信息按照工资排序
select * from (select rownum r, t.* from (select * from emp order by sal) t where rownum <= 10 )
```

1.2 SQL脚本2：
```sql
SELECT *
FROM (SELECT tt.*, ROWNUM AS rowno
      FROM (SELECT * FROM 表名 t WHERE 条件) tt
     ) table_alias
WHERE table_alias.rowno BETWEEN 下标1 AND 下标2;
```
2 Oracle采用ROWID实现分页

2.1 SQL脚本：
```sql
SELECT *
FROM (SELECT RID
      FROM (SELECT R.RID, ROWNUM RN
            FROM (SELECT ROWID RID
                  FROM 表名
                  WHERE 条件
                  ORDER BY 排序条件) R
            WHERE ROWNUM <= currentPage * pageSize)
      WHERE RN >= (currentPage - 1) * pageSize) T1,
     表名 T2
WHERE T1.RID = T2.ROWID;
```

---
## PDF文件与Base64互转

Base64转换为PDF：
```java
// 导包：commons-codec-1.5.jar;

private void base64string2file(String base64String, File file) throws Exception {
    byte[] bytes = Base64.decodeBase64(base64String);
    FileOutputStream fos = null;
    BufferedOutputStream bos = null;
    ByteArrayInputStream bAIS = null;
    BufferedInputStream bis = null;
    try {
        bAIS = new ByteArrayInputStream(bytes);
        bis = new BufferedInputStream(bAIS);
        fos = new FileOutputStream(file);
        bos = new BufferedOutputStream(fos);
        byte[] buffer = new byte[1024];
        int length = bis.read(buffer);
        while (length != -1) {
            bos.write(buffer, 0, length);
            length = bis.read(buffer);
        }
        bos.flush();
    } catch (IOException e) {
        throw new Exception("Base64转PDF出错！出错信息为：" + e.getMessage());
    } finally {
        close(null, fos, bAIS, null, bis, bos);
    }
}
```
PDF转换为Base64：
```java
private String file2base64(File file) throws Exception {
    FileInputStream fis = null;
    ByteArrayOutputStream bAOS = null;
    String base64String = "";
    try {
        fis = new FileInputStream(file);
        bAOS = new ByteArrayOutputStream();
        byte[] b = new byte[1024];
        int len = -1;
        while ((len = fis.read(b)) != -1) {
            bAOS.write(b, 0, len);
        }
        byte[] fileByte = bAOS.toByteArray();
        base64String = Base64.encodeBase64String(fileByte);
    } catch (IOException e) {
        throw new Exception("PDF转Base64出错！出错信息为：");
    } finally {
        close(fis, null, null, bAOS, null, null);
    }
    return base64String;
}
```




