# <center>数据库设计文档</center>
##### 数据库采用mongoDB，一共有以下几张表：


- person

字段名称	|含义|	数据类型
---|---|---
username	|用户名|	String
password	|密码|	String
type	|用户角色|	String
status  |状态|	String

- courses

字段名称|	含义|	数据类型
---|---|---
cid	|课程的选课id	|String
name	|课程名称	|String
people_num	|课程人数|	String
student	|选择该课的学生名称|	String
lid	|课程的开课id	|String

- lessons

字段名称|	含义	|数据类型
---|---|---
id|	课程开课id	|String
name|	课程名称	|String
people_num|	课程人数|	String
teacher|	开设该课的老师名称|	String

- mindmap

字段名称|	含义|	数据类型
---|---|---
lid	|课程开课id	|String
items	|思维导图内容|	Object

- number

字段名称|	含义	|数据类型
---|---|---
lid	|课程开课id	|String
ids	|该课程的思维导图id集合|	String[]

- question0

字段名称|	含义|	数据类型
---|---|---
lid	|课程开课id	|String
node_id|	思维导图选中节点id	|String
mapid	|思维导图id	|String
title	|选择题题目	|String
a1	|选择题第一个选项|   String
a2	|选择题第二个选项	|String
a3	|选择题第三个选项	|String
a4	|选择题第四个选项	|String
trueA	|正确答案|	String[]
rate	|该题学生回答正确率|	String


- question1

字段名称	|含义|	数据类型
---|---|---
lid	|课程开课id	|String
node_id	|思维导图选中节点id|	String
mapid	|思维导图id	|String
title	|简答题题目	|String

- submit

字段名称|	含义|	数据类型
---|---|---
title	|问题题目	|String
lid	|课程开课id	|String
node_id	|思维导图选中节点id	|String
mapid	|思维导图id	|String
username	|用户名称|	String
answer	|回答的对错	|String

-	upfile 

字段名称	|含义|	数据类型
---|---|---
lid	|课程开课id|	String
node_id	|思维导图选中节点id|	String
filename|	文件名称|	String
fd|	文件描述符|	String
bytes	|文件内容|	byte[]
mapid|	思维导图id|	String

- upload_link

字段名称	|含义|	数据类型
---|---|---
linkname	|链接名称	|String
linkcontent	|链接内容	|String
lid	|课程开课id|	String
node_id	|思维导图选中节点id|	String
mapid	|思维导图id	|String




