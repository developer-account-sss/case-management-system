import React from "react";
import TaskBoard from "../../components/taskboard/page";
import YellowButton from "../../components/yellow-button/page";

const Tasks= ()=> {
    const buttonProp= {text: "Add Task", link: "/"};

    return(
        <>
        <div className="d-flex flex-row justify content-between align-items-center">
            <h1>Task Management Board</h1>
            <YellowButton buttonProp= {buttonProp}/>
        </div>
        <TaskBoard />
        </>
    );
};

export default Tasks;