import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { AntDesign, FontAwesome, FontAwesome5, Foundation, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex-row items-center justify-between mr-6`}>
          <View>
            <Image source={require("@/assets/images/logo-jaki_169.jpeg")} style={tw`w-34 h-15`}/>
          </View>
          <View style={tw`flex-row gap-5`}>
            <MaterialCommunityIcons name='line-scan' size={30} style={tw`text-gray-800`}/>
            <AntDesign name='customerservice' size={30} style={tw`text-gray-800`}/>
          </View>
        </View>
        <View style={tw`items-center py-2`}>
            <Image source={require("@/assets/images/frame.png")}/>
        </View>
        <View style={tw`mx-5`}>
          <View style={tw`flex-row justify-between items-center`}>
            <View style={tw`flex-row items-center gap-4`}>
              <Text style={tw`text-lg font-semibold`}>JakOne Pay</Text>
              <Text style={tw`bg-blue-100 text-blue-500 px-2 rounded-md font-medium`}>Belum Aktif</Text>
            </View>
            <AntDesign name='right' size={20}/>
          </View>
          
        </View>
        <View style={tw`mx-6 my-15 flex-row justify-between gap-10 flex-wrap`}>
            <View style={tw`flex-column items-center gap-5`}>
              <FontAwesome name='bar-chart' size={30}/>
              <Text>JakWarta</Text>
            </View>
            
            <Link href={"/jakrespon/jakrespon"}>
              <View style={tw`flex-column items-center gap-5`}>
                <AntDesign name='message1' size={30}/>
                <Text>JakResponse</Text>
              </View>
            </Link>
            <View style={tw`flex-column items-center gap-5`}>
              <MaterialCommunityIcons name='grass' size={30}/>
              <Text>JakPangan</Text>
            </View>
            <View style={tw`flex-column items-center gap-5`}>
              <FontAwesome5 name='bus' size={30}/>
              <Text>JakLingko</Text>
            </View>
            <View style={tw`flex-column items-center gap-5`}>
              <Foundation name='telephone' size={30}/>
              <Text>JakSiaga</Text>
            </View>
            <View style={tw`flex-column items-center gap-5`}>
              <MaterialCommunityIcons name='wifi-arrow-up-down' size={30}/>
              <Text>JakWifi</Text>
            </View>
            <View style={tw`flex-column items-center gap-5`}>
              <MaterialCommunityIcons name='car-off' size={30}/>
              <Text>JakEmisi</Text>
            </View>
            <View style={tw`flex-column items-center gap-5`}>
              <AntDesign name='appstore1' size={30}/>
              <Text>Lainnya</Text>
            </View>
        </View>
        <View style={tw`mx-5 mb-10`}>
          <Text style={tw`font-bold text-lg mb-3`}>Ruang Ketiga</Text>
          <Text style={tw`text-gray-400 mb-3`}>Jelajahi ruang publik favortimu di jakarta</Text>
          <View style={tw`bg-white flex-row shadow-2xl rounded-2xl gap-5`}>
            <Image style={tw`h-40 w-30 rounded-l-2xl`} source={require("@/assets/images/jakarta.jpg")}/>
            <View style={tw`mt-5 gap-5`}>
              <View>
                <Text style={tw`font-bold text-lg mb-2`}>Tebet Eco Park</Text>
                <Text style={tw`text-gray-500 mr-30`}>Nikmati asyiknya jalan-jalan di taman berkonsep ekologi, rekreasi, dan edukasi</Text>
              </View>
              <TouchableOpacity style={tw`bg-blue-500 px-5 py-2 rounded-lg ml-20 mr-40`}>
                <Text style={tw`text-white`}>Daftar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>   
        </View>
        <View style={tw`mx-5 mb-10`}>
          <View style={tw`flex-row justify-between align-center mb-3`}>
            <Text style={tw`font-bold text-lg`}>Jakarta Tanggap Covid-19</Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-500`}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-gray-400 mr-10 mb-5`}>Tetap aman, sehat, dan produktif selama masa pandemi Covid-19</Text>

          <View style={tw`flex-row flex-wrap justify-center gap-8`}>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/health.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Vaksinasi COVID-19</Text>
                <Text style={tw`text-gray-500`}>Daftar dan cek jadwal vaksinasi Covid-19</Text>
              </View>
            </View>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/vaccine.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Data Cakupan Vaksin</Text>
                <Text style={tw`text-gray-500`}>Cek Dasbor Cakupan Vaksinasi Wilayah</Text>
              </View>
            </View>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/health.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Ketersediaan Tempat Tidur</Text>
                <Text style={tw`text-gray-500`}>Untuk pasien Covid-19 dan non-Covid-19</Text>
              </View>
            </View>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/health.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Tes Mandiri</Text>
                <Text style={tw`text-gray-500`}>Tes Corona Likelihood Metric (CLM)</Text>
              </View>
            </View>
          </View>
          
        </View>
        <View style={tw`mx-5 mb-10`}>
          <View style={tw`flex-row justify-between align-center mb-3`}>
            <Text style={tw`font-bold text-lg`}>Plus Jakarta</Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-500`}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-gray-400 mr-15 mb-5`}>Wadah penggerak kolaborasi, ciptakan dampak positif bagi semua</Text>

          <View style={tw`flex-row flex-wrap justify-center gap-8`}>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/health.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Kota Kolaborasi</Text>
                <Text style={tw`text-gray-500`}>Temukan kolaborasi antarelemen di jakarta</Text>
              </View>
            </View>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/health.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Kata Kota</Text>
                <Text style={tw`text-gray-500`}>Media berbagi cerita $ gagasan tentang Jakarta</Text>
              </View>
            </View>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/health.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Media</Text>
                <Text style={tw`text-gray-500`}>Berbagai rekam jejak kolaborasi Plus Jakarta</Text>
              </View>
            </View>
            <View style={tw`w-47 bg-white rounded-2xl shadow-xl items-center`}>
              <Image style={tw`w-47 rounded-t-2xl`} source={require("@/assets/images/health.gif")}/>
              <View style={tw`p-2`}>
                <Text style={tw`font-bold text-blue-500`}>Merchandise</Text>
                <Text style={tw`text-gray-500`}>Koleksi Merchandise khas Plus Jakarta di sini!</Text>
              </View>
            </View>
          </View>
          
        </View>
        
      </ScrollView>
    </SafeAreaView>
   
    
  )
}

export default index

const styles = StyleSheet.create({})