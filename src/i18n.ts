import type { LEVELS, PLATFORMS, TOPICS } from './content.config';

export const LOCALES = ['en', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

type Level = (typeof LEVELS)[number];
type Platform = (typeof PLATFORMS)[number];
type Topic = (typeof TOPICS)[number];

interface Strings {
  siteTitle: string;
  tagline: string;
  intro: string;
  navCourses: string;
  navAbout: string;
  switchLanguage: string;
  toDarkTheme: string;
  toLightTheme: string;
  filterTopic: string;
  filterLevel: string;
  filterFreeOnly: string;
  all: string;
  countOne: string;
  countMany: string;
  empty: string;
  visit: string;
  hours: (h: number) => string;
  free: string;
  paid: string;
  addedOn: string;
  courseIn: string;
  aboutTitle: string;
  aboutSections: { heading: string; body: string }[];
  footer: string;
  levels: Record<Level, string>;
  platforms: Record<Platform, string>;
  topics: Record<Topic, string>;
  languages: Record<Locale, string>;
}

export const STRINGS: Record<Locale, Strings> = {
  en: {
    siteTitle: 'Useful video courses',
    tagline: 'Information security courses I found genuinely useful.',
    intro:
      'A short, hand-picked list of video courses on security, networks and automation. Each one has a note from me on why it helped. Every link goes to the original page.',
    navCourses: 'Courses',
    navAbout: 'About',
    switchLanguage: 'Switch to Italian',
    toDarkTheme: 'Switch to the dark theme',
    toLightTheme: 'Switch to the light theme',
    filterTopic: 'Topic',
    filterLevel: 'Level',
    filterFreeOnly: 'Free only',
    all: 'All',
    countOne: '1 course',
    countMany: '{n} courses',
    empty: 'No course matches these filters.',
    visit: 'Open the course',
    hours: (h) => `${h} h`,
    free: 'Free',
    paid: 'Paid',
    addedOn: 'Added',
    courseIn: 'Course language',
    aboutTitle: 'About this list',
    aboutSections: [
      {
        heading: 'How I choose',
        body: 'I only list courses I have followed, at least in part, and found clear and useful. The notes are my own opinion, not a review from the author or the platform.',
      },
      {
        heading: 'Links only',
        body: 'Every entry is a plain link to the original page. This site does not host or copy videos, transcripts or course material, and it embeds no player. The rights belong to their authors.',
      },
      {
        heading: 'Privacy',
        body: 'No cookies, no analytics, no third-party fonts or scripts. For YouTube courses, the thumbnail is loaded straight from YouTube’s image server, which therefore sees your IP address; this site sends no referrer with that request. Nothing else is loaded from any platform until you click a link, and what happens after that is governed by their own policies. If you choose a theme with the toggle, that choice is saved only in your own browser and never sent anywhere.',
      },
      {
        heading: 'Independence',
        body: 'This is an independent project. It is not affiliated with, sponsored or endorsed by YouTube, Udemy, Coursera or any author listed. There are no affiliate links.',
      },
    ],
    footer: 'Independent project. Not affiliated with any platform or author listed.',
    levels: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
    platforms: { youtube: 'YouTube', udemy: 'Udemy', coursera: 'Coursera', other: 'Other' },
    topics: {
      fundamentals: 'Fundamentals',
      networking: 'Networking',
      firewalls: 'Firewalls',
      appsec: 'Application security',
      pentest: 'Penetration testing',
      cloud: 'Cloud security',
      'blue-team': 'Blue team',
      grc: 'Governance and compliance',
      automation: 'Automation',
      'ai-security': 'AI security',
    },
    languages: { en: 'English', it: 'Italian' },
  },
  it: {
    siteTitle: 'Videocorsi utili',
    tagline: 'Corsi di sicurezza informatica che ho trovato davvero utili.',
    intro:
      'Un elenco breve e scelto a mano di videocorsi su sicurezza, reti e automazione. Per ognuno trovi una mia nota sul perché mi è servito. Ogni link porta alla pagina originale.',
    navCourses: 'Corsi',
    navAbout: 'Informazioni',
    switchLanguage: 'Passa all’inglese',
    toDarkTheme: 'Passa al tema scuro',
    toLightTheme: 'Passa al tema chiaro',
    filterTopic: 'Argomento',
    filterLevel: 'Livello',
    filterFreeOnly: 'Solo gratuiti',
    all: 'Tutti',
    countOne: '1 corso',
    countMany: '{n} corsi',
    empty: 'Nessun corso corrisponde ai filtri.',
    visit: 'Apri il corso',
    hours: (h) => `${String(h).replace('.', ',')} h`,
    free: 'Gratuito',
    paid: 'A pagamento',
    addedOn: 'Aggiunto',
    courseIn: 'Lingua del corso',
    aboutTitle: 'Su questo elenco',
    aboutSections: [
      {
        heading: 'Come scelgo',
        body: 'Inserisco solo corsi che ho seguito, almeno in parte, e che ho trovato chiari e utili. Le note sono una mia opinione, non una recensione dell’autore o della piattaforma.',
      },
      {
        heading: 'Solo link',
        body: 'Ogni voce è un semplice link alla pagina originale. Il sito non ospita né copia video, trascrizioni o materiali dei corsi e non incorpora alcun player. I diritti restano ai rispettivi autori.',
      },
      {
        heading: 'Privacy',
        body: 'Nessun cookie, nessuna analisi, nessun font o script di terzi. Per i corsi YouTube la miniatura viene caricata direttamente dal server di immagini di YouTube, che quindi vede il tuo indirizzo IP; il sito non invia alcun referrer con quella richiesta. Nient’altro viene caricato da una piattaforma finché non clicchi un link; da lì in poi valgono le loro regole. Se scegli un tema con l’interruttore, la scelta resta solo nel tuo browser e non viene mai inviata.',
      },
      {
        heading: 'Indipendenza',
        body: 'Progetto indipendente. Non è affiliato, sponsorizzato né approvato da YouTube, Udemy, Coursera o dagli autori elencati. Non ci sono link di affiliazione.',
      },
    ],
    footer: 'Progetto indipendente. Non affiliato a nessuna piattaforma o autore elencato.',
    levels: { beginner: 'Base', intermediate: 'Intermedio', advanced: 'Avanzato' },
    platforms: { youtube: 'YouTube', udemy: 'Udemy', coursera: 'Coursera', other: 'Altro' },
    topics: {
      fundamentals: 'Fondamenti',
      networking: 'Reti',
      firewalls: 'Firewall',
      appsec: 'Sicurezza applicativa',
      pentest: 'Penetration test',
      cloud: 'Sicurezza cloud',
      'blue-team': 'Blue team',
      grc: 'Governance e conformità',
      automation: 'Automazione',
      'ai-security': 'Sicurezza dell’IA',
    },
    languages: { en: 'Inglese', it: 'Italiano' },
  },
};

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'it' : 'en';
}
