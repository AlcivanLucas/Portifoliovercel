import * as S from "../../style";
import { useRef, useState, useEffect } from "react";
import SocialMediaBox from "../../../../components/SocialBox";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/svg/instagram.svg";
import MainLogo from "../../../../assets/svgComponents/MainLogo";
import { typingFunction } from "./functions";

interface MainComponentContract {
    isMobile: boolean;
}

const MainComponent = ({ isMobile }: MainComponentContract) => {
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const ref = useRef<HTMLParagraphElement>(null);
    const occupation: string = "Desenvolvedor Web & Back-end";

    useEffect(() => {
        if (
            !isInitial &&
            ref!.current!.innerHTML.length !== occupation.length
        ) {
            typingFunction(ref!.current!, occupation);
            return;
        }
        setIsInitial(false);
    }, [isInitial]);

    return (
        <S.Main id="start">
            <div className={`${!isInitial ? "animeLeft" : ""} centralizer`}>
                <S.MainContentContainer>
                    <div className="nameLogoContainer">
                        <S.MyInfoContainer>
                            <S.Name>Alcivan Lucas</S.Name>
                            <S.Occupation ref={ref}></S.Occupation>
                            <S.SocialMediaContainer>
                                <SocialMediaBox url="https://www.linkedin.com/in/alcivan-lucas">
                                    <Linkedin />
                                </SocialMediaBox>
                                <SocialMediaBox url="https://github.com/AlcivanLucas">
                                    <GitHub />
                                </SocialMediaBox>
                                <SocialMediaBox url="https://www.instagram.com/alcivan_lucas/">
                                    <Instagram />
                                </SocialMediaBox>
                            </S.SocialMediaContainer>
                        </S.MyInfoContainer>
                        {!isMobile && (
                            <S.MainImgContainer>
                                <MainLogo />
                            </S.MainImgContainer>
                        )}
                    </div>
                </S.MainContentContainer>
            </div>
        </S.Main>
    );
};

export default MainComponent;
