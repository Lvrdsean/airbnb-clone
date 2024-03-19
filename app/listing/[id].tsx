import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Id = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	console.log("🚀 ~ file: [id].tsx:7 ~ Page ~ id:", id);
	return (
		<View>
			<Text>Id</Text>
		</View>
	);
};

export default Id;
