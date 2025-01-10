import { Center, Image, Text, VStack } from '@gluestack-ui/themed'
import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

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

        <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
                Train your mind and body
            </Text>
        </Center>

    </VStack>
  )
}