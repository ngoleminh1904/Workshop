import { StyleSheet } from "react-native";
import React from "react";
import LessonLayout from "../../components/LessonLayout";
import { Text } from "native-base";

type Props = {};

const PickImage = (props: Props) => {
  return (
    <LessonLayout iconSource={require("../../../assets/images/bg-2.jpg")}>
      <Text>PickImage</Text>
    </LessonLayout>
  );
};

export default PickImage;

const styles = StyleSheet.create({});
