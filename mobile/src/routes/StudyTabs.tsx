import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Favorites from "../screens/Favorites";
import TeacherList from "../screens/TeacherList";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
	return (
		<Navigator
			tabBarOptions={{
				style: {
					height: 64,
					elevation: 0,
					shadowOpacity: 0,
				},
				tabStyle: {
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				},
				iconStyle: {
					flex: 0,
					width: 20,
					height: 20,
				},
				labelStyle: {
					marginLeft: 16,
					fontFamily: "Archivo_700Bold",
					fontSize: 13,
				},
				inactiveBackgroundColor: "#fafafc",
				activeBackgroundColor: "#ebebf5",
				inactiveTintColor: "#c1bccc",
				activeTintColor: "#32264b",
			}}
		>
			<Screen
				component={TeacherList}
				name="TeacherList"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name="ios-easel" size={size} />
					),
					tabBarLabel: "Proffys",
				}}
			/>
			<Screen
				component={Favorites}
				name="Favorites"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name="ios-heart" size={size} />
					),
					tabBarLabel: "Favoritos",
				}}
			/>
		</Navigator>
	);
}

export default StudyTabs;
