import React from 'react';
import './index.css';

const DISTRICTS = [
  "Sonic",
  "Visual Art",
  "Artisan",
  "Pastoral",
  "Nature",
  "Food"
]

export default function DistrictSelector(props){
  return (
    <div className="district-list">
        {DISTRICTS.map((x) => (
          <div className="district">
            {x}
          </div>
        ))}
    </div>
  );
}
