import {
    Center,
    Heading,
    Image,
    ScrollView,
    Text,
    VStack,
    useToast
  } from '@gluestack-ui/themed'

import { Alert } from 'react-native';
import axios from 'axios';
import { api } from "@services/api";

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native"

import { AuthNavigatorRoutesProps} from "@routes/auth.routes"
import { ToastMessage } from '@components/ToastMessage'

import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { AppError } from '@utils/AppError';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Indicate your name'),
  email: yup.string().required('Indicate your e-mail').email('Invalid E-mail'),
  password: yup.string().required('Indicate password').min(6, 'The password need minimum 6 digits.'),
  password_confirm: yup
    .string()
    .required('Confirm Password')
    .oneOf([yup.ref('password'), ''], 'Password confirmation does not match.'),

});


export function SignUp() {

  const toast = useToast();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation();

  function handleGoBack() {
        navigation.goBack()
  }


  async function handleSignUp({ name, email, password }: FormDataProps) {

    try {
      const response = await api.post('/users', { name, email, password });
      console.log(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Unable to create account. Try again later';
      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage 
              id={id} 
              action="error" 
              title = {title}
              onClose={() => toast.close(id)}
          />
      )
      })
      
    }

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

              <Center flex={1} gap="$2">

                  <Heading color="$gray100">Create your account
                  </Heading>

                  <Controller 
                    control={control}
                    name="name"
                    render={({ field: { onChange, value } }) => (
                      <Input 
                        placeholder="Name"
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.name?.message}
                      />
                    )}
                  />
    

                  <Controller 
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                      <Input 
                        placeholder="E-mail" 
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.email?.message}
                      />
                    )}
                  />
                  
                  <Controller 
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                      <Input 
                        placeholder="Password" 
                        secureTextEntry
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.password?.message}
                      />
                    )}
                  />

                  <Controller 
                    control={control}
                    name="password_confirm"
                    render={({ field: { onChange, value } }) => (
                      <Input 
                        placeholder="Confirm Password" 
                        secureTextEntry
                        onChangeText={onChange}
                        value={value}
                        onSubmitEditing={handleSubmit(handleSignUp)}
                        returnKeyType="send"
                        errorMessage={errors.password_confirm?.message}
                      />
                    )}
                  />

                  <Button title="Create and access" onPress={handleSubmit(handleSignUp)}/>

              </Center>

              <Button 
                title="Back to login" 
                variant="outline" 
                mt="$12" 
                onPress={handleGoBack}
              />

          </VStack>
      </VStack>
    </ScrollView>
  )
}