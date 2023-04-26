import React from 'react'
import styles from "./pokemon.module.css"

const AnimatedCard = ({ name, imageUrl }) => {


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={imageUrl} alt={name} style={{ width: '200px', height: '200px' }} />
                </div>
                <div className={styles.content}>
                <h3>{name}</h3>

            </div>
            </div>
           
        </div>
    )
}

export default AnimatedCard
