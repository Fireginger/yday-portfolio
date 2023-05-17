import React from 'react';
import { Container } from '../../globalStyles';

import { 
    InfoSec,
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'

const InfoSection3 = ({ 
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description,
    description2,
    description3,
    description4,
    headline, 
    lightText, 
    topLine,
    img,
    alt,
    start
}) => {
  return (
    <>
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Subtitle lightTextDesc={lightTextDesc}>{description2}</Subtitle>
                            <Subtitle lightTextDesc={lightTextDesc}>{description3}</Subtitle>
                            <Subtitle lightTextDesc={lightTextDesc}>{description4}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection3
