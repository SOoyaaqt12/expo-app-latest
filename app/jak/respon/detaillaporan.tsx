import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Ionicons, Octicons } from '@expo/vector-icons'

const detaillaporan = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`m-5`}>
            <Text style={tw`font-bold text-3xl`}>Detail Laporan</Text>
        </View>
        <Image style={tw`w-full h-70`} source={require("@/assets/images/lampujalan.jpg")}/>
        <View style={tw`mx-5 -my-8 flex-row gap-5 justify-end`}>
          <View style={tw`w-15 h-15 bg-white shadow-xl justify-center items-center rounded-full`}>
            <Octicons style={tw`text-gray-500`} name='thumbsup' size={30}/>
          </View>
          <View style={tw`w-15 h-15 bg-white shadow-xl justify-center items-center rounded-full`}>
            <Ionicons style={tw`text-gray-500`} name='bookmark-outline' size={30}/>
          </View>
        </View>
        <View style={tw`mx-5 my-10`}>
          <View style={tw`mb-5`}>
            <Text>Permasalah:</Text>
            <Text>Lampu peneragan jalan di sepanjang Jalan Taman Wijaya Kusuma 1 Cilandak Barat Jakarta Selatan sejak Hari Senin tanggal 5 Desember 2022 hingga Malam ini Selasa Tanggal 6 Desember 2022 kondisi MATI / Tidak Nyala dan Gelap.</Text>
          </View>
          <View style={tw`mb-5`}>
            <Text>Lokasi:</Text>
            <Text>Jalan Taman Wiajaya Kusuma 1, Gang menuju Jlaan H. Mandor, Jalan Taman Wiajaya Kusuma 3</Text>
          </View>
          <View style={tw`mb-10 flex-row items-center gap-1`}>
            <View style={tw`bg-sky-400 w-8 h-8 items-center justify-center rounded-full`}>
              <Octicons style={tw`text-white`} name='thumbsup' size={15}/>
            </View>
            <Text style={tw`text-gray-400`}>Belum ada yang mendukung laporan ini</Text>
          </View>
          <View style={tw`my-5`}>
            <View style={tw`mb-5`}>
              <Text style={tw`font-bold text-xl`}>Detail Laporan</Text>
            </View>
            <View style={tw`mb-5`}>
              <Text style={tw`text-gray-400`}>Nomor Laporan</Text>
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-lg`}>JK2212060389</Text>
                <Text style={tw`text-blue-500`}>Salin</Text>
              </View>
            </View>
            <View style={tw`mb-5`}>
              <Text style={tw`text-gray-400`}>Tanggal Masuk</Text>
              <Text>06 Dec 2022 . 23:35</Text>
            </View>
            <View style={tw`mb-5`}>
              <Text style={tw`text-gray-400`}>Kategori</Text>
              <View style={tw`flex-row items-center gap-2`}>
                <Image style={tw`w-8 h-8`} source={require("@/assets/images/chair.png")}/>
                <Text>Fasilitas Sosial/Fasilitas Umum</Text>
              </View>
            </View>
            <View style={tw`mb-5`}>
              <Text style={tw`text-gray-400`}>Sumber</Text>
              <View style={tw`flex-row items-center gap-2`}>
                <Image style={tw`w-8 h-8`} source={require("@/assets/images/chair.png")}/>
                <Text>Jakarta Kini (JAKI)</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={tw`font-bold text-lg`}>Lokasi</Text>
          </View>
        </View>
        <View>
          <Image style={tw`w-full h-80`} source={require("@/assets/images/maps.png")}/>
          <Image style={tw`w-8 h-8 mx-5 -mt-10 opacity-70`} source={require("@/assets/images/google-maps.png")}/>
        </View>
        <View style={tw`mx-5 my-10`}>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`font-bold text-lg`}>Status Laporan</Text>
            <View style={tw`bg-red-500 w-25 rounded-full items-center justify-center p-1`}>
              <Text style={tw`text-white`}>Menunggu</Text>
            </View>
          </View>
          <View style={tw`my-5 flex-row gap-3`}>
            <View style={tw`h-4 w-4 bg-red-500 rounded-full`}></View>
            <View>
              <Text>06 Dec 2022 . 23:35</Text>
              <Text>Laporan diterima oleh KELURAHAN CILANDAK BARAT</Text>
            </View>
          </View>
          <View style={tw`items-end mb-15`}>
            <Text style={tw`text-blue-500`}>Riwayat Selengkapnya</Text>
          </View>
          <View style={tw`mb-5`}>
            <Text style={tw`text-lg font-bold mb-5`}>Diskusi Laporan</Text>
            <View style={tw`items-center`}>
              <Text style={tw`text-gray-400 mb-5`}>Belum ada komentar</Text>
            </View>
            <View style={tw`items-end`}>
              <Text style={tw`text-blue-500`}>Diskusi Selengkapnya</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default detaillaporan

const styles = StyleSheet.create({})