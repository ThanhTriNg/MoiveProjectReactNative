import React, { useState } from "react";
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
const AccountPinView = ({ navigation }) => {
  const [state, setState] = useState({
    pin: ["", "", "", ""],
  });

  const _onPressNumber = (num) => {
    const tempCode = state.pin;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] === "") {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    console.log(state.pin);
    setState({ pin: tempCode });
  };

  const _deleteNumber = () => {
    const tempCode = state.pin;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== "") {
        tempCode[i] = "";
      }
    }
    console.log(i);
    console.log(state.pin);
    setState({ pin: tempCode });
  };

  const number = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 0 },

  ];
  return (
    <View style={styles.AccountContainer}>
      <View style={styles.Account}>
        <View>
          <Text style={styles.text}>Thêm mã PIN để bảo mật tài khoản hơn.</Text>
        </View>

        <View style={styles.PinContainer}>
          {state.pin.map((p) => {
            let style = p !== "" ? styles.inputPin2 : styles.inputPin1;
            return <View style={style}></View>;
          })}
          {/* <View style={styles.inputPin1}></View> */}
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              _deleteNumber();
            }}
          >
            <Text style={styles.btnText}>Xóa</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.numberContainer}>
            {number.map((num) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.number}
                    key={num.id}
                    
                    onPress={() => {
                      _onPressNumber(num.id);
                    }}
                  >
                    <Text style={styles.numberText}>{num.id}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
            {/* 
            <View style={styles.number}>
              <Text style={styles.numberText}>2</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>3</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>5</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>6</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>7</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>8</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>9</Text>
            </View>
            <View style={styles.number}>
              <Text style={styles.numberText}>0</Text>
            </View> */}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountPinView;

const styles = StyleSheet.create({
  AccountContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  Account: {
    flex: 1,
  },

  text: {
    marginTop: 20,
  },
  inputText: {
    placeholderTextColor: "#B8B8B8",
    fontSize: 18,
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    width: "100%",
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
  PinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  inputPin1: {
    width: 20,
    height: 20,
    borderRadius: 13,
    backgroundColor: "#bbb5c3",
  },
  inputPin2: {
    width: 22,
    height: 22,
    borderRadius: 13,
    borderWidth: 1,
    backgroundColor: "#000000",
  },

  numberContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 60,
    width: 280,
    height: 360,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    margin: 5,
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: "rgba(0,54,58,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  numberText: {
    fontSize: 30,
    letterSpacing: 0,
    color: "#FFFFFF",
    textAlign: "center",
  },
  footer: {
    flex: 1,
  },
});
