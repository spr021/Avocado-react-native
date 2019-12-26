import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ApplicationProvider } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'

import AppNavigator from './navigation/AppNavigator'

export default function App (props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <View style={styles.container}>
          <AppLoading
            startAsync={loadResourcesAsync}
            onError={handleLoadingError}
            onFinish={() => handleFinishLoading(setLoadingComplete)}
          />
        </View>
      </ApplicationProvider>
    )
  } else {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </ApplicationProvider>
    )
  }
}

async function loadResourcesAsync () {
  await Promise.all([
    Asset.loadAsync([
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
    })
  ])
}

function handleLoadingError (error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}

function handleFinishLoading (setLoadingComplete) {
  setLoadingComplete(true)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f0b3',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
