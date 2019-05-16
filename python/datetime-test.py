# 导入datetime库
import datetime

# # 创建开始时间点和结束时间点
# d1 = datetime.datetime(2018, 5, 2)
# d2 = datetime.datetime(2018, 6, 2)

# # 获取时间间隔
# delta = d2 - d1
# print(delta)
# # 遍历获得一天
# for i in range(delta.days+1):
#     print("day:", d1 + datetime.timedelta(days=i))

# d1 = datetime.date('2018-05-02')
# d2 = datetime.date('2019-06-02')
d1 = datetime.date(2018, 5, 2)
d2 = datetime.date(2018, 6, 2)
def dateRange(beginDate, endDate):
    dates = []
    dt = datetime.datetime.strptime(beginDate, "%Y-%m-%d")
    date = beginDate[:]
    while date <= endDate:
        dates.append(date)
        dt = dt + datetime.timedelta(1)
        date = dt.strftime("%Y-%m-%d")
    return dates

def monthRange(beginDate, endDate):
    monthSet = set()
    for date in dateRange(beginDate, endDate):
        monthSet.add(date[0:7])
    monthList = []
    for month in monthSet:
        monthList.append(month)

print(dateRange(beginDate='2018-01-09', endDate='2019-09-01'))
