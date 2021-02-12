import React, { Component, useState, useEffect } from "react";
import axios from "axios";


const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"

export default function FetchWeather(city){

    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c3cb98520f309bd159e77512e8e5e28&units=metric`)
        .then(res => {
            return res.json();
        })
        .then(JSONres => {
            //dispatch the action
            dispatch({
                type: "FETCH_WHEATHER",
                payload : JSONres
            });
        }).catch(err => {
                console.log(err);
            })
    }
    }