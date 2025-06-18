"use client"

import {
  Phone,
  Clock,
  MapPin,
  Key,
  Shield,
  Wrench,
  Car,
  Home,
  Lock,
  Users,
  Star,
  Instagram,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Logo Component
function ChaveiroLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chave principal */}
      <rect x="15" y="35" width="45" height="8" rx="4" fill="#FFD700" />
      <circle cx="25" cy="39" r="12" fill="none" stroke="#FFD700" strokeWidth="3" />
      <circle cx="25" cy="39" r="6" fill="none" stroke="#FFD700" strokeWidth="2" />

      {/* Dentes da chave */}
      <rect x="55" y="35" width="4" height="8" fill="#FFD700" />
      <rect x="50" y="37" width="4" height="6" fill="#FFD700" />
      <rect x="45" y="35" width="4" height="8" fill="#FFD700" />

      {/* Escudo de segurança */}
      <path
        d="M70 25 L85 30 L85 50 C85 60 77.5 65 70 70 C62.5 65 55 60 55 50 L55 30 L70 25 Z"
        fill="#1E40AF"
        stroke="#FFD700"
        strokeWidth="1"
      />

      {/* Cadeado no escudo */}
      <rect x="67" y="40" width="6" height="8" rx="1" fill="#FFD700" />
      <path d="M65 40 C65 37 67 35 70 35 C73 35 75 37 75 40" stroke="#FFD700" strokeWidth="1.5" fill="none" />

      {/* Texto 24h */}
      <text x="70" y="80" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">
        24h
      </text>
    </svg>
  )
}

export default function ChaveiroSite() {
  const services = [
    {
      icon: Key,
      title: "Assistência para perda de chaves",
      description: "Atendimento rápido para situações de emergência",
    },
    { icon: Home, title: "Abertura de portas", description: "Residenciais e comerciais com segurança" },
    { icon: Lock, title: "Abertura de cadeados", description: "Todos os tipos e modelos" },
    { icon: Car, title: "Cópia de chaves", description: "Veículos, motocicletas, multipontos e comuns" },
    { icon: Shield, title: "Instalação de fechaduras", description: "Troca e instalação profissional" },
    { icon: Clock, title: "Emergencial 24h", description: "Atendimento a qualquer hora do dia" },
    { icon: Wrench, title: "Sistemas de segurança", description: "Instalação completa" },
    { icon: Users, title: "Reparo de cilindros", description: "Manutenção de trancas e cilindros" },
  ]

  const regions = [
    "Castelo Branco",
    "Miramar",
    "Bancários",
    "Mangabeira",
    "Torre",
    "Valentina",
    "Centro",
    "Intermares",
    "Tambaú",
    "Tambiá",
    "Manaíra",
    "Bessa",
    "Cabo Branco",
    "Tambauzinho",
    "Aeroclube",
    "Ipês",
    "Altiplano",
    "Universitária",
  ]

  const galleryImages = [
    { src: "/images/google-perfil.jpeg", alt: "Perfil Google Meu Negócio - 5 estrelas com 63 avaliações" },
    { src: "/images/cadeado-abus.jpeg", alt: "Cadeado ABUS de alta segurança instalado profissionalmente" },
    { src: "/images/cilindro-bancada.jpeg", alt: "Cilindro de fechadura sendo trabalhado na bancada profissional" },
    {
      src: "/images/ferramentas-profissionais.jpeg",
      alt: "Maleta e ferramentas profissionais para atendimento emergencial",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChaveiroLogo className="h-8 w-8" />
              <h1 className="text-xl font-bold">Chaveiro Principal do Castelo Branco</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5583988440845" className="hover:text-yellow-300">
                  (83) 98844-0845
                </a>
              </div>
              <Badge variant="secondary" className="bg-green-600 text-white">
                <Clock className="h-3 w-3 mr-1" />
                24 HORAS
              </Badge>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Chaveiro Principal do Castelo Branco 24h</h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              ✅ Mais de 25 anos de experiência garantindo segurança e agilidade em João Pessoa
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              onClick={() => window.open("https://wa.me/5583999401932", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar agora pelo WhatsApp
            </Button>
            <div className="mt-4">
              <Button
                size="lg"
                className="bg-blue-600 text-white px-8 py-4 text-lg border-2 border-white"
                onClick={() => window.open("tel:+5583988440845", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora: (83) 98844-0845
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🔧 Serviços Oferecidos</h2>
            <p className="text-lg text-gray-600">Soluções completas em chaveiro e segurança</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">🌟 Sobre Nós</h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chaveiro 24 horas em João Pessoa com mais de 25 anos de experiência. Atendemos emergências, abertura de
                carros e portas residenciais, troca de fechaduras e fazemos cópias de chaves com agilidade, honestidade
                e preço justo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Estamos localizados no bairro Castelo Branco, atendendo toda a cidade de João Pessoa e região
                metropolitana.
              </p>
              <div className="flex justify-center items-center mt-6 space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="ml-2 text-gray-600">25+ anos de confiança</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regioes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🌍 Regiões Atendidas</h2>
            <p className="text-lg text-gray-600">Cobertura completa em João Pessoa e região metropolitana</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium">{region}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Badge variant="outline" className="text-lg px-4 py-2">
                + Região metropolitana de João Pessoa e Cabedelo
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🖼️ Galeria de Fotos</h2>
            <p className="text-lg text-gray-600">Conheça nosso trabalho e estrutura</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📍 Localização e Contato</h2>
            <p className="text-lg text-blue-100">Entre em contato conosco a qualquer hora</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-blue-100">
                    Av. Dr. Apolônio da Nóbrega, 57
                    <br />
                    Castelo Branco, João Pessoa - PB
                    <br />
                    CEP: 58050-260
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefone para Ligação</h3>
                  <a href="tel:+5583988440845" className="text-blue-100 hover:text-white">
                    (83) 98844-0845
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/5583999401932"
                    target="_blank"
                    className="text-blue-100 hover:text-white"
                    rel="noreferrer"
                  >
                    (83) 99940-1932
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Instagram className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/chaveiroprincipal24h"
                    target="_blank"
                    className="text-blue-100 hover:text-white"
                    rel="noreferrer"
                  >
                    @chaveiroprincipal24h
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horário</h3>
                  <p className="text-blue-100">Aberto 24 horas, todos os dias</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                onClick={() => window.open("https://wa.me/5583999401932", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
                onClick={() => window.open("https://maps.app.goo.gl/seMgsiKW1SfUM8N16", "_blank")}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChaveiroLogo className="h-10 w-10" />
            <h3 className="text-2xl font-bold">Chaveiro Principal do Castelo Branco 24h</h3>
          </div>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            ✨ Atendimento profissional, rápido e seguro em João Pessoa desde 1999.
            <br />
            Fale conosco pelo WhatsApp ou ligue a qualquer hora!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-400" />
              <a href="tel:+5583988440845" className="hover:text-blue-300">
                (83) 98844-0845
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-green-400" />
              <a href="https://wa.me/5583999401932" target="_blank" className="hover:text-green-300" rel="noreferrer">
                (83) 99940-1932
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram className="h-5 w-5 text-pink-400" />
              <a
                href="https://instagram.com/chaveiroprincipal24h"
                target="_blank"
                className="hover:text-pink-300"
                rel="noreferrer"
              >
                @chaveiroprincipal24h
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">© 2024 Chaveiro Principal do Castelo Branco. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
