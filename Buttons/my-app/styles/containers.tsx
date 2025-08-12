import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'aliceblue',
      flex: 1,
    },

    subcontainer: {
      flex: 1,
      display: "flex",
      flexDirection: 'row'
    },

    doubleRow: {
      flex: 1,
      flexDirection: 'row',
    },

    inside: {
      flex: 1
    },

    blackButton: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000'
    },

    wineButton: {
      width: '100%',
      height: '100%',
      backgroundColor: '#8B0000',
    },
    
    greyButton: {
      width: '100%',
      height: '100%',
      backgroundColor: '#4B4B4B',
    },
  })

// export default styles;