import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const DragDropTemplate = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'Task 1' },
    { id: '2', content: 'Task 2' },
    { id: '3', content: 'Task 3' },
    // Add more items as needed
  ]);

  const onDragEnd = (result) => {
    // Reorder the list if drag ends in valid location
    // Handle reordering logic here
  };

  return (
    <div className="flex justify-center">
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-1/4 border border-gray-300 p-4 rounded-md"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white border border-gray-200 p-2 mb-2 rounded-md"
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DragDropTemplate;
