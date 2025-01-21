import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Link } from 'expo-router'
import { Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'

const detailpangan = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={tw`m-5`}>
                <Text style={tw`font-bold text-4xl mb-5`}>Ayam Broiler/Ras</Text>
                <View style={tw`items-center`}>
                    <View style={tw`bg-blue-300 w-30 items-center rounded-lg p-1 mb-5`}>
                        <Text style={tw``}>06 Dec 2022</Text>
                    </View>
                    <Image source={require("@/assets/images/chicken.jpg")} style={tw`h-20 w-20 border border-gray-300 rounded-full`}/>
                </View>
                <View style={tw`flex-row justify-between items-center mb-3 -mt-7`}>
                    <View style={tw`text-left`}>
                        <Text style={tw`font-bold mb-1`}>Tertinggi</Text>
                        <Text style={tw`font-bold text-lg mb-1`}>Rp 45.000/ekor</Text>
                        <View style={tw`flex-row items-center`}>
                            <Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>
                            <Text style={tw`text-gray-400`}>Pasar Senen Blok III - VI</Text>
                        </View>
                    </View>
                    <View style={tw`text-right`}>
                        <Text style={tw`font-bold mb-1 text-right`}>Terendah</Text>
                        <Text style={tw`font-bold text-lg mb-1 text-right`}>Rp 30.000/ekor</Text>
                        <Text style={tw`text-gray-400 text-right`}><Entypo style={tw`text-blue-500`} name='location-pin' size={20}/>Pasar Grogol</Text>
                    </View>
                </View>
                <View style={tw`items-center mb-10`}>
                    <Text style={tw`font-bold text-lg`}>Rata-rata : Rp 38.844/ekor</Text>
                </View>
                <Text style={tw`mb-15`}>Sumber Data : Informasi Pangan Jakarta. Untuk informasi lebih lanjut kunjungi <Text style={tw`text-blue-500`}>https://infolapangan.jakarta.go.id/publik/contact</Text></Text>
                <View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Anyer Bahari</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 35.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Baru Metro Atom</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 45.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Cempaka Putih</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 35.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Cengkareng</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 41.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Cibubur</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 38.000/ekor </Text>
                            <Octicons style={tw`text-red-500 mx-2`} name='triangle-up' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Cijantung</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 37.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Cipete</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 33.000/ekor </Text>
                            <Octicons style={tw`text-red-500 mx-2`} name='triangle-up' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Ciplak</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 40.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Glodok</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 35.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Gondangdia</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 45.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                    <View style={tw`flex-row items-center justify-between mb-5`}>
                        <Text>Pasar Grogol</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text>Rp 30.000/ekor </Text>
                            <MaterialCommunityIcons style={tw`text-blue-500`} name='equal' size={30}/>
                        </View>
                    </View>
                </View>
            </View>  
        </ScrollView>
        
    </SafeAreaView>
    
  )
}

export default detailpangan

const styles = StyleSheet.create({})