import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, applyEdgeChanges, applyNodeChanges, MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './TextUpdaterNode';
import ImageDocument from './ImageDocument';
import CustomNode from './CustomNode';

import { GiClick } from 'react-icons/gi';


const rfStyle = {
  backgroundColor: 'white',
};

const initialNodes = [];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const [selectedEdges, setSelectedEdges] = useState([]);
  const [draggingEnabled, setDraggingEnabled] = useState(true);
  const sidebarRef = useRef(null);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => {
      const sourceNode = nodes.find((node) => node.id === connection.source);
      const targetNode = nodes.find((node) => node.id === connection.target);

      if (sourceNode && targetNode) {
        const edgeData = sourceNode.data.value;
        setEdges((eds) => addEdge({ ...connection, edgeData }, eds));
      }
    },
    [nodes]
  );

  const onEdgeClick = (event, edge) => {
    event.preventDefault();
    if (selectedEdges.includes(edge.id)) {
      setSelectedEdges(selectedEdges.filter((selectedEdge) => selectedEdge !== edge.id));
    } else {
      setSelectedEdges([...selectedEdges, edge.id]);
    }
  };

  const handleSidebarItemClick = () => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'textUpdater',
      position: { x: 300, y: 300 },
      data: { value: '' },
    };
    setNodes([...nodes, newNode]);
  };

  const handleAddCustomNode = () => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'customNode',
      position: { x: 300, y: 400 },
      data: { value: '' },
    };
    setNodes([...nodes, newNode]);
  };

  const handleSidebarImgDocument = () => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'imageDocument',
      position: { x: 300, y: 500 },
      data: { value: '' },
    };
    setNodes([...nodes, newNode]);
  };

  const toggleDraggingEnabled = () => {
    setDraggingEnabled(!draggingEnabled);
  };

  const onRemoveNode = (nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  };

  const nodeTypes = {
    textUpdater: (props) => <TextUpdaterNode {...props} onRemove={onRemoveNode} />,
    customNode: (props) => <CustomNode {...props} onRemove={onRemoveNode} />,
    imageDocument: (props) => <ImageDocument {...props} onRemove={onRemoveNode} />,
  };

  return (
    <div className="flex h-screen w-full">
      <div
        ref={sidebarRef}
        className="bg-gray-200 p-4 flex flex-col"
        style={{
          width: draggingEnabled ? '200px' : '60px',
          transition: 'width 0.3s ease-in-out',
        }}
      >
        <div className="flex items-center mb-4">
          <button
            onClick={toggleDraggingEnabled}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {draggingEnabled ? '≡' : '×'}
          </button>
          <span
            className={`ml-2 transition-opacity ${
              draggingEnabled ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Sidebar
          </span>
        </div>
        <div
          className={`flex-grow overflow-y-auto ${
            draggingEnabled ? 'opacity-100' : 'opacity-0'
          } transition-opacity`}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-2 mt-3 cursor-pointer"
            onClick={handleSidebarItemClick}
          >
            <GiClick className="ml-4 text-green-700 mx-20" />
            <p className="text-center text-sm mt-1 text-gray-600">Text</p>
            <p className="ml-1 text-gray-600">Button</p>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg p-2 mt-3 cursor-pointer"
            onClick={handleAddCustomNode}
          >
            <GiClick className="ml-4 text-blue-700" />
            <p className="text-center text-sm mt-1 text-gray-600">Image</p>
            <p className="ml-1 text-gray-600">Button</p>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg p-2 mt-3 cursor-pointer"
            onClick={handleSidebarImgDocument}
          >
            <GiClick className="ml-4 text-blue-700" />
            <p className="text-center text-sm mt-1 text-gray-600">Document</p>
            <p className="ml-1 text-gray-600">Button</p>
          </div>
        </div>
      </div>
      <div className="flex-grow h-4/5 border-solid border-2 border-black">
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            style={rfStyle}
            onEdgeClick={onEdgeClick}
            nodesDraggable={draggingEnabled}
          >
            <MiniMap />
            <Controls>
        <ControlButton onClick={() => alert('Something magical just happened. ✨')}>
          <MagicWand />
        </ControlButton>
         </Controls>
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default Flow;
