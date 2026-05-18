"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Ana Sayfa", id: "hero" },
        { name: "Hizmetler", id: "services" },
        { name: "Portfolyo", id: "portfolio" },
        { name: "İletişim", id: "contact" },
      ]}
      brandName="GÖKNOVA"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="GÖKNOVA"
      description="Gökyüzünden Gelen Dijital Güç. Drone çekimi, sinematik içerikler, yazılım ve dijital çözümler."
      buttons={[
        { text: "Hizmetlerimiz", href: "#services" },
        { text: "İletişime Geç", href: "#contact" },
      ]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-cool-illustration-with-geometric-shapes-bronze-laser-lights_181624-57639.jpg", imageAlt: "Cinematic drone view" },
        { imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-car-driving-asphalt-road-surrounded-by-golden-trees-autumn_181624-51908.jpg", imageAlt: "Cinematic drone view" },
        { imageSrc: "http://img.b2bpic.net/free-photo/new-york-city-midtown-skyline-with-skyscrapers-urban-cityscape-night_649448-2529.jpg", imageAlt: "Cinematic drone view" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "GÖKNOVA, bir sonraki nesil dijital medya ve yazılım ajansıdır." },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Drone Çekimi", description: "Sinematik hava çekimleri.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/aerial-overhead-shot-urban-modern-business-architecture_181624-1563.jpg" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/3d-drone-flying-ocean-with-sunset-sky_1048-8182.jpg?_wi=1" } },
        { title: "Reel Üretimi", description: "Trend odaklı içerikler.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/bird-s-eye-view-shanghai_1127-4006.jpg" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/hight-rise-condominium-office-buildings_1127-3044.jpg" } },
        { title: "Yazılım Çözümleri", description: "Modern web ve uygulamalar.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-with-crossed-arms_23-2147955274.jpg?_wi=1" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/digital-training-innovation-concept-with-futuristic-interface-screens_1134-352.jpg" } },
      ]}
      showStepNumbers={false}
      title="Dijital Çözümlerimiz"
      description="Markanızı zirveye taşıyan kapsamlı medya ve yazılım hizmetleri."
    />
  </div>

  <div id="packages" data-section="packages">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", tag: "STARTER", price: "Geliş", period: "Başlangıç", description: "4 Reels, 8 Story, Drone Çekimi.", button: { text: "Seç", href: "#contact" }, featuresTitle: "İçerik Detayları", features: ["4 Reels", "8 Story", "Profesyonel Edit"] },
        { id: "p2", tag: "PLUS", price: "Geliş", period: "Popüler", description: "8 Reels, 15 Story, Web Sitesi.", button: { text: "Seç", href: "#contact" }, featuresTitle: "İçerik Detayları", features: ["8 Reels", "15 Story", "Web Sitesi"] },
      ]}
      title="Paketlerimiz"
      description="İhtiyacınıza uygun profesyonel çözümler."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardFour
      animationType="blur-reveal"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "a1", name: "Luxury Villa", price: "Drone", variant: "Cinematic", imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-port-piers_181624-54848.jpg" },
        { id: "a2", name: "Cafe Promotion", price: "Reel", variant: "Video", imageSrc: "http://img.b2bpic.net/free-photo/bird-s-eye-view-city_414077-30.jpg" },
        { id: "a3", name: "Tech App Web", price: "Yazılım", variant: "UI", imageSrc: "http://img.b2bpic.net/free-photo/professional-male-developer-manages-neural-network-desk_482257-118484.jpg" },
      ]}
      title="Portfolyo"
      description="Sinematik çalışmalarımızdan seçkiler."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "100+", description: "Başarılı Proje" },
        { id: "m2", value: "24/7", description: "Destek" },
      ]}
      title="Neden Biz?"
      description="Profesyonel yaklaşım, yüksek kalite, hızlı teslimat."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="auto"
      gridVariant="three-columns-all-equal-width"
      testimonials={[
        { id: "1", name: "Ali Veli", role: "CEO", company: "Tech Corp", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-with-crossed-arms_23-2147955274.jpg?_wi=2" },
        { id: "2", name: "Ayşe Yılmaz", role: "Müdür", company: "Real Estate", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg" },
        { id: "3", name: "Can Demir", role: "Kurucu", company: "Startup", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg" },
      ]}
      title="Müşterilerimiz"
      description="GÖKNOVA ile çalışanlar ne diyor?"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="İletişim"
      title="Harekete Geçin"
      description="GÖKNOVA ile projelerinizi hayata geçirelim."
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={false}
      buttons={[
          { text: "İletişime Geçin", href: "#contact" }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="GÖKNOVA"
      columns={[
        { title: "Sayfalar", items: [
            { label: "Ana Sayfa", href: "/" },
            { label: "Hizmetler", href: "#services" },
        ]},
        { title: "İletişim", items: [
            { label: "Portfolyo", href: "#portfolio" },
            { label: "İletişim", href: "#contact" },
        ]}
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}