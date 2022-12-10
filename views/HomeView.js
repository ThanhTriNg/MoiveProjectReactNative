import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeView = ({ navigation }) => {
  return (
    <View style={styles.HomeContainer}>
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.logo}
          source={{
            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df341k1-4f81627d-3e5c-42eb-bb3b-9c76bdb34d11.png/v1/fill/w_1280,h_720,q_80,strp/doctor_strange_2_in_the_multiverse_wallpaper_hd_20_by_andrewvm_df341k1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYTU4YTc3MTktMGRjZi00ZTBiLWI3YmItZDJiNzI1ZGJiYjhlXC9kZjM0MWsxLTRmODE2MjdkLTNlNWMtNDJlYi1iYjNiLTljNzZiZGIzNGQxMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1YY4xXcof5WU9-5aYsIIk639Jb-84yMSQSVehTN9q0Y",
          }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.headerTop}>
        <TouchableOpacity>
          <Ionicons name="search" color="#FFFFFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" color="#FFFFFF" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerBot}>
        <Text style={styles.headingText}>Doctor Strange 2</Text>
        <Text style={styles.subText}>Hành động, Siêu anh hùng</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="play" color="#FFFFFF" size={15} />
            <Text style={styles.btnText}>Xem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="add" color="#FFFFFF" size={20} />
            <Text style={styles.btnText}>Danh sách phim</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>10 Phim Hay Nhất</Text>
      </View>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  },
  headerTop: {
    marginHorizontal: 20,
    flexDirection: "row",
    // alignItems:'flex-start'
  },
  headerBot: {
    marginHorizontal: 20,
    // alignItems:'flex-end'
  },
  logo: {
    flex: 1,
    width: "100%",
    height: 350,
  },

  headingText: {
    fontSize: 25,
    fontWeight: "bold",

    color: "#FFFFFF",
  },
  subText: {
    fontSize: 13,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",

    color: "#FFFFFF",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
  },

  btn: {
    backgroundColor: "#d50000",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 20,
    borderRadius: 10,
    padding: 20,
  },
  btnText: {
    color: "#FFFFFF",
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
