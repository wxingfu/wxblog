---
title: 零散笔记
date: 2022-03-01
categories:
- 个人笔记
tags:
- 笔记
---

::: tip
零零散散的记录
:::

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




