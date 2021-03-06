import React from 'react';

import './SideFilter.scss'

const SideFilter = ({ onSetEmploymentTypeFT, onSetEmploymentTypePT, onSetDistance }) => {
  return (
        <aside className="filter-bar-container">
            <p className="filters-title"> FILTERS</p>
            <div className="distance filter-criteria">
                <p> Distance</p>
                <select onChange={event => onSetDistance(event)} className="distance-selector">
                    <option value=''></option>
                    <option value='10'>10 miles</option>
                    <option value='25'>25 miles</option>
                    <option value='1000'>50+ miles</option>
                </select>
            </div>
            <div className="employment-type filter-criteria">
                <p>Employment Type</p>
                <div className="filter-options">
                    <input name="full-time" type="checkbox" onChange={event => onSetEmploymentTypeFT(event)} />
                    <p>Full Time</p> <br />
                </div>
                <div className="filter-options">
                    <input name="part-time" type="checkbox" onChange={event => onSetEmploymentTypePT(event)} />
                    <p>Part Time</p> <br />
                </div>
            </div>
            <div className="experience-level filter-criteria">
                <p> Experience Level</p>
                <div className="filter-options">
                    <input name="entry-level" type="checkbox" />
                    <p>Entry Level</p> <br />
                </div>
                <div className="filter-options">
                    <input name="mid-level" type="checkbox" />
                    <p>Mid Level</p> <br />
                </div>
                <div className="filter-options">
                    <input name="senior-level" type="checkbox" />
                    <p>Senior Level</p> <br />
                </div>
            </div>
        </aside>

  )
}

export default SideFilter;