import { CalendarEvent } from 'angular-calendar';
import { Schedule, ScheduleType } from '../models/schedule';

export function parseToCalendarEvent(schedule: Schedule, draggable = false, isTemp = false): CalendarEvent {
  return {
    start: new Date(schedule.from),
    end: new Date(schedule.to),
    title: schedule.data.name,
    meta: { ...schedule, isTemp },
    allDay: schedule.type === ScheduleType.ProjectStart,
    draggable: schedule.type !== ScheduleType.ProjectStart ? draggable : false
  };
}
