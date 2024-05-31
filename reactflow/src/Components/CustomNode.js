import React from 'react';
import { Handle, Position } from 'reactflow';

const CustomNode = ({ id, data }) => {
  return (
    <div style={{ padding: 10, border: '1px solid black', borderRadius: 5 }}>
      <div>{data.label}</div>
      <div><input type='text'/> {data.output}</div>
      <div><input/>{data.input}</div>
      <Handle type="source" position={Position.Right} id="output" />
      <Handle type="target" position={Position.Left} id="input" />
    </div>
  );
};

export default CustomNode;
