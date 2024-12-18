import { ProfileInfo, HeroContainer, Buttons, Profile, ButtonDownload } from "./style";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";

export function Hero() {
    return (
        <HeroContainer>
               <Buttons>
                <a href="https://github.com/Guilherme1Souza">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/guilhermeeduardo/">
                <FaLinkedin />
                </a>
                <a href="mailto:guilhermeeduardo2016@outlook.com">
                <MdEmail />
                </a>
                </Buttons>
            <Profile>
                <ProfileInfo>
                    <div>
                        <span>Bem-vindo</span>
                        <strong>Guilherme Souza</strong>
                    </div>
                    <img
                        src="https://github.com/Guilherme1Souza.png"
                        alt="Foto de Guilherme Souza" />
                </ProfileInfo>
                <ButtonDownload>
                    <MdOutlineDownloading />
                    <p>Download CV</p>
                </ButtonDownload>
            </Profile>
        </HeroContainer>
    );
}