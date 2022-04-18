export var instance = new Date();
export var getTodayDate = instance.toLocaleDateString();
export var getWeekDate = new Date(
  instance.getFullYear(),
  instance.getMonth(),
  instance.getDate() - 7
).toLocaleDateString();
export var getMonthDate = new Date(
  instance.getFullYear(),
  instance.getMonth(),
  instance.getDate() - 30
).toLocaleDateString();
export var getYearDate = new Date(
  instance.getFullYear(),
  instance.getMonth(),
  instance.getDate() - 365
).toLocaleDateString();
