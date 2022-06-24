import React from "react";
import { motion } from "framer-motion";

export default function Modal(props) {
     const variants = {
          hidden: { opacity: 0 },
          show: {
               opacity: 1,
               transition: {
                    duration: 0.2,
                    delayChildren: 0.2
               }
          }
     };

     const child = {
          hidden: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1 }
     };

     return (
          <motion.div
               variants={variants}
               initial="hidden"
               animate="show"
               exit="exit"
               className="overlay"
          >
               <motion.div variants={child} className="modal">
                    <h2>Sind Sie sicher?</h2>
                    <div className="modal-buttons">
                         <button onClick={() => props.handleCancel()}>
                              Abbrechen
                         </button>
                         <button onClick={props.handleDelete()}>Löschen</button>
                    </div>
               </motion.div>
          </motion.div>
     );
}
