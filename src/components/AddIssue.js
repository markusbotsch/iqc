import React from "react";
import { motion } from "framer-motion";

export default function AddIssue(props) {
     return (
          <div className="overlay">
               <motion.div
                    animate={{ y: 20 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="add-issue"
               >
                    <h2>Issue hinzufügen</h2>
                    <button onClick={props.handleClick}>Speichern</button>
               </motion.div>
          </div>
     );
}
