import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';

import { Handle, Position } from 'reactflow';
import { AiOutlineNodeIndex } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

function ImageDocument({ data, id, onRemove }) {
  // State to manage showing/hiding inputs
  const [showInputs, setShowInputs] = useState(false);

  // Function to handle showing inputs
  const handleButtonClick = () => {
    setShowInputs(!showInputs); // Set to true to show inputs
  };

  // No need for a separate function to hide inputs since we're setting them to false initially

  return (
    <div className="bg-blue-200 rounded-lg p-5 shadow-lg border-2 border-blue-600 relative">
      <button
        onClick={() => onRemove(id)}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800"
      >
        <MdDeleteForever />
      </button>
      <Handle type="target" position={Position.Top} />
      <div className="flex items-center justify-center bg-blue-100 border-l-4 border-blue-600 text-blue-700 rounded-lg mb-2">
        <AiOutlineNodeIndex className="mr-2" />
        <h3>Custom Node</h3>
      </div>
      {/* Conditionally render inputs */}
      {showInputs && (
        <>
          <input type="text" className="w-full p-2 rounded-lg border-2 border-blue-600 mb-2" placeholder="Input 1" />
          <input type="text" className="w-full p-2 rounded-lg border-2 border-blue-600 mb-2" placeholder="Input 2" />
          <input type="text" className="w-full p-2 rounded-lg border-2 border-blue-600 mb-2" placeholder="Input 3" />
          <button onClick={() => setShowInputs(false)} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2">Remove Inputs</button>
        </>
      )}
      {!showInputs && (
        <button onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Show Inputs</button>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default ImageDocument;