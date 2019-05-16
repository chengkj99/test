import warnings
import datetime

warnings.filterwarnings("ignore")


def getNowDay():
    DayNow = datetime.datetime.today().strftime('%Y-%m-%d')
    return DayNow


def getYesterDay():
    YesterDay = (datetime.datetime.today() - datetime.timedelta(1)).strftime('%Y-%m-%d')
    return YesterDay


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
    return sorted(monthList)


def dateHourRange(beginDateHour, endDateHour):
    dhours = []
    dhour = datetime.datetime.strptime(beginDateHour, "%Y-%m-%d %H")
    date = beginDateHour[:]
    while date <= endDateHour:
        dhours.append(date)
        dhour = dhour + datetime.timedelta(hours=1)
        date = dhour.strftime("%Y-%m-%d %H")
    return dhours


print getNowDay()
print getYesterDay()
print dateRange(beginDate='2018-06-05', endDate='2018-07-09')
print monthRange(beginDate='2018-01-09', endDate='2019-09-01')
print dateHourRange(beginDateHour='2018-01-01 23', endDateHour='2018-01-03 00')
运行结果：
/usr/bin/python /Users/nisj/PycharmProjects/BiDataProc/love/dateList.py
2018-06-28
2018-06-27
['2018-06-05', '2018-06-06', '2018-06-07', '2018-06-08', '2018-06-09', '2018-06-10', '2018-06-11', '2018-06-12', '2018-06-13', '2018-06-14', '2018-06-15', '2018-06-16', '2018-06-17', '2018-06-18', '2018-06-19', '2018-06-20', '2018-06-21', '2018-06-22', '2018-06-23', '2018-06-24', '2018-06-25', '2018-06-26', '2018-06-27', '2018-06-28', '2018-06-29', '2018-06-30', '2018-07-01', '2018-07-02', '2018-07-03', '2018-07-04', '2018-07-05', '2018-07-06', '2018-07-07', '2018-07-08', '2018-07-09']
['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09']
['2018-01-01 23', '2018-01-02 00', '2018-01-02 01', '2018-01-02 02', '2018-01-02 03', '2018-01-02 04', '2018-01-02 05', '2018-01-02 06', '2018-01-02 07', '2018-01-02 08', '2018-01-02 09', '2018-01-02 10', '2018-01-02 11', '2018-01-02 12', '2018-01-02 13', '2018-01-02 14', '2018-01-02 15', '2018-01-02 16', '2018-01-02 17', '2018-01-02 18', '2018-01-02 19', '2018-01-02 20', '2018-01-02 21', '2018-01-02 22', '2018-01-02 23', '2018-01-03 00']

Process finished with exit code 0
2、获取日期清单的代码
def dateRange(beginDate, endDate):
    dates = []
    dt = datetime.datetime.strptime(beginDate, "%Y-%m-%d")
    date = beginDate[:]
    while date <= endDate:
        dates.append(date)
        dt = dt + datetime.timedelta(1)
        date = dt.strftime("%Y-%m-%d")
    return dates
3、获取月份清单的代码
借助于日期清单函数，然后对月份去重和排序。本想借datetime.timedelta(months=1),但不支持month,仅支持【datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)】；其中参数都是可选，默认值为0。
def monthRange(beginDate, endDate):
    monthSet = set()
    for date in dateRange(beginDate, endDate):
        monthSet.add(date[0:7])
    monthList = []
    for month in monthSet:
        monthList.append(month)
    return sorted(monthList)
4、获取日期小时清单代码
借助了datetime.timedelta(hours=1),比月份的方便一些。
def dateHourRange(beginDateHour, endDateHour):
    dhours = []
    dhour = datetime.datetime.strptime(beginDateHour, "%Y-%m-%d %H")
    date = beginDateHour[:]
    while date <= endDateHour:
        dhours.append(date)
        dhour = dhour + datetime.timedelta(hours=1)
        date = dhour.strftime("%Y-%m-%d %H")
    return dhours
