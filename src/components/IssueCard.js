import React from "react";
import { motion } from "framer-motion";

import Modal from "./Modal";

import DeleteIcon from "../images/delete.png";
import CheckIcon from "../images/check.png";

export default function IssueCard(props) {
     const [showModal, setShowModal] = React.useState(false);

     let indexStyle;

     switch (true) {
          case props.index > 7.9:
               indexStyle = "high";
               break;
          case props.index > 5.9:
               indexStyle = "medium";
               break;
          case props.index > 2.9:
               indexStyle = "low";
               break;
          default:
               indexStyle = "lowest";
     }
     return (
          <>
               <motion.div layout className="issue-card">
                    <div className="issue-card-controls">
                         <img src={CheckIcon} alt="Checkmark" />
                         <img
                              src={DeleteIcon}
                              alt="Delete"
                              onClick={() => setShowModal(true)}
                         />
                    </div>
                    <div className="issue-card-content">
                         <div className="issue-card-index">
                              <h2 className={indexStyle}>
                                   {props.index.toFixed(1)}
                              </h2>
                         </div>
                         <div className="issue-card-description">
                              {props.text}
                              <p className="small">12/4/2022</p>
                         </div>
                    </div>
               </motion.div>

               {showModal && (
                    <Modal
                         handleCancel={() => setShowModal(false)}
                         handleDelete={() => props.deleteIssue}
                    />
               )}
          </>
     );
}
