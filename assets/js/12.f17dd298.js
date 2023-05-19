(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{580:function(a,t,s){"use strict";s.r(t);var e=s(5),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("Java基础知识点")])]),a._v(" "),s("h2",{attrs:{id:"基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[a._v("#")]),a._v(" 基础概念")]),a._v(" "),s("h4",{attrs:{id:"java语言特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java语言特点"}},[a._v("#")]),a._v(" "),s("strong",[a._v("Java语言特点")])]),a._v(" "),s("blockquote",[s("p",[a._v("1.简单易学")]),a._v(" "),s("p",[a._v("2.面向对象编程")]),a._v(" "),s("p",[a._v("3.平台无关性、可靠性、安全性")]),a._v(" "),s("p",[a._v("4.支持多线程、支持网络编程")]),a._v(" "),s("p",[a._v("5.编译与解释并存")])]),a._v(" "),s("h4",{attrs:{id:"jdk-和-jre"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk-和-jre"}},[a._v("#")]),a._v(" "),s("strong",[a._v("JDK 和 JRE")])]),a._v(" "),s("ul",[s("li",[a._v("JDK 是 Java Development Kit 缩写，包含JRE 、编译器和工具。它能够创建和编译程序。")]),a._v(" "),s("li",[a._v("JRE 是 Java 运行时环境，运行已编译 Java 程序所需的所有内容的集合，包括 Java 虚拟机（JVM），Java 类库，java 命令和其他的一些基础构件。不能用于创建新程序。")])]),a._v(" "),s("h4",{attrs:{id:"java-和-c-的一些区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-和-c-的一些区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("Java 和 C++ 的一些区别")])]),a._v(" "),s("p",[a._v("相同点：")]),a._v(" "),s("ul",[s("li",[a._v("Java 和 C++ 都是面向对象的语言，都支持封装、继承和多态")])]),a._v(" "),s("p",[a._v("不同点：")]),a._v(" "),s("ul",[s("li",[a._v("Java 不提供指针来直接访问内存，程序内存更加安全")]),a._v(" "),s("li",[a._v("Java 的类是单继承的，C++ 支持多重继承；虽然 Java 的类不可以多继承，但是接口可以多继承。")]),a._v(" "),s("li",[a._v("Java 有自动内存管理垃圾回收机制(GC)，不需要程序员手动释放无用内存。")]),a._v(" "),s("li",[a._v("C ++同时支持方法重载和操作符重载，但是 Java 只支持方法重载")])]),a._v(" "),s("h2",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[a._v("#")]),a._v(" 基本语法")]),a._v(" "),s("h4",{attrs:{id:"字符串常量和字符常量区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量和字符常量区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("字符串常量和字符常量区别")])]),a._v(" "),s("ul",[s("li",[a._v("字符串常量是双引号引起的0个或多个字符，字符常量是单引号引起的一个字符。")]),a._v(" "),s("li",[a._v("字符串常量是地址引用，字符常量可以用ASCII码表示")])]),a._v(" "),s("h4",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[a._v("#")]),a._v(" "),s("strong",[a._v("注释")])]),a._v(" "),s("ul",[s("li",[a._v("单行注释：// 注释内容")]),a._v(" "),s("li",[a._v("多行注释：/*注释内容*/")]),a._v(" "),s("li",[a._v("文档注释：/**注释内容*/")])]),a._v(" "),s("h4",{attrs:{id:"continue、break-和-return-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#continue、break-和-return-的区别"}},[a._v("#")]),a._v(" "),s("strong",[a._v("continue、break 和 return 的区别")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("continue")]),a._v(" ：指跳出当前的这一次循环，继续下一次循环。")]),a._v(" "),s("li",[s("code",[a._v("break")]),a._v(" ：指跳出整个循环体，继续执行循环下面的语句。")]),a._v(" "),s("li",[s("code",[a._v("return")]),a._v(" 用于跳出所在方法，结束该方法的运行。")])]),a._v(" "),s("h4",{attrs:{id:"静态方法为什么不能调用非静态成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态方法为什么不能调用非静态成员"}},[a._v("#")]),a._v(" "),s("strong",[a._v("静态方法为什么不能调用非静态成员")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("静态方法是属于类的，在类加载的时候就会分配内存，可以通过类名直接访问。而非静态成员属于实例对象，只有在对象实例化之后才存在，需要通过类的实例对象去访问。")])]),a._v(" "),s("li",[s("p",[a._v("在类的非静态成员不存在的时候静态成员就已经存在了，此时调用在内存中还不存在的非静态成员，属于非法操作。")])])]),a._v(" "),s("h4",{attrs:{id:"静态方法和实例方法不同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态方法和实例方法不同点"}},[a._v("#")]),a._v(" "),s("strong",[a._v("静态方法和实例方法不同点")])]),a._v(" "),s("ul",[s("li",[a._v("调用方式")])]),a._v(" "),s("blockquote",[s("p",[a._v("静态方法：类名.方法名")]),a._v(" "),s("p",[a._v("实例方法：对象.方法名")])]),a._v(" "),s("ul",[s("li",[a._v("访问类成员是否存在限制")])]),a._v(" "),s("blockquote",[s("p",[a._v("静态方法在访问本类的成员时，只允许访问静态成员（即静态成员变量和静态方法），不允许访问实例成员（即实例成员变量和实例方法），而实例方法不存在这个限制。")])]),a._v(" "),s("h4",{attrs:{id:"重载和重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载和重写"}},[a._v("#")]),a._v(" "),s("strong",[a._v("重载和重写")])]),a._v(" "),s("p",[s("strong",[a._v("重载")])]),a._v(" "),s("blockquote",[s("p",[a._v("发生在同一个类中（或者父类和子类之间），方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同。")])]),a._v(" "),s("p",[s("strong",[a._v("重写")])]),a._v(" "),s("blockquote",[s("p",[a._v("重写发生在运行期，是子类对父类的允许访问的方法的实现过程进行重新编写。")]),a._v(" "),s("ol",[s("li",[a._v("方法名、参数列表必须相同，子类方法返回值类型应比父类方法返回值类型更小或相等，抛出的异常范围小于等于父类，访问修饰符范围大于等于父类。")]),a._v(" "),s("li",[a._v("如果父类方法访问修饰符为 "),s("code",[a._v("private/final/static")]),a._v(" 则子类就不能重写该方法，但是被 "),s("code",[a._v("static")]),a._v(" 修饰的方法能够被再次声明。")]),a._v(" "),s("li",[a._v("构造方法无法被重写")])])]),a._v(" "),s("h4",{attrs:{id:"和-equals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和-equals"}},[a._v("#")]),a._v(" "),s("strong",[a._v("== 和 equals()")])]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("==")]),a._v("对于基本类型和引用类型的作用效果是不同的：")]),a._v(" "),s("ul",[s("li",[a._v("对于基本数据类型来说，"),s("code",[a._v("==")]),a._v(" 比较的是值。")]),a._v(" "),s("li",[a._v("对于引用数据类型来说，"),s("code",[a._v("==")]),a._v(" 比较的是对象的内存地址。")])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("equals()")]),a._v("不能用于判断基本数据类型的变量，只能用来判断两个对象是否相等。"),s("code",[a._v("equals()")]),a._v("方法存在于"),s("code",[a._v("Object")]),a._v("类中，而"),s("code",[a._v("Object")]),a._v("类是所有类的直接或间接父类，因此所有的类都有"),s("code",[a._v("equals()")]),a._v("方法。"),s("code",[a._v("equals()")]),a._v(" 方法存在两种使用情况：")])])]),a._v(" "),s("blockquote",[s("p",[a._v("类没有重写 "),s("code",[a._v("equals()")]),a._v("方法 ：通过"),s("code",[a._v("equals()")]),a._v("比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 "),s("code",[a._v("Object")]),a._v("类"),s("code",[a._v("equals()")]),a._v("方法。")]),a._v(" "),s("p",[a._v("类重写了 "),s("code",[a._v("equals()")]),a._v("方法 ：一般我们都重写 "),s("code",[a._v("equals()")]),a._v("方法来比较两个对象中的属性是否相等；若它们的属性相等，则返回 true(即，认为这两个对象相等)。")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a 为一个引用")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// b为另一个引用,对象的内容一样")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" aa "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 放在常量池中")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" bb "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 从常量池中查找")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aa "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" bb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("42")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("42.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h4",{attrs:{id:"为什么重写-equals-时必须重写-hashcode-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么重写-equals-时必须重写-hashcode-方法"}},[a._v("#")]),a._v(" "),s("strong",[a._v("为什么重写 equals() 时必须重写 hashCode() 方法")])]),a._v(" "),s("blockquote",[s("p",[a._v("因为两个相等的对象的 "),s("code",[a._v("hashCode")]),a._v(" 值必须是相等。也就是说如果 "),s("code",[a._v("equals")]),a._v(" 方法判断两个对象是相等的，那这两个对象的 "),s("code",[a._v("hashCode")]),a._v(" 值也要相等。")]),a._v(" "),s("p",[a._v("如果重写 "),s("code",[a._v("equals()")]),a._v(" 时没有重写 "),s("code",[a._v("hashCode()")]),a._v(" 方法的话就可能会导致 "),s("code",[a._v("equals")]),a._v(" 方法判断是相等的两个对象，"),s("code",[a._v("hashCode")]),a._v(" 值却不相等。")])]),a._v(" "),s("h2",{attrs:{id:"基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[a._v("#")]),a._v(" 基本数据类型")]),a._v(" "),s("h4",{attrs:{id:"_8种基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8种基本数据类型"}},[a._v("#")]),a._v(" 8种基本数据类型")]),a._v(" "),s("ul",[s("li",[a._v("6种数字类型\n"),s("ul",[s("li",[a._v("4种整数型："),s("code",[a._v("byte(2字节)")]),a._v(","),s("code",[a._v("short(2字节)")]),a._v(","),s("code",[a._v("int(4字节)")]),a._v(","),s("code",[a._v("long(8字节)")])]),a._v(" "),s("li",[a._v("2种浮点型："),s("code",[a._v("float(4字节)")]),a._v(","),s("code",[a._v("double(8字节)")])])])]),a._v(" "),s("li",[a._v("1种字符型："),s("code",[a._v("char(2字节)")])]),a._v(" "),s("li",[a._v("1中布尔型："),s("code",[a._v("boolean")])])]),a._v(" "),s("p",[a._v("八种基本类型都有对应的包装类分别为："),s("code",[a._v("Byte")]),a._v("、"),s("code",[a._v("Short")]),a._v("、"),s("code",[a._v("Integer")]),a._v("、"),s("code",[a._v("Long")]),a._v("、"),s("code",[a._v("Float")]),a._v("、"),s("code",[a._v("Double")]),a._v("、"),s("code",[a._v("Character")]),a._v("、"),s("code",[a._v("Boolean")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" i1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等价Integer i1=Integer.valueOf(40)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" i2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("i1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("i2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// false,对象不同")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"自动装箱与拆箱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱与拆箱"}},[a._v("#")]),a._v(" 自动装箱与拆箱")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("装箱")]),a._v("：将基本类型用它们对应的引用类型包装起来；")]),a._v(" "),s("li",[s("strong",[a._v("拆箱")]),a._v("：将包装类型转换为基本数据类型；")])]),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://javaguide.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaGuide"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);