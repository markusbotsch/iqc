import "./styles.css";

import React from "react";
import { nanoid } from "nanoid";

import IssueCard from "./components/IssueCard";
import AddIssue from "./components/AddIssue";

import testData from "./testData.js";

export default function App() {
     const [issues, setIssues] = React.useState(testData);
     const [editMode, setEditMode] = React.useState(false);

     const issuesElements = issues.map((issue) => (
          <IssueCard
               key={issue.id}
               id={issue.id}
               text={issue.text}
               index={issue.index}
               deleteIssue={() => deleteIssue(issue.id)}
          />
     ));

     function handleClick() {
          setEditMode(!editMode);
     }

     function addIssue() {
          const newIssue = {
               id: nanoid(),
               text: "Test Issue neu",
               index: 3.9
          };

          setIssues((prevIssues) =>
               [newIssue, ...prevIssues].sort((a, b) => b.index - a.index)
          );

          setEditMode(false);
     }

     function deleteIssue(id) {
          setIssues((prevIssues) =>
               prevIssues.filter((issue) => issue.id !== id)
          );
     }

     return (
          <div className="App">
               <h1 className="textcolor">Issues</h1>
               <div className="issue-section">
                    {issuesElements}
                    <div className="issue-add">
                         <button onClick={handleClick}>+</button>
                    </div>
               </div>

               {editMode && <AddIssue handleClick={addIssue} />}
          </div>
     );
}
