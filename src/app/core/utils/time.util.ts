import { addDays, addHours, addMonths, format } from 'date-fns';
import { TimeUnit } from '../models/base';

export function leadZeroFormat(value: number): string {
  if (value < 10) {
    return `0${value}`;
  }
  return String(value);
}

export function militaryToStandard(time: string): string {
  const match = time.match(/(\d+):(\d+)/);
  if (!match) {
    return '';
  }
  const hh = +match[1];
  const mm = +match[2];
  if (hh < 12) {
    return `${leadZeroFormat(hh)}:${leadZeroFormat(mm)} AM`;
  }
  if (hh === 12) {
    return `12:${leadZeroFormat(mm)} PM`;
  }
  return `${leadZeroFormat(hh - 12)}:${leadZeroFormat(mm)} PM`;
}

export function timeFromTimeSlot(date: Date, timeSlot: string): Date {
  const hour = Number(timeSlot.slice(0, 2));
  date.setHours(hour);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

export function timeSlotFromDate(date: Date): string {
  return `${leadZeroFormat(date.getHours())}:00 - ${leadZeroFormat(date.getHours() + 1)}:00`;
}

export function generateTimeSlots(isRange = true): string[] {
  const start = 8;
  const end = 18;
  const startTimes = Array.from(new Array(end - start + 1), (val, index) => index + start);
  return startTimes.map(hour => {
      if (isRange) {
        return `${leadZeroFormat(hour)}:00 - ${leadZeroFormat(hour + 1)}:00`;
      } else {
        return `${leadZeroFormat(hour)}:00`;
      }
    }
  );
}

export function isValidDate(date: string) {
  return Date.parse(date);
}

export function getTimeSlotsByUnit(start: Date, end: Date, unit: TimeUnit): string[] {
  let pos = start;
  const slots: string[] = [];
  // if (unit === TimeUnit.Hour) {
  //   slots.push(format(subHours(pos, 1), 'yyyy-MM-dd hh:00'));
  // } else if (unit === TimeUnit.Day) {
  //   slots.push(format(subDays(pos, 1), 'yyyy-MM-dd 00:00'));
  // } else if (unit === TimeUnit.Month) {
  //   slots.push(format(subMonths(pos, 1), 'yyyy-MM-01 00:00'));
  // }
  while (pos <= end) {
    if (unit === TimeUnit.Hour) {
      slots.push(format(pos, 'yyyy-MM-dd hh:00'));
      pos = addHours(pos, 1);
    } else if (unit === TimeUnit.Day) {
      slots.push(format(pos, 'yyyy-MM-dd 00:00'));
      pos = addDays(pos, 1);
    } else if (unit === TimeUnit.Month) {
      slots.push(format(pos, 'yyyy-MM-01 00:00'));
      pos = addMonths(pos, 1);
    }
  }
  return slots;
}
