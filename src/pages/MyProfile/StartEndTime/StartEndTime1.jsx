import React, { useState } from 'react';
import './StartEndTime.css';
import ImgX from './/../../../assets/close_24px.svg';
import ImgZ from './/../../../assets/query_builder.svg';
import AddTimer from './/../../../assets/add_24px.svg';

const TimeRangePicker2 = () => {
    const [timers, setTimers] = useState([{ startHour: '00', startMinute: '00', endHour: '00', endMinute: '00' }]);
    const [showStartDropdown, setShowStartDropdown] = useState(false);

    const toggleStartDropdown = () => {
        setShowStartDropdown(!showStartDropdown);
    };

    const handleStartHourChange = (index, event) => {
        const newTimers = [...timers];
        newTimers[index].startHour = event.target.value;
        setTimers(newTimers);
    };

    const handleStartMinuteChange = (index, event) => {
        const newTimers = [...timers];
        newTimers[index].startMinute = event.target.value;
        setTimers(newTimers);
    };

    const handleEndHourChange = (index, event) => {
        const newTimers = [...timers];
        newTimers[index].endHour = event.target.value;
        setTimers(newTimers);
    };

    const handleEndMinuteChange = (index, event) => {
        const newTimers = [...timers];
        newTimers[index].endMinute = event.target.value;
        setTimers(newTimers);
    };

    const clearTimeRange = (index) => {
        const newTimers = [...timers];
        newTimers.splice(index, 1);
        setTimers(newTimers);
    };

    const addTimer = () => {
        setTimers([...timers, { startHour: '00', startMinute: '00', endHour: '00', endMinute: '00' }]);
    };

    return (
        <div>
            {timers.map((timer, index) => (
                <div  key={index}>
                    <label>
                        <span className={'StartEndSpan'}>start/ end time</span>
                        <div className="input-container">
                            <div className={'input-container-inRow'}>
                                <input
                                    type="text"
                                    value={`${timer.startHour}:${timer.startMinute} - ${timer.endHour}:${timer.endMinute}`}
                                    onClick={toggleStartDropdown}
                                    readOnly
                                />
                                <button className="clear-button" onClick={() => clearTimeRange(index)}>
                                    <img src={ImgX} alt="ImgX" />
                                    <img src={ImgZ} alt="ImgZ" />
                                </button>
                            </div>
                            {showStartDropdown && (
                                <div className="dropdown">
                                    <select value={timer.startHour} onChange={(event) => handleStartHourChange(index, event)}>
                                        {[...Array(24).keys()].map(hour => (
                                            <option key={hour} value={hour.toString().padStart(2, '0')}>
                                                {hour.toString().padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                    :
                                    <select value={timer.startMinute} onChange={(event) => handleStartMinuteChange(index, event)}>
                                        {[...Array(60).keys()].map(minute => (
                                            <option key={minute} value={minute.toString().padStart(2, '0')}>
                                                {minute.toString().padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                    <select value={timer.endHour} onChange={(event) => handleEndHourChange(index, event)}>
                                        {[...Array(24).keys()].map(hour => (
                                            <option key={hour} value={hour.toString().padStart(2, '0')}>
                                                {hour.toString().padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                    :
                                    <select value={timer.endMinute} onChange={(event) => handleEndMinuteChange(index, event)}>
                                        {[...Array(60).keys()].map(minute => (
                                            <option key={minute} value={minute.toString().padStart(2, '0')}>
                                                {minute.toString().padStart(2, '0')}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                    </label>
                </div>
            ))}

        </div>
    );
};

export default TimeRangePicker2;
