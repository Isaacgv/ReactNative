import {
    Center,
    Heading,
    Image,
    ScrollView,
    Text,
    VStack,
  } from '@gluestack-ui/themed'
  import BackgroundImg from '@assets/background.png'
  import Logo from '@assets/logo.svg'
  import { Input } from '@components/Input'
  import { Button } from '@components/Button'
  export function SignUp() {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} bg="$gray700">
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
              <Input placeholder="Nome" />
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Input placeholder="Password" secureTextEntry />
              <Button title="Create and access" />
            </Center>
            <Button title="Back to login" variant="outline" mt="$12" />
          </VStack>
        </VStack>
      </ScrollView>
    )
  }