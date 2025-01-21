import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Entypo, Feather, Foundation } from '@expo/vector-icons'
import { Link } from 'expo-router'

const pasar = () => {
  return (
    <SafeAreaView>
            <View style={tw`m-5`}>
                <Text style={tw`font-bold text-4xl`}>Info Pangan</Text>
                <View style={tw`flex-row items-center gap-3 my-10 bg-gray-200 py-2 px-4 rounded-full shadow-2xl`}>
                    <Feather name='search' size={30} style={tw`text-gray-500`}/>
                    <Text style={tw`text-gray-500`}>Cari komoditas atau pasar</Text>
                </View>
                <View style={tw`bg-gray-300 rounded-2xl h-10 flex-row mb-5 justify-between`}>
                    <View style={tw`justify-center items-center w-50`}>
                        <Link href={'/jak/pangan/pangan'}>
                            <Text>Komoditas</Text>
                        </Link>
                    </View>
                    <View style={tw`justify-center items-center shadow-2xl rounded-2xl w-50 bg-white`}>
                        <Text>Pasar</Text>
                    </View>
                </View>
                <View style={tw`flex-row items-center mb-5`}>
                    <Entypo style={tw`text-blue-500`} name='location-pin' size={30}/>
                    <Text style={tw`text-gray-400`}>Cisauk, Tangerang, Banten, ID</Text>
                </View>
                <View style={tw`items-center mb-5`}>
                    <View style={tw`bg-blue-300 items-center justify-center rounded-full w-28 h-5`}>
                        <Text>06 Dec 2022</Text>
                    </View>
                </View>

                
                {/* pasar */}
                <View style={tw`gap-5`}>
                    <View style={tw`bg-white shadow w-full h-35 rounded-xl border border-gray-300 flex-row`}>
                        <Image source={require("@/assets/images/p-pesanggrahan.jpg")} style={tw`h-30 w-30 rounded-lg m-2`}/>
                        <View style={tw`m-2 w-60 justify-between`}>
                            <View>
                                <Text style={tw`font-bold mb-2`}>Pasar Pesanggrahan</Text>
                                <Text style={tw`text-gray-500`}>Jalan Garuda, Pesanggrahan, Pesanggrahan, Jakarta Selatan</Text>
                            </View>
                            <View style={tw`flex-row gap-2 items-center`}>
                                <Foundation name='telephone' size={20}/>
                                <Text style={tw`text-gray-500`}>021 7501808</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`bg-white shadow w-full h-35 rounded-xl border border-gray-300 flex-row`}>
                        <Image source={require("@/assets/images/p-pondoklabu.jpeg")} style={tw`h-30 w-30 rounded-lg m-2`}/>
                        <View style={tw`m-2 w-60 justify-between`}>
                            <View>
                                <Text style={tw`font-bold mb-2`}>Pasar Pondok Labu</Text>
                                <Text style={tw`text-gray-500`}>Jalan RS Fatmawati Ujung, Pondok Labu, Cilandak, Jakarta Selatan</Text>
                            </View>
                            <View style={tw`flex-row gap-2 items-center`}>
                                <Foundation name='telephone' size={20}/>
                                <Text style={tw`text-gray-500`}>021 7501808</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
            </View>
    </SafeAreaView>
    
  )
}

export default pasar

const styles = StyleSheet.create({})