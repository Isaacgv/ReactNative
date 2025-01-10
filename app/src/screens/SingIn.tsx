import { Center, Heading, Image, Text, VStack } from '@gluestack-ui/themed'
import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'


export function SignIn() {
  return (
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
            <Center gap="$2">
                <Heading color="$gray100">Login</Heading>
                <Input placeholder="E-mail" />
                <Input placeholder="Password" />
            </Center>
      </VStack>

    </VStack>
  )
}