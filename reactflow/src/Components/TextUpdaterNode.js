import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { TiFlowSwitch } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
const rfStyle = {
  backgroundColor: 'green' ,left:10,padding:2
};
function TextUpdaterNode({onRemoves }) {
  const onChange = (evt) => {
    console.log(evt.target.value);
  };

  return (
    <div className='bg-white rounded-lg p-7 shadow-lg hover:border-solid border-2 border-green-600 hover:border-t-4 border-green-600'> 
     
      <Handle type="target" position={Position.Top} />
      <div>

        
        <div className='block bg-gray-200 p-4 rounded-lg relative bottom-19 mt-1'>
          <Handle type="source" position={Position.Left} id="buttonHandle" style={rfStyle } />
         
          <button onClick={onRemoves} className="  text-red-600 hover:text-red-800"><MdDeleteForever /></button>

          <input id="text" name="text" onChange={onChange} className='outline-red-500 border-solid border-2 border-black-900 rounded-lg px-2' placeholder='Enter the text' />
        </div>
        <div>

        </div>
      </div>
      <Handle type="source" position={Position.Left} id="a"      />
    </div>
  );
}

function NodeContainer({id,onRemove}) {
  
  const [inputBoxes, setInputBoxes] = useState([]);
  const [addButtonDisabled, setAddButtonDisabled] = useState(false);

  const addInputBox = () => {
    setInputBoxes((prevInputBoxes) => [...prevInputBoxes, <TextUpdaterNode key={prevInputBoxes.length} onRemoves={() => removeInputBox(prevInputBoxes.length)} />]);
    
    // Disable the add button after adding 3 input boxes
    if (inputBoxes.length === 2) {
      setAddButtonDisabled(true);
    }
  };

  const removeInputBox = (indexToRemove) => {
    setInputBoxes((prevInputBoxes) => prevInputBoxes.filter((_, index) => index !== indexToRemove));
    // Enable the add button when removing an input box
    setAddButtonDisabled(false);
  };

  return (
    <div className='bg-white rounded-lg p-7 shadow-lg hover:border-solid border-2 border-green-600 hover:border-t-4 border-green-600'>
      <button
        onClick={() => onRemove(id)}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800"
      >
        <MdDeleteForever />
      </button>
      <div className='flex bg-green-100 border-l-4 border-green-600 text-green-700 rounded-lg mb-5 px-5'>
        <TiFlowSwitch className='mt-1' />
        <h3 className='text-center'>Messages</h3>
      </div>
      <div>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='message' className='rounded-lg border-green-600 border-3'></textarea>
      </div>
      {inputBoxes.map((inputBox, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          {inputBox}
        </div>
      ))}
      <button onClick={addInputBox} className='bg-white shadow-lg p-1 rounded-lg px-5' disabled={addButtonDisabled}>Add Input Box</button>
    </div>
  );
}

export default NodeContainer;
