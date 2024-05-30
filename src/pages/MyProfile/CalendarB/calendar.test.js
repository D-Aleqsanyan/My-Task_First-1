import React from 'react';
import { render } from '@testing-library/react';
import CustomSlots from './calendar';

describe('CustomSlots2 component', () => {
    test('renders without crashing', () => {
        render(<CustomSlots/>);
    });
});
