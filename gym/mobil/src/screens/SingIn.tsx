import { Controller, useForm } from 'react-hook-form';
import { Center, Heading, Image, ScrollView, Text, VStack } from '@gluestack-ui/themed'
import { useNavigation } from "@react-navigation/native"

import { AuthNavigatorRoutesProps} from "@routes/auth.routes"
import { useAuth } from '@hooks/useAuth';

import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

type FormData = {
    email: string;
    password: string;
}  

export function SignIn() {
    const { singIn } = useAuth();

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    function handleNewAccount() {
        navigation.navigate("signUp")
    }

    async function handleSignIn({ email, password }: FormData){
        await singIn(email, password);
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1}>
                <Image
                    w="$full"
                    h={624}
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Persons training"
                    position="absolute"
                />

                <VStack flex={1} px="$10" pb="$16">
                    <Center my="$24">
                    <Logo />
                        <Text color="$gray100" fontSize="$sm">
                            Train your mind and body
                        </Text>
                    </Center>

                    <Center gap="$2">
                        <Heading color="$gray100">Login</Heading>

                        <Controller 
                            control={control}
                            name="email"
                            rules={{ required: 'Indicate the e-mail' }}
                            render={({ field: { onChange } }) => (
                            <Input 
                                placeholder="E-mail" 
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                errorMessage={errors.email?.message}
                            />
                            )}
                        />

                        <Controller 
                            control={control}
                            name="password"
                            rules={{ required: 'Indicate your password' }}
                            render={({ field: { onChange } }) => (
                            <Input 
                                placeholder="Password" 
                                secureTextEntry
                                onChangeText={onChange}
                                errorMessage={errors.password?.message}
                            />
                            )}
                        />
                        <Button title="Access" onPress={handleSubmit(handleSignIn)}/>
                    </Center>

                    <Center flex={1} justifyContent="flex-end" marginTop="$4">
                        <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
                            Still don't have access?
                        </Text>

                        <Button 
                            title="Create account" 
                            variant="outline" 
                            onPress={handleNewAccount}
                        />
                    </Center>

                </VStack>

            </VStack>
        </ScrollView>
  )
}