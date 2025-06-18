import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chaveiro Principal do Castelo Branco 24h - João Pessoa PB",
  description:
    "Chaveiro 24 horas em João Pessoa com mais de 25 anos de experiência. Atendemos emergências, abertura de carros e portas, troca de fechaduras e cópias de chaves. Castelo Branco e região metropolitana.",
  keywords:
    "chaveiro joão pessoa, chaveiro 24 horas joão pessoa, chaveiro castelo branco, chaveiro emergencial joão pessoa, abertura de portas joão pessoa, cópia de chaves joão pessoa, chaveiro 24h pb, chaveiro paraíba, fechaduras joão pessoa, chaveiro miramar, chaveiro bancários, chaveiro mangabeira, chaveiro torre, chaveiro valentina, chaveiro centro joão pessoa, chaveiro intermares, chaveiro tambaú, chaveiro tambiá, chaveiro manaíra, chaveiro bessa, chaveiro cabo branco, chaveiro tambauzinho, chaveiro aeroclube, chaveiro ipês, chaveiro altiplano, chaveiro universitária, chaveiro cabedelo, porta trancada joão pessoa, carro trancado joão pessoa, chave quebrada joão pessoa, chave perdida joão pessoa, abertura de carro joão pessoa, abertura residencial joão pessoa, abertura comercial joão pessoa, cadeado trancado joão pessoa, fechadura quebrada joão pessoa, troca de fechadura joão pessoa, instalação fechadura joão pessoa, chaveiro madrugada joão pessoa, chaveiro domingo joão pessoa, chaveiro feriado joão pessoa, chaveiro urgente joão pessoa, chaveiro rápido joão pessoa, chaveiro confiável joão pessoa, chaveiro experiente joão pessoa, chaveiro profissional joão pessoa, cópia chave carro joão pessoa, cópia chave moto joão pessoa, cópia chave residencial joão pessoa, cópia chave comercial joão pessoa, chave multiponto joão pessoa, chave tetra joão pessoa, chave yale joão pessoa, chave papaiz joão pessoa, cilindro europeu joão pessoa, fechadura multiponto joão pessoa, fechadura tetra joão pessoa, fechadura externa joão pessoa, fechadura interna joão pessoa, cadeado abus joão pessoa, sistema de segurança joão pessoa, controle de acesso joão pessoa, chaveiro barato joão pessoa, chaveiro preço justo joão pessoa, chaveiro honesto joão pessoa, chaveiro região metropolitana joão pessoa, chaveiro grande joão pessoa, chaveiro zona sul joão pessoa, chaveiro zona norte joão pessoa, chaveiro zona leste joão pessoa, chaveiro zona oeste joão pessoa, emergência chaveiro joão pessoa, sos chaveiro joão pessoa, ajuda chaveiro joão pessoa, chaveiro perto de mim joão pessoa, melhor chaveiro joão pessoa, chaveiro 5 estrelas joão pessoa, chaveiro avaliado joão pessoa, chaveiro recomendado joão pessoa, chaveiro tradicional joão pessoa, chaveiro antigo joão pessoa, chaveiro desde 1999 joão pessoa, chaveiro 25 anos joão pessoa, chaveiro família joão pessoa, chaveiro local joão pessoa, chaveiro da região joão pessoa, chaveiro do bairro joão pessoa, chaveiro conhecido joão pessoa, chaveiro referência joão pessoa, serviço chaveiro joão pessoa, atendimento chaveiro joão pessoa, técnico chaveiro joão pessoa, especialista fechadura joão pessoa, mestre chaveiro joão pessoa, chaveiro qualificado joão pessoa, chaveiro capacitado joão pessoa, chaveiro treinado joão pessoa, chaveiro certificado joão pessoa, chaveiro licenciado joão pessoa, chaveiro registrado joão pessoa, chaveiro documentado joão pessoa, chaveiro segurado joão pessoa, chaveiro garantido joão pessoa, chaveiro responsável joão pessoa, chaveiro pontual joão pessoa, chaveiro ágil joão pessoa, chaveiro eficiente joão pessoa, chaveiro competente joão pessoa, chaveiro dedicado joão pessoa, chaveiro atencioso joão pessoa, chaveiro educado joão pessoa, chaveiro prestativo joão pessoa, chaveiro disponível joão pessoa, chaveiro ativo joão pessoa, chaveiro operante joão pessoa, chaveiro funcionando joão pessoa, chaveiro aberto joão pessoa, chaveiro plantão joão pessoa, chaveiro sobreaviso joão pessoa, chaveiro standby joão pessoa, chaveiro alerta joão pessoa, chaveiro pronto joão pessoa, chaveiro preparado joão pessoa, chaveiro equipado joão pessoa, chaveiro aparelhado joão pessoa, chaveiro instrumentado joão pessoa, chaveiro ferramentado joão pessoa, chaveiro completo joão pessoa, chaveiro total joão pessoa, chaveiro integral joão pessoa, chaveiro amplo joão pessoa, chaveiro extenso joão pessoa, chaveiro abrangente joão pessoa, chaveiro geral joão pessoa, chaveiro universal joão pessoa, chaveiro múltiplo joão pessoa, chaveiro variado joão pessoa, chaveiro diverso joão pessoa, chaveiro misto joão pessoa, chaveiro combinado joão pessoa, chaveiro unificado joão pessoa, chaveiro centralizado joão pessoa, chaveiro concentrado joão pessoa, chaveiro focado joão pessoa, chaveiro especializado joão pessoa, chaveiro direcionado joão pessoa, chaveiro voltado joão pessoa, chaveiro destinado joão pessoa",
  authors: [{ name: "Chaveiro Principal do Castelo Branco" }],
  creator: "Chaveiro Principal do Castelo Branco",
  publisher: "Chaveiro Principal do Castelo Branco",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://chaveiroprincipal.com.br",
    title: "Chaveiro Principal do Castelo Branco 24h - João Pessoa PB",
    description:
      "Chaveiro 24 horas em João Pessoa com mais de 25 anos de experiência. Atendimento emergencial para abertura de portas residenciais e comerciais, carros trancados, cópia de chaves (carro, moto, residencial, comercial, multiponto, tetra), instalação e troca de fechaduras, abertura de cadeados, reparo de cilindros e sistemas de segurança. Atendemos Castelo Branco, Miramar, Bancários, Mangabeira, Torre, Valentina, Centro, Intermares, Tambaú, Manaíra, Bessa, Cabo Branco e toda região metropolitana de João Pessoa-PB. Serviço rápido, confiável e preço justo. Chaveiro profissional, licenciado e com 5 estrelas no Google. Emergências 24h incluindo madrugadas, domingos e feriados.",
    siteName: "Chaveiro Principal do Castelo Branco",
    images: [
      {
        url: "/images/google-perfil.jpeg",
        width: 1200,
        height: 630,
        alt: "Chaveiro Principal do Castelo Branco - 5 estrelas no Google",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaveiro Principal do Castelo Branco 24h - João Pessoa PB",
    description:
      "Chaveiro 24 horas em João Pessoa com mais de 25 anos de experiência. Atendimento emergencial em toda região metropolitana.",
    images: ["/images/google-perfil.jpeg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1E40AF",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "geo.region": "BR-PB",
    "geo.placename": "João Pessoa",
    "geo.position": "-7.1195;-34.8450",
    ICBM: "-7.1195, -34.8450",
    "business:contact_data:street_address": "Av. Dr. Apolônio da Nóbrega, 57",
    "business:contact_data:locality": "Castelo Branco",
    "business:contact_data:region": "João Pessoa",
    "business:contact_data:postal_code": "58050-260",
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": "+55 83 98844-0845",
    "business:contact_data:website": "https://chaveiroprincipal.com.br",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://chaveiroprincipal.com.br" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Chaveiro Principal do Castelo Branco",
              image: "/images/google-perfil.jpeg",
              description:
                "Chaveiro 24 horas em João Pessoa com mais de 25 anos de experiência. Atendimento emergencial, abertura de portas, cópia de chaves e instalação de fechaduras.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Dr. Apolônio da Nóbrega, 57",
                addressLocality: "Castelo Branco",
                addressRegion: "João Pessoa",
                postalCode: "58050-260",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.1195,
                longitude: -34.845,
              },
              telephone: "+55 83 98844-0845",
              url: "https://chaveiroprincipal.com.br",
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "63",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -7.1195,
                  longitude: -34.845,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Chaveiro",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Abertura de Portas 24h",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cópia de Chaves",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instalação de Fechaduras",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Abertura de Cadeados",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
