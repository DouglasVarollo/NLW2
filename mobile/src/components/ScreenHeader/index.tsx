import React, { ReactNode } from "react";
import { Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import styles from "./styles";

interface ScreenHeaderProps {
	headerRight?: ReactNode;
	title: string;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = (props) => {
	const { children, headerRight, title } = props;

	const { navigate } = useNavigation();

	function handleGoBack() {
		navigate("Landing");
	}

	return (
		<View style={styles.container}>
			<View style={styles.topBar}>
				<BorderlessButton onPress={handleGoBack}>
					<Image resizeMode="contain" source={backIcon} />
				</BorderlessButton>

				<Image source={logoImg} />
			</View>

			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				{headerRight}
			</View>

			{children}
		</View>
	);
};

export default ScreenHeader;
