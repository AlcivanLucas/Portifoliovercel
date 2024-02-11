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
                            programação. Trabalhei com projetos voluntários envolvendo
                            gestão educacional, consumo de API's e banco de dados PostgreSQL e MongoDB.
                        </p>
                        <br/>
                        <p>
                            Atualmente estou cursando Engenharia de Software e focando no desenvolvimento
                            Back-end. Sou CTO da empresa júnior de Engenharia de Software, a ConcretoSmart, 
                            onde tenho a oportunidade de trabalhar com tecnologias como Node.js, Express,
                            envolvendo desenvolvimento de produtos/serviços baseados em tecnologia, pesquisa 
                            e inovação tecnológica, bem como a infraestrutura tecnológica da empresa.
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
