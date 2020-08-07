import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import styles from "./styles";

function TeacherItem() {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image
					source={{ uri: "https://github.com/diego3g.png" }}
					style={styles.avatar}
				/>

				<View style={styles.profileInfo}>
					<Text style={styles.name}>Diego Fernandes</Text>
					<Text style={styles.subject}>Quimíca</Text>
				</View>
			</View>

			<Text style={styles.bio}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
				obcaecati veritatis tempora beatae quidem molestiae quisquam et,
				praesentium non accusamus asperiores repellat sequi, nesciunt porro sit
				ratione quo nostrum. Sequi!
			</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/hora {"   "}
					<Text style={styles.priceValue}>R$ 20,00</Text>
				</Text>

				<View style={styles.buttonsContainer}>
					<RectButton style={[styles.favoriteButton, styles.favorited]}>
						{/* <Image source={heartOutlineIcon} /> */}
						<Image source={unfavoriteIcon} />
					</RectButton>

					<RectButton style={styles.contactButton}>
						<Image source={whatsappIcon} />

						<Text style={styles.contactButtonText}>Entrar em contato</Text>
					</RectButton>
				</View>
			</View>
		</View>
	);
}

export default TeacherItem;
