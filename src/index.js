import React, { useState } from "react";
import arrowicon from './images/arrowicon.jpeg'
import  ReactDom  from "react-dom/client";
import './index.css'


//create a card to enter day, month and year with usestate

const Card = () => {
  //creating a state for day , month and year
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  //creating state if the error comes
  const [dayError, setDayError] = React.useState("");
  const [monthError, setMonthError] = React.useState("");
  const [yearError, setYearError] = React.useState("");

  //creating the state for inputing all fields
  const [inputclass, setInputClass] = React.useState("");
  const [labelclass, setLabelClass] = React.useState("");

  //create validation if any field is empty or invalid show error

  const validatedata = (inputDay, inputMonth, inputYear) => {
    let valid = true;

    if (isNaN(inputDay)) {
      valid = false;
      setDayError("Please Enter Valid Day");
    }

    if (isNaN(inputMonth)) {
      valid = false;
      setMonthError("Please Enter Valid Month");
    }

    if (isNaN(inputYear)) {
      valid = false;
      setYearError("Please Enter Valid Year");
    }

    if (!valid) return valid;

    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //deal with feb

    if (inputMonth === 2) {
      let leap = false;
      if (
        (!(inputYear % 4) == 0 && inputYear % 100 != 0) ||
        !(inputYear % 400)
      ) {
        leap = true;
      }
      if ((!leap && inputDay >= 29) || (leap && inputDay > 29)) {
        setMonthError("Must be a valid date ");
        valid = false;
      }

      // invalid month
    } else if (inputMonth < 1 || inputMonth > 12) {
      setMonthError("must be a valid month");
      if (0 <= inputDay || inputDay >= 31) setDayError("MUST BE A VALID DATE");
      valid = false;
    }
    //check valid day for a valid month
    else {
      if (days[inputMonth - 1] < inputDay) {
      }
    }
  };

  const DisplayAge = (inputDay, inputMonth, inputYear) => {
    let diff = new Date() - new Date(`${inputYear}-${inputMonth}-${inputDay}`);
    let age = new Date(diff);
    let [displayYear, displayMonth, displayDay] = [age.getFullYear() - 1970, age.getMonth(), age.getDate()];
    setYear(displayYear);
    setMonth(displayMonth);
    setDay(displayDay);
  };

  const handleFormInput = (e) => {
    e.preventDefault();
    const inputDay = document.querySelector("#day").value;
    const inputMonth = document.querySelector("#month").value;
    const inputYear = document.querySelector("#year").value;

    // clear past errors (todo: clear red class as well)
    setDayError("")
    setMonthError("")
    setYearError("")
    setInputClass("")
    setLabelClass("")
    setDay("- -")
    setMonth("- -")
    setYear("- -")
  

  // validate date

  let valid = validatedata(
    parseInt(inputDay),
    parseFloat(inputMonth),
    parseInt(inputYear)
  );
  if (valid) {
    DisplayAge(inputDay, inputMonth, inputYear);
  } else {
    setInputClass("red");
    setLabelClass("red-text");
  }
}

  return (
    <section className="container">
      <div className="card">
        <form>
          <div className="input-holder">
            <div className="input">
              <label htmlFor="day" className={labelclass}>
                {" "}
                day{" "}
              </label>
              <input
                type="text"
                name="month"
                className={inputclass}
                id="day"
                placeholder="dd"
              />
              <span>{dayError}</span>
            </div>
            <div className="input">
              <label htmlFor="month" className={labelclass}>
                month
              </label>
              <input
                type="text"
                name="month"
                className={inputclass}
                id="month"
                placeholder="mm"
              />
              <span>{monthError}</span>
            </div>
            <div className="input">
              <label htmlFor="year" className={labelclass}>
                year
              </label>
              <input
                type="text"
                name="year"
                className={inputclass}
                id="year"
                placeholder="yyyy"
              />
              <span>{yearError}</span>
            </div>
          </div>

          <div className="submit-area">
            <div className="hr">
              <hr />
            </div>
            <button
              type="submit"
              value=""
              id="submit"
              onClick={ handleFormInput }
            >
              <img src={arrowicon} alt="" />
            </button>
          </div>
        </form>
        <div className="output">
          <h1>
            <span>{year}</span> year
          </h1>
          <h1>
            <span>{month}</span> months
          </h1>
          <h1>
            <span>{day}</span> days
          </h1>
        </div>
      </div>
    </section>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Card/>
)

//take input

//return function
