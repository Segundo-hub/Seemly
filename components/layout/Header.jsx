import React from 'react'
import styles from './header.module.scss'
import { fiMount } from './../icons/fiMount'
import { ViewIcon } from "./../icons/ViewIcon.jsx";
import { Title } from '../design/atoms'

export const Header = () => (
	<header className={styles.header}>
	   <nav style={{ padding: '1rem 1.5rem' }}>
	      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
	         <h1 className={styles.title}>
               <ViewIcon icon={fiMount} fill="teal"/>
               <span>Seemly</span> 
            </h1>
            <Title title="DATA STRUCTURES & ALGORITHMS ANIMATED"/>
	      </span>
	   </nav>
	</header>
   
)
