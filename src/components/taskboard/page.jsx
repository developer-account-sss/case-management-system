import React from "react";
import Draggable from "react-draggable";
import styles from './page.module.css';
import "./taskboard.css";
import { Link } from "react-router-dom";

function TaskBoard() {

    const newlyAdded = [
        { id: "task-1", content: "Disenhouse Assoc. v Mazzaferro", priority: "High Priority", type: "Bankruptcy" },
        { id: "task-2", content: "La Manna Concrete v Friedman", priority: "Low Priority", type: "Criminal" },
        { id: "task-3", content: "People v Matera ", priority: "High Priority", type: "Civil" },
        { id: "task-4", content: "Fix bugs in codebase", priority: "Medium Priority", type: "DUI/DWI" },
    ];

    const consultScheduled = [
        { id: "task-5", content: "Prepare presentation", priority: "Medium Priority", type: "Employment" },
        { id: "task-6", content: "Team meeting", priority: "Low Priority", type: "Family" },
        { id: "task-7", content: "Little v Banks (85 NY 258)", priority: "Low Priority", type: "Civil" },

    ];

    const pendingEngagement = [{ id: "task-8", content: "Little v Banks (85 NY 258)" , priority: "High Priority", type: "Criminal"}];

    const workingOnRetainer = [
        { id: "task-5", content: "Prepare presentation", priority: "Low Priority", type: "Immigration" },
        { id: "task-6", content: "Team meeting", priority: "Medium Priority", type: "Bankruptcy" },
        { id: "task-7", content: "Little v Banks (85 NY 258)", priority: "Low Priority", type: "Divorce" },
    ];

    const renderTasks = (tasks) => {
        return tasks.map((task) => (
            <Draggable key={task.id}>
                <div className={`task-card d-flex flex-column gap-3 ${styles.taskCard}`}>
                    <Link to='/case-details/1'>{task.content}</Link>
                    <span>{task.priority}</span>
                    <p>{task.type}</p>
                </div>
            </Draggable>
        ));
    };

    return (
        <div className="task-board">
            
            <div className="d-flex gap-3">
                <div className={`${styles.taskColumns}`}>
                    <div className="column high">
                        <div className={`column-header ${styles.columnHeader}`}>
                            <h3>Newly Added</h3>
                        </div>
                        {renderTasks(newlyAdded)}
                    </div>
                </div>

                <div className={`${styles.taskColumns}`}>
                    <div className="column medium">
                        <div className={`column-header ${styles.columnHeader}`}>
                            <h3>Consult Scheduled</h3>
                        </div>
                        {renderTasks(consultScheduled)}
                    </div>
                </div>

                <div className={`${styles.taskColumns}`}>
                    <div className="column low">
                        <div className={`column-header ${styles.columnHeader}`}>
                            <h3>Pending Engagement</h3>
                        </div>
                        {renderTasks(pendingEngagement)}
                    </div>
                </div>

                <div className={`${styles.taskColumns}`}>
                    <div className="column lower">
                        <div className={`column-header ${styles.columnHeader}`}>
                            <h3>Working on Retainer</h3>
                        </div>
                        {renderTasks(workingOnRetainer)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskBoard;
