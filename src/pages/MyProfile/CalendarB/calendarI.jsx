import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './calendarI.css';


const StyledButton = styled(IconButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    color: '#95A2A7',
    padding: 8,
    backgroundColor: 'white',
}));

const StyledDay = styled(PickersDay)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    color:
        theme.palette.mode === 'light'
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
}));

export default function CustomSlots() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Date of birth"
                    slots={{
                        openPickerIcon: EditCalendarRoundedIcon,
                        openPickerButton: StyledButton,
                        day: StyledDay,
                    }}
                    slotProps={{
                        openPickerIcon: {}, // Pass an empty object
                        openPickerButton: { color: 'secondary' },
                        textField: {
                            variant: 'filled',
                            focused: true,
                            color: 'grey',
                        },
                    }}
                    className="custom-input"
                    InputLabelProps={{ shrink: true }} // This will remove the default placeholder text
                />
        </LocalizationProvider>
    );
}
