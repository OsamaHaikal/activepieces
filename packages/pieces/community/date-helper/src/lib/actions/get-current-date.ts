import { Property, createAction } from '@activepieces/pieces-framework';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import {
  optionalTimeFormats,
  timeFormat,
  timeFormatDescription,
  timeZoneOptions,
} from '../common';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getCurrentDate = createAction({
  name: 'get_current_date',
  displayName: 'Get Current Date',
  description: 'Get the current date',
  errorHandlingOptions: {
    continueOnFailure: {
      hide: true,
    },
    retryOnFailure: {
      hide: true,
    },
  },
  props: {
    timeFormat: Property.StaticDropdown({
      displayName: 'To Time Format',
      description: timeFormatDescription,
      options: {
        options: optionalTimeFormats,
      },
      required: true,
      defaultValue: timeFormat.format00,
    }),
    timeZone: Property.StaticDropdown<string>({
      displayName: 'Time Zone',
      options: {
        options: timeZoneOptions,
      },
      required: true,
      defaultValue: 'UTC',
    }),
  },
  async run(context) {
    const timeFormat = context.propsValue.timeFormat;
    const timeZone = context.propsValue.timeZone;
    return { result: dayjs().tz(timeZone).format(timeFormat) };
  },
});
