export interface WebSiteConfig {
  copyrightOwner: string;
  hamburgerMenuPosition: 'left' | 'right';
  socialLinksMenuPosition: 'left' | 'right';
  websiteSubTitle: string;
  websiteTitle: string;
  websiteShortTitle: string;
  websiteUrl: string;
  legalNotice: LegalNotice;
  links: Links;
  displaySocialLinksInFooter: boolean;
  displaySocialLinksViaButton: boolean;
  displayGuidedTour: boolean;
  displayAccountButtons: boolean;
  recaptchaV2: RecaptchaV2;
  selectOptions: Record<string, SelectOptions[]>;
}

export interface SelectOptions {
  label: string;
  value?: string;
}

export interface RecaptchaV2 {
  sitekey: string;
  theme: 'dark' | 'light';
  size: 'normal' | 'compact';
}

export interface LegalNotice {
  lastUpdate: string; // date in ISO format : yyyy/mm/dd
}

export interface Link {
  show: boolean;
  url: string;
  title: string;
  label: string;
}
export interface Links {
  facebook: Link;
  instagram: Link;
  whatsApp: Link;
  youtube: Link;
  email: Link;
  phone: Link;
  linkedin: Link;
  rdv: Link;
  googleMaps: Link;
  waze: Link;
}

export const websiteConfig: WebSiteConfig = {
  copyrightOwner: 'Sandra Giraudeau',
  hamburgerMenuPosition: 'left',
  socialLinksMenuPosition: 'right',
  websiteSubTitle: '',
  websiteTitle:
    'Sandra Giraudeau - Énergétique Traditionnelle Chinoise, massage Natui, massage Tantrique et Cachemirien',
  websiteShortTitle: 'Sandra Giraudeau',
  websiteUrl: 'https://sandra-giraudeau.com',
  legalNotice: {
    lastUpdate: '2023/06/21',
  },
  displayGuidedTour: false,
  displaySocialLinksInFooter: true,
  displaySocialLinksViaButton: true,
  displayAccountButtons: false,
  links: {
    phone: {
      url: '0783649612',
      title: "M'appeler au téléphone",
      label: 'Phone',
      show: true,
    },
    email: {
      url: 'sandramtc44@gmail.com',
      title: "M'envoyer un e-mail",
      label: 'Email',
      show: true,
    },
    youtube: {
      url: 'https://www.youtube.com/channel/0123456789',
      title: 'Voir mes vidéos sur Youtube',
      label: 'Youtube',
      show: false,
    },
    instagram: {
      url: 'https://www.instagram.com/john-doe/?hl=fr',
      title: 'Me contacter sur Instagram',
      label: 'Instagram',
      show: false,
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/sandra-giraudeau-42a771216/',
      title: 'Me contacter sur Linkedin',
      label: 'Linkedin',
      show: true,
    },
    facebook: {
      url: 'https://www.facebook.com/energetiquetraditionnellechinoisesandragiraudeau/',
      title: 'Me contacter sur Facebook',
      label: 'Facebook',
      show: true,
    },
    whatsApp: {
      url: 'https://wa.me/0123456789',
      title: 'Me contacter sur WhatsApp',
      label: 'WhatsApp',
      show: true,
    },
    rdv: {
      url: 'https://calendly.com/sandra-giraudeau/contact-et-reservation',
      title: 'Me contacter ou prendre un rendez-vous',
      label: 'Réserver un créneau horaire pour poser vos questions',
      show: true,
    },
    googleMaps: {
      url: 'https://maps.app.goo.gl/pY8ED3ptbLR2W1cu9',
      title: 'Itinéraire via Google Maps',
      label: 'Itinéraire via G. Maps',
      show: true,
    },
    waze: {
      url: 'https://ul.waze.com/ul?place=ChIJAafBMwCVBUgRot6yrLYMQ5A&ll=47.16209080%2C-1.68027300&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
      title: 'Itinéraire via Waze',
      label: 'Itinéraire via Waze',
      show: true,
    },
  },
  recaptchaV2: {
    sitekey: '6LcqzGUoAAAAAGhv_qQUmFirTLpa5yY9AI4KkIml',
    theme: 'dark',
    size: 'normal',
  },
  selectOptions: {
    'contact-form-subjects': [
      { label: 'Acupuncture' },
      { label: 'Aculifting' },
      { label: 'Massage Éveil des Sens' },
      { label: 'Massage Éveil Divin' },
      { label: 'Massage Éveil des Sens 4 mains' },
      { label: 'Massage Couple' },
      { label: 'Autre' },
    ],
  },
};
