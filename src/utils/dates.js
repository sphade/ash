export var today = new Date();
export var week = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
export var month = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 30
);
export var year = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 365
);