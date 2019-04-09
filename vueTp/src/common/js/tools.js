export default {
  // 表格筛选条件
  tableOrder(v) {
    return true;
  },
  // 搜索字符
  searchText(inputText, dataObj) {
    if (inputText) {
      return this.dataMember.filter(function (dataObj) {
        return Object.keys(dataObj).some(function (key) {
          return String(dataObj[key]).toLowerCase().indexOf(inputText) > -1;
        });
      });
    }
    ;
  },
  // 数组去重
  dedupe(array) {
    return Array.from(new Set(array));
  },
  getNow(argDate) {
    let date = argDate || new Date();
    let seperator1 = '-';
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  },
  // 判断是否是数字
  isNumber(val) {
    // 非负浮点数
    let regPos = /^\d+(\.\d+)?$/;
    // 负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  // 获取当前日期
  getDateStr(AddDayCount) {
    let dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1; // 获取当前月份的日期
    let d = dd.getDate();
    return y + '-' + m + '-' + d;
  }
};
