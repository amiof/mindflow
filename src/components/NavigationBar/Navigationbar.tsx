import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import clsx from 'clsx';
import { TClickNavbar } from '../../pages/home/Home';

type Props = {
  setSelectedNavbar: React.Dispatch<React.SetStateAction<TClickNavbar>>;
};


const Navigationbar = (props:Props) => {
  const {setSelectedNavbar}=props

  const tabs: { key: TClickNavbar; icon: any; label: string }[] = [
    { key: 'brain', icon: <Icon name="brain" size={28} />, label: 'Brain' },
    { key: 'week', icon: <Icon name="calendar-week" size={28} />, label: 'Week' },
    { key: 'today', icon: <IconMaterialIcons name="today" size={28} />, label: 'Today' },
    { key: 'review', icon: <IconIonicons name="reload" size={28} />, label: 'Review' },
    { key: 'later', icon: <IconMaterialIcons name="watch-later" size={28} />, label: 'Later' },
  ];

  const [activeTab, setActiveTab] = useState<TClickNavbar>('brain');


  const handlePress = (index: number) => {
    setActiveTab(tabs[index].key);
    // translateX.value = withSpring(index * ITEM_WIDTH, {
    //   damping: 15,
    //   stiffness: 100,
    // });
  };

  // const [navbarClicked, setNavbarClicked] = useState<TClickNavbar>("brain")

  return (
    <View className='w-full h-full flex flex-row justify-center items-center gap-1 px-4  '>
      {/* Tabs */}
      {tabs.map((tab, index) => (
        <Pressable
          key={tab.key}
          onPress={() => {
            handlePress(index)
            setSelectedNavbar(tab.key)
          }}
          className={clsx("flex-1 justify-center items-center rounded-full py-4   ", activeTab === tab.key && "bg-slate-800")}
        >
          <View className="items-center">
            {React.cloneElement(tab.icon as any, {
              color: activeTab === tab.key ? '#10b981' : '#9ca3af',
            })}
            <Text
              className={`text-xs mt-1 font-medium ${activeTab === tab.key ? 'text-green-500' : 'text-gray-500'
                }`}
            >
              {tab.label}
            </Text>
          </View>
        </Pressable>
      ))}

    </View>
  )
}

export default Navigationbar
