import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const [background, setBackground] = useState({
    uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
    name: "Avengers: End Game",
    stat: "2019 ‧ Hành động/Khoa Học Viễn Tưởng - 182 Phút",
    desc: "Sau sự kiện Thanos làm cho một nửa vũ trụ tan biến và khiến cho biệt đội Avengers thảm bại, những siêu anh hùng sống sót phải tham gia trận chiến cuối cùng trong Avengers: Endgame - tác phẩm điện ảnh đánh dấu sự khép lại sau 22 bộ phim của Marvel Studios.",
  });

  const [gallery, setgallery] = useState([
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
      title: "Avengers: End Game",
      released: "2019 ‧ Hành động/Khoa Học Viễn Tưởng - 182 Phút",
      key: "1",
      desc: "Sau sự kiện Thanos làm cho một nửa vũ trụ tan biến và khiến cho biệt đội Avengers thảm bại, những siêu anh hùng sống sót phải tham gia trận chiến cuối cùng trong Avengers: Endgame - tác phẩm điện ảnh đánh dấu sự khép lại sau 22 bộ phim của Marvel Studios.",
    },
    {
      image:
        "https://vtv1.mediacdn.vn/thumb_w/650/2019/12/25/frozen1twxo-15772459961611485138311.jpg",
      title: "Frozen II",
      released: "2019 ‧ Hài, Hoạt Hình, Phiêu Lưu - 103 Phút",
      key: "2",
      desc: "Cùng dấn thân vào một cuộc phiêu lưu xa xôi thú vị, hai chị em Anna và Elsa đi đến chốn rừng sâu để tìm kiếm sự thật về bí ẩn cổ xưa của vương quốc mình. Tất cả những gì Anna & Elsa biết về bản thân, lịch sử và gia đình của họ đều bị thử thách khi họ bị cuốn vào một chuyến đi đầy quả cảm đến với vùng đất phía bắc bí ẩn ngoài Arendelle được báo trước.",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P",
      title: "Alita: Battle Angel",
      released: "2019 ‧ Hành Động, Phiêu Lưu - 130 Phút",
      key: "3",
      desc: "Phim lấy bối cảnh ở thế kỷ 26, xoay quanh nữ cyborg Alita do nữ diễn viên Rosa Salazar thủ vai. Cô bị bỏ rơi ở một bãi rác thải của Iron City và được cứu chữa bởi tiến sĩ Dyson Ido (Christoph Waltz thủ vai). Cô dần phát hiện khả năng chiến đấu siêu phàm cũng như vai trò của cô giữa thế giới bị bao phủ bởi nhiều thế lực bóng tối.",
    },
    {
      image:
        "https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg",
      title: "The Irish Man",
      released: "2019 ‧ Tội phạm - 210 phút",
      key: "4",
      desc: "The Irish Man là một bộ phim tội phạm, sử thi do Martin Scorsese đạo diễn và sản xuất. Bộ phim được Steven Zaillian chắp bút và dựa trên cuốn tiểu thuyết mang tên I Heard You Paint Houses của Charles Brandt.",
    },
    {
      image:
        "https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg",
      title: "John Wick 3",
      released: "2019 ‧ Hành Động, Hồi hộp - 127 Phút",
      key: "5",
      desc: "Sau khi trở thành giải thưởng lớn của giới sát thủ toàn cầu, siêu sát thủ John Wick phải cùng chú chó cưng lên đường chạy trốn. Với giá 14 triệu $, John Wick trở thành mục tiêu béo bở của bất cứ kẻ săn đầu người nào.",
    },
  ]);

  const [list, setList] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD",
      key: "1",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/vi/b/be/One_Piece_Film_Gold_poster.jpg",
      key: "2",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
      key: "3",
    },
    {
      image:
        "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg",
      key: "4",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
      key: "5",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
      key: "6",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
      key: "7",
    },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get("window");

  const routeRecents = () => {
    props.navigation.navigate("Recents");
  };
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            });
          }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }} blurRadius={100}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={styles.ImageBg}
            blurRadius={10}
          >
            <View style={styles.SearchboxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={styles.Searchbox}
              ></TextInput>
              <Feather
                name="search"
                size={22}
                color="#666"
                style={styles.SearchboxIcon}
              />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Top Picks this Week
            </Text>
            <View style={styles.carouselContainerView}>
              <Carousel
                style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
                //pagingEnable={false}
                //minScrollDistance={20}
              />
            </View>

            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5
                  name="play"
                  size={22}
                  color="#02ad94"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ marginHorizontal: 14 }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 24,
          }}
        >
          Continue Watching
        </Text>
        <ImageBackground
          style={{ height: 250, width: "100%", backgroundColor: "000" }}
          resizeMode="cover"
          source={{
            uri: "https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon",
          }}
        >
          <Text style={{ color: "white", padding: 14 }}>
            How to Train Your Dragon: The Hidden World
          </Text>

          <TouchableOpacity
            style={{
              ...styles.playIconContainer,
              position: "absolute",
              top: "40%",
              right: "40%",
            }}
          >
            <FontAwesome5
              name="play"
              size={22}
              color="#02ad94"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
          {/* <View style={{height: 4, backgroundColor: '#666', position: 'absolute', bottom: 0, width: '100%'}}></View>
        <View style={{height: 4, borderRadius: 10, backgroundColor: '#02ad94', position: 'absolute', bottom: 0, width: '40%'}}></View> */}
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 36,
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            My List
          </Text>
          <Text
            style={{ color: "#02ad94", fontSize: 14, fontWeight: "normal" }}
          >
            View All
          </Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          horizontal={true}
          data={list}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 300, width: 200 }}
                />
                <View
                  style={{
                    position: "absolute",
                    height: 5,
                    width: "100%",
                    backgroundColor: "#02ad94",
                    opacity: 0.8,
                  }}
                ></View>
                <FontAwesome5
                  name="play"
                  size={38}
                  color="#fff"
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "45%",
                    opacity: 0.9,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // CAROUSEL STYLES

  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    paddingLeft: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
    paddingHorizontal: 14,
  },
  SearchboxContainer: {
    flexDirection: "row",
    marginVertical: 20,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  SearchboxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  playIconContainer: {
    backgroundColor: "#212121",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 25,
    borderWidth: 4,
    borderColor: "rgba(2, 173, 148, 0.2)",
    marginBottom: 14,
  },
});

export default Home;
