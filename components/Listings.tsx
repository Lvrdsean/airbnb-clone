import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";

interface Props {
	listings: any[];
	category: string;
}

const Listings = ({ listings, category }: Props) => {
	useEffect(() => {
		console.log("RELOAD LISTINGS: ", listings.length);
	}, [category]);
	return (
		<View>
			<Text>Listings</Text>
		</View>
	);
};

export default Listings;
