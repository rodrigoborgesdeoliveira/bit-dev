import type { LinkProps } from '@teambit/design.ui.navigation.link';

export const headerContent: LinkProps[] = [
  {
    children: 'Docs',
    href: '/docs',
  },
  {
    children: 'Aspects',
    href: '/aspects',
  },
  {
    children: 'bit.cloud',
    href: 'https://bit.cloud',
    exact: true,
  },
  {
    children: 'Blog',
    href: 'https://bit.cloud/blog',
    exact: true,
  },
];
