import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 40,
		backgroundColor: "#8257e5",
	},
	content: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		maxWidth: 180,
		color: "#fff",
		fontFamily: "Archivo_700Bold",
		fontSize: 32,
		lineHeight: 37,
	},
	description: {
		maxWidth: 240,
		marginTop: 24,
		color: "#d4c2ff",
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
		lineHeight: 26,
	},
	okButton: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 40,
		height: 58,
		borderRadius: 8,
		backgroundColor: "#04d361",
	},
	okButtonText: {
		color: "#fff",
		fontFamily: "Archivo_700Bold",
		fontSize: 16,
	},
});
