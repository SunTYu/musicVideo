# musicVideo

保存歌曲，视频  

## 接口  

| url           | method |params |  query    |  data         | response   |  |
| --------      | ------ |-----: | :----:    | :----:        | -----      |---                                 |
| /addDir  |  post  |       |           | name, discrip |   {}      | 提交目录的名字，描述，返回目录的JSON数据   |
|    /video     |  get   |       |           |               | {}         | 返回目录JSON数据                      |
|/video/:dirUrl |  get   |       | page, size|               | {}         | 返回dirUrl目录的对应页的视频JSON数据    |
|/video/:dirUrl |  post  |       |           | name, discrip, file|    {} | 上传到对应目录，请将form表单的enctype改为multipart/form-data，或者new一个FormData,将数据以及文件放到FormData中用ajax提交|
|    /music     |  get   |       |           |               | {}         | 返回目录JSON数据                      |
|/music/:dirUrl |  get   |       | page, size|               | {}         | 返回dirUrl目录的page页的size个视频JSON数据    |
|/music/:dirUrl |  post  |       |           | name, discrip, file|    {} | 上传到对应目录，请将form表单的enctype改为multipart/form-data，或者new一个FormData,将数据以及文件放到FormData中用ajax提交|

