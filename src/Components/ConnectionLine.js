import React from 'react';
import { useStore } from 'reactflow';

export default ({ fromX, fromY, toX, toY }) => {
  const { connectionHandleId } = useStore();
const colors={color:"green"}
  return (
    <g>
      <path
        fill="none"
      
        stroke={"green"}
        strokeWidth={4.5}
        className="animated"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="green"
        r={15}
        stroke={connectionHandleId}
        strokeWidth={1.5}
      />
    </g>
  );
};
