import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 40,
		backgroundColor: "#8257e5",
	},
	banner: {
		width: "100%",
		resizeMode: "contain",
	},
	title: {
		marginTop: 80,
		color: "#fff",
		fontFamily: "Poppins_400Regular",
		fontSize: 20,
		lineHeight: 30,
	},
	titleBold: {
		fontFamily: "Poppins_600SemiBold",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 40,
	},
	button: {
		justifyContent: "space-between",
		width: "48%",
		height: 150,
		padding: 24,
		borderRadius: 8,
	},
	buttonPrimary: {
		backgroundColor: "#9871f5",
	},
	buttonSecondary: {
		backgroundColor: "#04d361",
	},
	buttonText: {
		color: "#fff",
		fontFamily: "Archivo_700Bold",
		fontSize: 20,
	},
	totolConnections: {
		maxWidth: 140,
		marginTop: 40,
		color: "#d4c2ff",
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
		lineHeight: 20,
	},
});
