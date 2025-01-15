import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { ExerciseCard } from '@components/ExerciseCard'

export function Home() {
    const [exercises, setExercises] = useState([
        '1',
        '2',
        '3',
        '4',
      ])
    const [groups, setGroups] = useState(['Group1', 'Group2', 'Group3', 'Group4'])
    const [groupSelected, setGroupSelected] = useState('group1')

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenExerciseDetails() {
      navigation.navigate('exercise')
    }

    return (
        <VStack flex={1} >
            <HomeHeader />
            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLowerCase() === item.toLowerCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 32 }}
                style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
            />
            <VStack px="$8"  flex={1}>
                <HStack justifyContent="space-between" mb="$5" alignItems="center">
                <Heading color="$gray200" fontSize="$md">
                    Works
                </Heading>
                <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                {exercises.length}
                </Text>
                </HStack>
                <FlatList
                    data={exercises}
                    keyExtractor={(item) => item}
                    renderItem={() => (
                        <ExerciseCard onPress={handleOpenExerciseDetails} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    )
}