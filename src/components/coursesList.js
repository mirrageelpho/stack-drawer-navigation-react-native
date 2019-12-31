import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

function CourseComponent({ course, navigation }) {
  function openCourse(course) {
    navigation.navigate("DetailPage", { course: course });
  }
  return (
    <TouchableOpacity
      style={{ height: 30, width: 150 }}
      onPress={() => openCourse(course)}
    >
      <Text>{course?.title}</Text>
    </TouchableOpacity>
  );
}
export default function CoursesList({ navigation }) {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();
  function addCourse(course) {
    dispatch({
      type: "ADD_COURSE",
      course
    });
  }
  return (
    <View style={{ paddingTop: 20 }}>
      <Button
        title="Add Course"
        onPress={() =>
          addCourse({
            id: Math.random().toString(),
            title: "NodeJs"
          })
        }
      />
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseComponent course={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
