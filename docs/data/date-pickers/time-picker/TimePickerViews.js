import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function TimePickerViews() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['MobileTimePicker', 'MobileTimePicker', 'MobileTimePicker']}
        sx={{ minWidth: 210 }}
      >
        <MobileTimePicker
          label={'"hours", "minutes" and "seconds"'}
          views={['hours', 'minutes', 'seconds']}
        />
        <MobileTimePicker label={'"hours"'} views={['hours']} />
        <MobileTimePicker
          label={'"minutes" and "seconds"'}
          views={['minutes', 'seconds']}
          format="mm:ss"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
