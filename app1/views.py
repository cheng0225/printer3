# from django.shortcuts import render
import collections

from rest_framework.filters import OrderingFilter
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.response import Response
from app1.models import Errorlog
from app1.serializers import ErrorlogSer, FileSer
import json


# Create your views here.

class ErrView(GenericAPIView, ListModelMixin, CreateModelMixin):
    """ 错误日志视图 """
    queryset = Errorlog.objects.all()
    serializer_class = ErrorlogSer

    # 排序  接口 http://127.0.0.1:8000/app1/err?ordering=-num
    filter_backends = [OrderingFilter]
    ordering_fields = ['num']

    def get(self, request):
        # 返回数据库信息
        print(request)
        return self.list(request)

    def post(self, request):
        # 对新文件进行处理 更新或者创建新错误
        file = request.FILES['file']
        content = file.read()  # 一次性读完  小文件 问题不大
        err = json.loads(content)
        # 每一次都检查之类的 可能对数据库压力大
        # 先做哈希表 最后统一选择插入还是更新
        ha = collections.defaultdict(int)
        for e in err:
            key = e['errorLog']['reason']
            ha[key] += 1
        for key, value in ha.items():
            obj = Errorlog.objects.filter(err=key)
            if obj:
                # 对已经存在过的对象 进行错误次数更新
                num = obj.values('num')[0]['num']
                obj.update(num=num + value)
            else:
                # 不存在对象 进行创建
                Errorlog.objects.create(err=key, num=value, txt='无')
        return Response(ha)

    def patch(self, request):
        # 对某个错误， 添加解决办法或者更新解决办法
        # print(type(request.data))
        data = request.data
        # data._mutable = True
        err = data.get('err')
        obj = Errorlog.objects.filter(err=err).first()
        print(obj)
        ser = self.get_serializer(instance=obj, data=data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)



# print(type(obj))
# print(obj.values('num'))
# print(obj)

# # print(request.data)
# # print(request.data['file'])
# # print(type(request.data['file']))
# # ser = FileSer(data=request.data)
# # print(ser)
# # ser.is_valid(raise_exception=True)
# # print(ser.data)
# file = request.FILES['file']
# print(type(file), file)
# content = file.read()
# a = json.loads(content)
# # print(type(a), a)
# # print(a[0]['errorLog'])
# for x in a:
#     print(x)
# file.close()
# return Response('success')
