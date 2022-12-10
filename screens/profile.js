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
  StatusBar,
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

const Profile = ({ navigation }) => {
  //Image Picker - Begin
  const [selectedImage, setSelectedImage] = useState({
    localURI:
      "https://firebasestorage.googleapis.com/v0/b/movieprojectreact.appspot.com/o/images%2Favatars%2FR.jpg?alt=media&token=c9f73aa6-7ef3-441f-9d51-579690d7a173",
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
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={styles.ImgContainer}>
        <Text>Image Picker</Text>
        <Image
          source={{
            uri: selectedImage.localURI,
          }}
          style={styles.img}
        />

        <TouchableOpacity style={styles.btnImg} onPress={openImage}>
          <Text>Chọn hình đại diện</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.accountName}>Andrew Ainsley</Text>
        <Text style={styles.accountEmail}>abc@gmail.com</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={() => {
            navigation.navigate("AccountView");
          }}
        >
          <Ionicons name="person-outline" color="#FFF" size={30} />
          <Text style={styles.btnText}> Chỉnh sửa hồ sơ</Text>
          <Ionicons
            name="chevron-forward-outline"
            color="#FFF"
            size={30}
            style={styles.iconRight}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={() => {
            navigation.navigate("NotificationView");
          }}
        >
          <Ionicons name="notifications-outline" color="#FFF" size={30} />
          <Text style={styles.btnText}> Thông báo</Text>
          <Ionicons
            name="chevron-forward-outline"
            color="#FFF"
            size={30}
            style={styles.iconRight}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEdit}>
          <Ionicons name="download-outline" color="#FFF" size={30} />
          <Text style={styles.btnText}> Tải phim</Text>
          <Ionicons
            name="chevron-forward-outline"
            color="#FFF"
            size={30}
            style={styles.iconRight}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEdit}>
          <Ionicons name="shield-checkmark-outline" color="#FFF" size={30} />
          <Text style={styles.btnText}>Bảo mật </Text>
          <Ionicons
            name="chevron-forward-outline"
            color="#FFF"
            size={30}
            style={styles.iconRight}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEdit}>
          <Ionicons name="help-circle-outline" color="#FFF" size={30} />
          <Text style={styles.btnText}>Cần hỗ trợ?</Text>
          <Ionicons
            name="chevron-forward-outline"
            color="#FFF"
            size={30}
            style={styles.iconRight}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEdit}>
          <Ionicons name="log-out-outline" color="#FFF" size={30} />
          <Text style={styles.btnText}> Đăng xuất</Text>

          <Ionicons
            name="chevron-forward-outline"
            color="#FFF"
            size={30}
            style={styles.iconRight}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 15,
    flexDirection: "row",
  },
  inputText: {
    textAlign: "center",
    padding: 10,
    placeholderTextColor: "#B8B8B8",
    fontSize: 18,
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    width: "100%",
  },
  btnImg: {
    backgroundColor: "#fff",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  btnEdit: {
    margin: 10,
    flexDirection: "row",
  },
  btnContinue: {
    backgroundColor: "#d50000",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  iconRight: {},
  infoContainer: {
    alignItems: "center",
  },
  accountName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFF",
  },
  accountEmail: {
    fontSize: 15,
    color: "#FFF",
  },
});

export default Profile;
