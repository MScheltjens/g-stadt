import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

import { Locale, PrismaClient } from './generated/client.js';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

async function main() {
  console.log('🌱 Starting database seed...');

  // --- CLEAR ---
  await prisma.serviceTranslation.deleteMany();
  await prisma.service.deleteMany();
  await prisma.serviceCategoryTranslation.deleteMany();
  await prisma.serviceCategory.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleared existing data.');

  // --- USERS ---
  await prisma.user.createMany({
    data: [
      {
        email: 'citizen@g-stadt.de',
        passwordHash: '$2a$10$YourHashedPasswordHere',
        role: 'CITIZEN',
        isVerified: true,
      },
      {
        email: 'staff@g-stadt.de',
        passwordHash: '$2a$10$YourHashedPasswordHere',
        role: 'STAFF',
        isVerified: true,
      },
      {
        email: 'admin@g-stadt.de',
        passwordHash: '$2a$10$YourHashedPasswordHere',
        role: 'ADMIN',
        isVerified: true,
      },
    ],
  });

  console.log('✅ Created users');

  // --- SERVICE CATEGORIES + SERVICES ---
  const categories = [
    {
      code: 'CITIZEN_SERVICES',
      order: 1,
      icon: 'IdCard',
      translations: [
        { locale: 'de', label: 'Bürgerservices', slug: 'buergerservices' },
        { locale: 'en', label: 'Citizen Services', slug: 'citizen-services' },
        {
          locale: 'fr',
          label: 'Services aux citoyens',
          slug: 'services-citoyens',
        },
      ],
      services: [
        {
          requiresAuth: true,
          translations: [
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: 'de',
              title: 'Meldebescheinigung anfordern',
              description: 'Fordern Sie eine Meldebescheinigung an.',
              slug: 'meldebescheinigung-anfordern',
            },
            {
              locale: 'en',
              title: 'Request registration certificate',
              description: 'Request your registration certificate.',
              slug: 'request-registration-certificate',
            },
            {
              locale: 'fr',
              title: 'Demander un certificat d’enregistrement',
              description: 'Demandez votre certificat d’enregistrement.',
              slug: 'demander-certificat-enregistrement',
            },
          ],
        },
      ],
    },
    {
      code: 'CITY_ADMINISTRATION',
      order: 2,
      icon: 'Building',
      translations: [
        { locale: 'de', label: 'Stadtverwaltung', slug: 'stadtverwaltung' },
        {
          locale: 'en',
          label: 'City Administration',
          slug: 'city-administration',
        },
        {
          locale: 'fr',
          label: 'Administration municipale',
          slug: 'administration-municipale',
        },
      ],
      services: [
        {
          translations: [
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
        {
          translations: [
            {
              locale: 'de',
              title: 'Bürgermeistersprechstunde',
              description:
                'Vereinbaren Sie einen Termin mit dem Bürgermeister.',
              slug: 'buergermeistersprechstunde',
            },
            {
              locale: 'en',
              title: 'Mayor’s office hours',
              description: 'Book an appointment with the mayor.',
              slug: 'mayors-office-hours',
            },
            {
              locale: 'fr',
              title: 'Heures de permanence du maire',
              description: 'Prenez rendez-vous avec le maire.',
              slug: 'permanence-maire',
            },
          ],
        },
      ],
    },
    {
      code: 'ENVIRONMENT',
      order: 3,
      icon: 'Leaf',
      translations: [
        { locale: 'de', label: 'Umwelt', slug: 'umwelt' },
        { locale: 'en', label: 'Environment', slug: 'environment' },
        { locale: 'fr', label: 'Environnement', slug: 'environnement' },
      ],
      services: [
        {
          translations: [
            {
              locale: 'de',
              title: 'Müllabfuhrplan',
              description: 'Sehen Sie den aktuellen Müllabfuhrplan ein.',
              slug: 'muellabfuhrplan',
            },
            {
              locale: 'en',
              title: 'Garbage collection schedule',
              description: 'View the current garbage collection schedule.',
              slug: 'garbage-collection-schedule',
            },
            {
              locale: 'fr',
              title: 'Calendrier de collecte des déchets',
              description:
                'Consultez le calendrier actuel de collecte des déchets.',
              slug: 'calendrier-collecte-dechets',
            },
          ],
        },
        {
          translations: [
            {
              locale: 'de',
              title: 'Baumspende',
              description: 'Spenden Sie einen Baum für die Stadt.',
              slug: 'baumspende',
            },
            {
              locale: 'en',
              title: 'Tree donation',
              description: 'Donate a tree to the city.',
              slug: 'tree-donation',
            },
            {
              locale: 'fr',
              title: 'Don d’arbre',
              description: 'Faites don d’un arbre à la ville.',
              slug: 'don-arbre',
            },
          ],
        },
      ],
    },
    {
      code: 'CULTURE_SPORT',
      order: 4,
      icon: 'Trophy',
      translations: [
        { locale: 'de', label: 'Kultur & Sport', slug: 'kultur-sport' },
        { locale: 'en', label: 'Culture & Sport', slug: 'culture-sport' },
        { locale: 'fr', label: 'Culture et sport', slug: 'culture-sport-fr' },
      ],
      services: [
        {
          translations: [
            {
              locale: 'de',
              title: 'Sportstätten buchen',
              description: 'Buchen Sie städtische Sportstätten.',
              slug: 'sportstaetten-buchen',
            },
            {
              locale: 'en',
              title: 'Book sports facilities',
              description: 'Book city sports facilities.',
              slug: 'book-sports-facilities',
            },
            {
              locale: 'fr',
              title: 'Réserver des installations sportives',
              description: 'Réservez des installations sportives municipales.',
              slug: 'reserver-installations-sportives',
            },
          ],
        },
        {
          translations: [
            {
              locale: 'de',
              title: 'Kulturveranstaltungen',
              description: 'Finden Sie aktuelle Kulturveranstaltungen.',
              slug: 'kulturveranstaltungen',
            },
            {
              locale: 'en',
              title: 'Cultural events',
              description: 'Find current cultural events.',
              slug: 'cultural-events',
            },
            {
              locale: 'fr',
              title: 'Événements culturels',
              description: 'Trouvez les événements culturels en cours.',
              slug: 'evenements-culturels',
            },
          ],
        },
      ],
    },
  ];

  for (const cat of categories) {
    const category = await prisma.serviceCategory.create({
      data: {
        code: cat.code,
        order: cat.order,
        isActive: true,
        translations: {
          create: cat.translations.map((t) => ({
            locale: t.locale as Locale,
            label: t.label,
            slug: t.slug,
          })),
        },
      },
    });

    let serviceOrder = 1;
    for (const service of cat.services) {
      await prisma.service.create({
        data: {
          categoryId: category.id,
          icon: cat.icon,
          order: serviceOrder++,
          isActive: true,
          requiresAuth:
            'requiresAuth' in service ? !!service.requiresAuth : false,
          translations: {
            create: service.translations.map((t) => ({
              locale: t.locale as Locale,
              title: t.title,
              description: t.description,
              slug: t.slug,
            })),
          },
        },
      });
    }
  }

  console.log('✅ Created service categories & services');
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
