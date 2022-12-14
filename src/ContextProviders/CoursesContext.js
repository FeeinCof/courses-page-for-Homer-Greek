import { useState, createContext } from "react";

const CoursesContext = createContext();

const CoursesProvider = ({children}) => {
    const breakingScript = {
        name: 'Breaking the Script',
        videos: [
            {
                title: 'Introduction to Breaking the Script',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 183,
                free: true
            },
            {
                title: 'Technique 1: Intrigue at first sight',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 194,
                free: false
            },
            {
                title: 'Technique 2: Jolt out of autopilot',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 303,
                free: false},
            {
                title: 'Technique 3: Transmute the question',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 397,
                free: false
            }
        ]
    };
    const productQuestion = {
        name: 'Product Questions',
        videos: [
            {
                title: 'Overview of Product question',
                src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                time: 333,
                free: false
            }
        ],
        playlist: {
            'Product Design': [
                {
                    title: 'How to flawlessly answer Product Design questions',
                    src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                    time: 792,
                    free: false 
                }
            ],
            'Product Improvement': [
                {
                    title: 'How to flawlessly answer Product Improvement question',
                    src: 'https://www.youtube.com/embed/nUaSJJT7Ars',
                    time: 792,
                    free: true 
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