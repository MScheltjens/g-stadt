import 'dotenv/config';
import { PrismaClient, ServiceCategory } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.$transaction([
    prisma.auditLog.deleteMany(),
    prisma.notification.deleteMany(),
    prisma.appointment.deleteMany(),
    prisma.comment.deleteMany(),
    prisma.pollResponse.deleteMany(),
    prisma.pollOption.deleteMany(),
    prisma.poll.deleteMany(),
    prisma.gallery.deleteMany(),
    prisma.serviceTranslation.deleteMany(),
    prisma.service.deleteMany(),
    prisma.newsTranslation.deleteMany(),
    prisma.news.deleteMany(),
    prisma.eventTranslation.deleteMany(),
    prisma.event.deleteMany(),
    prisma.pageTranslation.deleteMany(),
    prisma.page.deleteMany(),
    prisma.faqTranslation.deleteMany(),
    prisma.faq.deleteMany(),
    prisma.documentTranslation.deleteMany(),
    prisma.document.deleteMany(),
    prisma.locationTranslation.deleteMany(),
    prisma.location.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  const citizen = await prisma.user.create({
    data: {
      email: 'citizen@g-stadt.de',
      passwordHash: 'hash',
      isVerified: true,
    },
  });

  // Add a service for each ServiceCategory
  const serviceCategories = [
    'identityAndDocuments',
    'housingAndLiving',
    'familyAndSocial',
    'mobilityAndTransport',
    'educationAndCulture',
    'healthAndSafety',
    'businessAndWork',
    'constructionAndPlanning',
    'environmentAndSustainability',
    'utilitiesAndInfrastructure',
    'civicParticipation',
    'tourismAndVisits',
  ];

  const services = [];
  for (const category of serviceCategories) {
    const s = await prisma.service.create({
      data: {
        category: category as ServiceCategory,
        icon: 'Service',
        translations: {
          create: [
            {
              locale: 'en',
              title: `${category} service`,
              description: `Service for ${category.replace(/([A-Z])/g, ' $1').toLowerCase()}.`,
              slug: category.toLowerCase(),
            },
          ],
        },
      },
    });
    services.push(s);
  }

  if (services[0]) {
    await prisma.appointment.create({
      data: {
        userId: citizen.id,
        serviceId: services[0].id,
        date: new Date(Date.now() + 86400000),
      },
    });
  } else {
    console.warn('No services found, skipping appointment creation.');
  }

  await prisma.gallery.create({
    data: {
      title: 'City Life',
      images: {
        create: [
          { url: '/city/park.jpg', caption: 'City park' },
          { url: '/city/market.jpg', caption: 'Market square' },
        ],
      },
    },
  });

  await prisma.faq.create({
    data: {
      category: 'general',
      translations: {
        create: {
          locale: 'en',
          question: 'How do I contact city hall?',
          answer: 'By email or phone.',
        },
      },
    },
  });

  console.log('✅ Seed complete');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
