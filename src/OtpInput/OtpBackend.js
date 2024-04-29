import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React,{useRef, useState, useEffect} from 'react'


const OtpBackend = ({code, setCode, maxLength, setPinReady}) => {

    const numCodeArray = new Array(maxLength).fill(0);

    const textInputRef = useRef(null);

    const [inputFocaused, setInputFocaused] = useState(false)

    const handleOnPress =()=>{
        setInputFocaused(true)
        textInputRef?.current?.focus();
    };

    const handleOnBlur = ()=>{
        setInputFocaused(false);
    }

    useEffect(()=>{
        setPinReady(code.length === maxLength)

        return ()=>setPinReady(false)
    },[code])

    // #8A8A99

    const toCodeDigitInput =(_value, index)=>{
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;

        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;

        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

        return(
            <View key={index} 
                style={[styles.otpInput, 
                    inputFocaused && isDigitFocused ? 
                    styles.otpInputActive : styles.otpInputInActive
                ]}
            >
                <Text style={styles.otpInputText}>{digit}</Text>
            </View>
        )
    }

  return (
    <View style={{gap:20}}>
      <Pressable onPress={handleOnPress} style={styles.otpInputContainer}>
        {numCodeArray.map(toCodeDigitInput)}
      </Pressable>

      <TextInput
        value={code}
        onChangeText={setCode}
        style={styles.TextInputStyl}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        // textContentType="oneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur} 
      />
    </View>
  )
}

export default OtpBackend

const styles = StyleSheet.create({
    TextInputStyl:{
        // borderWidth:2,
        // borderColor:'black',
        // borderRadius:5,
        // padding:12,
        // width:300,
        // color:'black'
        width:1,
        height:1,
        opacity:0
    },
    otpInputContainer:{
        width:300,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    otpInput:{
        borderWidth:2,
        width:65,
        height:64,
        // flex:1,
        padding:12,
        borderRadius:5
    },
    otpInputInActive:{
        borderColor:'#8A8A99'
    },
    otpInputActive:{
        borderColor:'black'
    },
    otpInputText:{
        fontSize:22,
        fontWeight:"bold",
        color:'black',
        textAlign:'center'
    }
})