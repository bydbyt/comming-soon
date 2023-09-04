import React from "react";
import { FormattedMessage } from "react-intl";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import LanguageProvider from "common/LanguageSwitcher/context/language.provider";
import MainWrapper, {
  MainContentSection,
  FooterSection,
  LogoImageContainer,
  BottomIllustration,
  BottomShape,
  CloudImages,
} from "common/ui/five.style";

import { SOCIAL_PROFILES } from "common/data/social-share/five";
// Language translation files
import localEng from "common/data/translation/five/en.json";
import localAr from "common/data/translation/five/ar.json";
import localEs from "common/data/translation/five/es.json";
import localDe from "common/data/translation/five/de.json";
import localCn from "common/data/translation/five/zh.json";
import localIl from "common/data/translation/five/he.json";
import { Container, SocialShare } from "../components";

// images
import LogoOne from "common/static/images/bydbyt.png";
import ThankYou from "common/static/images/jim-carrey-truman.gif";
import Cloud1 from "common/static/images/five/cloud1.svg";
import Cloud2 from "common/static/images/five/cloud2.svg";
import Cloud3 from "common/static/images/five/cloud3.svg";
import Shape1 from "common/static/images/five/shape1.svg";
import Shape2 from "common/static/images/five/shape2.svg";
import Illustration from "common/static/images/five/buildings.png";

// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

// const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

const IndexPage = () => (
  <ParallaxProvider>
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <NextSeo
          title="Bidbyt: Pop up restaurants from master chefs and home cooks | Dine in & Delivery"
          description="Authentic food from top chefs, restaurants and home cooks. Our aim is to bring to you 672681452 recorded number of dishes in the World. Your food cravings catered! Be it reservations for the best pop up restaurant nearby, or a home food delivery - we have you covered."
        />
        <div className="fullWrapper">
          <MainWrapper style={{ backgroundColor: "#fafbff" }}>
            <LogoImageContainer>
              <Link href={"/"}>
                <img src={LogoOne.src} alt="logo" width={"240px"} />
              </Link>
            </LogoImageContainer>
            <Container className="mainContainer">
              <MainContentSection>
                <CloudImages>
                  <Fade left delay={400}>
                    <img src={Cloud1.src} alt="CloudImage 1" />
                  </Fade>
                  <Fade right delay={600}>
                    <img src={Cloud2.src} alt="CloudImage 2" />
                  </Fade>
                  <Fade top delay={800}>
                    <img src={Cloud3.src} alt="CloudImage 3" />
                  </Fade>
                </CloudImages>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                <p>
                  <FormattedMessage id="subMessage" />
                </p>
                <img
                  src={ThankYou.src}
                  width={"180px"}
                  style={{ borderRadius: "4px" }}
                  alt={"Thank You"}
                />
                <p>
                  <FormattedMessage id="regards1" />
                  <br />
                  <FormattedMessage id="regards2" />
                </p>
              </MainContentSection>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </Container>
            <BottomIllustration>
              <img src={Illustration.src} alt="Bottom Illustration" />
            </BottomIllustration>
            <div className="bottomAnimation">
              <Parallax offsetYMax={50} offsetYMin={-40}>
                <BottomShape>
                  <Fade left>
                    <img src={Shape1.src} alt="Bottom Shape Left" />
                  </Fade>
                  <Fade right>
                    <img src={Shape2.src} alt="Bottom Shape Right" />
                  </Fade>
                </BottomShape>
              </Parallax>
            </div>
          </MainWrapper>
        </div>
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
