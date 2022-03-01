---
title: 零散笔记
date: 2022-03-01
categories:
- 个人笔记
tags:
- 笔记
---

[[toc]]

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




