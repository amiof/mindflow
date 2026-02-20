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
    { key: 'brain', icon: <Icon name="brain" size={18} />, label: 'Brain' },
    { key: 'week', icon: <Icon name="calendar-week" size={18} />, label: 'Week' },
    { key: 'today', icon: <IconMaterialIcons name="today" size={18} />, label: 'Today' },
    { key: 'review', icon: <IconIonicons name="reload" size={18} />, label: 'Review' },
    { key: 'later', icon: <IconMaterialIcons name="watch-later" size={18} />, label: 'Later' },
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
    <View className='w-auto h-1/2 flex flex-row justify-center items-center gap-1 px-1  rounded-full m-4 bg-slate-200 border-2 border-slate-300'>
      {/* Tabs */}
      {tabs.map((tab, index) => (
        <Pressable
          key={tab.key}
          onPress={() => {
            handlePress(index)
            setSelectedNavbar(tab.key)
          }}
          className={clsx("flex-1 justify-center items-center rounded-full py-1 ", activeTab === tab.key && " bg-slate-500" )}
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
