  import { Text, View, Image, Pressable } from "react-native";
  import { useState } from "react";
  const t2 = require("../assets/images/t2.jpg");
  const titanic = require("../assets/images/titanic.jpg");
  const avatar = require("../assets/images/avatar.jpg");

  const images = { "t2": t2, "titanic": titanic, "avatar": avatar };

  import movieData from "../assets/movies.json";

  export default function Index() {
    const [movieIndex, setMovieIndex] = useState(0);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Top 3 Movies</Text>
        <Text>         </Text>
        <Text>         </Text>
        <Text>         </Text>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Title: {movieData[movieIndex].title}</Text>
        <Text>         </Text>
        <Image source={images[movieData[movieIndex].image]} />
        <Text>         </Text>
        <Text style={{ fontSize: 24, textAlign: "left" }}>Year: {movieData[movieIndex].year}</Text>
        <Text>         </Text>
        <Text style={{ fontSize: 24, textAlign: "left" }}>Actors: </Text>
        {movieData[movieIndex].actors.map((actor) => (
          <Text style={{ fontSize: 20 }} key={actor}>{actor}</Text>
        ))}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <Pressable
            onPress={() => setMovieIndex(0)}
            style={{
              backgroundColor: movieIndex === 0 ? "#2196F3" : "#e0e0e0",
              padding: 12,
              marginHorizontal: 8,
              borderRadius: 8,
              minWidth: 40,
              alignItems: "center",
            }}
          >
            <Text style={{ color: movieIndex === 0 ? "#fff" : "#000", fontSize: 18 }}>1</Text>
          </Pressable>
          <Pressable
            onPress={() => setMovieIndex(1)}
            style={{
              backgroundColor: movieIndex === 1 ? "#2196F3" : "#e0e0e0",
              padding: 12,
              marginHorizontal: 8,
              borderRadius: 8,
              minWidth: 40,
              alignItems: "center",
            }}
          >
            <Text style={{ color: movieIndex === 1 ? "#fff" : "#000", fontSize: 18 }}>2</Text>
          </Pressable>
          <Pressable
            onPress={() => setMovieIndex(2)}
            style={{
              backgroundColor: movieIndex === 2 ? "#2196F3" : "#e0e0e0",
              padding: 12,
              marginHorizontal: 8,
              borderRadius: 8,
              minWidth: 40,
              alignItems: "center",
            }}
          >
            <Text style={{ color: movieIndex === 2 ? "#fff" : "#000", fontSize: 18 }}>3</Text>
          </Pressable>
        </View>
      </View>
    );
  }

