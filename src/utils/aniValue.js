export const contentVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: .15,
            delayChildren: .3
        }
    }
}
export const itemVariants = {
    hidden: {
        opacity: 0,
        y: 24
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            ease: [.22, 1, .36, 1]
        }
    }
}
export const visualVariants = {
    hidden: {
        opacity: 0,
        x: 40,
        scale: .96
    },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: .7,
            ease: [.22, 1, .36, 1],
            delay: .5
        }
    }
}
export const articleVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.5,
        },
    },
}

export const projectItemMotion = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
}

export const projectItemTransition = {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1],
}
