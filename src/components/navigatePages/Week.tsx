import React from 'react'
import { View, StyleSheet } from 'react-native'
import DayCard from './DayCard'
// import { StyleSheet } from 'nativewind'
//
const Week = () => {

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']



  return (
    <View style={styles.contanier} >
      {daysOfWeek.map((day) => (
        <View
          key={day}
          className="w-[48%] border border-slate-400 rounded-lg h-auto justify-center items-center "
        >
          <DayCard day={day} />
        </View>
      ))}
    </View>
  )
}

export default Week



const styles = StyleSheet.create({
  contanier: {
    // backgroundColor:"gray",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    gap:10,
    rowGap:8,
    padding:8,
    flex:1,
  }
})
