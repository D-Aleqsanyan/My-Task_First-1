import React from 'react';
import { render } from '@testing-library/react';
import CustomSlots2 from './calendar';

describe('CustomSlots2 component', () => {
    test('renders without crashing', () => {
        render(<CustomSlots2 />);
    });
});
