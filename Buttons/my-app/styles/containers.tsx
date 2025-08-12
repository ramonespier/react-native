import { StyleSheet } from "react-native"

const botao1 = '#000'
const botao2 = '#8B0000'
const botao3 = '4B4B4B'

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

    botao1: {
      width: '100%',
      height: '100%',
      backgroundColor: botao1
    },

    botao2: {
      width: '100%',
      height: '100%',
      backgroundColor: botao2
    },
    
    botao3: {
      width: '100%',
      height: '100%',
      backgroundColor: botao3
    },
  })

// export default styles;