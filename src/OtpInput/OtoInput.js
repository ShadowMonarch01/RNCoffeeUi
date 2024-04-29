import { StyleSheet, Text, View, Pressable, Keyboard } from 'react-native'
import React,{useState} from 'react'
import OtpBackend from './OtpBackend'

const OtoInput = () => {
    const [code, setCode] = useState("");
    const [pinReady, setPinReady] = useState(false)

    const max_code_length = 4;

// use pinReady to determine if the Verification Button Should be pressed

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <OtpBackend
        setPinReady={setPinReady}
        code={code}
        setCode={setCode}
        maxLength={max_code_length}
      />


    </Pressable>
  )
}

export default OtoInput

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
})