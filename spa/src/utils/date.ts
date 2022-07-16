import dayjs from 'dayjs';
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

export const getDate = (date?: string | number | Date | dayjs.Dayjs | null | undefined) => {
  return dayjs(date).tz();
}