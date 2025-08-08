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

    backgorundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    title: {
      padding: 15,
      color: '#fff',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 800,
      fontStyle: 'italic',
    },
  
    firstBlock: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    secondBlock: {
      flex: 1,
      backgroundColor: '#8B0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    thirdBlock: {
      flex: 1,
      backgroundColor: '#4B4B4B',
      alignItems: 'center',
      justifyContent: 'center', 
    },
  })

// export default styles;