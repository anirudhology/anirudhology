import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';

const BlogLinks = () => {
    return (
        <div className="mt-3 flex justify-between">
            <div className="flex flex-col space-y-3.5">
                <Link href="/blog" className="ml-8 hover:underline">
                    <Twemoji emoji="memo" />
                    <span data-umami-event="home-link-blog" className="ml-1.5">
                        My writings
                    </span>
                </Link>
                {/* <Link href="/projects" className="hover:underline">
                    <Twemoji emoji="hammer-and-wrench" />
                    <span data-umami-event="home-link-projects" className="ml-1.5">
                        What have I built?
                    </span>
                </Link> */}
            </div>
            <div className="flex flex-col space-y-1.5">
                <Link href="/about" className="mr-8 hover:underline">
                    <Twemoji emoji="face-with-monocle" />
                    <span data-umami-event="home-link-about" className="ml-1.5">
                        More about me
                    </span>
                </Link>
                {/* <Link href="/resume" className="hover:underline">
                    <Twemoji emoji="briefcase" />
                    <span data-umami-event="home-link-resume" className="ml-1.5">
                        My career
                    </span>
                </Link> */}
            </div>
        </div>
    );
};

export default BlogLinks;
