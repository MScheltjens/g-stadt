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

  // Clear existing data
  await prisma.service.deleteMany();
  await prisma.news.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();

  // Seed Users
  console.log('👤 Seeding users...');
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'admin@g-stadt.de',
        password: '$2a$10$YourHashedPasswordHere', // Remember to hash passwords in production
      },
    }),
    prisma.user.create({
      data: {
        email: 'redaktion@g-stadt.de',
        password: '$2a$10$YourHashedPasswordHere',
      },
    }),
  ]);
  console.log(`✅ Created ${users.length} users`);

  // Seed Events
  console.log('📅 Seeding events...');
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: 'Stadtführung durch G-Stadt',
        description:
          'Entdecken Sie die historische Altstadt mit unseren erfahrenen Stadtführern. Eine spannende Reise durch 800 Jahre Stadtgeschichte.',
        date: new Date('2025-10-12T14:00:00'),
        location: 'Innenstadt, Treffpunkt Marktplatz',
        category: 'Kultur',
      },
    }),
    prisma.event.create({
      data: {
        title: 'Wochenmarkt',
        description:
          'Frische regionale Produkte von lokalen Erzeugern. Obst, Gemüse, Käse, Backwaren und vieles mehr.',
        date: new Date('2025-10-15T08:00:00'),
        location: 'Marktplatz',
        category: 'Markt',
      },
    }),
    prisma.event.create({
      data: {
        title: 'Stadtfest 2025',
        description:
          'Das große Stadtfest mit Live-Musik, Essensständen und buntem Programm für die ganze Familie.',
        date: new Date('2025-11-05T12:00:00'),
        location: 'Innenstadt',
        category: 'Fest',
      },
    }),
    prisma.event.create({
      data: {
        title: 'Bürgerversammlung',
        description:
          'Offene Bürgerversammlung zur Stadtentwicklung. Diskutieren Sie mit uns über die Zukunft von G-Stadt.',
        date: new Date('2025-10-20T18:00:00'),
        location: 'Rathaus, großer Sitzungssaal',
        category: 'Politik',
      },
    }),
    prisma.event.create({
      data: {
        title: 'Herbstkonzert im Park',
        description:
          'Das Stadtorchester lädt zum traditionellen Herbstkonzert ein. Eintritt frei.',
        date: new Date('2025-10-25T16:00:00'),
        location: 'Stadtpark, Musikpavillon',
        category: 'Kultur',
      },
    }),
    prisma.event.create({
      data: {
        title: 'Weihnachtsmarkt Eröffnung',
        description:
          'Feierliche Eröffnung des Weihnachtsmarkts mit dem Bürgermeister und Live-Musik.',
        date: new Date('2025-11-28T17:00:00'),
        location: 'Marktplatz',
        category: 'Fest',
      },
    }),
  ]);
  console.log(`✅ Created ${events.length} events`);

  // Seed News
  console.log('📰 Seeding news...');
  const news = await Promise.all([
    prisma.news.create({
      data: {
        title: 'Stadtfest am Wochenende - Straßensperrungen beachten',
        excerpt:
          'Informationen zu Straßensperrungen und Programmübersicht für das kommende Stadtfest.',
        content: `Das große Stadtfest findet am kommenden Wochenende statt. Bitte beachten Sie folgende Straßensperrungen:
        
        - Hauptstraße: Freitag 18:00 bis Sonntag 22:00 Uhr
        - Marktplatz: Donnerstag 20:00 bis Montag 06:00 Uhr
        - Kirchstraße: Samstag 10:00 bis Sonntag 20:00 Uhr
        
        Parkmöglichkeiten finden Sie auf dem P+R Parkplatz am Stadtrand mit kostenlosem Shuttle-Service.
        
        Programm-Highlights:
        - Samstag 14:00 Uhr: Eröffnung durch den Bürgermeister
        - Samstag 16:00 Uhr: Live-Musik auf der Hauptbühne
        - Sonntag 11:00 Uhr: Familientag mit Kinderprogramm`,
        category: 'Veranstaltungen',
        published: true,
        publishedAt: new Date(),
      },
    }),
    prisma.news.create({
      data: {
        title: 'Neues Bürgerbüro eröffnet',
        excerpt:
          'Erweiterte Öffnungszeiten und moderne Ausstattung für besseren Service.',
        content: `Die Stadt G-Stadt freut sich, die Eröffnung eines neuen Bürgerbüros bekannt zu geben.
        
        Das neue Bürgerbüro bietet:
        - Erweiterte Öffnungszeiten: Mo-Fr 8:00-18:00 Uhr, Sa 9:00-13:00 Uhr
        - Moderne digitale Terminals für Selbstbedienung
        - Barrierefreier Zugang
        - Kurze Wartezeiten durch Online-Terminbuchung
        
        Adresse: Rathausstraße 12, 12345 G-Stadt
        
        Alle Bürgerservices wie Personalausweise, Meldewesen und Gewerbeanmeldungen sind nun zentral verfügbar.`,
        category: 'Verwaltung',
        published: true,
        publishedAt: new Date(),
      },
    }),
    prisma.news.create({
      data: {
        title: 'Bauarbeiten am Hauptbahnhof',
        excerpt:
          'Modernisierung der Bahnhofsinfrastruktur - Einschränkungen ab nächster Woche.',
        content: `Ab nächster Woche beginnen umfangreiche Modernisierungsarbeiten am Hauptbahnhof G-Stadt.
        
        Zeitraum: 20. Oktober 2025 bis 15. März 2026
        
        Maßnahmen:
        - Erneuerung der Gleisanlagen
        - Modernisierung der Bahnsteige
        - Neubau eines Aufzugs (barrierefrei)
        - Sanierung des Bahnhofsgebäudes
        
        Während der Bauphase:
        - Einige Züge halten am Bahnhof G-Stadt West
        - Ersatzbusse zwischen den Bahnhöfen
        - Längere Fahrzeiten einplanen
        
        Wir bitten um Verständnis für die Unannehmlichkeiten.`,
        category: 'Verkehr',
        published: true,
        publishedAt: new Date(),
      },
    }),
    prisma.news.create({
      data: {
        title: 'Stadtbibliothek mit neuen Öffnungszeiten',
        excerpt:
          'Jetzt auch sonntags geöffnet - Mehr Zeit zum Lesen und Lernen.',
        content: `Die Stadtbibliothek G-Stadt erweitert ihre Öffnungszeiten und ist ab sofort auch sonntags für Sie da.
        
        Neue Öffnungszeiten:
        - Montag - Freitag: 10:00 - 19:00 Uhr
        - Samstag: 10:00 - 16:00 Uhr
        - Sonntag: 13:00 - 17:00 Uhr (NEU!)
        
        Zusätzliche Services:
        - Kostenlose WLAN-Nutzung
        - Arbeitsplätze mit Steckdosen
        - Leseecke für Kinder
        - Regelmäßige Veranstaltungen und Lesungen
        
        Der Zugang zur Online-Bibliothek steht 24/7 zur Verfügung.`,
        category: 'Bildung',
        published: true,
        publishedAt: new Date(),
      },
    }),
    prisma.news.create({
      data: {
        title: 'Neuer Radweg entlang der Stadtgrenze',
        excerpt:
          'Nachhaltige Mobilität wird gefördert - 5km neuer Radweg eingeweiht.',
        content: `G-Stadt investiert weiter in nachhaltige Mobilität. Der neue Radweg entlang der östlichen Stadtgrenze wurde heute offiziell eröffnet.
        
        Details zum Radweg:
        - Länge: 5,2 Kilometer
        - Breite: 2,5 Meter (für beide Richtungen)
        - LED-Beleuchtung für sichere Nachtfahrten
        - Anbindung an bestehende Radwegnetze
        
        Der Radweg verbindet:
        - Stadtzentrum ↔ Gewerbegebiet Ost
        - Wohngebiete ↔ Naherholungsgebiet
        - Schulen ↔ Sportanlagen
        
        Fahrradverleih-Stationen sind an mehreren Punkten verfügbar.`,
        category: 'Verkehr',
        published: true,
        publishedAt: new Date(),
      },
    }),
  ]);
  console.log(`✅ Created ${news.length} news articles`);

  // Seed Services
  console.log('🏛️ Seeding services...');
  const services = await Promise.all([
    prisma.service.create({
      data: {
        title: 'Personalausweis beantragen',
        description:
          'Beantragen Sie Ihren neuen Personalausweis online oder im Bürgerbüro. Benötigte Unterlagen und Informationen zur Bearbeitungszeit.',
        category: 'Bürgerdienste',
        icon: 'Landmark',
        link: '/services/personalausweis',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Führerschein umschreiben',
        description:
          'Informationen zum Umschreiben von Führerscheinen. Online-Terminvereinbarung und benötigte Dokumente.',
        category: 'Bürgerdienste',
        icon: 'Landmark',
        link: '/services/fuehrerschein',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Wohnsitz anmelden',
        description:
          'Melden Sie Ihren neuen Wohnsitz in G-Stadt an. Alle Informationen zur Anmeldung und erforderliche Unterlagen.',
        category: 'Bürgerdienste',
        icon: 'Landmark',
        link: '/services/wohnsitz',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Veranstaltungskalender',
        description:
          'Alle Informationen und Services rund um Veranstaltungen. Entdecken Sie kulturelle Events, Märkte und Feste in G-Stadt.',
        category: 'Veranstaltungen',
        icon: 'Calendar',
        link: '/events',
      },
    }),
    prisma.service.create({
      data: {
        title: 'ÖPNV Fahrpläne',
        description:
          'Alle Informationen und Services rund um ÖPNV & Mobilität. Fahrpläne, Ticketpreise und Verbindungen.',
        category: 'ÖPNV & Mobilität',
        icon: 'Bus',
        link: '/services/oepnv',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Fahrradverleih',
        description:
          'Leihen Sie sich ein Fahrrad und erkunden Sie G-Stadt nachhaltig. Stationen im gesamten Stadtgebiet.',
        category: 'ÖPNV & Mobilität',
        icon: 'Bus',
        link: '/services/fahrradverleih',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Müllabfuhr Termine',
        description:
          'Alle Informationen und Services rund um Abfall & Recycling. Abfuhrtermine und Mülltrennung.',
        category: 'Abfall & Recycling',
        icon: 'Trash2',
        link: '/services/muellabfuhr',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Sperrmüll anmelden',
        description:
          'Melden Sie Ihren Sperrmüll online an. Einfach, schnell und kostenlos für G-Stadt Bürger.',
        category: 'Abfall & Recycling',
        icon: 'Trash2',
        link: '/services/sperrmuell',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Rathaus Kontakt',
        description:
          'Alle Informationen und Services rund um Stadtverwaltung. Kontaktdaten, Öffnungszeiten und Ansprechpartner.',
        category: 'Stadtverwaltung',
        icon: 'Building2',
        link: '/contact',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Stadtrat & Politik',
        description:
          'Informationen zu Stadtratssitzungen, Beschlüssen und politischen Gremien in G-Stadt.',
        category: 'Stadtverwaltung',
        icon: 'Building2',
        link: '/services/stadtrat',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Pressemitteilungen',
        description:
          'Alle Informationen und Services rund um Neuigkeiten. Aktuelle Pressemitteilungen der Stadtverwaltung.',
        category: 'Neuigkeiten',
        icon: 'Newspaper',
        link: '/news',
      },
    }),
    prisma.service.create({
      data: {
        title: 'Newsletter abonnieren',
        description:
          'Bleiben Sie informiert! Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig Neuigkeiten aus G-Stadt.',
        category: 'Neuigkeiten',
        icon: 'Newspaper',
        link: '/newsletter',
      },
    }),
  ]);
  console.log(`✅ Created ${services.length} services`);

  console.log('');
  console.log('🎉 Database seeded successfully!');
  console.log('');
  console.log('Summary:');
  console.log(`  - ${users.length} users`);
  console.log(`  - ${events.length} events`);
  console.log(`  - ${news.length} news articles`);
  console.log(`  - ${services.length} services`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
