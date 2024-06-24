import siteMetadata from '@/data/siteMetadata';

import { Twemoji } from '@/components/Twemoji';

const Heading = () => {
    return (
        <h1 className="ml-8 font-medium text-neutral-900 dark:text-neutral-200">
            I'm <span>{siteMetadata.fullName}</span>, a committed <span>Software Engineer</span> based in{' '}
            <span className="hidden">Bengaluru - India</span>
            <span className="absolute ml-1.5 inline-flex pt-[3px]">
                <Twemoji emoji="india-flag" />
            </span>
        </h1>
    );
};

export default Heading;
