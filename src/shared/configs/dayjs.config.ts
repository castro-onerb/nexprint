import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/pt-br';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localeData);

dayjs.locale('pt-br');
dayjs.tz.setDefault('America/Fortaleza');

const now = () => dayjs().tz();

const toUtcString = (date: Date | string | dayjs.Dayjs) =>
  dayjs(date).utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

const toDisplayString = (date: Date | string | dayjs.Dayjs) =>
  dayjs(date).tz().format('DD/MM/YYYY HH:mm');

const toDateOnlyDisplay = (date: Date | string | dayjs.Dayjs) =>
  dayjs(date).tz().format('DD/MM/YYYY');

export default Object.assign(dayjs, {
  now,
  toUtcString,
  toDisplayString,
  toDateOnlyDisplay,
});
