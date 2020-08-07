import React from "react";
import { ScrollView, View } from "react-native";

import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem from "../../components/TeacherItem";
import styles from "./styles";

function TeacherList() {
	return (
		<View style={styles.container}>
			<ScreenHeader title="Proffys disponíveis" />

			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
				style={styles.teacherList}
			>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</ScrollView>
		</View>
	);
}

export default TeacherList;
