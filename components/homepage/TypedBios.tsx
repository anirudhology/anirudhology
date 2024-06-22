import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        typed.current = new Typed(el.current, {
            stringsElement: '#bios',
            typeSpeed: 40,
            backSpeed: 10,
            loop: true,
            backDelay: 1000,
        });
        return () => typed.current.destroy();
    }, []);

    return (
        <div>
            <ul id="bios" className="hidden">
                <li>
                    Known as <b className="font-medium">Anirudh</b> at work.
                </li>
                <li>
                    Residing in the lively city of <b className="font-medium">Bengaluru, India</b>.
                </li>
                <li>
                    Fond of programming, especially <b className="font-medium">Java</b>.
                </li>
                <li>
                    Enthusiastic about <b className="font-medium">Software Engineering, Web 3.0, and AI</b>.
                </li>
                <li>
                    Currently focused on developing <b className="font-medium">distributed and decentralized systems</b>
                </li>
                <li>
                    Frequently working with <b className="font-medium">Java, JavaScript, Python, and Solidity</b>.
                </li>
                <li>
                    Enjoys <b className="font-medium">Comic Books, Cricket, and Star Trek</b>.
                </li>
                <li>
                    An active person who loves playing
                    <span className="ml-1">
                        <Twemoji emoji="cricket" /> and <Twemoji emoji="ping-pong" />
                    </span>
                </li>
            </ul>
            <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
        </div>
    );
};

export default TypedBios;
