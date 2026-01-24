import 'dotenv/config';

import { CATEGORYTYPE, LOCALES } from '@kwh/constants';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
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
  await prisma.contactTranslation.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.categoryTranslation.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleared existing data.');

  // --- CATEGORIES + SERVICES + CONTACTS ---
  const categories = [
    // Contact categories
    {
      code: 'GENERAL_INQUIRY',
      type: CATEGORYTYPE.contact,
      order: 5,
      // icon removed
      translations: [
        {
          locale: LOCALES.DE,
          label: 'Allgemeine Anfrage',
          slug: 'allgemeine-anfrage',
        },
        {
          locale: LOCALES.EN,
          label: 'General Inquiry',
          slug: 'general-inquiry',
        },
        {
          locale: LOCALES.FR,
          label: 'Demande générale',
          slug: 'demande-generale',
        },
      ],
      contacts: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Kontakt ${i}`,
              description: `Beschreibung Kontakt ${i} (DE)`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Contact ${i}`,
              description: `Description contact ${i} (EN)`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Contact ${i}`,
              description: `Description contact ${i} (FR)`,
              slug: `contact-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'TECH_SUPPORT',
      type: CATEGORYTYPE.contact,
      order: 6,
      icon: 'Settings',
      translations: [
        {
          locale: LOCALES.DE,
          label: 'Technischer Support',
          slug: 'technischer-support',
        },
        {
          locale: LOCALES.EN,
          label: 'Technical Support',
          slug: 'technical-support',
        },
        {
          locale: LOCALES.FR,
          label: 'Support technique',
          slug: 'support-technique',
        },
      ],
      contacts: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Technische Hilfe ${i}`,
              description: `Beschreibung Technische Hilfe ${i} (DE)`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Technical Help ${i}`,
              description: `Description technical help ${i} (EN)`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Aide technique ${i}`,
              description: `Description aide technique ${i} (FR)`,
              slug: `contact-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'FEEDBACK',
      type: CATEGORYTYPE.contact,
      order: 7,
      icon: 'MessageCircle',
      translations: [
        { locale: LOCALES.DE, label: 'Feedback', slug: 'feedback' },
        { locale: LOCALES.EN, label: 'Feedback', slug: 'feedback' },
        { locale: LOCALES.FR, label: 'Retour', slug: 'retour' },
      ],
      contacts: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Feedback geben ${i}`,
              description: `Teilen Sie uns Ihr Feedback mit.${i}`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Give Feedback ${i}`,
              description: `Share your feedback with us.${i}`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Donner un retour ${i}`,
              description: `Partagez votre retour avec nous.${i}`,
              slug: `contact-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'REPORT_ISSUE',
      type: CATEGORYTYPE.contact,
      order: 8,
      icon: 'AlertCircle',
      translations: [
        { locale: LOCALES.DE, label: 'Problem melden', slug: 'problem-melden' },
        { locale: LOCALES.EN, label: 'Report an Issue', slug: 'report-issue' },
        {
          locale: LOCALES.FR,
          label: 'Signaler un problème',
          slug: 'signaler-probleme',
        },
      ],
      contacts: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Problem melden ${i}`,
              description: `Melden Sie ein Problem mit der Stadt.${i}`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Report a Problem ${i}`,
              description: `Report a problem with the city.${i}`,
              slug: `contact-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Signaler un problème ${i}`,
              description: `Signalez un problème à la ville.${i}`,
              slug: `contact-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'PERSON_LIFE_EVENTS',
      type: CATEGORYTYPE.service,
      order: 100,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Person and life events',
          slug: 'person-life-events',
        },
        {
          locale: LOCALES.FR,
          label: 'Personne et moments de vie',
          slug: 'personne-moments-vie',
        },
        {
          locale: LOCALES.DE,
          label: 'Person und Lebensereignisse',
          slug: 'person-lebensereignisse',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'JOBS_ENTREPRENEURSHIP',
      type: CATEGORYTYPE.service,
      order: 101,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Jobs and entrepreneurship',
          slug: 'jobs-entrepreneurship',
        },
        {
          locale: LOCALES.FR,
          label: 'Emplois et entreprendre',
          slug: 'emplois-entreprendre',
        },
        {
          locale: LOCALES.DE,
          label: 'Jobs und Unternehmertum',
          slug: 'jobs-unternehmertum',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'LIVING_BUILDING',
      type: CATEGORYTYPE.service,
      order: 102,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Living and building',
          slug: 'living-building',
        },
        {
          locale: LOCALES.FR,
          label: 'Habiter et construire',
          slug: 'habiter-construire',
        },
        { locale: LOCALES.DE, label: 'Wohnen und Bauen', slug: 'wohnen-bauen' },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'WASTE_NATURE_ENVIRONMENT',
      type: CATEGORYTYPE.service,
      order: 103,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Waste, nature and environment',
          slug: 'waste-nature-environment',
        },
        {
          locale: LOCALES.FR,
          label: 'Déchets, nature et environnement',
          slug: 'dechets-nature-environnement',
        },
        {
          locale: LOCALES.DE,
          label: 'Abfall, Natur und Umwelt',
          slug: 'abfall-natur-umwelt',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'LEISURE_SPORT_CULTURE',
      type: CATEGORYTYPE.service,
      order: 104,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Leisure, sport and culture',
          slug: 'leisure-sport-culture',
        },
        {
          locale: LOCALES.FR,
          label: 'Loisirs, sport et culture',
          slug: 'loisirs-sport-culture',
        },
        {
          locale: LOCALES.DE,
          label: 'Freizeit, Sport und Kultur',
          slug: 'freizeit-sport-kultur',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'CHILDCARE_LEARNING',
      type: CATEGORYTYPE.service,
      order: 105,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Childcare and learning',
          slug: 'childcare-learning',
        },
        {
          locale: LOCALES.FR,
          label: "Garde d'enfants et apprentissage",
          slug: 'garde-enfants-apprentissage',
        },
        {
          locale: LOCALES.DE,
          label: 'Kinderbetreuung und Lernen',
          slug: 'kinderbetreuung-lernen',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'PARKING_MOBILITY',
      type: CATEGORYTYPE.service,
      order: 106,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Parking and mobility',
          slug: 'parking-mobility',
        },
        {
          locale: LOCALES.FR,
          label: 'Stationnement et mobilité',
          slug: 'stationnement-mobilite',
        },
        {
          locale: LOCALES.DE,
          label: 'Parken und Mobilität',
          slug: 'parken-mobilitaet',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'SOCIAL_ASSISTANCE_WELFARE_CARE',
      type: CATEGORYTYPE.service,
      order: 107,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'Social assistance, welfare and care',
          slug: 'social-assistance-welfare-care',
        },
        {
          locale: LOCALES.FR,
          label: 'Aide sociale, bien-être et soins',
          slug: 'aide-sociale-bien-etre-soins',
        },
        {
          locale: LOCALES.DE,
          label: 'Sozialhilfe, Wohlbefinden und Pflege',
          slug: 'sozialhilfe-wohlbefinden-pflege',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
    {
      code: 'CITY_DISTRICTS',
      type: CATEGORYTYPE.service,
      order: 108,
      translations: [
        {
          locale: LOCALES.EN,
          label: 'City and districts',
          slug: 'city-districts',
        },
        {
          locale: LOCALES.FR,
          label: 'Ville et districts',
          slug: 'ville-districts',
        },
        {
          locale: LOCALES.DE,
          label: 'Stadt und Bezirke',
          slug: 'stadt-bezirke',
        },
      ],
      services: [
        ...[1, 2, 3].map((i) => ({
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.DE,
              title: `Dienstleistung ${i}`,
              description: `Beschreibung Dienstleistung ${i} (DE)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.EN,
              title: `Service ${i}`,
              description: `Description service ${i} (EN)`,
              slug: `service-${i}`,
            },
            {
              locale: LOCALES.FR,
              title: `Service ${i}`,
              description: `Description service ${i} (FR)`,
              slug: `service-${i}`,
            },
          ],
        })),
      ],
    },
  ];

  for (const cat of categories) {
    // Upsert category
    const category = await prisma.category.upsert({
      where: { code: cat.code },
      update: {
        type: cat.type,
        order: cat.order,
        isActive: true,
      },
      create: {
        code: cat.code,
        type: cat.type,
        order: cat.order,
        isActive: true,
      },
    });

    // Upsert category translations
    for (const t of cat.translations) {
      await prisma.categoryTranslation.upsert({
        where: {
          categoryId_locale: {
            categoryId: category.id,
            locale: t.locale,
          },
        },
        update: {
          label: t.label,
          slug: t.slug,
        },
        create: {
          categoryId: category.id,
          locale: t.locale,
          label: t.label,
          slug: t.slug,
        },
      });
    }

    if (cat.type === 'service' && cat.services) {
      let serviceOrder = 1;
      for (const service of cat.services) {
        // Upsert service
        const serviceRecord = await prisma.service.upsert({
          where: {
            // Use a unique constraint, e.g., categoryId + order
            categoryId_order: {
              categoryId: category.id,
              order: serviceOrder,
            },
          },
          update: {
            isActive: true,
            requiresAuth:
              'requiresAuth' in service ? !!service.requiresAuth : false,
          },
          create: {
            categoryId: category.id,
            order: serviceOrder,
            isActive: true,
            requiresAuth:
              'requiresAuth' in service ? !!service.requiresAuth : false,
          },
        });

        // Upsert service translations with unique slug
        for (const t of service.translations) {
          const uniqueSlug = `${cat.code.toLowerCase()}-${t.slug}`;
          await prisma.serviceTranslation.upsert({
            where: {
              serviceId_locale: {
                serviceId: serviceRecord.id,
                locale: t.locale,
              },
            },
            update: {
              title: t.title,
              description: t.description,
              slug: uniqueSlug,
            },
            create: {
              serviceId: serviceRecord.id,
              locale: t.locale,
              title: t.title,
              description: t.description,
              slug: uniqueSlug,
            },
          });
        }
        serviceOrder++;
      }
    }

    if (cat.type === 'contact' && cat.contacts) {
      let contactOrder = 1;
      for (const contact of cat.contacts) {
        // Upsert contact
        const contactRecord = await prisma.contact.upsert({
          where: {
            // Use a unique constraint, e.g., categoryId + order
            categoryId_order: {
              categoryId: category.id,
              order: contactOrder,
            },
          },
          update: {
            isActive: true,
            requiresAuth:
              'requiresAuth' in contact ? !!contact.requiresAuth : false,
          },
          create: {
            categoryId: category.id,
            order: contactOrder,
            isActive: true,
            requiresAuth:
              'requiresAuth' in contact ? !!contact.requiresAuth : false,
          },
        });

        // Upsert contact translations with unique slug
        for (const t of contact.translations) {
          const uniqueSlug = `${cat.code.toLowerCase()}-${t.slug}`;
          await prisma.contactTranslation.upsert({
            where: {
              contactId_locale: {
                contactId: contactRecord.id,
                locale: t.locale,
              },
            },
            update: {
              title: t.title,
              description: t.description,
              slug: uniqueSlug,
            },
            create: {
              contactId: contactRecord.id,
              locale: t.locale,
              title: t.title,
              description: t.description,
              slug: uniqueSlug,
            },
          });
        }
        contactOrder++;
      }
    }
  }

  console.log('✅ Upserted categories, services & contacts');
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
