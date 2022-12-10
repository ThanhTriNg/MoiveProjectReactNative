import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const AccountForgotPasswordView2 = ({ navigation }) => {
  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);

  const [otp, setOtp] = useState({
    otp: ["", "", "", ""],
  });
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  // const _onPressNumber = () => {
  //   console.log("OTP 1",otp1);
  //   console.log("OTP 2",otp2);
  //   console.log("OTP 3",otp3);
  //   console.log("OTP 4",otp4);

  //   console.log("OTP ",otp)
  // };
  const _onPressNumber = (value) => {
    const tempCode = otp.otp;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] === "") {
        tempCode[i] = value;
        break;
      } else {
        continue;
      }
    }
    console.log(otp.otp);

    setOtp({ otp: tempCode });
  };
  return (
    <View style={styles.AccountContainer}>
      <View style={styles.ContentTop}>
        <Text style={styles.text}>
          Mã OTP đã được gửi tới số điện thoại *******708.
        </Text>
        <Text style={styles.text}>Vui lòng nhập mã OTP.</Text>
      </View>
      {/* Chỗ nhập OTP --BEGIN*/}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.textInputView}>
          <TextInput
            ref={otp1Ref}
            style={styles.textInputText}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(value) => {
              _onPressNumber(value);

              if (value !== null) {
                otp2Ref.current.focus();
              }
            }}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            ref={otp2Ref}
            style={styles.textInputText}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(value) => {
              _onPressNumber(value);
              if (value !== null) {
                otp3Ref.current.focus();
              }
            }}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            ref={otp3Ref}
            style={styles.textInputText}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(value) => {
              _onPressNumber(value);
              if (value !== null) {
                otp4Ref.current.focus();
              }
            }}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            ref={otp4Ref}
            style={styles.textInputText}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(value) => {
              _onPressNumber(value);
            }}
          />
        </View>
      </View>
      {/* Chỗ nhập OTP --END*/}
      <View style={styles.ContentBot}>
        <Text style={styles.text}>Không nhận được mã OTP? </Text>

        <TouchableOpacity>
          <Text style={styles.textHighlight}>Gửi lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountForgotPasswordView2;

const styles = StyleSheet.create({
  AccountContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  ContentTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ContentBot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textHighlight: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    textDecorationLine: "underline",
  },
  textInputView: {
    borderBottomWidth: 1,
    width: 50,
    marginLeft: 10,
  },
  textInputText: {
    fontSize: 20,
  },
});
