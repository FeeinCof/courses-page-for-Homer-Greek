import { useState, createContext } from "react";
import collaborationIcon from '../assets/images/collaboration_icon.svg';
import productIcon from '../assets/images/product_icon.png';
const CoursesContext = createContext();

const CoursesProvider = ({children}) => {
    const breakingScript = {
        name: 'Breaking the Script',
        icon: collaborationIcon,
        videos: [
            {
                title: 'Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: {
                    src: 'https://i.ytimg.com/vi_webp/C2vU1cF-BEA/maxresdefault.webp'
                }
            },
            {
                title: 'Technique 1: Intrigue at first sight',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 194
            },
            {
                title: 'Technique 2: Jolt out of autopilot',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 303
            },
            {
                title: 'Technique 3: Transmute the question',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 397
            }
        ]
    };
    const productQuestion = {
        name: 'Product Questions',
        icon: productIcon,
        videos: [
            {
                title: 'Overview of Product question',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 333,
                free: {
                    src: 'https://i.ytimg.com/vi_webp/C2vU1cF-BEA/maxresdefault.webp'
                }
            }
        ],
        playlist: {
            'Product Design': [
                {
                    title: 'How to flawlessly answer Product Design questions',
                    src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                    time: 792
                }
            ],
            'Product Improvement': [
                {
                    title: 'How to flawlessly answer Product Improvement question',
                    src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                    time: 792
                }
            ]
        }
        };

    return (
        <CoursesContext.Provider value={[breakingScript, productQuestion]}>
            {children}
        </CoursesContext.Provider>
    )
}

export { CoursesContext, CoursesProvider };