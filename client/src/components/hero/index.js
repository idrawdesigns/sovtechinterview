import React from "react";

//styles
import {
  HeroWrapper,
  HeroContainer,
  LargeText,
  Text,
  TextWrapper,
} from "./hero.styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <LargeText>
          Chuck Norris <br />
          <span>Jokes</span>
        </LargeText>
        <TextWrapper>
          <Text>
            Chuck Norris facts are satirical factoids about martial artist and
            actor Chuck Norris that have become an Internet phenomenon and as a
            result have become widespread in popular culture. The 'facts' are
            normally absurd hyperbolic claims about Norris' toughness, attitude,
            virility, sophistication, and masculinity.
          </Text>
        </TextWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
