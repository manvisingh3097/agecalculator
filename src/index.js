import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import arrowicon from './images/arrowicon.jpeg';

const Card = () => {
    const [year, setYear] = React.useState('- -');
    const [month, setMonth] = React.useState('- -');
    const [day, setDay] = React.useState('- -');

    const [dayError, setDayError] = React.useState('');
    const [monthError, setMonthError] = React.useState('');
    const [yearError, setYearError] = React.useState('');

    const [inputClass, setInputClass] = React.useState('');
    const [labelClass, setLabelClass] = React.useState('');

    // input validation
    const validateDate = (inputDay, inputMonth, inputYear) => {
    }

    const displayAge = (inputDay, inputMonth, inputYear) => {
    }

    const handleFormInput = (e) => {
        e.preventDefault()
        const inputDay = document.querySelector('#day').value;
        const inputMonth = document.querySelector('#month').value;
        const inputYear = document.querySelector('#year').value;

        // clear past errors (todo: clear red class as well)
        setDayError('')
        setMonthError('')
        setYearError('')
        setInputClass('')
        setLabelClass('')
        setDay('- -');
        setMonth('- -');
        setYear('- -');

        // validate date
        let valid = validateDate(parseInt(inputDay), parseInt(inputMonth), parseInt(inputYear));
        if (valid) {
            // display results
            displayAge(inputDay, inputMonth, inputYear);
        }
        else {
            setInputClass('red');
            setLabelClass('red-text')
        }

        
    };
    return (
        <section className="container">
            <div className="card">
                <form>
                    <div className='input-holder'>
                        <div className="input">
                            <label htmlFor="day" className={labelClass}>day</label>
                            <input type="text" name='day' className={inputClass} id='day' placeholder='dd' />
                            <span>{dayError}</span>
                        </div>
                        <div className="input">
                            <label htmlFor="month" className={labelClass}>month</label>
                            <input type="text" name='month' className={inputClass} id='month' placeholder='mm' />
                            <span>{monthError}</span>
                        </div>
                        <div className="input">
                            <label htmlFor="year" className={labelClass}>year</label>  
                            <input type="text" name='year' className={inputClass} id='year' placeholder='yyyy' />
                            <span>{yearError}</span>
                        </div>
                    </div>

                    <div className="submit-area">
                        <div className="hr">
                            <hr />
                        </div>
                        <button type="submit" value='' id='submit' onClick={handleFormInput}>
                            <img src={arrowicon} alt="" />
                        </button>
                    </div>
                </form>
                <div className="output">
                    <h1><span>{year}</span> years</h1>
                    <h1><span>{month}</span> months</h1>
                    <h1><span>{day}</span> days</h1>
                </div>
            </div>
        </section>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Card />
);