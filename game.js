const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [{
        id: 1,
        text: 'hiii if you are reading this, well it means you are at Malaysia now and there are thousands of miles between us so... I made this for the farewell because ill miss you so much and I dont know when or where else I can see you so... wanna take a look?',
        options: [{
                text: 'well... sure ',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: '....',
                nextText: 13
            }
        ]
    },
    {
        id: 2,
        text: 'So as you know that we are going apart, but at least this is what I can give you for maybe the last time because I dont want you to forget about me tho:(, Well I have some points here that I want to say..',
        options: [{
                text: 'Good things with you ',

                nextText: 3
            },
            {
                text: 'things that I havent told you before',

                nextText: 3
            },
            {
                text: 'why most of the times i disappear',
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: 'well, if we are talking about lately it is because of this honestly because there are lots of trial and error BUT when i said i had problem with connection or anything it is the truth i never gonna lie to you about it bc i love talking to you hehe',
        options: [{
            text: '...',
            nextText: 3
        }]
    },
    {
        id: 3,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
        options: [{
                text: 'Explore the castle',
                nextText: 4
            },
            {
                text: 'Find a room to sleep at in the town',
                nextText: 5
            },
            {
                text: 'Find some hay in a stable to sleep in',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 5,
        text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 6,
        text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
        options: [{
            text: 'Explore the castle',
            nextText: 7
        }]
    },
    {
        id: 7,
        text: 'While exploring the castle you come across a horrible monster in your path.',
        options: [{
                text: 'Try to run',
                nextText: 8
            },
            {
                text: 'Attack it with your sword',
                requiredState: (currentState) => currentState.sword,
                nextText: 9
            },
            {
                text: 'Hide behind your shield',
                requiredState: (currentState) => currentState.shield,
                nextText: 10
            },
            {
                text: 'Throw the blue goo at it',
                requiredState: (currentState) => currentState.blueGoo,
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        text: 'Your attempts to run are in vain and the monster easily catches.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 9,
        text: 'You foolishly thought this monster could be slain with a single sword.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 10,
        text: 'The monster laughed as you hid behind your shield and ate you.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 11,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [{
            text: 'Congratulations. Play Again.',
            nextText: 12
        }]
    },
    {
        id: 12,
        text: 'I love you the most <33333333.',
        options: [{
            text: 'yup you dont have to count there are 8 of them :D, also this is the end so I hope youll be fine there ,take care:D',
            nextText: -1
        }]
    },
    {
        id: 13,
        text: 'well if you are not really sure about it or you dont want to, well I just wanna tell you everything I feel about you for the past 2 years...',
        options: [{
                text: 'I dont care',
                nextText: 14
            },
            {
                text: 'well... lets see',
                nextText: 2

            }
        ]
    },
    {
        id: 14,
        text: 'awh... are you sure:(',
        options: [{
                text: 'yes',
                nextText: 15
            },
            {
                text: 'okay fine lets see',
                nextText: 2
            }
        ]
    },
    {
        id: 15,
        text: 'hhh... okay fine:(',
        options: [{
            text: 'end',
            nextText: -1
        }]
    }
]

startGame()