import { BrandIconType } from '@/components/BrandIcon';

type PopularTag = {
    href: string;
    iconType: BrandIconType;
    slug: string;
    title: string;
};

const popularTags: PopularTag[] = [
    {
        href: '/tags/dsa',
        iconType: 'DSA',
        slug: 'dsa',
        title: 'DSA',
    },
    {
        href: '/tags/java',
        iconType: 'Java',
        slug: 'java',
        title: 'Java',
    },
    {
        href: '/tags/python',
        iconType: 'Python',
        slug: 'python',
        title: 'Python',
    },
    {
        href: '/tags/javascript',
        iconType: 'Javascript',
        slug: 'javascript',
        title: 'Javascript',
    },
    {
        href: '/tags/solidity',
        iconType: 'Solidity',
        slug: 'solidity',
        title: 'Solidity',
    },
    {
        href: '/tags/react',
        iconType: 'React',
        slug: 'react',
        title: 'React',
    },
    {
        href: '/tags/database',
        iconType: 'Database',
        slug: 'database',
        title: 'Database',
    },
    {
        href: '/tags/spring',
        iconType: 'Spring',
        slug: 'spring',
        title: 'Spring',
    },
    {
        href: '/tags/docker',
        iconType: 'Docker',
        slug: 'docker',
        title: 'Docker',
    },
];

export default popularTags;
