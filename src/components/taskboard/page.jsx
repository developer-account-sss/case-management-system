// TaskBoard.js
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./taskboard.css";

function TaskBoard() {
  const [tasks, setTasks] = useState({
    high: [
      { id: "task-1", content: "Complete project proposal" },
      { id: "task-2", content: "Finish frontend design" },
    ],
    medium: [
      { id: "task-3", content: "Prepare presentation" },
      { id: "task-4", content: "Team meeting" },
    ],
    low: [
      { id: "task-5", content: "Organize files" },
      { id: "task-6", content: "Update software" },
    ],
  });

  // Handle drag end event
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside any column, do nothing
    if (!destination) return;

    // If the item is dropped in the same place, do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Clone the source column and the task being dragged
    const sourceColumn = [...tasks[source.droppableId]];
    const destinationColumn = [...tasks[destination.droppableId]];
    const [movedTask] = sourceColumn.splice(source.index, 1);

    // Insert the dragged task into the destination column
    destinationColumn.splice(destination.index, 0, movedTask);

    // Update state with new task arrangement
    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destinationColumn,
    });
  };

  return (
    <div className="task-board">

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns-container">
          {["high", "medium", "low"].map((priority) => (
            <Droppable droppableId={priority} key={priority}>
              {(provided, snapshot) => (
                <div
                  className={`column ${priority}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3>{priority.toUpperCase()} PRIORITY</h3>
                  {tasks[priority].map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className={`task-card ${
                            snapshot.isDragging ? "dragging" : ""
                          }`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default TaskBoard;
