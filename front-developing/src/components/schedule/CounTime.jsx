import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function CounTime(data){
    const month1 = ('0' + (new Date().getMonth()+1)).slice(-2)
    const month2 = ('0' + (new Date().getMonth()+2)).slice(-2)
    const year = new Date().getFullYear()
    const { setData, id } = data
    const [info,setInfo] = useState()
    const [holidays1,setHolidays1] = useState()
    const [holidays2,setHolidays2] = useState()
    const URL = `https://i7e207.p.ssafy.io:8080/api/v1/counselors/${id}` //강사정보
    const URLT = `https://i7e207.p.ssafy.io:8080/api/v1/schedules/counselors/holidays/${id}/${year}-${month1}` //휴일정보 이번달
    const URLN = `https://i7e207.p.ssafy.io:8080/api/v1/schedules/counselors/holidays/${id}/${year}-${month2}` //휴일정보 다음달
    useEffect(()=>{
        axios.get(URL)
        .then(function(response){
        console.log(response.data,'dddd')
        setInfo(response.data)
        axios.get(URLT)
        .then(function(response){
            console.log(response.data,'8월')
            setHolidays1(response.data.map((x)=>` ${x.holiday}일`))
        })
        axios.get(URLN)
        .then(function(response){
            console.log(response.data,'9월')
            setHolidays2(response.data.map((x)=>` ${x.holiday}일`))
        })
    })
    },[])
        
    useEffect(()=>{
    },[info,holidays1,holidays2])

    function Change(){
        setData(true)
    }
    return(
        <div>
            <div>상담가능 시간 : {info ? `${info.reserveStartTime.slice(0,5)}~${info.reserveEndTime.slice(0,5)}` : null}</div>
            { info ?
            <div>상담요일 :
                {info.holiday.includes('1') ? null : <span> 월</span>}
                {info.holiday.includes('2') ? null : <span> 화</span>}
                {info.holiday.includes('3') ? null : <span> 수</span>}
                {info.holiday.includes('4') ? null : <span> 목</span>}
                {info.holiday.includes('5') ? null : <span> 금</span>}
                {info.holiday.includes('6') ? null : <span> 토</span>}
                {info.holiday.includes('0') ? null : <span> 일</span>}
            </div>
            : null}
            <div>휴일 
                <div>
                    { holidays1 ? ` ${month1}월 : ${holidays1}` : null}
                </div>    
                <div>
                    { holidays2 ? ` ${month2}월 : ${holidays2}` : null}    
                </div>     
            </div>
            <button onClick={Change}>일정변경</button>
        </div>
    )
}