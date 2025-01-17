import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'
import { Heading, Text, VStack } from '@gluestack-ui/themed'
import { useState } from 'react'
import { SectionList } from 'react-native'

export function History() {
    const [exercises, setExercises] = useState([
        {
          title: '12.01.25',
          data: ['Exercise 1', 'Exercise 2'],
        },
        {
          title: '13.01.25',
          data: ['Exercise 1'],
        },
      ])
    return (
        <VStack flex={1}>
            <ScreenHeader title="History"/>
            <SectionList
                sections={exercises}
                keyExtractor={(item) => item}
                renderItem={() => <HistoryCard />}
                renderSectionHeader={({ section }) => (
                    <Heading color="$gray200" fontSize="$md" mt="$10" mb="$3">
                        {section.title}
                    </Heading>
                )}
                style={{ paddingHorizontal: 32 }}
                contentContainerStyle={
                    exercises.length === 0 && { flex: 1, justifyContent: 'center' }
                }
                ListEmptyComponent={() => (
                    <Text color="$gray200" textAlign="center">     
                        There are no exercises registered yet. {'\n'}
                        Shall we do exercises today?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    )
}