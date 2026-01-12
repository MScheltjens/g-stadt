import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data (order matters for relations)
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.fAQ.deleteMany();
  await prisma.document.deleteMany();
  await prisma.location.deleteMany();
  await prisma.gallery.deleteMany();
  await prisma.page.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.poll.deleteMany();
  await prisma.service.deleteMany();
  await prisma.news.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleared existing data.');
  // Seed Users
  // --- USERS ---
  const user1 = await prisma.user.create({
    data: {
      email: 'citizen@g-stadt.de',
      passwordHash: '$2a$10$YourHashedPasswordHere',
      role: 'CITIZEN',
      isVerified: true,
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'staff@g-stadt.de',
      passwordHash: '$2a$10$YourHashedPasswordHere',
      role: 'STAFF',
      isVerified: true,
    },
  });
  const user3 = await prisma.user.create({
    data: {
      email: 'admin@g-stadt.de',
      passwordHash: '$2a$10$YourHashedPasswordHere',
      role: 'ADMIN',
      isVerified: true,
    },
  });
  const users = [user1, user2, user3];
  console.log(`✅ Created ${users.length} users`);

  // --- CONTACTS ---
  await prisma.contact.createMany({
    data: [
      {
        name: 'Max Mustermann',
        email: 'max@example.com',
        message: 'Ich habe eine Frage zum Bürgerbüro.',
      },
      {
        name: 'Erika Musterfrau',
        email: 'erika@example.com',
        message: 'Wie kann ich einen Termin vereinbaren?',
      },
      {
        name: 'Ali Yılmaz',
        email: 'ali@example.com',
        message: 'Gibt es barrierefreie Zugänge?',
      },
      {
        name: 'Sophie Dubois',
        email: 'sophie@example.com',
        message: 'Wann ist das nächste Stadtfest?',
      },
    ],
  });
  console.log('✅ Created contacts');

  // --- SERVICES ---

  const services = await Promise.all([
    // citizen_services
    prisma.service.create({
      data: {
        category: 'citizen_services',
        icon: 'IdCard',
        order: 1,
        requiresAuth: true,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Personalausweis beantragen',
              description: 'Beantragen Sie Ihren Ausweis.',
              slug: 'personalausweis-beantragen',
            },
            {
              locale: 'en',
              title: 'Apply for ID card',
              description: 'Apply for your ID card.',
              slug: 'apply-id-card',
            },
            {
              locale: 'fr',
              title: 'Demander une carte d’identité',
              description: 'Demandez votre carte d’identité.',
              slug: 'demander-carte-identite',
            },
          ],
        },
      },
    }),

    // city_administration
    prisma.service.create({
      data: {
        category: 'city_administration',
        icon: 'Building',
        order: 1,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Rathaus Kontakt',
              description: 'Kontakt und Öffnungszeiten des Rathauses.',
              slug: 'rathaus-kontakt',
            },
            {
              locale: 'en',
              title: 'City Hall Contact',
              description: 'Contact and opening hours of city hall.',
              slug: 'city-hall-contact',
            },
            {
              locale: 'fr',
              title: 'Contact de la mairie',
              description: 'Contact et horaires de la mairie.',
              slug: 'contact-mairie',
            },
          ],
        },
      },
    }),

    // transport_mobility
    prisma.service.create({
      data: {
        category: 'transport_mobility',
        icon: 'Bus',
        order: 1,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'ÖPNV Fahrpläne',
              description: 'Fahrpläne und Linienübersicht.',
              slug: 'oepnv-fahrplaene',
            },
            {
              locale: 'en',
              title: 'Public Transport Timetables',
              description: 'Timetables and routes.',
              slug: 'public-transport-timetables',
            },
            {
              locale: 'fr',
              title: 'Horaires des transports',
              description: 'Horaires et lignes.',
              slug: 'horaires-transports',
            },
          ],
        },
      },
    }),

    // waste_environment
    prisma.service.create({
      data: {
        category: 'waste_environment',
        icon: 'Trash',
        order: 1,
        requiresAuth: true,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Sperrmüll anmelden',
              description: 'Sperrmüll online anmelden.',
              slug: 'sperrmuell-anmelden',
            },
            {
              locale: 'en',
              title: 'Bulk Waste Pickup',
              description: 'Register bulk waste pickup.',
              slug: 'bulk-waste-pickup',
            },
            {
              locale: 'fr',
              title: 'Déchets encombrants',
              description: 'Déclarer les déchets encombrants.',
              slug: 'dechets-encombrants',
            },
          ],
        },
      },
    }),

    // family_social
    prisma.service.create({
      data: {
        category: 'family_social',
        icon: 'Users',
        order: 1,
        requiresAuth: true,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Kita-Anmeldung',
              description: 'Ihr Kind für eine Kita anmelden.',
              slug: 'kita-anmeldung',
            },
            {
              locale: 'en',
              title: 'Daycare Registration',
              description: 'Register your child for daycare.',
              slug: 'daycare-registration',
            },
            {
              locale: 'fr',
              title: 'Inscription à la crèche',
              description: 'Inscrire votre enfant à la crèche.',
              slug: 'inscription-creche',
            },
          ],
        },
      },
    }),

    // education_culture
    prisma.service.create({
      data: {
        category: 'education_culture',
        icon: 'BookOpen',
        order: 1,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Stadtbibliothek',
              description: 'Informationen zur Stadtbibliothek.',
              slug: 'stadtbibliothek',
            },
            {
              locale: 'en',
              title: 'City Library',
              description: 'Information about the city library.',
              slug: 'city-library',
            },
            {
              locale: 'fr',
              title: 'Bibliothèque municipale',
              description: 'Informations sur la bibliothèque.',
              slug: 'bibliotheque-municipale',
            },
          ],
        },
      },
    }),

    // economy_business
    prisma.service.create({
      data: {
        category: 'economy_business',
        icon: 'Briefcase',
        order: 1,
        requiresAuth: true,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Gewerbe anmelden',
              description: 'Ein Gewerbe anmelden.',
              slug: 'gewerbe-anmelden',
            },
            {
              locale: 'en',
              title: 'Register a Business',
              description: 'Register a new business.',
              slug: 'register-business',
            },
            {
              locale: 'fr',
              title: 'Créer une entreprise',
              description: 'Déclarer une entreprise.',
              slug: 'creer-entreprise',
            },
          ],
        },
      },
    }),

    // public_order_safety
    prisma.service.create({
      data: {
        category: 'public_order_safety',
        icon: 'Shield',
        order: 1,
        requiresAuth: true,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Fundbüro',
              description: 'Verlorene Gegenstände melden.',
              slug: 'fundbuero',
            },
            {
              locale: 'en',
              title: 'Lost and Found',
              description: 'Report lost items.',
              slug: 'lost-and-found',
            },
            {
              locale: 'fr',
              title: 'Objets trouvés',
              description: 'Déclarer un objet perdu.',
              slug: 'objets-trouves',
            },
          ],
        },
      },
    }),

    // health
    prisma.service.create({
      data: {
        category: 'health',
        icon: 'HeartPulse',
        order: 1,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Gesundheitsamt',
              description: 'Informationen des Gesundheitsamts.',
              slug: 'gesundheitsamt',
            },
            {
              locale: 'en',
              title: 'Public Health Office',
              description: 'Public health information.',
              slug: 'public-health-office',
            },
            {
              locale: 'fr',
              title: 'Service de santé',
              description: 'Informations sanitaires.',
              slug: 'service-sante',
            },
          ],
        },
      },
    }),

    // housing_building
    prisma.service.create({
      data: {
        category: 'housing_building',
        icon: 'Home',
        order: 1,
        requiresAuth: true,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Baugenehmigung',
              description: 'Baugenehmigung beantragen.',
              slug: 'baugenehmigung',
            },
            {
              locale: 'en',
              title: 'Building Permit',
              description: 'Apply for a building permit.',
              slug: 'building-permit',
            },
            {
              locale: 'fr',
              title: 'Permis de construire',
              description: 'Demander un permis.',
              slug: 'permis-construire',
            },
          ],
        },
      },
    }),

    // leisure_tourism
    prisma.service.create({
      data: {
        category: 'leisure_tourism',
        icon: 'Map',
        order: 1,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Stadtführungen',
              description: 'Geführte Stadttouren.',
              slug: 'stadtfuehrungen',
            },
            {
              locale: 'en',
              title: 'City Tours',
              description: 'Guided city tours.',
              slug: 'city-tours',
            },
            {
              locale: 'fr',
              title: 'Visites guidées',
              description: 'Visites guidées de la ville.',
              slug: 'visites-guidees',
            },
          ],
        },
      },
    }),

    // digital_city_hall
    prisma.service.create({
      data: {
        category: 'digital_city_hall',
        icon: 'Globe',
        order: 1,
        requiresAuth: true,
        translations: {
          create: [
            {
              locale: 'de',
              title: 'Online-Terminbuchung',
              description: 'Termin online buchen.',
              slug: 'online-terminbuchung',
            },
            {
              locale: 'en',
              title: 'Online Appointment Booking',
              description: 'Book appointments online.',
              slug: 'online-appointment-booking',
            },
            {
              locale: 'fr',
              title: 'Prise de rendez-vous en ligne',
              description: 'Réserver un rendez-vous.',
              slug: 'rendez-vous-en-ligne',
            },
          ],
        },
      },
    }),
  ]);

  console.log(`✅ Created ${services.length} services`);

  // --- NEWS ---
  await prisma.news.create({
    data: {
      category: 'culture',
      published: true,
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Stadtfest am Wochenende',
            content: 'Das große Stadtfest findet statt.',
            excerpt: 'Stadtfest und Programm',
            slug: 'stadtfest',
          },
          {
            locale: 'en',
            title: 'City Festival this Weekend',
            content: 'The big city festival is happening.',
            excerpt: 'Festival and program',
            slug: 'city-festival',
          },
          {
            locale: 'fr',
            title: 'Fête de la ville ce week-end',
            content: 'La grande fête de la ville a lieu.',
            excerpt: 'Fête et programme',
            slug: 'fete-ville',
          },
        ],
      },
    },
  });
  await prisma.news.create({
    data: {
      category: 'environment',
      published: true,
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Neue Radwege',
            content: 'Neue Radwege wurden eröffnet.',
            excerpt: 'Mehr Mobilität',
            slug: 'radwege',
          },
          {
            locale: 'en',
            title: 'New Bike Paths',
            content: 'New bike paths have opened.',
            excerpt: 'More mobility',
            slug: 'bike-paths',
          },
          {
            locale: 'fr',
            title: 'Nouvelles pistes cyclables',
            content: 'De nouvelles pistes cyclables ont été ouvertes.',
            excerpt: 'Plus de mobilité',
            slug: 'pistes-cyclables',
          },
        ],
      },
    },
  });
  console.log('✅ Created news');

  // --- EVENTS ---
  await prisma.event.create({
    data: {
      category: 'music',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Open-Air Konzert',
            description: 'Ein Konzert im Stadtpark mit lokalen Bands.',
            slug: 'open-air-konzert',
            location: 'Stadtpark',
          },
          {
            locale: 'en',
            title: 'Open-Air Concert',
            description: 'A concert in the city park with local bands.',
            slug: 'open-air-concert',
            location: 'City Park',
          },
          {
            locale: 'fr',
            title: 'Concert en plein air',
            description:
              'Un concert au parc municipal avec des groupes locaux.',
            slug: 'concert-plein-air',
            location: 'Parc municipal',
          },
        ],
      },
    },
  });
  await prisma.event.create({
    data: {
      category: 'sports',
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Stadtlauf',
            description: 'Der jährliche Stadtlauf für alle Altersgruppen.',
            slug: 'stadtlauf',
            location: 'Sporthalle',
          },
          {
            locale: 'en',
            title: 'City Run',
            description: 'The annual city run for all age groups.',
            slug: 'city-run',
            location: 'Sports Hall',
          },
          {
            locale: 'fr',
            title: 'Course de la ville',
            description: 'La course annuelle de la ville pour tous les âges.',
            slug: 'course-ville',
            location: 'Salle de sport',
          },
        ],
      },
    },
  });
  console.log('✅ Created events');

  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
