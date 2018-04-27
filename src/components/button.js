import React from 'react'
import typography from "../utils/typography"
import styles from './component-css.module.css'


const LinkButton = ({to, text , color = 'blue', target = '_top'}) => (
    <a className={styles.Button} style={{
        background: color,
    }} 
    target={target}
    href={to}>
    {text}
    </a>
);

export default LinkButton