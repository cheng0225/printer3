from django.db import models


# Create your models here.

class Errorlog(models.Model):
    """ 错误信息日志 """
    err = models.CharField('错误信息', primary_key=True, max_length=225)
    num = models.SmallIntegerField('次数')
    txt = models.CharField('解决办法', max_length=225)
