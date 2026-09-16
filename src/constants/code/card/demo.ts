export const CARD_DEMO_CODE = `import Image from 'next/image';
import { Btn, Card, Input, Label, Text, Title } from '@components/atoms';

const IMG_SRC =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

export const CardDemo = () => {
  return (
    <div className="relative grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
      <Card>
        <Card.Head className="bg-text h-0 pb-[60%]">
          <Image
            src={IMG_SRC}
            alt="Living Room Sofa"
            loading="lazy"
            className="absolute top-0 left-0 h-full w-full object-cover object-center"
            sizes="100%"
            fill
          />
        </Card.Head>

        <Card.Body className="flex flex-col gap-2 p-3 md:p-4">
          <Title size="h4">Living Room Sofa</Title>
          <Text>This sofa is perfect for modern tropical spaces, baroque inspired spaces.</Text>
          <Title size="h3">$450</Title>
        </Card.Body>

        <Card.Footer className="flex flex-wrap gap-3 p-3 sm:gap-1 md:p-4">
          <Btn>Buy now</Btn>
          <Btn variant="outline">Add to cart</Btn>
        </Card.Footer>
      </Card>

      <Card className="flex flex-col gap-5 p-3 md:gap-4 md:p-4">
        <Card.Head className="flex flex-col gap-2">
          <Title size="h4">Sign up</Title>
          <Text>Fill in the form below to create an account.</Text>
        </Card.Head>

        <Card.Body className="flex h-full flex-col">
          <form className="flex w-full grow flex-col gap-3 md:gap-4">
            <Label className="flex flex-col gap-2">
              <Text className="text-title">Email</Text>
              <Input name="email" type="email" placeholder="m@example.com" required />
            </Label>

            <Label className="flex flex-col gap-1">
              <Text className="text-title">Password</Text>
              <Input name="password" type="password" required />
            </Label>
          </form>
        </Card.Body>

        <Card.Footer className="flex flex-wrap justify-end gap-3 sm:gap-1">
          <Btn variant="outline">Cancel</Btn>
          <Btn>Sign in</Btn>
        </Card.Footer>
      </Card>

      <Card className="p-3 md:col-span-2 md:p-4">
        <Card.Body className="flex flex-col gap-2">
          <Title size="h4">Card Title</Title>
          <Text>This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Card.Body>
      </Card>

      <Card className="grid grid-cols-1 items-end sm:grid-cols-[40%_auto] md:col-span-2">
        <Card.Head className="bg-text h-0 pb-[60%] sm:row-span-2 sm:pb-[80%]">
          <Image
            src={IMG_SRC}
            alt="Living Room Sofa"
            loading="lazy"
            className="absolute top-0 left-0 h-full w-full object-cover object-center"
            sizes="100%"
            fill
          />
        </Card.Head>

        <Card.Body className="flex h-full flex-col gap-2 p-3 md:p-4">
          <Title size="h4">Living Room Sofa</Title>
          <Text>This sofa is perfect for modern tropical spaces, baroque inspired spaces.</Text>
        </Card.Body>

        <Card.Footer className="flex flex-wrap gap-3 p-3 sm:gap-1 md:p-4">
          <Btn>Buy now</Btn>
          <Btn variant="outline">Add to cart</Btn>
        </Card.Footer>
      </Card>
    </div>
  );
};`;
