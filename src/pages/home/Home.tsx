import { View } from 'react-native';
import React, { useState } from 'react';
import Navigationbar from '../../components/NavigationBar/Navigationbar';
import Brain from '../../components/navigatePages/Brain';
import Week from '../../components/navigatePages/Week';
import Today from '../../components/navigatePages/Today';
import Review from '../../components/navigatePages/Review';
import Later from '../../components/navigatePages/Later';
import Header from '../../components/header/Header';

export type TClickNavbar = 'brain' | 'week' | 'today' | 'review' | 'later';

const Home = () => {

  const [selectedNavigator, setSelectredNavigator] = useState<TClickNavbar>("brain")

  const switchMainPage = (selectedPage:TClickNavbar) => {
    switch (selectedPage) {
      case ("brain"):
        return <Brain />
      case ("week"):
        return <Week />
      case ("today"):
        return <Today />
      case ("review"):
        return <Review />
      case ("later"):
        return <Later />
      default:
        return <Brain />
    }
  }

  return (
    <View className='flex flex-col  h-full w-full border-purple-500 pb-10'>

      <View className='h-16  w-full   '>
        {/* <Text className='dark:text-white text-cyan-400'>header test </Text> */}
        <Header/>
      </View>
      <View className=' mx-8  border-b border-gray-300 mt-4'/>
      <View className=' flex-1 '>
        {
        switchMainPage(selectedNavigator)
        }
      </View>
      <View className=' mx-8  border-b border-gray-300 mt-4'/>
      <View className='h-32'>
        <Navigationbar setSelectedNavbar={setSelectredNavigator} />

      </View>

    </View>
  )
}

export default Home

// const styles = StyleSheet.create({})
