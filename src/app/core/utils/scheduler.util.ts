import { format, utcToZonedTime } from 'date-fns-tz';
import { addMinutes, isToday } from 'date-fns';

import { ScheduleDuration, ScheduleTimeSlot, ScheduleType } from '../models/schedule';

export const DefaultTimezone = 'America/Antigua';

export function getTimeSlots(scheduleType: ScheduleType, selectedDate: Date, duration: ScheduleDuration, allowOnlyPassed = false): Array<ScheduleTimeSlot> {
  const date = format(selectedDate, 'yyyy-MM-dd');
  const now = new Date();
  // default start time is 8:00 am to 6:00 pm (we are not using this for now)
  let startTimeString = ' 08:00';
  let endTimeString = ' 18:00';

  let startTime;
  let endTime;
  let start;
  let end;
  if (scheduleType === ScheduleType.PickOutPaver) {
    startTimeString = ' 09:00';
    endTimeString = ' 11:00';
  }
  startTime = utcToZonedTime(new Date(date + startTimeString), DefaultTimezone);
  endTime = utcToZonedTime(new Date(date + endTimeString), DefaultTimezone);
  if (allowOnlyPassed) {
    start = startTime;
    if (isToday(selectedDate)) {
      end = now > endTime ? endTime : now;
    } else {
      end = utcToZonedTime(new Date(date + endTimeString), DefaultTimezone);
    }
  } else {
    end = utcToZonedTime(new Date(date + endTimeString), DefaultTimezone);
    if (isToday(selectedDate)) {
      const s = new Date(format(now, 'yyyy-MM-dd HH:00:00'));
      start = now < startTime ? startTime : s;
    } else {
      start = utcToZonedTime(new Date(date + startTimeString), DefaultTimezone);
    }
  }
  const slots = [];
  let bap = start;
  while (bap < end) {
    const from = bap;
    bap = addMinutes(bap, duration);
    const to = bap;
    slots.push({from, to});
  }
  return slots;
}
