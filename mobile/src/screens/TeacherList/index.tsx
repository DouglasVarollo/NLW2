import React from "react";
import { View } from "react-native";

import ScreenHeader from "../../components/ScreenHeader";
import styles from "./styles";

function TeacherList() {
	return (
		<View style={styles.container}>
			<ScreenHeader title="Proffys disponíveis" />
		</View>
	);
}

export default TeacherList;
