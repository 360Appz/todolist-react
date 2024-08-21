'use client'

import Dropdown from 'react-bootstrap/Dropdown';

export default function SortButton() {
  return (
    <>
    <div className='mt-3'>
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{height:"55px", width:"100%"}}>
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Status</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </>
  );
}


