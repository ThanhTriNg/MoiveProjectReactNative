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
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../config/firebase";

import {
  getStorage,
  uploadString,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import Ionicons from "react-native-vector-icons/Ionicons";

const AccountView = ({ navigation }) => {
  //Image Picker - Begin
  const [selectedImage, setSelectedImage] = useState({
    localURI:
      "https://firebasestorage.googleapis.com/v0/b/movieprojectreact.appspot.com/o/images%2Favatars%2Fdefault.jpg?alt=media&token=ee4c2da1-74ff-4e7f-80de-3c9df92e8ae2",
  });
  const openImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({ base64: true });
    if (result.cancelled) return;
    let uri = result.uri;
    setSelectedImage({ localURI: uri });
    console.log(uri);
    if (Platform.OS == "web") {
      let base64code = result.base64;
      //upload to firebase
      await uploadBase64Code(base64code);
    } else {
      let uri = result.uri;
      //convert to blod file
      const blodfile = await convertToBlod(uri);
      console.log(blodfile);
      await uploadFileBlod(blodfile);
    }
  };

  const convertToBlod = async (uri) => {
    const convert = await new Promise((resolve, reject) => {
      let xmlRequest = new XMLHttpRequest();
      xmlRequest.onload = function () {
        resolve(xmlRequest.response);
      };
      xmlRequest.onerror = function () {
        console.log("error");
      };
      xmlRequest.contentType = "blod";
      xmlRequest.open = ("GET", uri, true);
      xmlRequest.send(null);
    });
    return convert;
  };
  const uploadFileBlod = async () => {
    let imgName = "img-anroid" + new Date().getTime();
    let storage = getStorage();
    let storageref = ref(storage, `images/${imgName}.jpg`);
    let metadata = {
      contentType: "image/jpeg",
    };
    const uploadTask = await uploadBytesResumable(
      storageref,
      blodfile,
      metadata
    );
    uploadTask.on(
      "state-changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(snapshot.storageref.ref).then(async (downloadURL) => {
          console.log(downloadURL);
        });
      }
    );
  };

  const uploadBase64Code = async (base64code) => {
    let imgName = "img-w" + new Date().getTime();
    let storage = getStorage();
    let storageref = ref(storage, `images/${imgName}.jpg`);
    let metadata = {
      contentType: "image/jpeg",
    };
    uploadString(storageref, base64code, "base64", metadata).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          console.log("downloadURL", downloadURL);
        });
      }
    );
  };

  //Image Picker - END
  return (
    <View style={styles.AccountContainer}>
      <View style={styles.ImgContainer}>
        <Text>Image Picker</Text>
        <Image
          source={{
            uri: selectedImage.localURI,
          }}
          style={styles.img}
        />

        <TouchableOpacity style={styles.btn} onPress={openImage}>
          <Text>Choose your image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Account}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Họ và tên" style={styles.inputText} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Biệt danh" style={styles.inputText} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.inputText} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Số điện thoại (10 số)"
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Giới tính" style={styles.inputText} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("AccountPIN");
          }}
        >
          <Text style={styles.btnText}> Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountView;

const styles = StyleSheet.create({
  AccountContainer: {
    backgroundColor: "#000",
  },
  ImgContainer: {
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  Account: {
    alignContent: "center",
    margin: 15,
  },
  inputContainer: {
    margin: 20,
    paddingVertical: 5,
    flexDirection: "row",
  },
  inputText: {
    placeholderTextColor: "white",
    color:'#FFF',
    fontSize: 18,
    backgroundColor: "#1F222A",
    borderRadius: 20,
    width: "100%",
    textAlign: "center",
    padding: 5,
  },
  btn: {
    backgroundColor: "#d50000",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal:20,

  },
  btnText: {
    color: "#FFFFFF",
  },
  footer:{
    backgroundColor:'#000',
    marginBottom: 25,
  },
});
