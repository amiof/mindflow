/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { Dimensions, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import "./global.css"
import Home from './src/pages/home/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();


  const { height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {/* <NewAppScreen */}
      {/*   templateFileName="App.tsx" */}
      {/*   safeAreaInsets={safeAreaInsets} */}
      {/* /> */}
      <View style={{
        top: safeAreaInsets.top,
        height: height - safeAreaInsets.top
      }}>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
