import * as S from "../../style";
import H2 from "../../../../components/H2";
import Circle from "../../../../assets/svgComponents/Circle";

interface AboutMeContract {
    isMobile: boolean;
}

const AboutMeSection = ({ isMobile }: AboutMeContract) => {
    return (
        <S.Section id="aboutMe">
            <div className="centralizer">
                <H2>Sobre mim</H2>
                <S.AboutMeContainer>
                    <div>
                        <p>
                            Meu nome é Alcivan lucas e eu sou um apaixonado por
                            tecnologia que decidiu trilhar o caminho da
                            programação. Trabalhei com projetos envolvendo
                            gestão educacional, API's e banco de dados.
                        </p>
                        <br />
                        <p>
                            Atualmente estou cursando Engenharia de Software e focando no desenvolvimento
                            Back-And.
                        </p>
                    </div>
                    {!isMobile && (
                        <div className="svgContainer">
                            <Circle />
                        </div>
                    )}
                </S.AboutMeContainer>
            </div>
        </S.Section>
    );
};

export default AboutMeSection;
