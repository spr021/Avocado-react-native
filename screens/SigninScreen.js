import React, { useState } from 'react'
import axios from 'axios'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  AsyncStorage,
  Button
} from 'react-native'
import {
  Layout,
  Text,
  Input
} from '@ui-kitten/components'

export default function SigninScreen () {
  const [loading, setLoading] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleClick () {
    setLoading(true)
    axios.post('http://click.7grid.ir/auth/signin/', {
      email: email,
      password: password
    })
      .then((response) => {
        AsyncStorage.setItem('token', response.data.data.token)
        AsyncStorage.setItem('id', response.data.data.profile.id)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <KeyboardAvoidingView behavior='padding' enabled>
        <View style={styles.logo}><Image /></View>
        <Layout style={styles.container}>
          <View><Text>Please enter your email address and password.</Text></View>
          <View><Input placeholder='Email' onChangeText={(value) => setEmail(value)} /></View>
          <View><Input placeholder='Password' onChangeText={(value) => setPassword(value)} /></View>
          <Button title='Sign in' />
        </Layout>
      </KeyboardAvoidingView>
    </>
  )
}

SigninScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 20,
    paddingTop: 40,
    marginTop: -40
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'rgba(92, 159, 16, 1)',
    borderRadius: 50,
    padding: 5,
    zIndex: 1
  }
})
