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
                <S.Text>alcivanlucasdesousa@gmail.com</S.Text>
            </div>
            <div>
                <S.Title>Adicione nas redes</S.Title>
                <S.LinksContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.linkedin.com/in/alcivan-lucas">
                            <Linkedin />
                        </SocialMediaBox>
                        <div>/Alcivan Lucas</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://github.com/AlcivanLucas">
                            <GitHub />
                        </SocialMediaBox>
                        <div>/GalinGdS</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.instagram.com/alcivan_lucas/">
                            <Instagram />
                        </SocialMediaBox>
                        <div>/Alcivan Lucas</div>
                    </S.MediaContainer>
                </S.LinksContainer>
            </div>
        </S.SocialMediaContainer>
    );
};

export default Media;
