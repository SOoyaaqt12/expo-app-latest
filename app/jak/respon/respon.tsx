import {  Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'

const jakrespon = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={tw`font-bold text-4xl m-5`}>JakRespons</Text>
        <View style={tw`flex-row items-center gap-3 mx-5 bg-gray-200 py-2 px-4 rounded-full shadow-2xl`}>
            <Feather name='search' size={30} style={tw`text-gray-500`}/>
            <Text style={tw`text-gray-500`}>Nomor Laporan</Text>
        </View>
        <View style={tw`flex-row justify-center flex-wrap gap-7 mt-10`}>
            <Link href={'/jak/respon/detaillaporan'}>
                <View style={tw`w-47 rounded-2xl bg-white shadow-black shadow-2xl`}>
                    <Image style={tw`w-47 h-30 mb-2 rounded-t-2xl`} source={require("@/assets/images/lampujalan.jpg")}/>
                    <View style={tw`p-2`}>
                        <Text style={tw`text-gray-500 my-2`}>No. jk2212060389</Text>
                        <Text style={tw`font-bold my-2`}>Permasalah: Lampu Penerangan Jalan di</Text>
                        <Text style={tw`text-gray-400 font-bold my-2`}>Cilandak Barat</Text>
                        <View style={tw`flex-row items-center justify-between`}>
                            <Text style={tw`text-gray-500 my-2`}>38 menit yang lalu</Text>
                            <Feather name='bookmark' size={30} style={tw`text-gray-500`}/>
                        </View>
                        
                    </View>
                </View>
            </Link>
            <Link href={'/jak/respon/detaillaporan'}>
                <View style={tw`w-47 rounded-2xl bg-white shadow-black shadow-2xl`}>
                    <Image style={tw`w-47 h-30 mb-2 rounded-t-2xl`} source={require("@/assets/images/lampujalan.jpg")}/>
                    <View style={tw`p-2`}>
                        <Text style={tw`text-gray-500 my-2`}>No. jk2212060389</Text>
                        <Text style={tw`font-bold my-2`}>Permasalah: Lampu Penerangan Jalan di</Text>
                        <Text style={tw`text-gray-400 font-bold my-2`}>Cilandak Barat</Text>
                        <View style={tw`flex-row items-center justify-between`}>
                            <Text style={tw`text-gray-500 my-2`}>38 menit yang lalu</Text>
                            <Feather name='bookmark' size={30} style={tw`text-gray-500`}/>
                        </View>
                        
                    </View>
                </View>
            </Link>
            <Link href={'/jak/respon/detaillaporan'}>
                <View style={tw`w-47 rounded-2xl bg-white shadow-black shadow-2xl`}>
                    <Image style={tw`w-47 h-30 mb-2 rounded-t-2xl`} source={require("@/assets/images/lampujalan.jpg")}/>
                    <View style={tw`p-2`}>
                        <Text style={tw`text-gray-500 my-2`}>No. jk2212060389</Text>
                        <Text style={tw`font-bold my-2`}>Permasalah: Lampu Penerangan Jalan di</Text>
                        <Text style={tw`text-gray-400 font-bold my-2`}>Cilandak Barat</Text>
                        <View style={tw`flex-row items-center justify-between`}>
                            <Text style={tw`text-gray-500 my-2`}>38 menit yang lalu</Text>
                            <Feather name='bookmark' size={30} style={tw`text-gray-500`}/>
                        </View>
                        
                    </View>
                </View>
            </Link>
            <Link href={'/jak/respon/detaillaporan'}>
                <View style={tw`w-47 rounded-2xl bg-white shadow-black shadow-2xl`}>
                    <Image style={tw`w-47 h-30 mb-2 rounded-t-2xl`} source={require("@/assets/images/lampujalan.jpg")}/>
                    <View style={tw`p-2`}>
                        <Text style={tw`text-gray-500 my-2`}>No. jk2212060389</Text>
                        <Text style={tw`font-bold my-2`}>Permasalah: Lampu Penerangan Jalan di</Text>
                        <Text style={tw`text-gray-400 font-bold my-2`}>Cilandak Barat</Text>
                        <View style={tw`flex-row items-center justify-between`}>
                            <Text style={tw`text-gray-500 my-2`}>38 menit yang lalu</Text>
                            <Feather name='bookmark' size={30} style={tw`text-gray-500`}/>
                        </View>
                        
                    </View>
                </View>
            </Link>
        </View>
      </View>  
    </SafeAreaView>
    
  )
}

export default jakrespon

const styles = StyleSheet.create({})