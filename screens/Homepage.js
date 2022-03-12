import React from 'react';
import { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Slider from '../components/Carousel';
import { AuthContext } from '../navigation/AuthProviders';

const Home = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profile}>
          <Text style={styles.welcome}> หน้าแรก</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.Slider}>
            <Slider />
          </View>
          <Text style={styles.Text}>บริการด้านการค้าภายในประเทศ</Text>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('ProductLists')}>
              <Image style={styles.Image} source={{ uri: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }} />
              <Text style={styles.ButtonText}>
                เปรียบเทียบราคาสินค้า
              </Text>
              <Image style={styles.DITImage} source={{ uri: 'https://inwfile.com/s-fg/pdz6i9.png' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('MapTongfah')}>
              <Image style={styles.Image} source={{ uri: 'https://beyereye.com/wp-content/uploads/2017/08/google-map-background-1900x1170.png' }} />
              <Text style={styles.ButtonText}>
                สถานที่ร้านธงฟ้า
              </Text>
              <Image style={styles.DITImage} source={{ uri: 'https://inwfile.com/s-fg/pdz6i9.png' }} />
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
            <Text style={styles.logoutText}>ออกจากระบบ</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  profile: {
    marginBottom: 10,
    backgroundColor: '#0A214A',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },

  welcome: {
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
    fontFamily: "Prompt-Bold",
    fontSize: 25,
    color: '#FFFFFF',
  },
  Slider: {
    alignItems:'center',
    justifyContent:'center',
    height: 200,
  },
  Button: {
    overflow: 'hidden',
    marginHorizontal: '2%',
    backgroundColor: '#FFFFFF',
    margin: 10,
    width: 350,
    height: 150,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },

  ButtonText: {
    color: '#2752E6',
    fontSize: 18,
    padding: 10,
    fontFamily: "Prompt-Regular",
    marginLeft: 10
  },
  Text: {
    color: '#000000',
    fontSize: 20,
    fontFamily: "Prompt-Bold"
  },

  container: {
    flex: 1,
  },

  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 150,
    backgroundColor: '#C73304',
    borderRadius: 40,
    padding: 20,
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 15,
    color: '#F0FFFF',
    fontFamily:'Prompt-Bold'

  },
  Image: {
    width: '100%',
    height: '50%',
  },
  DITImage: {
    marginLeft: 20,
    width: '20%',
    height: '10%',
  },
});
export default Home;