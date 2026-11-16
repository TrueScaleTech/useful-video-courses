import type { KINDS, LEVELS, PLATFORMS } from './content.config';

export const LOCALES = ['en', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

type Level = (typeof LEVELS)[number];
type Platform = (typeof PLATFORMS)[number];
type Kind = (typeof KINDS)[number];

interface Strings {
  siteTitle: string;
  tagline: string;
  intro: string;
  navCourses: string;
  navAbout: string;
  switchLanguage: string;
  toDarkTheme: string;
  toLightTheme: string;
  filterKind: string;
  kinds: Record<Kind, string>;
  all: string;
  channelOne: string;
  channelMany: string;
  videoOne: string;
  videoMany: string;
  empty: string;
  visit: string;
  visitChannel: string;
  visitVideo: string;
  hours: (h: number) => string;
  free: string;
  paid: string;
  addedIn: string;
  aboutTitle: string;
  aboutSections: { heading: string; body: string }[];
  footer: string;
  levels: Record<Level, string>;
  platforms: Record<Platform, string>;
}

export const STRINGS: Record<Locale, Strings> = {
  en: {
    siteTitle: 'Useful video courses',
    tagline: 'Information security courses I found genuinely useful.',
    intro:
      'These are YouTube video courses on security, networking, automation and much more that I found especially useful and interesting. Every link goes to the YouTube video or channel.',
    navCourses: 'Courses',
    navAbout: 'About',
    switchLanguage: 'Switch to Italian',
    toDarkTheme: 'Switch to the dark theme',
    toLightTheme: 'Switch to the light theme',
    filterKind: 'Type',
    kinds: { video: 'Video', channel: 'Channel' },
    all: 'All',
    channelOne: '1 channel',
    channelMany: '{n} channels',
    videoOne: '1 video',
    videoMany: '{n} videos',
    empty: 'No course matches these filters.',
    visit: 'Open the course',
    visitChannel: 'Open the channel',
    visitVideo: 'Open the video',
    hours: (h) => `${h} h`,
    free: 'Free',
    paid: 'Paid',
    addedIn: 'Added in',
    aboutTitle: 'About this list',
    aboutSections: [
      {
        heading: 'How I choose',
        body: 'I list videos and channels that I found especially useful and interesting. Each entry has a short description; it is not a review from the author or the platform.',
      },
      {
        heading: 'Links only',
        body: 'Every entry is a plain link to the original page. This site does not host or copy videos, transcripts or course material, and it embeds no player. The rights belong to their authors.',
      },
      {
        heading: 'Privacy',
        body: 'No cookies, no analytics, no third-party fonts or scripts. For YouTube courses, the thumbnail or channel banner is loaded straight from YouTube’s image servers, which therefore see your IP address; this site sends no referrer with that request. Nothing else is loaded from any platform until you click a link, and what happens after that is governed by their own policies. If you choose a theme with the toggle, that choice is saved only in your own browser and never sent anywhere.',
      },
      {
        heading: 'Independence',
        body: 'This is an independent project. It is not affiliated with, sponsored or endorsed by YouTube, Udemy, Coursera or any author listed. There are no affiliate links.',
      },
    ],
    footer: 'Independent project. Not affiliated with any platform or author listed.',
    levels: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
    platforms: { youtube: 'YouTube', udemy: 'Udemy', coursera: 'Coursera', other: 'Other' },
  },
  it: {
    siteTitle: 'Videocorsi utili',
    tagline: 'Corsi di sicurezza informatica che ho trovato davvero utili.',
    intro:
      'Questi sono video corsi YouTube sulla sicurezza, reti, automazione e molto altro che mi sono stati particolarmente utili e ho ritenuto interessanti. Ogni link porta al video/canale YouTube.',
    navCourses: 'Corsi',
    navAbout: 'Informazioni',
    switchLanguage: 'Passa all’inglese',
    toDarkTheme: 'Passa al tema scuro',
    toLightTheme: 'Passa al tema chiaro',
    filterKind: 'Tipo',
    kinds: { video: 'Video', channel: 'Canale' },
    all: 'Tutti',
    channelOne: '1 canale',
    channelMany: '{n} canali',
    videoOne: '1 video',
    videoMany: '{n} video',
    empty: 'Nessun corso corrisponde ai filtri.',
    visit: 'Apri il corso',
    visitChannel: 'Apri il canale',
    visitVideo: 'Apri il video',
    hours: (h) => `${String(h).replace('.', ',')} h`,
    free: 'Gratuito',
    paid: 'A pagamento',
    addedIn: 'Aggiunto nel',
    aboutTitle: 'Su questo elenco',
    aboutSections: [
      {
        heading: 'Come scelgo',
        body: 'Inserisco video e canali che mi sono stati particolarmente utili e che ho ritenuto interessanti. Ogni scheda ha una breve descrizione, che non è una recensione dell’autore o della piattaforma.',
      },
      {
        heading: 'Solo link',
        body: 'Ogni voce è un semplice link alla pagina originale. Il sito non ospita né copia video, trascrizioni o materiali dei corsi e non incorpora alcun player. I diritti restano ai rispettivi autori.',
      },
      {
        heading: 'Privacy',
        body: 'Nessun cookie, nessuna analisi, nessun font o script di terzi. Per i corsi YouTube la miniatura o il banner del canale viene caricato direttamente dai server di immagini di YouTube, che quindi vedono il tuo indirizzo IP; il sito non invia alcun referrer con quella richiesta. Nient’altro viene caricato da una piattaforma finché non clicchi un link; da lì in poi valgono le loro regole. Se scegli un tema con l’interruttore, la scelta resta solo nel tuo browser e non viene mai inviata.',
      },
      {
        heading: 'Indipendenza',
        body: 'Progetto indipendente. Non è affiliato, sponsorizzato né approvato da YouTube, Udemy, Coursera o dagli autori elencati. Non ci sono link di affiliazione.',
      },
    ],
    footer: 'Progetto indipendente. Non affiliato a nessuna piattaforma o autore elencato.',
    levels: { beginner: 'Base', intermediate: 'Intermedio', advanced: 'Avanzato' },
    platforms: { youtube: 'YouTube', udemy: 'Udemy', coursera: 'Coursera', other: 'Altro' },
  },
};

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'it' : 'en';
}
