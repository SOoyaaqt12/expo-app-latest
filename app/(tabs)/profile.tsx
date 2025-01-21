import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={tw`m-5`}>
        <Text style={tw`font-bold text-3xl mb-5`}>Profile</Text>
        <View style={tw`bg-blue-500 w-full h-40 rounded-2xl flex-row justify-between items-start`}>
          <Text style={tw`m-5 text-white font-bold`}>AKUN WARGA</Text>
          <View style={tw`flex-row items-center gap-2 mt-3 mx-5`}>
            <Image source={require("@/assets/images/logo-jakarta.png")} style={tw`w-10 h-10`}/>
            <Image source={require("@/assets/images/download.png")} style={tw`h-10 w-20`}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default Profile