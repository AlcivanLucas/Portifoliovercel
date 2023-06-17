import SocialMediaBox from "../../../../components/SocialBox";
import * as S from "../../style";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/svg/instagram.svg";

const Media = () => {
    return (
        <S.SocialMediaContainer>
            <div>
                <S.Title>E-mail para contato</S.Title>
                <S.Text>alcivan14lucas@gmail.com</S.Text>
            </div>
            <div>
                <S.Title>Adicione nas redes</S.Title>
                <S.LinksContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.linkedin.com/in/alcivan-lucas-meireles-de-sousa-a0b88b279/">
                            <Linkedin />
                        </SocialMediaBox>
                        <div>/alcivan lucas</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://github.com/GalinGdS">
                            <GitHub />
                        </SocialMediaBox>
                        <div>/alcivan lucas</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.instagram.com/alcivan_lucas/">
                            <Instagram />
                        </SocialMediaBox>
                        <div>/alcivan lucas</div>
                    </S.MediaContainer>
                </S.LinksContainer>
            </div>
        </S.SocialMediaContainer>
    );
};

export default Media;
