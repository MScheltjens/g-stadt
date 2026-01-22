import 'dotenv/config';

import { CATEGORYTYPE, LOCALES } from '@invicity/constants';
import pg from 'pg';

import pkg from './generated/client.js';
const { PrismaClient } = pkg;

import { PrismaPg } from '@prisma/adapter-pg';

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
    // Service categories
    {
      code: 'CITIZEN_SERVICES',
      type: CATEGORYTYPE.service,
      order: 1,
      icon: 'IdCard',
      translations: [
        {
          locale: LOCALES.de,
          label: 'Bürgerservices',
          slug: 'buergerservices',
        },
        {
          locale: LOCALES.en,
          label: 'Citizen Services',
          slug: 'citizen-services',
        },
        {
          locale: LOCALES.fr,
          label: 'Services aux citoyens',
          slug: 'services-citoyens',
        },
      ],
      services: [
        {
          requiresAuth: true,
          translations: [
            {
              locale: LOCALES.de,
              title: 'Personalausweis beantragen',
              description: 'Beantragen Sie Ihren Ausweis.',
              slug: 'personalausweis-beantragen',
            },
            {
              locale: LOCALES.en,
              title: 'Apply for ID card',
              description: 'Apply for your ID card.',
              slug: 'apply-id-card',
            },
            {
              locale: LOCALES.fr,
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
              locale: LOCALES.de,
              title: 'Meldebescheinigung anfordern',
              description: 'Fordern Sie eine Meldebescheinigung an.',
              slug: 'meldebescheinigung-anfordern',
            },
            {
              locale: LOCALES.en,
              title: 'Request registration certificate',
              description: 'Request your registration certificate.',
              slug: 'request-registration-certificate',
            },
            {
              locale: LOCALES.fr,
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
      type: CATEGORYTYPE.service,
      order: 2,
      icon: 'Building',
      translations: [
        {
          locale: LOCALES.de,
          label: 'Stadtverwaltung',
          slug: 'stadtverwaltung',
        },
        {
          locale: LOCALES.en,
          label: 'City Administration',
          slug: 'city-administration',
        },
        {
          locale: LOCALES.fr,
          label: 'Administration municipale',
          slug: 'administration-municipale',
        },
      ],
      services: [
        {
          translations: [
            {
              locale: LOCALES.de,
              title: 'Rathaus Kontakt',
              description: 'Kontakt und Öffnungszeiten des Rathauses.',
              slug: 'rathaus-kontakt',
            },
            {
              locale: LOCALES.en,
              title: 'City Hall Contact',
              description: 'Contact and opening hours of city hall.',
              slug: 'city-hall-contact',
            },
            {
              locale: LOCALES.fr,
              title: 'Contact de la mairie',
              description: 'Contact et horaires de la mairie.',
              slug: 'contact-mairie',
            },
          ],
        },
        {
          translations: [
            {
              locale: LOCALES.de,
              title: 'Bürgermeistersprechstunde',
              description:
                'Vereinbaren Sie einen Termin mit dem Bürgermeister.',
              slug: 'buergermeistersprechstunde',
            },
            {
              locale: LOCALES.en,
              title: 'Mayor’s office hours',
              description: 'Book an appointment with the mayor.',
              slug: 'mayors-office-hours',
            },
            {
              locale: LOCALES.fr,
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
      type: CATEGORYTYPE.service,
      order: 3,
      icon: 'Leaf',
      translations: [
        { locale: LOCALES.de, label: 'Umwelt', slug: 'umwelt' },
        { locale: LOCALES.en, label: 'Environment', slug: 'environment' },
        { locale: LOCALES.fr, label: 'Environnement', slug: 'environnement' },
      ],
      services: [
        {
          translations: [
            {
              locale: LOCALES.de,
              title: 'Müllabfuhrplan',
              description: 'Sehen Sie den aktuellen Müllabfuhrplan ein.',
              slug: 'muellabfuhrplan',
            },
            {
              locale: LOCALES.en,
              title: 'Garbage collection schedule',
              description: 'View the current garbage collection schedule.',
              slug: 'garbage-collection-schedule',
            },
            {
              locale: LOCALES.fr,
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
              locale: LOCALES.de,
              title: 'Baumspende',
              description: 'Spenden Sie einen Baum für die Stadt.',
              slug: 'baumspende',
            },
            {
              locale: LOCALES.en,
              title: 'Tree donation',
              description: 'Donate a tree to the city.',
              slug: 'tree-donation',
            },
            {
              locale: LOCALES.fr,
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
      type: CATEGORYTYPE.service,
      order: 4,
      icon: 'Trophy',
      translations: [
        { locale: LOCALES.de, label: 'Kultur & Sport', slug: 'kultur-sport' },
        { locale: LOCALES.en, label: 'Culture & Sport', slug: 'culture-sport' },
        {
          locale: LOCALES.fr,
          label: 'Culture et sport',
          slug: 'culture-sport-fr',
        },
      ],
      services: [
        {
          translations: [
            {
              locale: LOCALES.de,
              title: 'Sportstätten buchen',
              description: 'Buchen Sie städtische Sportstätten.',
              slug: 'sportstaetten-buchen',
            },
            {
              locale: LOCALES.en,
              title: 'Book sports facilities',
              description: 'Book city sports facilities.',
              slug: 'book-sports-facilities',
            },
            {
              locale: LOCALES.fr,
              title: 'Réserver des installations sportives',
              description: 'Réservez des installations sportives municipales.',
              slug: 'reserver-installations-sportives',
            },
          ],
        },
        {
          translations: [
            {
              locale: LOCALES.de,
              title: 'Kulturveranstaltungen',
              description: 'Finden Sie aktuelle Kulturveranstaltungen.',
              slug: 'kulturveranstaltungen',
            },
            {
              locale: LOCALES.en,
              title: 'Cultural events',
              description: 'Find current cultural events.',
              slug: 'cultural-events',
            },
            {
              locale: LOCALES.fr,
              title: 'Événements culturels',
              description: 'Trouvez les événements culturels en cours.',
              slug: 'evenements-culturels',
            },
          ],
        },
      ],
    },
    // Contact categories
    {
      code: 'GENERAL_INQUIRY',
      type: CATEGORYTYPE.contact,
      order: 5,
      icon: 'Mail',
      translations: [
        {
          locale: LOCALES.de,
          label: 'Allgemeine Anfrage',
          slug: 'allgemeine-anfrage',
        },
        {
          locale: LOCALES.en,
          label: 'General Inquiry',
          slug: 'general-inquiry',
        },
        {
          locale: LOCALES.fr,
          label: 'Demande générale',
          slug: 'demande-generale',
        },
      ],
      contacts: [
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.de,
              title: 'Kontaktformular',
              description: 'Senden Sie uns Ihre allgemeine Anfrage.',
              slug: 'kontaktformular',
            },
            {
              locale: LOCALES.en,
              title: 'Contact Form',
              description: 'Send us your general inquiry.',
              slug: 'contact-form',
            },
            {
              locale: LOCALES.fr,
              title: 'Formulaire de contact',
              description: 'Envoyez-nous votre demande générale.',
              slug: 'formulaire-contact',
            },
          ],
        },
      ],
    },
    {
      code: 'TECH_SUPPORT',
      type: CATEGORYTYPE.contact,
      order: 6,
      icon: 'Settings',
      translations: [
        {
          locale: LOCALES.de,
          label: 'Technischer Support',
          slug: 'technischer-support',
        },
        {
          locale: LOCALES.en,
          label: 'Technical Support',
          slug: 'technical-support',
        },
        {
          locale: LOCALES.fr,
          label: 'Support technique',
          slug: 'support-technique',
        },
      ],
      contacts: [
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.de,
              title: 'Technische Hilfe',
              description: 'Erhalten Sie technische Unterstützung.',
              slug: 'technische-hilfe',
            },
            {
              locale: LOCALES.en,
              title: 'Technical Help',
              description: 'Get technical support.',
              slug: 'technical-help',
            },
            {
              locale: LOCALES.fr,
              title: 'Aide technique',
              description: 'Obtenez de l’aide technique.',
              slug: 'aide-technique',
            },
          ],
        },
      ],
    },
    {
      code: 'FEEDBACK',
      type: CATEGORYTYPE.contact,
      order: 7,
      icon: 'MessageCircle',
      translations: [
        { locale: LOCALES.de, label: 'Feedback', slug: 'feedback' },
        { locale: LOCALES.en, label: 'Feedback', slug: 'feedback' },
        { locale: LOCALES.fr, label: 'Retour', slug: 'retour' },
      ],
      contacts: [
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.de,
              title: 'Feedback geben',
              description: 'Teilen Sie uns Ihr Feedback mit.',
              slug: 'feedback-geben',
            },
            {
              locale: LOCALES.en,
              title: 'Give Feedback',
              description: 'Share your feedback with us.',
              slug: 'give-feedback',
            },
            {
              locale: LOCALES.fr,
              title: 'Donner un retour',
              description: 'Partagez votre retour avec nous.',
              slug: 'donner-retour',
            },
          ],
        },
      ],
    },
    {
      code: 'REPORT_ISSUE',
      type: CATEGORYTYPE.contact,
      order: 8,
      icon: 'AlertCircle',
      translations: [
        { locale: LOCALES.de, label: 'Problem melden', slug: 'problem-melden' },
        { locale: LOCALES.en, label: 'Report an Issue', slug: 'report-issue' },
        {
          locale: LOCALES.fr,
          label: 'Signaler un problème',
          slug: 'signaler-probleme',
        },
      ],
      contacts: [
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.de,
              title: 'Problem melden',
              description: 'Melden Sie ein Problem mit der Stadt.',
              slug: 'problem-melden',
            },
            {
              locale: LOCALES.en,
              title: 'Report a Problem',
              description: 'Report a problem with the city.',
              slug: 'report-problem',
            },
            {
              locale: LOCALES.fr,
              title: 'Signaler un problème',
              description: 'Signalez un problème à la ville.',
              slug: 'signaler-probleme',
            },
          ],
        },
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
            icon: cat.icon,
            isActive: true,
            requiresAuth:
              'requiresAuth' in service ? !!service.requiresAuth : false,
          },
          create: {
            categoryId: category.id,
            icon: cat.icon,
            order: serviceOrder,
            isActive: true,
            requiresAuth:
              'requiresAuth' in service ? !!service.requiresAuth : false,
          },
        });

        // Upsert service translations
        for (const t of service.translations) {
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
              slug: t.slug,
            },
            create: {
              serviceId: serviceRecord.id,
              locale: t.locale,
              title: t.title,
              description: t.description,
              slug: t.slug,
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
            icon: cat.icon,
            isActive: true,
            requiresAuth:
              'requiresAuth' in contact ? !!contact.requiresAuth : false,
          },
          create: {
            categoryId: category.id,
            icon: cat.icon,
            order: contactOrder,
            isActive: true,
            requiresAuth:
              'requiresAuth' in contact ? !!contact.requiresAuth : false,
          },
        });

        // Upsert contact translations
        for (const t of contact.translations) {
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
              slug: t.slug,
            },
            create: {
              contactId: contactRecord.id,
              locale: t.locale,
              title: t.title,
              description: t.description,
              slug: t.slug,
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
