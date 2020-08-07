import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		marginBottom: 16,
		borderRadius: 8,
		backgroundColor: "#fff",
		borderColor: "#e6e6f0",
		borderWidth: 1,
		overflow: "hidden",
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		padding: 24,
	},
	avatar: {
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: "#eee",
	},
	profileInfo: {
		marginLeft: 16,
	},
	name: {
		color: "#32264d",
		fontFamily: "Archivo_700Bold",
		fontSize: 20,
	},
	subject: {
		marginTop: 4,
		color: "#6a6180",
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
	},
	bio: {
		marginHorizontal: 24,
		color: "#6a6180",
		fontFamily: "Poppins_400Regular",
		fontSize: 14,
		lineHeight: 24,
	},
	footer: {
		alignItems: "center",
		marginTop: 24,
		padding: 24,
		backgroundColor: "#fafafc",
	},
	price: {
		color: "#6a6180",
		fontFamily: "Poppins_400Regular",
		fontSize: 14,
	},
	priceValue: {
		color: "#8257e5",
		fontFamily: "Archivo_700Bold",
		fontSize: 16,
	},
	buttonsContainer: {
		flexDirection: "row",
		marginTop: 16,
	},
	favoriteButton: {
		justifyContent: "center",
		alignItems: "center",
		width: 56,
		height: 56,
		marginRight: 8,
		borderRadius: 8,
		backgroundColor: "#8257e5",
	},
	favorited: {
		backgroundColor: "#e33d3d",
	},
	contactButton: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 56,
		borderRadius: 8,
		backgroundColor: "#04d361",
	},
	contactButtonText: {
		marginLeft: 16,
		color: "#fff",
		fontFamily: "Archivo_700Bold",
		fontSize: 16,
	},
});
