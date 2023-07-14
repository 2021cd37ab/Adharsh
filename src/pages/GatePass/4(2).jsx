import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Table_info from './table_info';

function GatePass4_2() {
const navigate = useNavigate();

//for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
  setShowPopup(false);
};

const [tableDataBlocks, setTableDataBlocks] = useState([]);

  const handleAddMore = () => {
    setTableDataBlocks((prevBlocks) => [...prevBlocks, <Table_info key={prevBlocks.length} />]);
  };

const HandleDone =()=>{
    alert('Your Report is submitted !');
};




  return (
    <div className="container" style={{height: '95vh'}}>
    <div className='BOX' style={{height: '495px'}}>
      <div className="group">
        <div className="header">
          <div className="title">Enter The following Details:</div>
          <div className="separator"></div>
          <div className="x-circle"  onClick={() => setShowPopup(true)}>
            <div className='Vector'></div>
          </div>
          {/* for x-circle */}
          {showPopup && (
  <div className="popup" style={{left : '20%', bottom: '22%'}}>
    <div className="popup-content">
      <div className="popup-header">Options</div>
      <div className="popup-body">
        <div className="popup-option" onClick={handleClosePopup}>
          Cancel
        </div>
        <div className="popup-option">
          Exit
        </div>
        <div className="popup-option">Save</div>
      </div>
    </div>
  </div>
)}
        </div>
        <div className="stepper">
        <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed">1</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed">2</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed">3</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed">4</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step  ">5</div>
          </div>
          <div className='stepsHorizontal'>
          <div className="step ">6</div>
          </div>
        </div>
<div className='row'>
<div className="group">
        <div className="select">
          <div className="label">Station Name  : </div>
          <div><select className='select-box' id='station_name'>
           </select></div>
        </div>
        </div>

        <div className="group">
          <div className="select">
            <div className="label">Party Name  : </div>
            <div> <select className='select-box' id='party_name'>
           </select></div>
        </div>

        
        </div>
        </div>
<div className='row'>

        <div className="group">
          <div className="select">
            <div className="label">Area : </div>
            <div> <select className='select-box' id='Area'>
           </select></div>
        </div>
    </div>
        <div className="group">
          <div className="select">
            <div className="label">Block : </div>
            <div> <select className='select-box' id='block'>
           </select></div>
        </div>
    </div>
        </div>
        
      <Table_info />

      {tableDataBlocks.map((block) => block)}
       <div className='inline BOX ' style={{height:'100px'}} >
       <div className="button" onClick={handleAddMore} >Add More</div>
       <div className="button" onClick={HandleDone} style={{backgroundColor :'rgb(50, 205, 50)'}} >Done</div>
       </div>
      </div>
      </div>
    </div>
  );
}

export default GatePass4_2;
