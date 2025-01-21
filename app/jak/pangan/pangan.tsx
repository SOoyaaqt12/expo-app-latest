import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Entypo, Feather, FontAwesome6, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const pangan = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={tw`m-5`}>
                <Text style={tw`font-bold text-4xl`}>Info Pangan</Text>
                <View style={tw`flex-row items-center gap-3 my-10 bg-gray-200 py-2 px-4 rounded-full shadow-2xl`}>
                    <Feather name='search' size={30} style={tw`text-gray-500`}/>
                    <Text style={tw`text-gray-500`}>Cari komoditas atau pasar</Text>
                </View>
                <View style={tw`bg-gray-300 rounded-2xl h-10 flex-row mb-5 justify-between`}>
                    <View style={tw`justify-center items-center shadow-2xl rounded-2xl w-50 bg-white`}>
                        <Text>Komoditas</Text>
                    </View>
                    <View style={tw`justify-center items-center w-50`}>
                        <Link href={'/jak/pangan/pasar'}>
                            <Text>Pasar</Text>
                        </Link>
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


                {/* menu */}
                <View style={tw`flex-row flex-wrap justify-between`}>
                    
                    <Link href={'/jak/pangan/detailpangan'} style={tw`mb-5`}>
                        <View style={tw` h-100 w-48 border border-gray-300 rounded-2xl mb-5`}>
                            <View style={tw`flex-row align-center justify-between`}>
                                <Text style={tw`p-2 font-bold`}>Ayam</Text>
                                <View style={tw`bg-blue-500 h-7 w-10 rounded-tr-2xl rounded-bl-2xl justify-center items-center`}>
                                    <MaterialCommunityIcons style={tw`text-white`} name='equal' size={30}/>
                                </View>
                            </View>
                            <View style={tw`items-center`}>
                                <Image source={require("@/assets/images/chicken.jpg")} style={tw`w-47 h-45`}/>
                            </View>
                            <View style={tw`mx-5`}>
                                <Text style={tw`mb-5`}>Ayam Broiler/Ras</Text>
                                <Text style={tw`font-bold text-lg mb-3`}>Rp 38.000/ekor</Text>
                                <View style={tw`flex-row items-center`}>
                                    <Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>
                                    <Text>Pasar pesanggrahan</Text>
                                </View>  
                            </View>
                        </View>
                    </Link>
                    <Link href={'/jak/pangan/detailpangan'} style={tw`mb-5`}>
                        <View style={tw` h-100 w-48 border border-gray-300 rounded-2xl mb-5`}>
                            <View style={tw`flex-row align-center justify-between`}>
                                <Text style={tw`p-2 font-bold`}>Bawang</Text>
                                <View style={tw`bg-blue-500 h-7 w-10 rounded-tr-2xl rounded-bl-2xl justify-center items-center`}>
                                    <MaterialCommunityIcons style={tw`text-white`} name='equal' size={30}/>
                                </View>
                            </View>
                            <View style={tw`items-center`}>
                                <Image source={require("@/assets/images/bawang-merah.jpg")} style={tw`w-47 h-45`}/>
                            </View>
                            <View style={tw`mx-5`}>
                                <Text style={tw`mb-5`}>Bawang Merah</Text>
                                <Text style={tw`font-bold text-lg mb-3`}>Rp 40.000/kg</Text>
                                <View style={tw`flex-row items-center`}>
                                    <Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>
                                    <Text>Pasar pesanggrahan</Text>
                                </View>  
                            </View>
                        </View>
                    </Link>
                    <Link href={'/jak/pangan/detailpangan'} style={tw`mb-5`}>
                        <View style={tw` h-100 w-48 border border-gray-300 rounded-2xl mb-5`}>
                            <View style={tw`flex-row align-center justify-between`}>
                                <Text style={tw`p-2 font-bold`}>Bawang</Text>
                                <View style={tw`bg-red-500 h-7 w-10 rounded-tr-2xl rounded-bl-2xl justify-center items-center`}>
                                    <Octicons style={tw`text-white`} name='triangle-up' size={30}/>
                                </View>
                            </View>
                            <View style={tw`items-center`}>
                                <Image source={require("@/assets/images/bawang-Putih.jpg")} style={tw`w-47 h-45`}/>
                            </View>
                            <View style={tw`mx-5`}>
                                <Text style={tw`mb-5`}>Bawang Putih</Text>
                                <Text style={tw`font-bold text-lg mb-3`}>Rp 32.000/kg</Text>
                                <View style={tw`flex-row items-center`}>
                                    <Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>
                                    <Text>Pasar pesanggrahan</Text>
                                </View>  
                            </View>
                        </View>
                    </Link>
                    <Link href={'/jak/pangan/detailpangan'} style={tw`mb-5`}>
                        <View style={tw` h-100 w-48 border border-gray-300 rounded-2xl mb-5`}>
                            <View style={tw`flex-row align-center justify-between`}>
                                <Text style={tw`p-2 font-bold`}>Beras</Text>
                                <View style={tw`bg-blue-500 h-7 w-10 rounded-tr-2xl rounded-bl-2xl justify-center items-center`}>
                                    <MaterialCommunityIcons style={tw`text-white`} name='equal' size={30}/>
                                </View>
                            </View>
                            <View style={tw`items-center`}>
                                <Image source={require("@/assets/images/beras.jpg")} style={tw`w-47 h-45`}/>
                            </View>
                            <View style={tw`mx-5`}>
                                <Text style={tw`mb-5`}>Beras IR 42/Pera</Text>
                                <Text style={tw`font-bold text-lg mb-3`}>Rp 11.000/kg</Text>
                                <View style={tw`flex-row items-center`}>
                                    <Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>
                                    <Text>Pasar Pondok Labu</Text>
                                </View>  
                            </View>
                        </View>
                    </Link>
                    <Link href={'/jak/pangan/detailpangan'} style={tw`mb-5`}>
                        <View style={tw` h-100 w-48 border border-gray-300 rounded-2xl mb-5`}>
                            <View style={tw`flex-row align-center justify-between`}>
                                <Text style={tw`p-2 font-bold`}>Sapi</Text>
                                <View style={tw`bg-blue-500 h-7 w-10 rounded-tr-2xl rounded-bl-2xl justify-center items-center`}>
                                    <MaterialCommunityIcons style={tw`text-white`} name='equal' size={30}/>
                                </View>
                            </View>
                            <View style={tw`items-center`}>
                                <Image source={require("@/assets/images/sapi.jpg")} style={tw`w-47 h-45`}/>
                            </View>
                            <View style={tw`mx-5`}>
                                <Text style={tw`mb-5`}>Lee Pratt Eye Fillet</Text>
                                <Text style={tw`font-bold text-lg mb-3`}>Rp 53.000/kg</Text>
                                <View style={tw`flex-row items-center`}>
                                    <Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>
                                    <Text>Pasar pesanggrahan</Text>
                                </View>  
                            </View>
                        </View>
                    </Link>
                    <Link href={'/jak/pangan/detailpangan'} style={tw`mb-5`}>
                        <View style={tw` h-100 w-48 border border-gray-300 rounded-2xl mb-5`}>
                            <View style={tw`flex-row align-center justify-between`}>
                                <Text style={tw`p-2 font-bold`}>Kambing</Text>
                                <View style={tw`bg-blue-500 h-7 w-10 rounded-tr-2xl rounded-bl-2xl justify-center items-center`}>
                                    <MaterialCommunityIcons style={tw`text-white`} name='equal' size={30}/>
                                </View>
                            </View>
                            <View style={tw`items-center`}>
                                <Image source={require("@/assets/images/kambing.jpg")} style={tw`w-47 h-45`}/>
                            </View>
                            <View style={tw`mx-5`}>
                                <Text style={tw`mb-5`}>Meaty Goat Ribs</Text>
                                <Text style={tw`font-bold text-lg mb-3`}>Rp 38.000/ekor</Text>
                                <View style={tw`flex-row items-center`}>
                                    <Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>
                                    <Text>Pasar pesanggrahan</Text>
                                </View>  
                            </View>
                        </View>
                    </Link>
                </View>
            </View>
        </ScrollView>
        
    </SafeAreaView>
    
  )
}

export default pangan

const styles = StyleSheet.create({})