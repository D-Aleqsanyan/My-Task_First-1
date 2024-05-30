import './form.css'
import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
import TimeRangePicker from "./StartEndTime/StartEndTime"
import GitHub from "./../../assets/github.svg"
import Slack from "./../../assets/slack.svg"
import {Checkbox, TextField} from '@mui/material';
import CustomSlots from "./CalendarB/calendar";


const Form = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const formSubmit = (data) => {
        console.log(data, 'data')

    }

    let label;

    return <div>
        <form onSubmit={handleSubmit(formSubmit)} className={'form'}>
            <span className={'formSpan1'}>My Profile</span>
            <div className={'formWrapper'}>
                <div className={'formWrapperDiv1'}>

                    <div className={'formWrapperDiv1-1'}>
                        <span className={'formSpan2'}>General Info</span>
                        <div className={'formCol1'}>
                            <div className={'formCol1El1'}>
                                <TextField id="standard-basic" label="First name" variant="standard"/>
                            </div>

                            <div className={'formCol1El1'}>
                                <TextField id="standard-basic" label="Last name" variant="standard"/>
                            </div>

                            <div className={'formCol1El3'}>
                                <CustomSlots
                                    sx={{
                                        width: '223px',
                                        height: '55px'
                                    }}/>
                            </div>


                        </div>
                        <div className={'formCol1'}>
                            <div className={'formCol1El1'}>
                                <TextField id="standard-basic" label="Email" variant="standard"
                                           sx={{
                                               width: '325px',
                                               height: '55px'
                                           }}/>
                            </div>

                            <div className={'formCol1El1'}>
                                <TextField id="standard-basic" label="Personal Email" variant="standard"
                                           sx={{
                                               width: '325px',
                                               height: '55px'
                                           }}/>
                            </div>

                            <div className={'formCol1El1'}>
                                <TextField id="standard-basic" label="Mobile Phone" variant="standard"
                                           sx={{
                                               width: '325px',
                                               height: '55px'
                                           }}/>
                            </div>

                        </div>

                        <div className={'formCol1'}>
                            <div className={'formCol1El1'}>
                                <CustomSlots sx={{
                                    width: '223px',
                                    height: '55px'
                                }}/>
                            </div>

                            <div className={'formCol1El1'}>
                                <TextField id="standard-basic" label="Absences" variant="standard"/>
                            </div>

                            <div className={'formCol1El4'}>
                                <div className={'formCol1El2-2'}>
                                    <Checkbox {...label} defaultChecked/>
                                    <span className={'formCol1El2span'}>Core team member</span>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className={'formWrapperDiv1-1'}>
                        <span className={'formSpan3'}>My accounts</span>
                        <div className={'formCol1El1-1'}>
                            <span className={'formCol1El1span'}>Slack</span>
                            <div className={'SlackRow'}>
                                <img src={Slack} alt="Slack"/>
                                <TextField id="standard-basic" label="Enter you slack user name" variant="standard"/>
                            </div>
                            <span className={'formCol1El1span'}>Github</span>
                            <div className={'SlackRow'}>
                                <img src={GitHub} alt="GitHub"/>
                                <TextField id="standard-basic" label="Enter your github user name" variant="standard"/>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={'formWrapperDiv1-2'}>

                    <div className={'formWrapperDiv2'}>
                        <p className={'formSpan2'}>Work logs</p>
                        <div className={'formWrapperDiv2-row'}>

                            <div className={'formCol2'}>
                                <span className={'formCol2Span'}>Sunday</span>
                                <TimeRangePicker/>
                            </div>
                            <div className={'formCol2'}>
                                <span className={'formCol2Span'}>Monday</span>
                                <TimeRangePicker/>
                                <TimeRangePicker/>
                            </div>
                            <div className={'formCol2'}>
                                <span className={'formCol2Span'}>Tuesday</span>
                                <TimeRangePicker/>
                                <TimeRangePicker/>
                            </div>
                            <div className={'formCol2'}>
                                <span className={'formCol2Span'}>Wednesday</span>
                                <TimeRangePicker/>
                                <TimeRangePicker/>
                            </div>
                            <div className={'formCol2'}>
                                <span className={'formCol2Span'}>Thursday</span>
                                <TimeRangePicker/>
                                <TimeRangePicker/>

                            </div>
                            <div className={'formCol2'}>
                                <span className={'formCol2Span'}>Friday</span>
                                <TimeRangePicker/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default Form