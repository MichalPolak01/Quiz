export const tests = [
    {
        id: 1,
        topic: 'Historia',
        tags: '#historia, #polski',
        description: 'Test z historii skupia się na różnych wydarzeniach, postaciach i datach związanych z dziejami świata. Sprawdź swoją wiedzę z zakresu historii, odpowiadając na pytania dotyczące wojen, wydarzeń politycznych i postaci historycznych. Czy jesteś gotów na wyzwanie?',
        tasks: [
            {
                id: 1,   
                question: 'Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?',
                answers: [
                    {
                        content: "LUCJUSZ CYNNA",
                        isCorrect: true
                    },
                    {
                        content: "JULIUSZ CEZAR",
                        isCorrect: false
                    },
                    {
                        content: "LUCJUSZ MURENA",
                        isCorrect: false
                    },
                    {
                        content: "MAREK KRASSUS",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 2,
                question: 'W którym roku rozpoczęła się I wojna światowa?',
                answers: [
                    {
                        content: "1914",
                        isCorrect: true
                    },
                    {
                        content: "1918",
                        isCorrect: false
                    },
                    {
                        content: "1920",
                        isCorrect: false
                    },
                    {
                        content: "1939",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 3,
                question: 'Kto był pierwszym prezydentem Stanów Zjednoczonych?',
                answers: [
                    {
                        content: "George Washington",
                        isCorrect: true
                    },
                    {
                        content: "Thomas Jefferson",
                        isCorrect: false
                    },
                    {
                        content: "Abraham Lincoln",
                        isCorrect: false
                    },
                    {
                        content: "John Adams",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 4,
                question: 'W którym roku rozpoczęła się rewolucja francuska?',
                answers: [
                    {
                        content: "1789",
                        isCorrect: true
                    },
                    {
                        content: "1792",
                        isCorrect: false
                    },
                    {
                        content: "1801",
                        isCorrect: false
                    },
                    {
                        content: "1820",
                        isCorrect: false
                    }
                ],
                duration: 30,
            }
        ]

    },
    {
        id: 2,
        topic: 'Matematyka',
        tags: '#matematyka, #liczby',
        description: 'Test z matematyki obejmuje różne zagadnienia związane z liczbami, operacjami matematycznymi i równaniami. Sprawdź swoje umiejętności matematyczne, odpowiadając na pytania dotyczące algebraicznych wyrażeń, geometrii i nie tylko!',
        tasks: [
            {
                id: 1,
                question: 'Rozwiąż równanie kwadratowe: x^2 - 4x + 4 = 0.',
                answers: [
                    {
                        content: "x = 2",
                        isCorrect: true
                    },
                    {
                        content: "x = -2",
                        isCorrect: false
                    },
                    {
                        content: "x = 1",
                        isCorrect: false
                    },
                    {
                        content: "x = 4",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 2,
                question: 'Ile wynosi pierwiastek kwadratowy z liczby 25?',
                answers: [
                    {
                        content: "5",
                        isCorrect: true
                    },
                    {
                        content: "-5",
                        isCorrect: false
                    },
                    {
                        content: "2",
                        isCorrect: false
                    },
                    {
                        content: "25",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 3,
                question: 'Oblicz pole prostokąta o bokach długości 8 i 12.',
                answers: [
                    {
                        content: "96",
                        isCorrect: true
                    },
                    {
                        content: "20",
                        isCorrect: false
                    },
                    {
                        content: "40",
                        isCorrect: false
                    },
                    {
                        content: "64",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 4,
                question: 'Jaką ma wartość sin(90 stopni)?',
                answers: [
                    {
                        content: "1",
                        isCorrect: true
                    },
                    {
                        content: "0",
                        isCorrect: false
                    },
                    {
                        content: "-1",
                        isCorrect: false
                    },
                    {
                        content: "2",
                        isCorrect: false
                    }
                ],
                duration: 30,
            }
        ]
    },
    {
        id: 3,
        topic: 'Geografia',
        tags: '#geografia, #kraje',
        description: 'Test z geografii obejmuje pytania dotyczące różnych krajów, stolic, kontynentów i geograficznych pojęć. Sprawdź swoją wiedzę geograficzną, odpowiadając na pytania dotyczące mapy świata, charakterystyki krajów i innych ciekawostek geograficznych!',
        tasks: [
            {
                id: 1,
                question: 'Jaka jest stolica Francji?',
                answers: [
                    {
                        content: "Paryż",
                        isCorrect: true
                    },
                    {
                        content: "Madryt",
                        isCorrect: false
                    },
                    {
                        content: "Berlin",
                        isCorrect: false
                    },
                    {
                        content: "Londyn",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 2,
                question: 'Gdzie znajduje się największa pustynia na świecie?',
                answers: [
                    {
                        content: "Afryka",
                        isCorrect: false
                    },
                    {
                        content: "Australia",
                        isCorrect: false
                    },
                    {
                        content: "Antarktyda",
                        isCorrect: false
                    },
                    {
                        content: "Azja",
                        isCorrect: true
                    }
                ],
                duration: 30,
            },
            {
                id: 3,
                question: 'Który kraj leży na Półwyspie Apenińskim?',
                answers: [
                    {
                        content: "Hiszpania",
                        isCorrect: false
                    },
                    {
                        content: "Grecja",
                        isCorrect: false
                    },
                    {
                        content: "Włochy",
                        isCorrect: true
                    },
                    {
                        content: "Turcja",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 4,
                question: 'Który kontynent jest największy pod względem powierzchni?',
                answers: [
                    {
                        content: "Ameryka Północna",
                        isCorrect: false
                    },
                    {
                        content: "Afryka",
                        isCorrect: false
                    },
                    {
                        content: "Azja",
                        isCorrect: true
                    },
                    {
                        content: "Australia",
                        isCorrect: false
                    }
                ],
                duration: 30,
            }
        ]
    },
    {
        id: 4,
        topic: 'Język angielski',
        tags: '#angielski, #jezykiobce',
        description: 'Test z języka angielskiego obejmuje pytania z gramatyki, słownictwa i umiejętności czytania ze zrozumieniem. Sprawdź swoją wiedzę językową, odpowiadając na pytania z różnych obszarów angielskiego!',
        tasks: [
            {
                id: 1,
                question: 'Jakie jest przeciwieństwo słowa "happy"?',
                answers: [
                    {
                        content: "Sad",
                        isCorrect: true
                    },
                    {
                        content: "Excited",
                        isCorrect: false
                    },
                    {
                        content: "Joyful",
                        isCorrect: false
                    },
                    {
                        content: "Content",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 2,
                question: 'Jakie jest poprawne zdanie w czasie Past Simple?',
                answers: [
                    {
                        content: "I am going to the store.",
                        isCorrect: false
                    },
                    {
                        content: "She have a cat.",
                        isCorrect: false
                    },
                    {
                        content: "They visited London last summer.",
                        isCorrect: true
                    },
                    {
                        content: "We will play tennis tomorrow.",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 3,
                question: 'Które zdanie jest pytające?',
                answers: [
                    {
                        content: "He is reading a book.",
                        isCorrect: false
                    },
                    {
                        content: "The sun is shining.",
                        isCorrect: false
                    },
                    {
                        content: "Are you coming to the party?",
                        isCorrect: true
                    },
                    {
                        content: "They have finished their homework.",
                        isCorrect: false
                    }
                ],
                duration: 30,
            },
            {
                id: 4,
                question: 'Które słowo jest synonimem "beautiful"?',
                answers: [
                    {
                        content: "Ugly",
                        isCorrect: false
                    },
                    {
                        content: "Attractive",
                        isCorrect: true
                    },
                    {
                        content: "Plain",
                        isCorrect: false
                    },
                    {
                        content: "Simple",
                        isCorrect: false
                    }
                ],
                duration: 30,
            }
        ]
    },
]