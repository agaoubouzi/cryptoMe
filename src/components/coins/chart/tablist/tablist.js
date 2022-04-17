import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Tablist = ({ tablistDays }) => {
  const { id } = useParams();


  useEffect(() => {
    Array.from(document.getElementsByClassName("tab")).forEach((el, key) => key === 0 ? el.classList.add("active") : el.classList.remove("active"));
  }, [id])

  return (
    <>
      <ul className="tablist">
        <li className='active tab' onClick={tablistDays.bind(this, '1')}>1d</li>
        <li className='tab' onClick={tablistDays.bind(this, '7')}>7d</li>
        <li className='tab' onClick={tablistDays.bind(this, '30')}>1m</li>
        <li className='tab' onClick={tablistDays.bind(this, '90')}>3m</li>
        <li className='tab' onClick={tablistDays.bind(this, '365')}>1Y</li>
        <li className='tab' onClick={tablistDays.bind(this, 'max')}>All</li>
      </ul>
    </>
  );
}

export default Tablist;