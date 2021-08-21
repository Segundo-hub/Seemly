import { useState } from "react"
import { connect } from "react-redux"
import styles from "./header.module.scss"

const InformationTemplate = ({ title, discription, setShowing, show }) => {
   return (
      <>
         {show && (
            <section className='full-page opacity'>
               <div className={styles["popup"]}>
                  <h3>{title}</h3>
                  <p>{discription}</p>
                  <button className={styles["dismiss"]} onClick={setShowing}>
                     OK
                  </button>
               </div>
            </section>
         )}
      </>
   )
}

const mapStateToProps = state => ({
   show: state.show,
})

const mapDispatchToProps = dispatch => ({
   setShowing: () =>
      dispatch({
         type: "SET_SHOW",
         payload: false,
      }),
})

export const Information = connect(mapStateToProps, mapDispatchToProps)(InformationTemplate)
