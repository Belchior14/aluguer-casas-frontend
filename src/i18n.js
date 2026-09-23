import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        photos: "Fotos",
        contacts: "Contactos",
        book: "Reservar Agora"
      },
      hero: {
        titleLine1: "A sua casa longe de casa,",
        titleLine2: "com vista para o mar.",
        subtitle: "Acorde com o som das ondas e desfrute de momentos inesquecíveis."
      },
      about: {
        locationTag: "Ericeira, Portugal",
        title: "Sobre a Casa da Praia",
        intro: "Uma experiência confortável e tranquila no coração da Ericeira, perfeita para desfrutar do mar e do charme da vila.",
        terrace: {
          title: "Terraço na Cobertura & Vista Mar",
          text: "O maior destaque da Casa da Praia é o impressionante terraço panorâmico. É o local perfeito para apanhar sol, tomar um café pela manhã ou contemplar o pôr-do-sol sobre o oceano.",
          viewLabel: "Vista 360º:",
          viewVal: "Panorama único sobre a vila e o mar.",
          terrace2Label: "Segundo Terraço:",
          terrace2Val: "Equipado com churrasqueira para refeições ao ar livre.",
          accessLabel: "Acesso:",
          accessVal: "Situado num 1º andar (sem elevador)."
        },
        space: {
          title: "Espaço Aconchegante",
          text: "Um ambiente versátil e acolhedor, ideal para famílias, casais ou pequenos grupos de amigos relaxarem após um dia de praia ou surf.",
          room1Label: "Quarto Principal:",
          room1Val: "Cama de casal e excelente iluminação natural.",
          room2Label: "Segundo Quarto:",
          room2Val: "Duas camas individuais confortáveis.",
          livingLabel: "Sala de Estar:",
          livingVal: "Sofá e televisão para relaxar."
        },
        kitchen: {
          title: "Cozinha Equipada & Comodidades",
          text: "Tudo o que precisa para preparar pequenos-almoços ou refeições completas com total autonomia.",
          equipLabel: "Equipamentos:",
          equipVal: "Forno, fogão, micro-ondas e frigorífico/congelador.",
          machinesLabel: "Máquinas:",
          machinesVal: "Lava-loiça e máquina de lavar roupa.",
          breakfastLabel: "Pequeno-almoço:",
          breakfastVal: "Máquina Dolce Gusto, chaleira e torradeira.",
          extraLabel: "Extra:",
          extraVal: "Casa de banho completa e Wi-Fi gratuito de alta velocidade."
        },
        location: {
          title: "Localização Imbatível",
          text: "Situada no lado norte da vila, a casa permite aceder às praias e ao centro da Ericeira a pé em escassos minutos.",
          beach1: "Praia do Algodio",
          beach1Dist: "100m (1 min a pé)",
          beach2: "Praia dos Pescadores",
          beach2Dist: "250m (3 min a pé)",
          center: "Centro da Vila",
          centerDist: "A uma curta caminhada",
          parking: "Estacionamento",
          parkingDist: "Parques a 400m"
        }
      },
      reviews: {
        subtitle: "Avaliações verificadas de hóspedes",
        status: "Excecional",
        count: "7 comentários",
        stayDate: "Estadia em",
        cta: "Ver todas as avaliações e confirmar no Booking.com ↗",
        items: {
          rev1: {
            date: "Agosto de 2026",
            comment: "A Casa da Praia superou todas as nossas expectativas! A vista para o mar é incrível e o espaço estava impecavelmente limpo."
          },
          rev2: {
            date: "Julho de 2026",
            comment: "Localização perfeita, a poucos passos da praia. Casa muito bem equipada e anfitriões muito prestáveis."
          },
          rev3: {
            date: "Junho de 2026",
            comment: "Tivemos uma estadia fantástica em família. Espaço muito confortável e tranquilo. Voltaremos de certeza!"
          },
          rev4: {
            date: "Maio de 2026",
            comment: "Adorámos a varanda e o pôr do sol. Excelente para descansar durante uns dias."
          },
          rev5: {
            date: "Abril de 2026",
            comment: "Excelente localização e apartamento super limpo. O anfitrião deu-nos dicas locais incríveis para surf!"
          }
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        photos: "Photos",
        contacts: "Contacts",
        book: "Book Now"
      },
      hero: {
        titleLine1: "Your home away from home,",
        titleLine2: "overlooking the ocean.",
        subtitle: "Wake up to the sound of waves and enjoy unforgettable moments."
      },
      about: {
        locationTag: "Ericeira, Portugal",
        title: "About Casa da Praia",
        intro: "A comfortable and peaceful experience in the heart of Ericeira, perfect for enjoying the sea and the charm of the village.",
        terrace: {
          title: "Rooftop Terrace & Ocean View",
          text: "The main highlight of Casa da Praia is the stunning panoramic terrace. It is the perfect spot for sunbathing, morning coffee, or watching the sunset over the ocean.",
          viewLabel: "360º View:",
          viewVal: "Unique panorama over the village and the sea.",
          terrace2Label: "Second Terrace:",
          terrace2Val: "Equipped with a BBQ for outdoor meals.",
          accessLabel: "Access:",
          accessVal: "Located on the 1st floor (no elevator)."
        },
        space: {
          title: "Cozy Space",
          text: "A versatile and welcoming atmosphere, ideal for families, couples, or small groups of friends to relax after a day at the beach or surfing.",
          room1Label: "Main Bedroom:",
          room1Val: "Double bed and great natural light.",
          room2Label: "Second Bedroom:",
          room2Val: "Two comfortable single beds.",
          livingLabel: "Living Room:",
          livingVal: "Sofa and TV to unwind."
        },
        kitchen: {
          title: "Equipped Kitchen & Amenities",
          text: "Everything you need to prepare breakfasts or full meals with total independence.",
          equipLabel: "Appliances:",
          equipVal: "Oven, stove, microwave, and fridge/freezer.",
          machinesLabel: "Laundry:",
          machinesVal: "Dishwasher and washing machine.",
          breakfastLabel: "Breakfast:",
          breakfastVal: "Dolce Gusto machine, kettle, and toaster.",
          extraLabel: "Extra:",
          extraVal: "Full bathroom and free high-speed Wi-Fi."
        },
        location: {
          title: "Unbeatable Location",
          text: "Located on the north side of the village, the house allows you to reach the beaches and Ericeira center on foot in just a few minutes.",
          beach1: "Algodio Beach",
          beach1Dist: "100m (1 min walk)",
          beach2: "Pescadores Beach",
          beach2Dist: "250m (3 min walk)",
          center: "Village Center",
          centerDist: "Short walk away",
          parking: "Parking",
          parkingDist: "Parking lots 400m away"
        }
      },
      reviews: {
        subtitle: "Verified guest reviews",
        status: "Exceptional",
        count: "7 reviews",
        stayDate: "Stayed in",
        cta: "See all reviews and confirm on Booking.com ↗",
        items: {
          rev1: {
            date: "August 2026",
            comment: "Casa da Praia exceeded all our expectations! The ocean view is incredible and the place was spotlessly clean."
          },
          rev2: {
            date: "July 2026",
            comment: "Perfect location, just steps from the beach. Very well-equipped house and super helpful hosts."
          },
          rev3: {
            date: "June 2026",
            comment: "We had a fantastic family stay. Very comfortable and peaceful space. We will definitely be back!"
          },
          rev4: {
            date: "May 2026",
            comment: "We loved the balcony and the sunset. Excellent place to relax for a few days."
          },
          rev5: {
            date: "April 2026",
            comment: "Great location and super clean apartment. The host gave us amazing local tips for surfing!"
          }
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        photos: "Photos",
        contacts: "Contacts",
        book: "Réserver"
      },
      hero: {
        titleLine1: "Votre chez-vous loin de chez vous,",
        titleLine2: "avec vue sur la mer.",
        subtitle: "Réveillez-vous au son des vagues et profitez de moments inoubliables."
      },
      about: {
        locationTag: "Ericeira, Portugal",
        title: "À propos de Casa da Praia",
        intro: "Une expérience confortable et paisible au cœur d'Ericeira, parfaite pour profiter de la mer et du charme du village.",
        terrace: {
          title: "Terrasse sur le Toit & Vue Mer",
          text: "Le point fort de la Casa da Praia est son impressionnante terrasse panoramique. C'est l'endroit idéal pour prendre le soleil, café du matin ou admirer le coucher de soleil.",
          viewLabel: "Vue 360º:",
          viewVal: "Panorama unique sur le village et la mer.",
          terrace2Label: "Deuxième Terrasse:",
          terrace2Val: "Équipée d'un barbecue pour les repas en plein air.",
          accessLabel: "Accès:",
          accessVal: "Situé au 1er étage (sans ascenseur)."
        },
        space: {
          title: "Espace Chaleureux",
          text: "Un cadre accueillant et polyvalent, idéal pour les familles, couples ou petits groupes d'amis pour se détendre après la plage.",
          room1Label: "Chambre Principale:",
          room1Val: "Lit double et excellente lumière naturelle.",
          room2Label: "Deuxième Chambre:",
          room2Val: "Deux lits simples confortables.",
          livingLabel: "Salon:",
          livingVal: "Canapé et télévision pour se détendre."
        },
        kitchen: {
          title: "Cuisine Équipée & Équipements",
          text: "Tout ce dont vous avez besoin pour préparer petits-déjeuners ou repas complets en toute autonomie.",
          equipLabel: "Équipements:",
          equipVal: "Four, cuisinière, micro-ondes et réfrigérateur/congélateur.",
          machinesLabel: "Lavage:",
          machinesVal: "Lave-vaisselle et lave-linge.",
          breakfastLabel: "Petit-déjeuner:",
          breakfastVal: "Machine Dolce Gusto, bouilloire et grille-pain.",
          extraLabel: "En plus:",
          extraVal: "Salle de bain complète et Wi-Fi haut débit gratuit."
        },
        location: {
          title: "Emplacement Imbattable",
          text: "Située du côté nord du village, la maison permet d'accéder aux plages et au centre d'Ericeira à pied en quelques minutes.",
          beach1: "Plage d'Algodio",
          beach1Dist: "100m (1 min à pied)",
          beach2: "Plage des Pêcheurs",
          beach2Dist: "250m (3 min à pied)",
          center: "Centre du Village",
          centerDist: "À quelques pas",
          parking: "Parking",
          parkingDist: "Parkings à 400m"
        }
      },
      reviews: {
        subtitle: "Commentaires vérifiés des clients",
        status: "Fabuleux",
        count: "7 commentaires",
        stayDate: "Séjour en",
        cta: "Voir tous les avis et réserver sur Booking.com ↗",
        items: {
          rev1: {
            date: "Août 2026",
            comment: "Casa da Praia a dépassé toutes nos attentes ! La vue sur la mer est incroyable et l'endroit était d'une propreté impeccable."
          },
          rev2: {
            date: "Juillet 2026",
            comment: "Emplacement parfait, à quelques pas de la plage. Maison très bien équipée et hôtes très serviables."
          },
          rev3: {
            date: "Juin 2026",
            comment: "Nous avons passé un fantastique séjour en famille. Espace très confortable et calme. Nous reviendrons sans hésiter !"
          },
          rev4: {
            date: "Mai 2026",
            comment: "Nous avons adoré le balcon et le coucher de soleil. Excellent pour se reposer quelques jours."
          },
          rev5: {
            date: "Avril 2026",
            comment: "Super emplacement et appartement très propre. L'hôte nous a donné d'excellents conseils locaux pour le surf !"
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;