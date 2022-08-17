from django.shortcuts import render # 从django.shortcuts引入render，render函数在服务器端渲染htm文件，渲染就是将html文件拿过来生成好

def index(request):
    return render(request, "multiends/web.html")  # 路径从templates后面开始写

