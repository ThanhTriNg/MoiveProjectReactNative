import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  Platform,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../config/firebase";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  getStorage,
  uploadString,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";

const AccountForgotPasswordView3 = ({ navigation }) => {
  return (
    <View style={styles.AccountContainer}>
      <View
        style={{
          marginHorizontal: 30,
        }}
      >
        <View style={styles.ImgContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/volumetric-lock-icon-password-icon-isolated-white-background-3d-color-icon_599062-16.jpg?w=2000",
            }}
            style={styles.img}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Tạo mật khẩu mới</Text>

          <View style={styles.inputPassword}>
            <Ionicons name="lock-closed-outline" color="#ff5252" size={30} />
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.inputPassword}>
            <Ionicons name="lock-closed-outline" color="#ff5252" size={30} />
            <TextInput style={styles.inputText} />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountForgotPasswordView3;

const styles = StyleSheet.create({
  AccountContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  ImgContainer: {
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
  inputContainer: {
  },
  inputPassword: {
    flexDirection: "row",
    marginBottom: 15,
    marginRight:20,
  },
  inputText: {
    fontSize: 20,
    width: "100%",
    backgroundColor: "#eeeeee",
  },
  text: {
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#d50000",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    fontWeight:'bold',
    fontSize:15,
    color: "#FFFFFF",
  },
});
