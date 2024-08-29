import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import profileImage from "C:\Users\Admin\ReactLab_Mobile\baptap01_app\assets\profile.jpg";

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Chuyển sang trang Home sau 10 giây
    }, 10000);

    return () => clearTimeout(timer); // Hủy bỏ timer nếu component bị unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Xin chào, tôi là Trần Đức Vinh!</Text>
      <Text style={styles.text}>Mã số sinh viên:21110356.</Text>
      <Text style={styles.text}>Học viên lớp {"\n"}Lập trình di động nâng cao</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default IntroScreen;
