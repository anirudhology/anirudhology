import siteMetadata from '@/data/siteMetadata';

import BrandIcon from './BrandIcon';
import Link from './Link';

const BuiltWith = () => (
    <div className="flex items-center space-x-1">
        <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>

        <div className="flex space-x-1.5">
            <Link href="https://nextjs.org?ref=anirudhology.com">
                <BrandIcon type="NextJS" className="h-5 w-5" />
            </Link>
            <Link href="https://tailwindcss.com?ref=anirudhology.com">
                <BrandIcon type="TailwindCSS" className="h-5 w-5" />
            </Link>
            <Link href="https://www.typescriptlang.org?ref=anirudhology.com">
                <BrandIcon type="Typescript" className="h-5 w-5" />
            </Link>
            <Link href="https://umami.is?ref=anirudhology.com" className="pl-px">
                <BrandIcon type="Umami" className="h-5 w-5" />
            </Link>
        </div>
        <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
        <Link href={siteMetadata.siteRepo} className="text-gray-500 underline underline-offset-4 dark:text-gray-400">
            <span data-umami-event="view-source">View source</span>
        </Link>
    </div>
);

export default BuiltWith;