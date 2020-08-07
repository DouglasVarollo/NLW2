import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem from "../../components/TeacherItem";
import styles from "./styles";

function TeacherList() {
	const [isFiltersVisible, setIsFiltersVisible] = useState(false);

	function handleToggleFiltersVisible() {
		setIsFiltersVisible(!isFiltersVisible);
	}

	return (
		<View style={styles.container}>
			<ScreenHeader
				headerRight={
					<BorderlessButton onPress={handleToggleFiltersVisible}>
						<Feather name="filter" size={20} color="#fff" />
					</BorderlessButton>
				}
				title="Proffys disponíveis"
			>
				{isFiltersVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
						<TextInput
							placeholder="Qual a matéria"
							placeholderTextColor="#c1bccc"
							style={styles.input}
						/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									placeholder="Qual o dia"
									placeholderTextColor="#c1bccc"
									style={styles.input}
								/>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									placeholder="Qual horário"
									placeholderTextColor="#c1bccc"
									style={styles.input}
								/>
							</View>
						</View>

						<RectButton style={styles.submitButton}>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>
					</View>
				)}
			</ScreenHeader>

			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
				style={styles.teacherList}
			>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</ScrollView>
		</View>
	);
}

export default TeacherList;
