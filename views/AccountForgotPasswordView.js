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
// import * as ImagePicker from "expo-image-picker";
// import { firebase } from "../config/firebase";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  getStorage,
  uploadString,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";

const AccountForgotPasswordView = ({ navigation }) => {
  // const [isSelect, setIsSelect] = useState(0);
  // const OnSelect = () => {
  //   console.log("you just clicked");
  //   // setSelect("styles.phoneContainerSelect");
  //   // console.log(select)
  //   if (isSelect === 0) {
  //     setIsSelect(1);
  //   } else setIsSelect(0);
  // };
  const [isSelect, setIsSelect] = useState(null);
  const handleSelected = (value) => {
    // console.log(value)
    setIsSelect(value);
  };

  return (
    <View style={styles.AccountContainer}>
      <View style={styles.ImgContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=2000",
          }}
          style={styles.img}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>
          Lựa chọn phương thức để lấy lại mật khẩu.
        </Text>
      </View>
      <View style={styles.BodyContainer}>
        {/* <TouchableOpacity
          style={{ ...styles.phoneContainer, borderWidth: isSelect }}
          onPress={() => {
            OnSelect();
          }}
        >
          <View>
            <Ionicons name="call" color="#ff5252" size={30} />
          </View>
          <View>
            <Text style={styles.text}> Số điện thoại</Text>
            <Text style={styles.textBold}> *******708</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.emailContainer, borderWidth: isSelect }}
        >
          <Ionicons name="mail" color="#ff5252" size={30} />
          <View>
            <Text style={styles.text}> Email</Text>
            <Text style={styles.textBold}> ***********abc@gmail.com</Text>
          </View>
        </TouchableOpacity> */}
        <Select1of2
          title={"Số điện thoại"}
          content={"*******708"}
          icon={"call"}
          value={isSelect}
          onPress={handleSelected}
        ></Select1of2>
        <Select1of2
          title={"Email"}
          content={"***********abc@gmail.com"}
          icon={"mail"}
          value={isSelect}
          onPress={handleSelected}
        ></Select1of2>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
function Select1of2({ title, content, icon, onPress, value }) {
  return (
    <TouchableOpacity
      style={[
        styles.pmContainer,
        { borderWidth: value === title ? 2 : null },
        { borderColor: value === title ? "red" : "" },
        { borderRadius: value === title ? 20 :null },

      ]}
      onPress={() => onPress(title)}
    >
      <View>
        <Ionicons name={icon} color="#ff5252" size={30} />
      </View>
      <View>
        <Text style={styles.text}> {title}</Text>
        <Text style={styles.textBold}> {content}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default AccountForgotPasswordView;

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
  BodyContainer: {
    flex: 2,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
  },

  pmContainer: {
    flexDirection: "row",
    padding:20,
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
    color: "#FFFFFF",
  },
  footer: {
    flex: 1,
  },
});
