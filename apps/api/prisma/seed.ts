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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Birth Registration',
              description:
                'Register the birth of a child and obtain a birth certificate.',
              slug: 'birth-registration',
            },
            {
              locale: LOCALES.FR,
              title: 'Déclaration de naissance',
              description:
                'Déclarez la naissance d’un enfant et obtenez un acte de naissance.',
              slug: 'declaration-naissance',
            },
            {
              locale: LOCALES.DE,
              title: 'Geburtsanmeldung',
              description:
                'Melden Sie die Geburt eines Kindes an und erhalten Sie eine Geburtsurkunde.',
              slug: 'geburtsanmeldung',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Marriage Certificate',
              description: 'Request an official marriage certificate copy.',
              slug: 'marriage-certificate',
            },
            {
              locale: LOCALES.FR,
              title: 'Certificat de mariage',
              description:
                'Demandez une copie officielle de votre certificat de mariage.',
              slug: 'certificat-mariage',
            },
            {
              locale: LOCALES.DE,
              title: 'Heiratsurkunde',
              description:
                'Fordern Sie eine offizielle Kopie Ihrer Heiratsurkunde an.',
              slug: 'heiratsurkunde',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Change of Address',
              description: 'Notify the city of your new address after moving.',
              slug: 'change-of-address',
            },
            {
              locale: LOCALES.FR,
              title: 'Changement d’adresse',
              description:
                'Signalez votre nouvelle adresse à la mairie après un déménagement.',
              slug: 'changement-adresse',
            },
            {
              locale: LOCALES.DE,
              title: 'Adressänderung',
              description:
                'Melden Sie Ihre neue Adresse nach einem Umzug bei der Stadt.',
              slug: 'adressaenderung',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Death Certificate',
              description:
                'Apply for a death certificate for a deceased relative.',
              slug: 'death-certificate',
            },
            {
              locale: LOCALES.FR,
              title: 'Acte de décès',
              description: 'Demandez un acte de décès pour un proche.',
              slug: 'acte-deces',
            },
            {
              locale: LOCALES.DE,
              title: 'Sterbeurkunde',
              description:
                'Beantragen Sie eine Sterbeurkunde für einen verstorbenen Angehörigen.',
              slug: 'sterbeurkunde',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Divorce Registration',
              description: 'Register a divorce and update your civil status.',
              slug: 'divorce-registration',
            },
            {
              locale: LOCALES.FR,
              title: 'Enregistrement de divorce',
              description:
                'Enregistrez un divorce et mettez à jour votre état civil.',
              slug: 'enregistrement-divorce',
            },
            {
              locale: LOCALES.DE,
              title: 'Scheidungsregistrierung',
              description:
                'Registrieren Sie eine Scheidung und aktualisieren Sie Ihren Familienstand.',
              slug: 'scheidungsregistrierung',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Job Search Assistance',
              description:
                'Find local job openings and get help with your job search.',
              slug: 'job-search-assistance',
            },
            {
              locale: LOCALES.FR,
              title: "Aide à la recherche d'emploi",
              description:
                "Trouvez des offres d'emploi locales et obtenez de l'aide pour votre recherche.",
              slug: 'aide-recherche-emploi',
            },
            {
              locale: LOCALES.DE,
              title: 'Jobsuche-Hilfe',
              description:
                'Finden Sie lokale Stellenangebote und erhalten Sie Unterstützung bei der Jobsuche.',
              slug: 'jobsuche-hilfe',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Start a Business',
              description:
                'Guidance and permits for starting your own business.',
              slug: 'start-business',
            },
            {
              locale: LOCALES.FR,
              title: 'Créer une entreprise',
              description:
                'Conseils et autorisations pour créer votre entreprise.',
              slug: 'creer-entreprise',
            },
            {
              locale: LOCALES.DE,
              title: 'Unternehmensgründung',
              description:
                'Beratung und Genehmigungen für die Gründung eines eigenen Unternehmens.',
              slug: 'unternehmensgruendung',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Unemployment Benefits',
              description:
                'Apply for unemployment benefits and financial support.',
              slug: 'unemployment-benefits',
            },
            {
              locale: LOCALES.FR,
              title: 'Allocations chômage',
              description:
                'Demandez des allocations chômage et un soutien financier.',
              slug: 'allocations-chomage',
            },
            {
              locale: LOCALES.DE,
              title: 'Arbeitslosengeld',
              description:
                'Beantragen Sie Arbeitslosengeld und finanzielle Unterstützung.',
              slug: 'arbeitslosengeld',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Building Permit Application',
              description: 'Apply for a permit to build or renovate your home.',
              slug: 'building-permit-application',
            },
            {
              locale: LOCALES.FR,
              title: 'Demande de permis de construire',
              description:
                'Demandez un permis pour construire ou rénover votre logement.',
              slug: 'demande-permis-construire',
            },
            {
              locale: LOCALES.DE,
              title: 'Bauantrag',
              description:
                'Beantragen Sie eine Genehmigung zum Bauen oder Renovieren Ihres Hauses.',
              slug: 'bauantrag',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Social Housing Application',
              description: 'Request access to social or affordable housing.',
              slug: 'social-housing-application',
            },
            {
              locale: LOCALES.FR,
              title: 'Demande de logement social',
              description: 'Demandez un logement social ou abordable.',
              slug: 'demande-logement-social',
            },
            {
              locale: LOCALES.DE,
              title: 'Sozialwohnungsantrag',
              description:
                'Beantragen Sie Zugang zu Sozial- oder günstigen Wohnungen.',
              slug: 'sozialwohnungsantrag',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Report a Housing Issue',
              description: 'Report problems with your housing or neighborhood.',
              slug: 'report-housing-issue',
            },
            {
              locale: LOCALES.FR,
              title: 'Signaler un problème de logement',
              description:
                'Signalez un problème avec votre logement ou votre quartier.',
              slug: 'signaler-probleme-logement',
            },
            {
              locale: LOCALES.DE,
              title: 'Wohnungsproblem melden',
              description:
                'Melden Sie Probleme mit Ihrer Wohnung oder Nachbarschaft.',
              slug: 'wohnungsproblem-melden',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Waste Collection Schedule',
              description: 'View the schedule for household waste collection.',
              slug: 'waste-collection-schedule',
            },
            {
              locale: LOCALES.FR,
              title: 'Calendrier de collecte des déchets',
              description:
                'Consultez le calendrier de collecte des déchets ménagers.',
              slug: 'calendrier-collecte-dechets',
            },
            {
              locale: LOCALES.DE,
              title: 'Abfallabfuhrplan',
              description: 'Sehen Sie den Abholplan für Hausmüll ein.',
              slug: 'abfallabfuhrplan',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Recycling Center Locations',
              description:
                'Find your nearest recycling center and accepted materials.',
              slug: 'recycling-center-locations',
            },
            {
              locale: LOCALES.FR,
              title: 'Centres de recyclage',
              description:
                'Trouvez le centre de recyclage le plus proche et les matériaux acceptés.',
              slug: 'centres-recyclage',
            },
            {
              locale: LOCALES.DE,
              title: 'Recyclinghöfe',
              description:
                'Finden Sie den nächsten Recyclinghof und die akzeptierten Materialien.',
              slug: 'recyclinghoefe',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Report Illegal Dumping',
              description: 'Report illegal dumping or environmental hazards.',
              slug: 'report-illegal-dumping',
            },
            {
              locale: LOCALES.FR,
              title: 'Signaler un dépôt sauvage',
              description:
                'Signalez un dépôt illégal ou un danger environnemental.',
              slug: 'signaler-depot-sauvage',
            },
            {
              locale: LOCALES.DE,
              title: 'Illegale Müllablagerung melden',
              description:
                'Melden Sie illegale Müllablagerungen oder Umweltgefahren.',
              slug: 'illegale-muellablagerung-melden',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Book a Sports Facility',
              description:
                'Reserve a sports hall, field, or court for your activity.',
              slug: 'book-sports-facility',
            },
            {
              locale: LOCALES.FR,
              title: 'Réserver une installation sportive',
              description:
                'Réservez un gymnase, un terrain ou un court pour votre activité.',
              slug: 'reserver-installation-sportive',
            },
            {
              locale: LOCALES.DE,
              title: 'Sportstätte buchen',
              description:
                'Reservieren Sie eine Sporthalle, ein Feld oder einen Platz für Ihre Aktivität.',
              slug: 'sportstaette-buchen',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Library Membership',
              description:
                'Sign up for a library card and access local libraries.',
              slug: 'library-membership',
            },
            {
              locale: LOCALES.FR,
              title: 'Adhésion à la bibliothèque',
              description:
                'Inscrivez-vous pour une carte de bibliothèque et accédez aux bibliothèques locales.',
              slug: 'adhesion-bibliotheque',
            },
            {
              locale: LOCALES.DE,
              title: 'Bibliotheksmitgliedschaft',
              description:
                'Melden Sie sich für einen Bibliotheksausweis an und nutzen Sie lokale Bibliotheken.',
              slug: 'bibliotheksmitgliedschaft',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Event Calendar',
              description:
                'Browse upcoming city events, concerts, and exhibitions.',
              slug: 'event-calendar',
            },
            {
              locale: LOCALES.FR,
              title: 'Calendrier des événements',
              description:
                'Consultez les événements, concerts et expositions à venir.',
              slug: 'calendrier-evenements',
            },
            {
              locale: LOCALES.DE,
              title: 'Veranstaltungskalender',
              description:
                'Stöbern Sie in bevorstehenden Veranstaltungen, Konzerten und Ausstellungen.',
              slug: 'veranstaltungskalender',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Daycare Enrollment',
              description: 'Enroll your child in a local daycare or preschool.',
              slug: 'daycare-enrollment',
            },
            {
              locale: LOCALES.FR,
              title: 'Inscription à la crèche',
              description:
                'Inscrivez votre enfant à une crèche ou une maternelle.',
              slug: 'inscription-creche',
            },
            {
              locale: LOCALES.DE,
              title: 'Kita-Anmeldung',
              description:
                'Melden Sie Ihr Kind in einer Kindertagesstätte oder Vorschule an.',
              slug: 'kita-anmeldung',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'School Registration',
              description:
                'Register your child for primary or secondary school.',
              slug: 'school-registration',
            },
            {
              locale: LOCALES.FR,
              title: 'Inscription à l’école',
              description:
                'Inscrivez votre enfant à l’école primaire ou secondaire.',
              slug: 'inscription-ecole',
            },
            {
              locale: LOCALES.DE,
              title: 'Schulanmeldung',
              description:
                'Melden Sie Ihr Kind für die Grund- oder weiterführende Schule an.',
              slug: 'schulanmeldung',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Adult Education Courses',
              description: 'Sign up for adult education and language courses.',
              slug: 'adult-education-courses',
            },
            {
              locale: LOCALES.FR,
              title: 'Cours pour adultes',
              description:
                'Inscrivez-vous à des cours pour adultes et des cours de langue.',
              slug: 'cours-adultes',
            },
            {
              locale: LOCALES.DE,
              title: 'Erwachsenenbildungskurse',
              description:
                'Melden Sie sich für Erwachsenen- und Sprachkurse an.',
              slug: 'erwachsenenbildungskurse',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Parking Permit Application',
              description: 'Apply for a residential or visitor parking permit.',
              slug: 'parking-permit-application',
            },
            {
              locale: LOCALES.FR,
              title: 'Demande de permis de stationnement',
              description:
                'Demandez un permis de stationnement résidentiel ou visiteur.',
              slug: 'demande-permis-stationnement',
            },
            {
              locale: LOCALES.DE,
              title: 'Parkausweisantrag',
              description:
                'Beantragen Sie einen Bewohner- oder Besucherparkausweis.',
              slug: 'parkausweisantrag',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Public Transport Information',
              description: 'Get information on local buses, trams, and trains.',
              slug: 'public-transport-information',
            },
            {
              locale: LOCALES.FR,
              title: 'Informations sur les transports publics',
              description:
                'Obtenez des informations sur les bus, trams et trains locaux.',
              slug: 'informations-transports-publics',
            },
            {
              locale: LOCALES.DE,
              title: 'ÖPNV-Informationen',
              description:
                'Erhalten Sie Informationen zu lokalen Bussen, Straßenbahnen und Zügen.',
              slug: 'oepnv-informationen',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Bike Sharing Registration',
              description: 'Sign up for the city bike sharing program.',
              slug: 'bike-sharing-registration',
            },
            {
              locale: LOCALES.FR,
              title: 'Inscription au service de vélos partagés',
              description:
                'Inscrivez-vous au service de vélos partagés de la ville.',
              slug: 'inscription-velos-partages',
            },
            {
              locale: LOCALES.DE,
              title: 'Fahrradverleih-Anmeldung',
              description:
                'Melden Sie sich für das städtische Fahrradverleihsystem an.',
              slug: 'fahrradverleih-anmeldung',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Social Assistance Application',
              description: 'Apply for social assistance and welfare programs.',
              slug: 'social-assistance-application',
            },
            {
              locale: LOCALES.FR,
              title: 'Demande d’aide sociale',
              description:
                'Demandez une aide sociale et des programmes de bien-être.',
              slug: 'demande-aide-sociale',
            },
            {
              locale: LOCALES.DE,
              title: 'Sozialhilfeantrag',
              description:
                'Beantragen Sie Sozialhilfe und Unterstützungsprogramme.',
              slug: 'sozialhilfeantrag',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Elderly Care Services',
              description: 'Find and request care services for seniors.',
              slug: 'elderly-care-services',
            },
            {
              locale: LOCALES.FR,
              title: 'Services de soins aux personnes âgées',
              description:
                'Trouvez et demandez des services de soins pour les personnes âgées.',
              slug: 'services-soins-personnes-agees',
            },
            {
              locale: LOCALES.DE,
              title: 'Seniorenbetreuung',
              description:
                'Finden und beantragen Sie Betreuungsdienste für Senioren.',
              slug: 'seniorenbetreuung',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Disability Support',
              description:
                'Access support and resources for people with disabilities.',
              slug: 'disability-support',
            },
            {
              locale: LOCALES.FR,
              title: 'Soutien aux personnes handicapées',
              description:
                'Accédez à un soutien et à des ressources pour les personnes handicapées.',
              slug: 'soutien-personnes-handicapees',
            },
            {
              locale: LOCALES.DE,
              title: 'Behindertenunterstützung',
              description:
                'Zugang zu Unterstützung und Ressourcen für Menschen mit Behinderungen.',
              slug: 'behindertenunterstuetzung',
            },
          ],
        },
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
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'District Information',
              description:
                'Get information about your city district and local services.',
              slug: 'district-information',
            },
            {
              locale: LOCALES.FR,
              title: 'Informations sur le district',
              description:
                'Obtenez des informations sur votre district et les services locaux.',
              slug: 'informations-district',
            },
            {
              locale: LOCALES.DE,
              title: 'Bezirksinformationen',
              description:
                'Erhalten Sie Informationen zu Ihrem Stadtbezirk und lokalen Diensten.',
              slug: 'bezirksinformationen',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'Report a City Issue',
              description:
                'Report issues in your city or district (e.g., streetlight out, pothole).',
              slug: 'report-city-issue',
            },
            {
              locale: LOCALES.FR,
              title: 'Signaler un problème dans la ville',
              description:
                'Signalez un problème dans votre ville ou district (ex : lampadaire en panne, nid-de-poule).',
              slug: 'signaler-probleme-ville',
            },
            {
              locale: LOCALES.DE,
              title: 'Stadtproblem melden',
              description:
                'Melden Sie Probleme in Ihrer Stadt oder Ihrem Bezirk (z.B. defekte Straßenbeleuchtung, Schlagloch).',
              slug: 'stadtproblem-melden',
            },
          ],
        },
        {
          requiresAuth: false,
          translations: [
            {
              locale: LOCALES.EN,
              title: 'City Newsletter Signup',
              description:
                'Sign up to receive news and updates from your city.',
              slug: 'city-newsletter-signup',
            },
            {
              locale: LOCALES.FR,
              title: 'Inscription à la newsletter de la ville',
              description:
                'Inscrivez-vous pour recevoir les actualités et mises à jour de votre ville.',
              slug: 'inscription-newsletter-ville',
            },
            {
              locale: LOCALES.DE,
              title: 'Stadt-Newsletter Anmeldung',
              description:
                'Melden Sie sich für Neuigkeiten und Updates Ihrer Stadt an.',
              slug: 'stadt-newsletter-anmeldung',
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
