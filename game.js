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
        text: 'hiii if you are reading this, well it means you are at Malaysia now and there are thousands of mile between us so... I made this for the farewell because ILL MISS YOU SO MUCH and I dont know when or where else I can see you so... wanna take a look?',
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

                nextText: 25
            },
            {
                text: 'things that I havent told you before',

                nextText: 18
            },
            {
                text: 'why most of the time i disappeared',
                nextText: 16
            },
            {
                text: 'more topic',
                nextText: 3
            }
        ]
    },
    {
        id: 25,
        text: 'humn well i dont know exactly know how to tell you about this one, but one thing for sure i had my best time with you well i hope it wasnt only me that felt like that hehe. like what? well, i always tell you that i like walking with you right? well not gonna lie walking with you give me the feeling of lots of affection that u gave me, also i wasnt lying when i told you that youre the only one that gave me lots of attention and it makes me feel really bad that i didnt do as well as you.',
        options: [{
            text: 'next',
            nextText: 26
        }]
    },
    {
        id: 26,
        text: 'also idk about you but, do you remember when we used to hang out together? well tbh i had some of my best memories with you there, i cant stop thinking how funny you are till now (in a good meaning ofc). you made that silly faces hehe, god ill miss that a lot.',
        options: [{
            text: 'next',
            nextText: 27
        }]
    },
    {
        id: 27,
        text: 'ALSO not to mention all of the hugs u gave me as well, i know ive said it already but screw it , your hugs really meant a lot to me, bc i feel more love than i ever got before from anyone else and i thank you so much for them and ill miss them too hehe. i hope i can hug you at this point while im writting this but i know i cant so... virtual hugs?',
        options: [{
            text: 'next',
            nextText: 28
        }]
    },
    {
        id: 28,
        text: 'although i just mentioned a few examples but just for you to know i had more good things with you than i ever had with anyone else so once again thanks dude i will never ever forget about you even if we cant ever meet again. also this is the end of this part so next one?',
        options: [{
            text: 'next topic',
            nextText: 2
        }]
    },
    {
        id: 18,
        text: 'im sorry i have few things that i just couldnt tell you before but since this might be the last time we met and might also be my last gift for you physically, so here you go:',
        options: [{
            text: 'next',
            nextText: 19

        }]
    },
    {
        id: 19,
        text: 'first, i wanna talk about when we were still together. You always wanted to see my cry or mad back at you for once, and i always said that i cant mad at you or just cry like that. the truth is when something hurts me either if its from you or not it will affect my feelings so bad ? and you know how much i cant show them to anyone or let it go esp not to you and that is the reason why i cant mad or cry when people see, until i met you, i learned so many things from you esp about feelings and how to treat people. so thank you very very much for it.',
        options: [{
            text: 'next',
            nextText: 20
        }]
    },
    {
        id: 20,
        text: 'second is when we are not together anymore and until now, i know the fact that you hate me so much and say shit things to me bc u have so much anger in you and i understand it, yes it hurts so much but it wont change the fact that i love you so much, and i know the fact that i never ever deserve someone like you, u have done so many help for me, u care for me, you gave me affection that no one has ever gave me before. maybe this sounds exaggerating for you or maybe you think "im a straight people thats why i exaggerating when someone gives special care for other" but i said it because what you did means a lot to me.',
        options: [{
            text: 'next',
            nextText: 21
        }]
    },
    {
        id: 21,
        text: 'i realize i didnt have any good things to say or topic when we are talking anymore hhh im sorry, im not really sure what the reason is but its for sure not because of i dont wanna talk to you or bored of talking to you, yes im tired of having we arguing everyday but it wont stop me from always wanting to talk to you. Also yes i feel very lost for disappearing a lot bc it makes you far from me and so am i, so im so sorry for it and uh yes i always think about you everyday even when youre blocking me or when im not online and i hh i tried to write down everything about us so this is it ive written everything here.',
        options: [{
            text: 'next',
            nextText: 22
        }]
    },
    {
        id: 22,
        text: 'one last thing, im sorry for stalking you all these times, i just cant hold the fact that im missing you so much already. I know youre maybe blocking me on instagram, i wish i never knew that u said "take me out someone, either on a date or by punching me" at your story but i realized that im not someone in your life that you have to put priority anymore and the fact that uve said that "you do realize we cant go back to the way things were right" it just makes all of my hopes and motivations gone in a zap of time hhh. SO ill be glad i hope when u find someone else later, im sure there are lots of people that want to be your special someone :D',
        options: [{
            text: 'next',
            nextText: 23
        }]
    },
    {
        id: 23,
        text: 'pretty long huh? hehehe sorry for that, it takes me months of preparation and to stucture it, well i guess there is one last thing im sorry for repeating the same mistake again and again, its because im a forgetful person as you know but other than that i like the way that youre mad at me it somehow show me how you love me and i love it but also hate it bc i earned it that way, so im so so sorry for being such a big selfish shit here. oh yeah last last thing i never ever want to give up on you not because of guilt or anything the truth is because i feel like youre the one for me and bc youre special and not like other girl i know, no matter what your condition is.',
        options: [{
            text: 'next',
            nextText: 24
        }]
    },
    {
        id: 24,
        text: 'well thats it, i have told you everything now hehe i feel very relieved. So shall we go to the next topic?',
        options: [{
            text: 'next topic',
            nextText: 2
        }]
    },
    {
        id: 16,
        text: 'first im so terribly sorry for that. Well, if we are talking about lately it is because of this honestly because there are lots of trial and error BUT when i said i had problem with connection or anything it is the truth i never gonna lie to you about it bc i love talking to you hehe',
        options: [{
            text: 'next',
            nextText: 17
        }]
    },
    {
        id: 17,
        text: 'but in general mostly because i have problems or sometimes its because im having try outs or uh studying for UTBK hehe, iknow i supposed to tell u that before but hhh im sorry i dont want you to feel like shit bc i know u dont like being beaten by someone and i dont want you to feel like that and also im so scared to take the risks before, but im trying to do it now (as im still working on this hehe)',
        options: [{
            text: 'ok, next topic',
            nextText: 2
        }]
    },
    {
        id: 3,
        text: 'Well... i assume you already read the previous topics right? or.. no :( ? well here is for this part :).',
        options: [{
                text: 'My current thoughts',
                nextText: 4
            },
            {
                text: 'Why I made this?',
                nextText: 9
            },
            {
                text: 'The last',
                nextText: 10
            }
        ]
    },
    {
        id: 4,
        text: 'Well from what happening right now, it makes me think that everything is done tbh, i mean like hh idk if you still have feelings for me or not but i cant just stay optimist but for me it still remains the same :"). you know because we dont even talk anymore, well i know it is my fault but god i wish it went different way. also yes i sound very selfish',
        options: [{
            text: 'next',
            nextText: 5
        }]
    },
    {
        id: 5,
        text: 'Not gonna lie.. i sometimes imagining us still together and do lots of fun and dreamed about it as well. iknow it sounds naive but it is what it is. i never regret having you in my life because you made me feel like i dont need anybody else for everything.',
        options: [{
            text: 'next',
            nextText: 6
        }]
    },
    {
        id: 6,
        text: 'and im so sorry for everything i have done to you, everything that hurts you so bad (well i know almost everything that i did), I know that in a relationship it has to be take and give but all i did is just taking while you are giving everything hh i feel so shamed about it. im sorry dude',
        options: [{
            text: 'next',
            nextText: 7
        }]
    },
    {
        id: 7,
        text: 'and uh i really miss your smile :"). also i really miss your chat dude, i wanna talk to you again if that possible. i know by making this means i broke my promise not to contact you again after 3 days missing but what can i do? i mean when you blocked me at WA i already texted you at line but nothing, also i stil couldnt text you in instagram either due to full memory',
        options: [{
            text: 'next',
            nextText: 8

        }]
    },
    {
        id: 8,
        text: 'Last, i hope youre going to do just fine at malaysia:). i know youre going to make lots of friend and maybe just maybe find another S.O idk, my point is ill support you for everything you want and i just want you to be happy that is all, if youre happy so as I',
        options: [{
            text: 'next topic',
            nextText: 3
        }]
    },
    {
        id: 9,
        text: 'why you asked? well first this could be the last time ill see you because no one knows what will happen next right? also because idk i still feel lots of feeling towards you. Second, damn dude you really hit my heart last time when you gave me that bday present and i just dont want you leave without having my gift for you. so because this could be the last one which i hope not, i want this to be really special because im giving it to a special someone :)',
        options: [{
            text: 'next topic?',
            nextText: 3
        }]
    },
    {
        id: 10,
        text: 'Hey hey, you reached the last section:D. Im sad that this is the last part and knowing that you are going away but i dont want to waste any more time again because i dont know when youre going to malaysia, so i dont want to be late for that hehe',
        options: [{
            text: 'next',
            nextText: 11
        }]
    },
    {
        id: 11,
        text: 'and uh here i wanna confess and please dont be mad at me dude, i know this means violating your privacy and makes you uncomvy but damn dude i cant delete all of your pics i mean i took them when i think its my best time with you and uh they are one thing that keeps you in my head and i look at them every single time i miss you.',
        options: [{
            text: 'next',
            nextText: 29
        }]
    },
    {
        id: 29,
        text: 'owh one more thing the necklace inside the box it is actually coupled necklace i have the other part hehe, but dont get me wrong i gave you that because you are still my special someone and i want you to have that because idk you love cat and uh i want you to remember me honestly hhh, but if you dont want it you can just throw it away or something idk but if you do it just dont tell me anything about it heheh ',
        options: [{
            text: 'next',
            nextText: 12
        }]
    },
    {
        id: 12,
        text: ' hey this is the last last and i just want to say that I love you the most dude <33333333, yup you dont have to count there are 8 of them :D, also this is the end so I hope youll be fine there ,take care:D and i hope that you will have a nice day :D. I will be waiting for your chats whenever you want ',
        options: [{
            text: 'End',
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