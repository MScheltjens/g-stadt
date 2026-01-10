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

  // --- GALLERY ---
  await prisma.gallery.create({
    data: {
      title: 'Stadtansichten',
      description: 'Bilder aus G-Stadt',
      images: {
        create: [
          { url: '/images/altstadt.jpg', caption: 'Historische Altstadt' },
          { url: '/images/park.jpg', caption: 'Stadtpark im Frühling' },
        ],
      },
    },
  });
  await prisma.gallery.create({
    data: {
      title: 'Events',
      description: 'Fotos von Veranstaltungen',
      images: {
        create: [
          { url: '/images/fest.jpg', caption: 'Stadtfest 2025' },
          { url: '/images/konzert.jpg', caption: 'Konzert im Park' },
        ],
      },
    },
  });
  console.log('✅ Created galleries');

  // --- POLLS ---
  await prisma.poll.create({
    data: {
      question: 'Wie zufrieden sind Sie mit dem Stadtfest?',
      isActive: true,
      options: {
        create: [
          { text: 'Sehr zufrieden' },
          { text: 'Zufrieden' },
          { text: 'Weniger zufrieden' },
          { text: 'Unzufrieden' },
        ],
      },
    },
  });
  await prisma.poll.create({
    data: {
      question: 'Welche neuen Services wünschen Sie sich?',
      isActive: true,
      options: {
        create: [
          { text: 'Mehr Online-Angebote' },
          { text: 'Längere Öffnungszeiten' },
          { text: 'Mehr Veranstaltungen' },
        ],
      },
    },
  });
  console.log('✅ Created polls');

  // --- PAGES ---
  await prisma.page.create({
    data: {
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Startseite',
            slug: 'start',
            content: 'Willkommen in G-Stadt!',
          },
          {
            locale: 'en',
            title: 'Homepage',
            slug: 'home',
            content: 'Welcome to G-Stadt!',
          },
          {
            locale: 'fr',
            title: 'Page d’accueil',
            slug: 'accueil',
            content: 'Bienvenue à G-Stadt !',
          },
        ],
      },
    },
  });
  await prisma.page.create({
    data: {
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Kontakt',
            slug: 'kontakt',
            content: 'Kontaktieren Sie uns.',
          },
          {
            locale: 'en',
            title: 'Contact',
            slug: 'contact',
            content: 'Contact us.',
          },
          {
            locale: 'fr',
            title: 'Contact',
            slug: 'contact',
            content: 'Contactez-nous.',
          },
        ],
      },
    },
  });
  console.log('✅ Created pages');

  // --- SERVICES ---
  const service1 = await prisma.service.create({
    data: {
      category: 'Bürgerdienste',
      icon: 'Landmark',
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Personalausweis beantragen',
            description: 'Beantragen Sie Ihren Ausweis.',
            slug: 'personalausweis',
          },
          {
            locale: 'en',
            title: 'Apply for ID card',
            description: 'Apply for your ID card.',
            slug: 'id-card',
          },
          {
            locale: 'fr',
            title: 'Demander une carte d’identité',
            description: 'Demandez votre carte d’identité.',
            slug: 'carte-identite',
          },
        ],
      },
    },
  });
  const service2 = await prisma.service.create({
    data: {
      category: 'Veranstaltungen',
      icon: 'Calendar',
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Veranstaltungskalender',
            description: 'Alle Events im Überblick.',
            slug: 'veranstaltungen',
          },
          {
            locale: 'en',
            title: 'Event Calendar',
            description: 'All events at a glance.',
            slug: 'events',
          },
          {
            locale: 'fr',
            title: 'Calendrier des événements',
            description: 'Tous les événements en un coup d’œil.',
            slug: 'evenements',
          },
        ],
      },
    },
  });
  console.log('✅ Created services');

  // --- NEWS ---
  await prisma.news.create({
    data: {
      category: 'Veranstaltungen',
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
      category: 'Verkehr',
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

  // --- FAQ ---
  await prisma.fAQ.create({
    data: {
      category: 'Allgemein',
      order: 1,
      translations: {
        create: [
          {
            locale: 'de',
            question: 'Wie erreiche ich das Bürgerbüro?',
            answer: 'Sie erreichen uns per E-Mail oder Telefon.',
          },
          {
            locale: 'en',
            question: 'How to contact the citizens office?',
            answer: 'Contact us via email or phone.',
          },
          {
            locale: 'fr',
            question: 'Comment contacter le bureau des citoyens ?',
            answer: 'Contactez-nous par e-mail ou par téléphone.',
          },
        ],
      },
    },
  });
  await prisma.fAQ.create({
    data: {
      category: 'Veranstaltungen',
      order: 2,
      translations: {
        create: [
          {
            locale: 'de',
            question: 'Wann ist das nächste Stadtfest?',
            answer: 'Im Juli.',
          },
          {
            locale: 'en',
            question: 'When is the next city festival?',
            answer: 'In July.',
          },
          {
            locale: 'fr',
            question: 'Quand a lieu la prochaine fête de la ville ?',
            answer: 'En juillet.',
          },
        ],
      },
    },
  });
  console.log('✅ Created FAQs');

  // --- ANNOUNCEMENTS ---
  await prisma.announcement.create({
    data: {
      type: 'Info',
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Neue Öffnungszeiten',
            content: 'Das Bürgerbüro hat neue Öffnungszeiten.',
          },
          {
            locale: 'en',
            title: 'New opening hours',
            content: 'The citizens office has new opening hours.',
          },
          {
            locale: 'fr',
            title: 'Nouveaux horaires',
            content: 'Le bureau des citoyens a de nouveaux horaires.',
          },
        ],
      },
    },
  });
  await prisma.announcement.create({
    data: {
      type: 'Warnung',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Straßensperrung',
            content: 'Die Hauptstraße ist gesperrt.',
          },
          {
            locale: 'en',
            title: 'Road closure',
            content: 'The main street is closed.',
          },
          {
            locale: 'fr',
            title: 'Fermeture de rue',
            content: 'La rue principale est fermée.',
          },
        ],
      },
    },
  });
  console.log('✅ Created announcements');

  // --- DOCUMENTS ---
  await prisma.document.create({
    data: {
      fileUrl: '/docs/info.pdf',
      category: 'Info',
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Informationsblatt',
            description: 'Wichtige Infos als PDF.',
          },
          {
            locale: 'en',
            title: 'Information sheet',
            description: 'Important info as PDF.',
          },
          {
            locale: 'fr',
            title: 'Fiche d’information',
            description: 'Informations importantes en PDF.',
          },
        ],
      },
    },
  });
  await prisma.document.create({
    data: {
      fileUrl: '/docs/veranstaltungen.pdf',
      category: 'Veranstaltungen',
      translations: {
        create: [
          {
            locale: 'de',
            title: 'Veranstaltungsplan',
            description: 'Alle Events im Überblick.',
          },
          {
            locale: 'en',
            title: 'Event schedule',
            description: 'All events at a glance.',
          },
          {
            locale: 'fr',
            title: 'Programme des événements',
            description: 'Tous les événements en un coup d’œil.',
          },
        ],
      },
    },
  });
  console.log('✅ Created documents');

  // --- LOCATIONS ---
  await prisma.location.create({
    data: {
      type: 'Park',
      address: 'Parkstraße 1',
      translations: {
        create: [
          {
            locale: 'de',
            name: 'Stadtpark',
            description: 'Grüne Oase im Herzen der Stadt.',
          },
          {
            locale: 'en',
            name: 'City Park',
            description: 'Green oasis in the heart of the city.',
          },
          {
            locale: 'fr',
            name: 'Parc municipal',
            description: 'Oasis verte au cœur de la ville.',
          },
        ],
      },
    },
  });
  await prisma.location.create({
    data: {
      type: 'Rathaus',
      address: 'Rathausplatz 1',
      translations: {
        create: [
          {
            locale: 'de',
            name: 'Rathaus',
            description: 'Verwaltungssitz der Stadt.',
          },
          {
            locale: 'en',
            name: 'Town Hall',
            description: 'City administration headquarters.',
          },
          {
            locale: 'fr',
            name: 'Hôtel de ville',
            description: 'Siège de l’administration municipale.',
          },
        ],
      },
    },
  });
  console.log('✅ Created locations');

  // --- NOTIFICATIONS ---
  await prisma.notification.create({
    data: {
      userId: user1.id,
      type: 'Info',
      content: 'Willkommen in G-Stadt!',
      read: false,
    },
  });
  await prisma.notification.create({
    data: {
      userId: user2.id,
      type: 'Warnung',
      content: 'Bitte beachten Sie die aktuellen Straßensperrungen.',
      read: true,
    },
  });
  console.log('✅ Created notifications');

  // --- APPOINTMENTS ---
  await prisma.appointment.create({
    data: {
      userId: user1.id,
      serviceId: service1.id,
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      status: 'pending',
    },
  });
  await prisma.appointment.create({
    data: {
      userId: user2.id,
      serviceId: service2.id,
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      status: 'confirmed',
    },
  });
  console.log('✅ Created appointments');

  // --- AUDIT LOGS ---
  await prisma.auditLog.create({
    data: {
      userId: user3.id,
      action: 'LOGIN',
      target: 'admin@g-stadt.de',
      details: 'Admin logged in successfully.',
    },
  });
  await prisma.auditLog.create({
    data: {
      userId: user2.id,
      action: 'CREATE_EVENT',
      target: 'Stadtfest 2025',
      details: 'Staff created a new event.',
    },
  });
  console.log('✅ Created audit logs');

  // --- COMMENTS ---
  await prisma.comment.create({
    data: {
      content: 'Tolles Event!',
      authorId: user1.id,
      relatedType: 'Event',
      relatedId: '1',
    },
  });
  await prisma.comment.create({
    data: {
      content: 'Sehr informativ.',
      authorId: user2.id,
      relatedType: 'News',
      relatedId: '1',
    },
  });
  console.log('✅ Created comments');

  // --- POLL RESPONSES ---
  const pollOption = await prisma.pollOption.findFirst({
    where: { pollId: poll.id },
  });
  if (pollOption) {
    await prisma.pollResponse.create({
      data: {
        pollId: poll.id,
        optionId: pollOption.id,
        userId: user1.id,
      },
    });
    await prisma.pollResponse.create({
      data: {
        pollId: poll.id,
        optionId: pollOption.id,
        userId: user2.id,
      },
    });
    console.log('✅ Created poll responses');
  }

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
