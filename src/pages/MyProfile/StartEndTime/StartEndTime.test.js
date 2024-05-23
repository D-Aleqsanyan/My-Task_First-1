import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeRangePicker from './StartEndTime';

describe('TimeRangePicker', () => {
    test('renders TimeRangePicker component', () => {
        render(<TimeRangePicker />);
        const addButton = screen.getByAltText('AddTimer');
        expect(addButton).toBeInTheDocument();
    });

    test('adds a new timer on add button click', () => {
        render(<TimeRangePicker />);
        const addButton = screen.getByAltText('AddTimer');
        fireEvent.click(addButton);
        const timers = screen.getAllByText('start/ end time');
        expect(timers.length).toBe(2); // Initially 1, after adding 2
    });

    test('toggles dropdown on input click', () => {
        render(<TimeRangePicker />);
        const input = screen.getByDisplayValue('00:00 - 00:00');
        fireEvent.click(input);
        const dropdowns = screen.getAllByRole('combobox');
        expect(dropdowns.length).toBe(4); // 2 for start time, 2 for end time
    });

    test('clears a timer on clear button click', () => {
        render(<TimeRangePicker />);
        const clearButton = screen.getByAltText('ImgX');
        fireEvent.click(clearButton);
        const timers = screen.queryAllByText('start/ end time');
        expect(timers.length).toBe(0);
    });

    test('changes start hour correctly', () => {
        render(<TimeRangePicker />);
        const input = screen.getByDisplayValue('00:00 - 00:00');
        fireEvent.click(input);
        const startHourDropdown = screen.getAllByRole('combobox')[0];
        fireEvent.change(startHourDropdown, { target: { value: '05' } });
        expect(screen.getByDisplayValue('05:00 - 00:00')).toBeInTheDocument();
    });

    test('changes start minute correctly', () => {
        render(<TimeRangePicker />);
        const input = screen.getByDisplayValue('00:00 - 00:00');
        fireEvent.click(input);
        const startMinuteDropdown = screen.getAllByRole('combobox')[1];
        fireEvent.change(startMinuteDropdown, { target: { value: '30' } });
        expect(screen.getByDisplayValue('00:30 - 00:00')).toBeInTheDocument();
    });

    test('changes end hour correctly', () => {
        render(<TimeRangePicker />);
        const input = screen.getByDisplayValue('00:00 - 00:00');
        fireEvent.click(input);
        const endHourDropdown = screen.getAllByRole('combobox')[2];
        fireEvent.change(endHourDropdown, { target: { value: '12' } });
        expect(screen.getByDisplayValue('00:00 - 12:00')).toBeInTheDocument();
    });

    test('changes end minute correctly', () => {
        render(<TimeRangePicker />);
        const input = screen.getByDisplayValue('00:00 - 00:00');
        fireEvent.click(input);
        const endMinuteDropdown = screen.getAllByRole('combobox')[3];
        fireEvent.change(endMinuteDropdown, { target: { value: '45' } });
        expect(screen.getByDisplayValue('00:00 - 00:45')).toBeInTheDocument();
    });
});
