import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudyTabs from "./StudyTabs";
import Landing from "../screens/Landing";
import GiveClasses from "../screens/GiveClasses";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Screen component={Landing} name="Landing" />
				<Screen component={GiveClasses} name="GiveClasses" />
				<Screen component={StudyTabs} name="Study" />
			</Navigator>
		</NavigationContainer>
	);
}

export default AppStack;
