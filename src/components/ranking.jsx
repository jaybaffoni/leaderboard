import React from "react"
import { colors } from "../config";

const Ranking = ({number, data}) => {

  let {name, highScore} = data;

  const styles = {
    parent: {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: `1px solid ${colors.light}`,
      padding: 12,
      color: colors.light,
    },
    nameContainer: {
      flex: 1,
      display: 'grid',
      placeItems: 'center'
    },
    name: {
      fontSize: 20,
      margin: 0,
    },
    label: {
      fontSize: 12,
      margin: 0,
      textAlign: 'center',
    },
    lightColor: {
      color: colors.light,
    },
    mediumBackgroundColor: {
      backgroundColor: colors.medium,
    },
    largeFont: {
      margin: 0,
      fontSize: 20,
    },
    largeFontContainer: {
      height: 42,
      width: 42,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
    },
  }

  return (
    <div id='parent' style={styles.parent}>
      <div id='rank'>
        <p style={styles.label}>Rank</p>
        <div style={{...styles.largeFontContainer, ...styles.mediumBackgroundColor}}>
          <p style={{...styles.largeFont, ...styles.lightColor}}>{number}</p>
        </div>
      </div>
      <div id='name' style={styles.nameContainer}>
        <p style={styles.name}>{name}</p>
      </div>
      <div id='score'>
        <p style={styles.label}>Score</p>
        <div style={styles.largeFontContainer}>
          <p style={styles.largeFont}>{highScore}</p>
        </div>
      </div>
    </div>
  )
};

export default Ranking;
