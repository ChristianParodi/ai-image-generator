import React, { useState } from 'react'
import {
    Flex,
    Container,
    Textarea,
    Heading,
    Button,
    Image,
} from '@chakra-ui/react'
import { openai } from "./openai/useOpenai"

function App() {
    const [textValue, setTextValue] = useState("");
    const [btnText, setBtnText] = useState("Generate image");
    const [image, setImage] = useState("");

    const handleBtnClick = async (e: any) => {
        if (textValue !== "") {
            setBtnText("Loading...")
            try {
                const responseImage = await openai.createImage({
                    prompt: textValue,
                    n: 1,
                    size: "1024x1024",
                })
                const image_url = responseImage.data.data[0].url
                setImage(image_url as string)
            } catch (err: any) { console.log(err.response.data) }
            setBtnText("Generate image")
        }
    }

    return (
        <Container maxW={"container.xl"} my={5}>
            <Flex
                flexDir='column'
                alignItems={"center"}
                gap={5}
            >
                <Heading>Simple DALL-E image generator</Heading>
                <Textarea
                    value={textValue}
                    onChange={(e) => { setTextValue(e.target.value) }}
                    border={"1px solid black"}
                />
                <Button
                    colorScheme='purple'
                    w={500}
                    onClick={handleBtnClick}
                >
                    {btnText}
                </Button>
                {image && <Image
                    w={500}
                    src={image}
                    alt={textValue}
                />}
            </Flex>
        </Container>
    )
}

export default App