import { Button } from '@components/Button'
import { Input } from '@components/Input'
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react'

import { ScreenHeader } from '@components/ScreenHeader'
import { ToastMessage } from '@components/ToastMessage'
import { UserPhoto } from '@components/UserPhoto'
import { Center, Heading, Text, VStack, useToast } from '@gluestack-ui/themed'
import * as FileSystem from 'expo-file-system'

import { ScrollView, TouchableOpacity } from 'react-native'

export function Profile() {
    const [userPhoto, setUserPhoto] = useState(
        'https://github.com/Isaacgv.png',
    )

    const toast = useToast()

    async function handleUserPhotoSelect() {
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 1,
              aspect: [4, 4],
              allowsEditing: true,
            })

            if (photoSelected.canceled) {
                return
            }

            const photoUri = photoSelected.assets[0].uri

            if (photoUri) {
                const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
                    size: number
                }

                if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
                    return toast.show({
                        placement: "top",
                        render: ({ id }) => (
                            <ToastMessage 
                                id={id} 
                                action="error" 
                                title="This image is very large. Choose one up to 5MB."
                                onClose={() => toast.close(id)}
                            />
                        )
                    })
                }
                setUserPhoto(photoSelected.assets[0].uri)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Profil" />

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt="$6" px="$10">
                    <UserPhoto
                        source={{ uri: userPhoto }}
                        size="xl"
                        alt="User image"
                    />
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text
                            color="$green500"
                            fontFamily="$heading"
                            fontSize="$md"
                            mt="$2"
                            mb="$8"
                        >
                            Change Photo
                        </Text>
                    </TouchableOpacity>
                    <Center w="$full" gap="$4">
                        <Input placeholder="Name" bg="$gray600" />
                        <Input value="isaac@gmail.com" bg="$gray600" isReadOnly />
                    </Center>

                    <Heading
                        alignSelf="flex-start"
                        fontFamily="$heading"
                        color="$gray200"
                        fontSize="$md"
                        mt="$12"
                        mb="$2"
                    >
                        Change Password
                    </Heading>

                    <Center w="$full" gap="$4">
                        <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
                        <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
                        <Input
                        placeholder="Confirm new Password"
                        bg="$gray600"
                        secureTextEntry
                        />
                        <Button title="Update" />
                    </Center>
                </Center>
            </ScrollView>
        </VStack>

    )
}