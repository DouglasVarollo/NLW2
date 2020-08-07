import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import api from "../../services/api";
import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import styles from "./styles";

function TeacherList() {
	const [isFiltersVisible, setIsFiltersVisible] = useState(false);

	const [favorites, setFavorites] = useState<number[]>([]);
	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState("");
	const [week_day, setWeekDay] = useState("");
	const [time, setTime] = useState("");

	useFocusEffect(() => {
		loadFavorites();
	});

	function loadFavorites() {
		AsyncStorage.getItem("favorites").then((response) => {
			if (response) {
				const favoritedTeachers = JSON.parse(response);
				const favoritedTeachersIds = favoritedTeachers.map(
					(teacher: Teacher) => teacher.id
				);

				setFavorites(favoritedTeachersIds);
			}
		});
	}

	function handleToggleFiltersVisible() {
		setIsFiltersVisible(!isFiltersVisible);
	}

	async function handleFiltersSubmit() {
		loadFavorites();

		const response = await api.get("/classes", {
			params: {
				subject,
				week_day,
				time,
			},
		});

		setIsFiltersVisible(false);
		setTeachers(response.data);
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
							value={subject}
							onChangeText={setSubject}
						/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									placeholder="Qual o dia"
									placeholderTextColor="#c1bccc"
									style={styles.input}
									value={week_day}
									onChangeText={setWeekDay}
								/>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									placeholder="Qual horário"
									placeholderTextColor="#c1bccc"
									style={styles.input}
									value={time}
									onChangeText={setTime}
								/>
							</View>
						</View>

						<RectButton
							style={styles.submitButton}
							onPress={handleFiltersSubmit}
						>
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
				{teachers.map((teacher: Teacher) => (
					<TeacherItem
						key={teacher.id}
						teacher={teacher}
						favorited={favorites.includes(teacher.id)}
					/>
				))}
			</ScrollView>
		</View>
	);
}

export default TeacherList;
