import React from "react";
import { Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import landingImg from "../../assets/images/landing.png";
import heartIcon from "../../assets/images/icons/heart.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import studyIcon from "../../assets/images/icons/study.png";
import styles from "./styles";

function Landing() {
	const { navigate } = useNavigation();

	function handleNavigateToGiveClassesPage() {
		navigate("GiveClasses");
	}

	function handleNavigateToStudyScreens() {
		navigate("Study");
	}

	return (
		<View style={styles.container}>
			<Image source={landingImg} style={styles.banner} />

			<Text style={styles.title}>
				Seja bem-vindo, {"\n"}
				<Text style={styles.titleBold}>O que deseja fazer?</Text>
			</Text>

			<View style={styles.buttonContainer}>
				<RectButton
					style={[styles.button, styles.buttonPrimary]}
					onPress={handleNavigateToStudyScreens}
				>
					<Image source={studyIcon} />
					<Text style={styles.buttonText}>Estudar</Text>
				</RectButton>

				<RectButton
					onPress={handleNavigateToGiveClassesPage}
					style={[styles.button, styles.buttonSecondary]}
				>
					<Image source={giveClassesIcon} />
					<Text style={styles.buttonText}>Dar aulas</Text>
				</RectButton>
			</View>

			<Text style={styles.totolConnections}>
				Total de 285 conexões já realizadas <Image source={heartIcon} />
			</Text>
		</View>
	);
}

export default Landing;
