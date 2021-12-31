import React from 'react'
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../../styles/GlobalComponents";
import Button from "../../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

interface HeroProps {

}

export const Hero: React.FC<HeroProps> = ({}) => {
    return (
      <>
        <Section row nopadding>
          <LeftSection>
            <SectionTitle main>
              {`Cedryc Midy`}
              <br />
            </SectionTitle>
            <SectionText>
              {`I hope to see projects I work on in the future ameliorate lives, especially in marginalized communities.`}
            </SectionText>
            <Button>Learn More</Button>
          </LeftSection>
        </Section>
      </>
    );
}