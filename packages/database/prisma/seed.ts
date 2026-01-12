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
  await prisma.serviceTranslation.deleteMany();
  await prisma.service.deleteMany();
  await prisma.serviceCategory.deleteMany();
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

  // --- SERVICE CATEGORIES & SERVICES ---
  const serviceCategories = [
    {
      key: 'citizen_services',
      order: 1,
      icon: 'IdCard',
      labelTranslations: [
        { locale: 'de', label: 'Bürgerservices' },
        { locale: 'en', label: 'Citizen Services' },
        { locale: 'fr', label: 'Services aux citoyens' },
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
      key: 'city_administration',
      order: 2,
      icon: 'Building',
      labelTranslations: [
        { locale: 'de', label: 'Stadtverwaltung' },
        { locale: 'en', label: 'City Administration' },
        { locale: 'fr', label: 'Administration municipale' },
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
    {
      key: 'transport_mobility',
      order: 3,
      icon: 'Bus',
      labelTranslations: [
        { locale: 'de', label: 'Verkehr & Mobilität' },
        { locale: 'en', label: 'Transport & Mobility' },
        { locale: 'fr', label: 'Transports & mobilité' },
      ],
      service: {
        translations: [
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
    {
      key: 'waste_environment',
      order: 4,
      icon: 'Trash',
      labelTranslations: [
        { locale: 'de', label: 'Abfall & Umwelt' },
        { locale: 'en', label: 'Waste & Environment' },
        { locale: 'fr', label: 'Déchets & environnement' },
      ],
      service: {
        requiresAuth: true,
        translations: [
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
    {
      key: 'family_social',
      order: 5,
      icon: 'Users',
      labelTranslations: [
        { locale: 'de', label: 'Familie & Soziales' },
        { locale: 'en', label: 'Family & Social' },
        { locale: 'fr', label: 'Famille & social' },
      ],
      service: {
        requiresAuth: true,
        translations: [
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
    {
      key: 'education_culture',
      order: 6,
      icon: 'BookOpen',
      labelTranslations: [
        { locale: 'de', label: 'Bildung & Kultur' },
        { locale: 'en', label: 'Education & Culture' },
        { locale: 'fr', label: 'Éducation & culture' },
      ],
      service: {
        translations: [
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
    {
      key: 'economy_business',
      order: 7,
      icon: 'Briefcase',
      labelTranslations: [
        { locale: 'de', label: 'Wirtschaft & Unternehmen' },
        { locale: 'en', label: 'Economy & Business' },
        { locale: 'fr', label: 'Économie & entreprises' },
      ],
      service: {
        requiresAuth: true,
        translations: [
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
    {
      key: 'public_order_safety',
      order: 8,
      icon: 'Shield',
      labelTranslations: [
        { locale: 'de', label: 'Ordnung & Sicherheit' },
        { locale: 'en', label: 'Public Order & Safety' },
        { locale: 'fr', label: 'Ordre public & sécurité' },
      ],
      service: {
        requiresAuth: true,
        translations: [
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
    {
      key: 'health',
      order: 9,
      icon: 'HeartPulse',
      labelTranslations: [
        { locale: 'de', label: 'Gesundheit' },
        { locale: 'en', label: 'Health' },
        { locale: 'fr', label: 'Santé' },
      ],
      service: {
        translations: [
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
    {
      key: 'housing_building',
      order: 10,
      icon: 'Home',
      labelTranslations: [
        { locale: 'de', label: 'Wohnen & Bauen' },
        { locale: 'en', label: 'Housing & Building' },
        { locale: 'fr', label: 'Logement & construction' },
      ],
      service: {
        requiresAuth: true,
        translations: [
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
    {
      key: 'leisure_tourism',
      order: 11,
      icon: 'Map',
      labelTranslations: [
        { locale: 'de', label: 'Freizeit & Tourismus' },
        { locale: 'en', label: 'Leisure & Tourism' },
        { locale: 'fr', label: 'Loisirs & tourisme' },
      ],
      service: {
        translations: [
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
    {
      key: 'digital_city_hall',
      order: 12,
      icon: 'Globe',
      labelTranslations: [
        { locale: 'de', label: 'Digitales Rathaus' },
        { locale: 'en', label: 'Digital City Hall' },
        { locale: 'fr', label: 'Hôtel de ville numérique' },
      ],
      service: {
        requiresAuth: true,
        translations: [
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
  ];

  // Seed ServiceCategories
  const createdCategories = [];
  for (const cat of serviceCategories) {
    const created = await prisma.serviceCategory.create({
      data: {
        key: cat.key,
        order: cat.order,
        translations: {
          create: cat.labelTranslations.map((t) => ({
            ...t,
            locale: t.locale as any,
          })),
        },
      },
      include: { translations: true },
    });
    createdCategories.push({
      ...created,
      icon: cat.icon,
      service: cat.service,
    });
  }
  console.log(
    `✅ Created ${createdCategories.length} service categories with translations`,
  );

  // Seed one Service per category
  const services = [];
  for (const cat of createdCategories) {
    const service = await prisma.service.create({
      data: {
        categoryId: cat.id,
        icon: cat.icon,
        order: 1,
        requiresAuth: !!cat.service.requiresAuth,
        translations: {
          create: cat.service.translations.map((t) => ({
            ...t,
            locale: t.locale as any, // will cast to 'de' | 'en' | 'fr' (Prisma enum)
          })),
        },
      },
    });
    services.push(service);
  }
  console.log(`✅ Created ${services.length} services`);

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
