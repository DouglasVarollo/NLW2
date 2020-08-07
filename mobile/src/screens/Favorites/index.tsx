import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import styles from "./styles";

function Favorites() {
	const [favorites, setFavorites] = useState([]);

	function loadFavorites() {
		AsyncStorage.getItem("favorites").then((response) => {
			if (response) {
				const favoritedTeachers = JSON.parse(response);

				setFavorites(favoritedTeachers);
			}
		});
	}

	useFocusEffect(() => {
		loadFavorites();
	});

	return (
		<View style={styles.container}>
			<ScreenHeader title="Meus proffys favoritos" />

			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
				style={styles.teacherList}
			>
				{favorites.map((teacher: Teacher) => (
					<TeacherItem key={teacher.id} teacher={teacher} favorited />
				))}
			</ScrollView>
		</View>
	);
}

export default Favorites;
