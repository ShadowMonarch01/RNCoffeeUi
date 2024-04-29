import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useRef, useMemo, useCallback} from 'react'
import MapView from 'react-native-maps'
import { windowHeight, windowWidth } from '../components/Responsive'
import BottomSheet from '@gorhom/bottom-sheet'
const MapTrack = ({navigation}) => {

    // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const fourLines =[{bgCl:'#36C07E'},{bgCl:'#36C07E'},{bgCl:'#36C07E'},{bgCl:'#c0c0c0'}];

  return (
    <View style={{flex:1}}>
      <MapView
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}

        style={styles.mapStyle}
    >

    </MapView>
        {/* <View style={styles.btmShet}></View> */}
    <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
    >
        <View style={styles.contentContainer}>
            <View style={styles.centerText}>
                <Text style={[styles.centerText,{fontSize:20, fontWeight:"500"}]}>10 minutes left</Text>
                <Text style={[styles.centerText,{fontSize:16,color:'gray'}]}>Delivery to  <Text style={{color:'black', fontWeight:"500"}}>
                        Jl. Kpg Sutoyo
                    </Text>
                </Text>
            </View>

            <View style={{marginTop:20, flexDirection:'row', gap:6, justifyContent:'center'}}>
                {
                    fourLines.map((item, index)=>{
                        return(
                            <View key={index} style={{height:4,
                                        width:50, 
                                        backgroundColor:item.bgCl
                                    }}>
                            </View>
                        )
                    })
                }
            </View>

            {/* Card Rider */}
            <View style={{flexDirection:'row', marginTop:30, width:(windowWidth-40), gap:8, paddingHorizontal:10, alignItems:'center'}}>
               <Image source={require('../../assets/rider.png')}/>

               <View style={{flexDirection:'column',gap:2}}>
                    <Text style={{fontSize:18, fontWeight:"400", color:"black"}}>Delivered your order</Text>
                    <Text style={{fontSize:14, fontWeight:"200", color:"gray", width:250}}>We deliver your goods to you in the shortes possible time.</Text>
               </View> 
            </View>

            {/* Call Card */}

            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <View style={{flexDirection:'row', alignItems:'center', gap:6}}>
                    {/* Image */}
                    <Image 
                        style={{
                            height:54, 
                            width:54, 
                            backgroundColor:'gray', 
                            borderRadius:8
                        }}
                        source={require('../../assets/person.png')}
                    />

                    {/* </View> */}

                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:16,color:'black', fontWeight:"500"}}>Johan Hawn</Text>
                        <Text style={{fontSize:14, color:"gray"}}>Personal Courier</Text>
                    </View>
                </View>

                <TouchableOpacity style={{width:54, height:54, backgroundColor:'white', borderRadius:10, borderWidth:1, borderColor:'#c0c0c0'}}>
                    <Image source={require('../../assets/call.png')}/>
                </TouchableOpacity>
            </View>

        </View>
    </BottomSheet>
    </View>
  )
}

export default MapTrack;

const styles = StyleSheet.create({
    btmShet:{
        width:200, 
        height:200, 
        zIndex:4, 
        backgroundColor:'gray',
        position:'absolute',
        bottom:0
    },
    mapStyle: {  
        // position: 'absolute',  
        // top: 0,  
        // left: 0,  
        // right: 0,  
        // bottom: 0,  
        flex:1
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal:20
        // alignItems: 'center',
    },
    centerText:{
        textAlign:'center',
    }  
})