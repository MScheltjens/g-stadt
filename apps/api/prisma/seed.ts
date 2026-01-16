import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { Locale, PrismaClient } from './generated/client.js';
import pg from 'pg';

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
      service: {
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
      service: {
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
            locale: t.locale as Locale, // Cast to 'any' or replace with 'as Locale' if 'Locale' is imported
            label: t.label,
            slug: t.slug,
          })),
        },
      },
    });

    await prisma.service.create({
      data: {
        categoryId: category.id,
        icon: cat.icon,
        order: 1,
        isActive: true,
        requiresAuth: !!cat.service.requiresAuth,
        translations: {
          create: cat.service.translations.map((t) => ({
            locale: t.locale as Locale, // Replace 'any' with 'Locale' if you have imported the type
            title: t.title,
            description: t.description,
            slug: t.slug,
          })),
        },
      },
    });
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
