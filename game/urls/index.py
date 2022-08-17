from django.urls import path,include
from game.views.index import index

# 总的路由，调用各个文件的路由
urlpatterns = [
    path("", index, name="index"),  # 全局index
    path("menu/", include("game.urls.menu.index")),  # 第一个参数为url，第二个参数为对应的路由python文件
    path("playground/", include("game.urls.playground.index")),
    path("settings/", include("game.urls.settings.index")),
]
