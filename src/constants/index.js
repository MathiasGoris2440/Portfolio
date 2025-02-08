export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Education',
        href: '#education',
    },
    {
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 5,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const SkillsLogo = [
    {
        id: 1,
        name: 'Python',
        img: 'assets/ProgramIcons/python.png'
    },
    {
        id: 2,
        name: 'TensorFlow',
        img: 'assets/ProgramIcons/tensorflow.png'
    },
    {
        id: 3,
        name: 'Vue.js',
        img: 'assets/ProgramIcons/vue-js.png'
    },
    {
        id: 4,
        name: 'Three.js',
        img: 'assets/ProgramIcons/three-js.png'
    },
    {
        id: 5,
        name: 'Typescript',
        img: 'assets/ProgramIcons/Typescript.png'
    },
    {
        id: 6,
        name: 'Sass',
        img: 'assets/ProgramIcons/sass.png'
    },
    {
        id: 7,
        name: 'React',
        img: 'assets/ProgramIcons/React.png'
    },
    {
        id: 8,
        name: 'Laravel',
        img: 'assets/ProgramIcons/Laravel.png'
    },
    {
        id: 9,
        name: '.Net',
        img: 'assets/ProgramIcons/dotnet.png'
    },
    {
        id: 10,
        name: 'MySQL',
        img: 'assets/ProgramIcons/mySql.png'
    },
    {
        id: 11,
        name: 'Git',
        img: 'assets/ProgramIcons/git.svg'
    },
    {
        id: 12,
        name: 'Docker',
        img: 'assets/ProgramIcons/docker.png'
    },
]


export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Portfolio',
        desc: 'A showcase of my work, skills, and projects, designed to represent me as a developer and highlight my growth in the field. This website serves as a central hub for my professional journey, featuring my past projects, experience, and technical expertise.',
        subdesc:
            'This is my first major project outside of school, where I focused on creating a polished and functional web presence. It allowed me to refine my web development skills, experiment with modern technologies, and build something truly my own.',
        href: 'https://github.com/MathiasGoris2440/Portfolio',
        texture: '/textures/project/Portfolio.mp4',
        logo: 'MG.png',
        imgStyle: {
        },
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Three.js',
                path: '/assets/ProgramIcons/three-js.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'School Project - Martian',
        desc: 'A Social Rating platform built specifically for Mars. The goal of the platform is to help users build and find communities where they will feel safe and content.',
        subdesc:
            'This project was developed as part of my third-semester coursework in a team setting. We built both the front end and back end, focusing on creating a seamless and engaging user experience.',
        href: 'https://github.com/MathiasGoris2440/project-mars.git',
        texture: '/textures/project/mars.mp4',
        logo: '/assets/Projects/martian_logo.png',
        imgStyle: {
            'object-fit': 'scale-down'
        },
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',

        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/ProgramIcons/html-5.png',
            },
            {
                id: 2,
                name: 'SASS',
                path: '/assets/ProgramIcons/sass.png',
            },
            {
                id: 3,
                name: 'Javascript',
                path: '/assets/ProgramIcons/javascript.png',
            },
            {
                id: 4,
                name: 'Java',
                path: '/assets/ProgramIcons/java.png',
            },
            {
                id: 5,
                name: 'MySQL',
                path: '/assets/ProgramIcons/mySql.png',
            },
        ],
    },
    {
        title: 'Background Remover App',
        desc: 'A fast and efficient tool for removing backgrounds from images, designed to balance speed and accuracy for various applications. The goal was to create a solution that delivers high-quality results while keeping processing times minimal.',
        subdesc: 'Developed during my internship at Spectrum.io in my sixth semester, this project focused on researching and implementing the best background removal techniques to optimize performance and quality.',
        href: '',
        texture: '/textures/project/backgroundRemover.mp4',
        logo: '/assets/Projects/spectrum-logo.png',
        imgStyle: {
            width: '24px',
            height: '24px'
        },
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',

        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/ProgramIcons/python.png',
            },

            {
                id: 2,
                name: 'Node.js',
                path: '/assets/ProgramIcons/nodejs.png',
            },
            {
                id: 3,
                name: 'Vue.js',
                path: '/assets/ProgramIcons/vue-js.png',
            },
        ],
    },
    {
        title: 'CRM Project - School Project',
        desc: 'In our Software Engineering project, we worked with Howest International to solve data management issues for international students. The data was disorganized in Excel files, so we developed a CRM system to centralize and secure the information.',
        subdesc:
            'We focused on creating a solid foundation with a functional prototype and documentation, allowing for future development and growth.',
        href: '',
        texture: '/textures/project/CrmHowest.mp4',
        logo: '/assets/Projects/howest-hogeschool-logo.png',
        imgStyle: {
        },
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',

        tags: [
            {
                id: 1,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'node.js',
                path: '/assets/ProgramIcons/nodejs.png',
            },
            {
                id: 4,
                name: 'PostgreSQL',
                path: '/assets/ProgramIcons/Postgresql.png',
            },
            {
                id: 5,
                name: 'Prisma',
                path: '/assets/ProgramIcons/prisma.png',
            },
        ],
    },
    {
        title: 'CodePen Projects',
        desc: 'A platform where I experiment with web development and share interactive front-end projects. CodePen is where I often explore new ideas, test out different concepts, and create mini-projects to showcase my skills in HTML, CSS, and JavaScript.',
        subdesc:
            'I regularly use CodePen to build small interactive elements, animations, and UI components, allowing me to push my creativity while learning new techniques and staying up-to-date with web trends.',
        href: 'https://codepen.io/MathiasGoris2440',
        texture: '/textures/project/codepen.mp4',
        logo: '/assets/Projects/codepen.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
            padding: '4px'
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/ProgramIcons/html-5.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: '/assets/ProgramIcons/css-3.png',
            },
            {
                id: 3,
                name: 'Javascript',
                path: '/assets/ProgramIcons/javascript.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [9, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-21, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const myExperience = [
    {
        id: 1,
        name: 'Oh Green',
        pos: 'Jobstudent tuincentrum',
        duration: '2024 - Present',
        title: "I am responsible for restocking inventory and ensuring the store remains clean, organized, and visually appealing. Additionally, I handle cashier duties, process payments efficiently, and provide excellent customer service at checkout. I also assist in setting up seasonal displays and promotional arrangements to enhance the shopping experience.",
        icon: '/assets/ohGreenLogo.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Beego',
        pos: 'IT Support',
        duration: '2023 - Present',
        title: "At Beego, I help people with their IT problems, which strengthens and sharpens my own problem-solving skills. By providing personal support and practical solutions, I not only enhance my technical knowledge but also improve my communication skills and customer focus.",
        icon: '/assets/beego_logo.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Carrefour',
        pos: 'Jobstudent Winkel',
        duration: '2021 - 2022',
        title: "During my two-year involvement with Alma, I gained valuable experience that enhanced my customer service skills and strengthened my ability to work effectively in a team.",
        icon: '/assets/carrefour-logo.png',
        animation: 'salute',
    },
];