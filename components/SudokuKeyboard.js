/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

export default ({ onKeyPressed }) => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()
  const ref7 = useRef()
  const ref8 = useRef()
  const ref9 = useRef()
  const refUndo = useRef()
  const refNote = useRef()
  const refErase = useRef()
  const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9]

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Animatable.View ref={refNote}>
          <TouchableOpacity
            onPress={() => {
              refNote.current.wobble(800)
              onKeyPressed('note')
            }}
            style={[styles.animButton, { backgroundColor: '#4b4b4b' }]}
          >
            <MaterialCommunityIcons
              name="note-edit-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View ref={refUndo}>
          <TouchableOpacity
            onPress={() => {
              refNote.current.wobble(800)
              onKeyPressed('undo')
            }}
            style={[styles.animButton, { backgroundColor: '#4b4b4b' }]}
          >
            <FontAwesome name="undo" size={24} color="black" />
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Animatable.View ref={refs[item - 1]} key={item}>
            <TouchableOpacity
              onPress={() => {
                refNote.current.wobble(800)
                onKeyPressed(item.toString())
              }}
              style={[styles.animButton, { backgroundColor: '#4b4b4b' }]}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {[6, 7, 8, 9].map((item, index) => (
          <Animatable.View ref={refs[item - 1]} key={item}>
            <TouchableOpacity
              onPress={() => {
                refNote.current.wobble(800)
                onKeyPressed(item.toString())
              }}
              style={[styles.animButton, { backgroundColor: '#4b4b4b' }]}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          </Animatable.View>
        ))}
        <Animatable.View
          ref={refErase}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => {
              refNote.current.wobble(800)
              onKeyPressed('erase')
            }}
            style={[styles.animButton, { backgroundColor: '#4b4b4b' }]}
          >
            <MaterialCommunityIcons name="eraser" size={24} color="black" />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  animButton: {
    backgrouncColor: '#0652DD',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  animButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
})
