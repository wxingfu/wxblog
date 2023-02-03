---
title: 数据结构与算法
date: 2022-03-01
author: wxingfu
subSidebar: true
categories:
- 数据结构与算法
tags:
- 数据结构与算法
publish: true
sticky: 1
---

::: tip
数据结构与算法非常重要，要抓紧学习和练题
:::

<!-- more -->

## 求解最大公约数

> gcd(a,b) = gcd(b,a mod b) (不妨设a>b 且r=a mod b ,r不为0)
> 
> 欧几里得算法又称辗转相除法，是指用于计算两个非负整数a，b的最大公约数
> 

求解代码
```java
public int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
```

## 二叉查找树

**二叉查找树（Binary Search Tree），也称为二叉查找树、有序二叉树（ordered binary tree）或排序二叉树（sorted binary tree），是指一棵空树或者具有下列性质的二叉树：**

> 1.若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
>
> 2.若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
>
> 3.任意节点的左、右子树也分别为二叉查找树；
>
> 即：二叉搜索树每个节点的值都比他的所有左子节点值大，并且比他的所有右子节点值小

二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低，为O(log n)

给定二叉搜索树（BST）的根节点和一个值。你需要在BST中找到节点值等于给定值的节点。返回以该节点为根的子树。如果节点不存在，则返回 NULL。

递归方式：

```java
public TreeNode searchBST(TreeNode root, int val) {
    //如果节点为空就返回空，或者找到了要找的节点也直接返回
    if (root == null || root.val == val)
        return root;
    //如果val比当前节点的值小就在当前节点的左子节点来找，
    //否则就在当前节点的右子节点来找
    if (val < root.val)
        return searchBST(root.left, val);
    else
        return searchBST(root.right, val);
}
```

非递归方式：
```java
public TreeNode searchBST(TreeNode root, int val) {
    //如果当前节点不为空，并且也不是我们要找的,就继续查找
    while (root != null && root.val != val)
        root = val < root.val ? root.left : root.right;
    return root;
}
```
