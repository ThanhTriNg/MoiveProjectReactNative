import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

const NotificationView = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(0);
  const [isEnabled2, setIsEnabled2] = useState(0);
  const [isEnabled3, setIsEnabled3] = useState(0);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
  };
  const toggleSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
  };

  return (
    <View style={styles.notificationContainer}>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.btnContainer}>
          <Text style={styles.text}>Thông báo chung</Text>
          <Switch
            trackColor={{ false: "#767577", true: "red" }}
            thumbColor={isEnabled ? "#FFF" : "#FFF"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.text}>Phim mới ra mắt</Text>
          <Switch
            trackColor={{ false: "#767577", true: "red" }}
            thumbColor={isEnabled ? "#FFF" : "#FFF"}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.text}>Cập nhật ứng dụng</Text>
          <Switch
            trackColor={{ false: "#767577", true: "red" }}
            thumbColor={isEnabled ? "#FFF" : "#FFF"}
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
        {/* <View style={styles.btnContainer}>
          <Text style={styles.text}>Gia hạn hội viên</Text>
          <Switch
            trackColor={{ false: "#767577", true: "red" }}
            thumbColor={isEnabled ? "#FFF" : "#FFF"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View> */}
      </View>
    </View>
  );
};

export default NotificationView;

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
