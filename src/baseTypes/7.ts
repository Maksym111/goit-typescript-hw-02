/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 1,
  Wednesday = 1,
  Thirsday = 1,
  Friday = 1,
  Saturday = 0,
}

function isWeekend(dayName: Day): boolean {
  return Boolean(dayName);
}

console.log(isWeekend(Day.Saturday));
