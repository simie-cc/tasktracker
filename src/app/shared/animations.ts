
import { trigger, animate, style, transition } from '@angular/core';

export function expendAnimation(name) {
    return routeAnimation_5(name);
}

export function routeAnimation(name) {
    return routeAnimation_4(name);
}

function startingStyles(styles: Object) {
    return Object.assign(styles, {
        position: 'fixed',
        left: '0',
        right: '0',
        height: '100%'
    });
}

function routeAnimation_1(name) {
    return trigger(name, [
        transition('void => *', [
            style(startingStyles({
                transform: 'translateX(100%)'
            })),
            animate('300ms ease-out', style({ transform: 'translateX(0%)'}))
        ]),
        transition('* => void', [
            style(startingStyles({
                transform: 'translateX(0%)'
            })),
            animate('200ms ease-in', style({ transform: 'translateX(-100%)'}))
        ])
    ]);
}

function routeAnimation_2(name) {
    return trigger(name, [
        transition('void => *', [
            style(startingStyles({ transform: 'translateX(100%)' })),
            animate('2s ease-out', style({transform: 'translateX(0%)'}))
        ]),
        transition('* => void', [
            style(startingStyles({ transform: 'scale(1)' })),
            animate('2s ease-in', style({transform: 'scale(0)'}))
        ])
    ]);
}

function routeAnimation_3(name) {
    return trigger(name, [
        transition('void => *', [
            style(startingStyles({ transform: 'scale(1.2)', opacity: 0.5 })),
            animate('300ms ease-out', style({transform: 'scale(1)', opacity: 1 }))
        ]),
        transition('* => void', [
            style(startingStyles({ opacity: 1 })),
            animate('250ms ease-in', style({opacity: 0}))
        ])
    ]);
}

function routeAnimation_4(name) {
    return trigger(name, [
        transition('void => *', [
            style(startingStyles({
                transform: 'translateX(100%)'
            })),
            animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition('* => void', [
            style(startingStyles({
                opacity: 1,
                transform: 'scale(1)'
            })),
            animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.7)' }))
        ])
    ]);
}

function routeAnimation_5(name) {
    return trigger(name, [
        transition('void => *', [
            style({ height: 0 }),
            animate('300ms ease-in', style({ "height": "*" }))
        ]),
        transition('* => void', [
            style({ height: "*" }),
            animate('300ms ease-out', style({ height: 0 }))
        ])
    ]);
}


/*
state('in', style({transform: 'translateX(0) scale(1)'})),
    transition('void => *', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate('100ms')
    ]),
    transition('* => void', [
        animate(100, style({transform: 'translateX(0) scale(0)'}))
    ])
        */
