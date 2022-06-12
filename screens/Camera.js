/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Alert,
} from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Camera, CameraType } from 'expo-camera'

export default ({ navigation }) => {
  let cameraRef = useRef()
  const [hasCameraPermission, setHasCameraPermission] = useState()
  const [type, setType] = useState(CameraType.back)
  const [photo, setPhoto] = useState()

  useEffect(() => {
    ;(async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(cameraPermission.status === 'granted')
    })()
  }, [])

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    )
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    }

    let newPhoto = await cameraRef.current
      .takePictureAsync(options)
      .then(() => {
        Alert.alert('Picture taken')
      })
      .catch((error) => {
        console.log('Error:')
        console.log(error)
      })
    console.log(newPhoto.uri)
    setPhoto(newPhoto)
  }

  if (photo) {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
        />
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
        <Button
          title="Return to home menu"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    )
  }

  return (
    <Camera
      style={styles.container}
      ref={cameraRef}
      type={type}
      //ratio={'1:1'}
    >
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
        <Button
          title="Flip Image"
          onPress={() => {
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            )
          }}
        />
      </View>
    </Camera>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //aspectRatio: 1,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,
  },
})
