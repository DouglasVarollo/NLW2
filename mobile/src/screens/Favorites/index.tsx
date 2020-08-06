import React from "react";
import { View } from "react-native";

import ScreenHeader from "../../components/ScreenHeader";
import styles from "./styles";

function Favorites() {
	return (
		<View style={styles.container}>
			<ScreenHeader title="Meus proffys favoritos" />
		</View>
	);
}

export default Favorites;
