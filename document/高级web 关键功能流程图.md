# <center>高级web 关键功能流程图</center>
### 上传文件
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/18843E66BE474EE1B12F2F15D1E82FE8/2542)

> 文件：前端采用ng2-file-uploader第三方库实现上传文件功能。在需要使用到的组件中引用import { FileUploader } from 'ng2-file-upload'; 然后用后台对应的处理文件上传功能的url初始化一个FileUploader对象。
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/F9E684086A684CDB835B47E7BA5EB78A/2549)
将文件的FileItem对象添加到uploader.queue队列里，就可以调用queue里的FileItem对象的各种函数来进行各种操作，如调用upload()函数来上传文件，调用cancel()来取消上传文件，调用remove()来将文件从上传队列里移除，即将文件的FileItem对象从uploader.queue里移除。
<br>文件的描述存储在一个单独的列表里，没有利用uploader上传，而是和文件分别上传，利用标识文件的属性和文件配对。
<br>链接：利用双向绑定，将html文件里input和ts文件里的属性绑定在一起。
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/B285D986F4E940DAAB4367B1EE5B527D/2558)
点击确定按钮，将linkname和linkcontent的值上传到后台。
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/FBB4F8BB674C4414A17AB5E214BF73A0/2559)
文件的下载：
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/1BC1EA6E29374BB98CCE0576FDA089C6/2557)
过程是将后台传回来的文件数据先转化为Blob对象，然后创建这个Blob对象的url，再通过创建一个隐藏的herf属性的值是Blob对象的url的a标签并点击它来下载文件。增加对a标签的click的监听，确保在文件下载完毕后才移除a标签和url。
<br>文件或链接的展示：
后台返回存储文件或链接的信息的数组，遍历数组在html文件里展示。

### 思维导图的操作
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/54E51B8879DA424A85F1BDAB75C95044/2543)

> 思维导图编辑：<br>
增加：增加分为增加兄弟节点和增加子节点，实现过程类似。首先利用jsmind自带的方法get_selected_node获取mindmap当前选中的节点，然后创建一个新的节点，再利用jsmind自带的方法add_node向目标节点增加子节点。增加兄弟节点和增加节点的不同在于，根节点无法被添加兄弟节点。
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/B544C26587DA42289F402546D5673466/2641)
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/4308681A1CCA4BAE824FC9DE89798C95/2643)
删除：删除当前选中的节点，同样利用jsmind自带的get_selected_node获取当前节点，然后再利用jsmind自带的remove_node移除节点。
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/4FB048CA4D9F43339BEC696C85442480/2648)
修改颜色：修改颜色分为修改节点颜色和字体颜色，这里我很快在jsmind文档里找到了修改颜色的方法set_node_color，通过数据绑定获取界面中修改后节点颜色和字体颜色，进行修改。
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/4C95DD5D207347CC897B35B3F56287C0/2650)
截图：截图用的是jsmind自带的截图功能，代码只有一行。
![image](https://note.youdao.com/yws/public/resource/dfbf18444305117555aed9afd8b0e3e4/xmlnote/1BCBAF787F3749BF9D72DAF8E35FAB9F/2652)
