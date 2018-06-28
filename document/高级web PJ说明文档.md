# <center>高级Web PJ说明文档</center>

### 项目简介
- 名称：思维导图智能导学系统文档
- 目的：本次项目是思维导图智能导学系统，旨在通过思维导图更直观地展示知识点结构，更高效地帮学生理清知识脉络，同时利用课件资源共享的方式增加老师和学生之间的交互，使得教学更加方便高效。
- 成员：孙路（组长）、张俊杰、戴季涵、黄铂琛。

### 项目github地址
> mindmap：https://github.com/sl784948031/mind-map<br>
spring boot：https://github.com/sl784948031/springboot
### 项目架构
- 总体架构：采用前后端分离的架构，前端负责HTML渲染和用户交互，后端负责业务逻辑和数据处理。
![image](https://note.youdao.com/yws/api/personal/file/WEBbbc65322bc1752a5024bdf6b2f694fdc?method=download&shareKey=8e9433c3b941837457e03145faf741fb)
- 前端：前端采用了Angular，属于MVVM架构，即Model-View-ViewModel。
    - Model：在web页面中，大部分Model都是来自后端返回的Json数据或者是全局的配置对象；同时，angular中的service是封装和处理这些与Model相关的业务逻辑的场所，这类的业务服务又可以被多个Controller或者其他service复用。
    - View：在angular中是html里面包含一堆声明式Directive的视图模板。
    - ViewModel：负责给View提供显示的数据（其中数据为双向绑定），以及提供了View中Command事件操作Model的途径。
- 后端：后端采用了Spring Boot，采用MVC架构，即Model-View-Controller。
    - Model：MongoDB数据库。
    - View ：HTML模板。
    - Controller：HTTP请求路由，数据分析及处理。
    
### 流程分析
1. 	注册：如果已有账号，直接登录。注册需要输入用户名，两次输入密码，以及选择角色身份。注册成功后可以登录。
2. 	登录：输入账号密码，选择用户身份，发送后端验证，验证正确则登录成功。
3. 	登录成功后，根据用户角色给予不同权限。
    1. 老师可以开设课程，可以选择某个课程进入。 
        1. 进入课程后，可以查看、增加、修改该课程的思维导图，也可以截图。
        2. 点击思维导图中的节点，可以删除、增加、修改节点内容和颜色。
        3. 点击思维导图中的节点，显示节点中的作业、资源和课件。
        4. 进入作业，可以查看作业正确率，增加作业题，删除作业题。
        5. 进入资源或课件，可以上传课件资源。
    2. 学生可以选课，可以选择某个课程进入。
        1. 进入课程后，可以查看该课程的思维导图，可以截图。
        2. 点击思维导图中的节点，显示节点中的作业、资源和课件。
        3. 进入资源或课件，可以下载课件资源。
    3. 学生和老师都可以更改密码，退出登录。

### 功能分析
- 登录注册方面：用户角色分为教师和学生。教师权限为内容管理，学生权限为访客。
- 课程部分：选课列表展示所有已创建但该学生没选过的课，老师则可以添加不同id的课程，以课程id唯一标识课程。同时，主页面老师显示自己已添加的课，学生展示自己已选的课，这些都通过向后端请求数据到绑定的对象上。老师添加完课及学生选完课都会更新一次主页面课程列表。
- 思维导图部分：大多数功能引用自jsmind自身库，写的内容涉及mindmap的创建、保存和更换，以及各节点各自部分路由的跳转，从而进入作业、课件等组件。
- 作业部分：老师负责添加，学生负责回答，同时回答问题后，将答题记录发送至后台，更新正确率，便于老师页面的正确率的显示。
- 课件和资源：大部分功能一致，通过ng2-file-upload来上传，通过blob请求来下载。唯一不同时，资源部分老师可以添加链接，点击链接会导向外界url。

### 项目目录结构
- 前端：
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/6429F304F8CD474081BCA30336C0C43A/2571)

文件目录
```
/mind-map
……………/dist                   项目build后的生成文件
……………/e2e                    配置文件
……………/node_modules           library root
……………/src/                   项目src目录
…………………/app/                 项目组件目录
………………………/entity/            实体类目录
…………………………………/account.ts     账户类
…………………………………/course.ts      选课课程类
…………………………………/courses.ts     选课课程list
…………………………………/descripQ.ts    简答题
…………………………………/lesson.ts      添加课程类
…………………………………/lessons.ts     添加课程list
…………………………………/link.ts        链接类
…………………………………/mindmap.ts     思维导图类
…………………………………/MPNode.ts      思维导图节点类
…………………………………/number.ts      思维导图id list
…………………………………/person.ts      人物类
…………………………………/responses.ts   消息类
…………………………………/selectQ.ts     选择题
…………………………………/Submit.ts      提交答案类
…………………………………/upfile.ts      上传文件类
…………………………………/upfiles.ts     上传文件list
………………………/index/...             首页组件
………………………/jsmind/...            jsmind库
………………………/login/...             登录组件
………………………/register/...          注册组件
………………………/service/...           服务文件夹
………………………/student/
…………………………………/courses/...    课程组件
…………………………………/scoursesware/..学生课件组件
…………………………………/shomework/...  学生作业组件
…………………………………/sresource/...  学生资源组件
…………………………………/studentmap/... 学生思维导图组件
………………………/teacher/
…………………………………/lessons/...    课程组件
…………………………………/tcoursesware/..老师课件组件
…………………………………/thomework/...  老师作业组件
…………………………………/tresource/...  老师资源组件
…………………………………/mindmap/...    老师思维导图组件
………………………/app.component.css     首页css
………………………/app.component.html    首页html
………………………/app.component.ts      首页ts
………………………/app.module.ts         模块声明
………………………/app-routing.module.ts 全局路由
………………………/assets/...            bootstrap.css
………………………/environments/...      环境变量
………………………/tsconfig.app.json     ts规则
…………………/package.json            依赖库版本
…………………/proxy.config.json       跨域访问配置文件

```

- 后端：
![image](https://note.youdao.com/yws/api/personal/file/WEBff97316278e3f211cd01fcbfc3fdda09?method=download&shareKey=cbfd299c4544e4d640e595a1fd612aad)

```
Account:    账户类
Course:     选课课程类
IndexController：      控制器
IndexDao：      Index的操作类
Lesson：    添加课程类
LessonDao： 课程操作类
LinkD：     链接类
MindMap：   思维导图类
MindMapDao：思维导图操作类
MPNode：    思维导图节点类
Number：    思维导图节点id list
Person：    人物类
PicDao：    文件上传下载处理类
PjApplication：主程序
Question0： 选择题类
Question1： 论述题
Response：  消息类
Submit：    提交作业信息类
UpFile：    上传文件类
pom.xml:    maven依赖关系
application.properties:     应用特性配置文件
/target/... 打包文件夹
```
### 项目部署
##### 使用Azure服务器，地址为http://13.67.110.158:8080/mind-map。详细操作见操作文档。

### 项目分工：
孙路：前后端接口，测试，项目部署到云服务器，文档的编写。<br>
戴季涵：负责前端的资源和课件部分，具体来说有ui、文件和链接的上传、下载、展示等。编写类图
<br>张俊杰：负责前端页面的编写和CSS设计，以及前端页面的数据绑定、获取、更新等页面逻辑。编写用例图。
<br>
黄铂琛：数据库的配置，后端数据的处理。编写流程图。

比例：孙路35%  戴季涵24%  张俊杰26% 黄铂琛15%

