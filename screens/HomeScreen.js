import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
