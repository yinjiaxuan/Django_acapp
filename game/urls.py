from django.urls import path
from game.views import index

urlpatterns = [ # 返回一个函数
        path("", index, name="index"),  ## 第一个参数是url，从域名后面开始，第二个参数执行函数，第三个参数是起别名
]
