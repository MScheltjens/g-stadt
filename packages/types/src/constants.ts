export const NAV_ITEMS = [
  {
    label: 'services',
    href: '/services',
    icon: 'services',
    children: [
      { label: 'idCard', href: '/services/id-card' },
      { label: 'appointments', href: '/appointments' },
    ],
  },
  {
    label: 'contact',
    href: '/contact',
    icon: 'contact',
    children: [
      { label: 'contactForm', href: '/contact' },
      { label: 'locations', href: '/locations' },
      { label: 'emergency', href: '/emergency' },
    ],
  },
] as const;
