export let projects = new Map()
    .set('save-the-date',
        {
            index: 12,
            title: 'Save The Date',
            type: 'MERN Stack / Native App',
            subtitle: "Medicines management application that calculates the date on which the medicine should be thrown, depending on the usage time",
            date: new Date("2021-10-21"),
            image: 'https://lh3.googleusercontent.com/Wqi_TTD7rCfyx3n38rGE3R13mBmpIJGxENnIL9oZLzGkt-1SAei8EzNVElOiVOwHbxgPN50GfA_LloWcozwSpNOwWed9wGnoygWGzlx3u8Y6x1_h_TY2x_mFPctefI2ye5cEHLcbfA=w2400',
            stack: [
                'React Native (Expo)',
                'React Navigation',
                'Redux',
                'JavaScript',
                'AsyncStorage',
                'Node.js',
                'ExpressJS',
                'MongoDB',
                'Firebase',
                'Top npm packages:', ['moment-js', 'react-redux', 'react-native-calendars', 'react-native-toast-message', 'expo-image-picker', 'mongoose']
            ],
            utilities: [
                'Figma',
                'Postman',
            ],
            description:
                `I'm using some ointments because of my allergy, and all of them need to be thrown away after a certain amount of time since opening. ` +
                `The problem is I can't always remember when I've opened an ointment, and sometimes I throw it away for no reason because of it. So, in order to avoid it, I've built this native app.\n` +
                `Save The Date is a native app that allows you to manage a list of medicine or cosmetics that you're using. Once you add a new medicine, the system will calculate the date you should throw it away, based on the opening date and usage time.\n` +
                `Main features: Quick authentication using Firebase, setting image for your account and display how much time is left until the end date. The app also contains a calendar screen that allows you to explore which medicine opened or ended on a certain day.\n` +
                `Save The Date is a MERN Stack app: For the server side I've been using Express.JS, MongoDB as a database and Firebase for authentication and storage .For the client side I've been using React Native (Expo) with Redux as a state management.`,
            links: [
                { id: 0, caption: 'Client side repository', url: 'https://github.com/tsahiBarshevsky/save-the-date-app' },
                { id: 1, caption: 'Server side repository', url: 'https://github.com/tsahiBarshevsky/save-the-date-server' },
                { id: 2, caption: 'Characterization file', url: 'https://docs.google.com/document/d/1JQlYqoU-kaV9qHzSYgWDFAkeQkh3ZYAMZJdn2JSJvCc/edit?usp=sharing' },
                { id: 3, caption: 'APK and simulator (for ios) files', url: 'https://drive.google.com/drive/folders/1mf-KnPfsnroWlUucACkVYsoIdicOMLuZ?usp=sharing' },
            ],
            otherCreators: [],
            youtube: null,
            images: [
                {
                    id: 0,
                    originalTitle: 'App screenshots',
                    original: 'https://lh3.googleusercontent.com/Wqi_TTD7rCfyx3n38rGE3R13mBmpIJGxENnIL9oZLzGkt-1SAei8EzNVElOiVOwHbxgPN50GfA_LloWcozwSpNOwWed9wGnoygWGzlx3u8Y6x1_h_TY2x_mFPctefI2ye5cEHLcbfA=w2400',
                },
                {
                    id: 1,
                    originalTitle: 'Home screen and color palette',
                    original: 'https://lh3.googleusercontent.com/QynzJ6rPojT59Dni1j24qHBum94GOTM-MUxJOMeW1PlhxQWSCxH5kWVA9CfPU-TXHmXsTJvDYPJ3FqCr2cLKbHYdLJhElhz3jc8NXmyFQVnyCeoYA30lFhLSZsd06EJHqUu4Z6RZkw=w2400',
                },
                {
                    id: 2,
                    originalTitle: '',
                    original: 'https://lh3.googleusercontent.com/253ogLLJeGx75OdBsBOV4GL6Pzj8GTDAAG0iQmCOu2nPMdoEiKIs85xZAtpEEK_KR7kXVT5B4T3CSe1i3fnTO7E9wwA1QpXggnjHgUE40kCANzZZDaNQmurUPfvWjHDyNXhO_TSMjA=w2400',
                },
                {
                    id: 3,
                    originalTitle: 'Calendar, insertion and account screens',
                    original: 'https://lh3.googleusercontent.com/MlapSOb55XopACTWgGXb75QQHZY5M37nPim1mRBzO3EV3z27vzrwP26XdPEp8vGjvghTPZEEJjOxf7N_icgjmgmcQJlKbKaIMGwDT9aMTxMqi_aAHbwt82t21bk3CxzEyQVwZZ8i7A=w2400',
                },
            ],
            web: false
        })
    .set('note-to-self',
        {
            index: 11,
            title: 'Note To Self',
            subtitle: "A basic todo app using React Native Expo, as a first practice of this thecnology",
            date: new Date("2021-10-02"),
            image: 'https://lh3.googleusercontent.com/SxLZOlpmz1Pl2hbktsNAHunNuDMBx5CKQASx8Vj8K_8f5-hpIT20pNNtiLFO76KXnRx2yocbJJ2vCcIONi_vP1aKimiD1obOxsHRWXC-B19dIeQBA-Nbfz-Wl4jCGl30OQAXAxDyuA=w2400',
            stack: [
                'React Native (Expo)',
                'React Navigation',
                'JavaScript',
                'UI-Kitten',
                'AsyncStorage',
            ],
            utilities: [
                'Figma'
            ],
            description:
                `My first React Native app! \n\n` +
                `Note To Self is a simple native app for creating lists. The features are basic: Add a new list with items, mark items as completed, adding new items to an existing list, pin lists to top and search for lists.\n` +
                `The main goal of this app was to earn new skills, such as understanding the difference between React and React Native, the basic structure of native app, using Expo to build apps and how to use local storage.\n` +
                `I've been using AsyncStorage to save the data locally, UI-Kitten and React Native components and Figma in order to create the first app design before coding it.`,
            links: [
                { id: 1, caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/note-to-self' },
            ],
            otherCreators: [],
            type: 'Native App',
            youtube: 'https://www.youtube.com/embed/ekdHmk3_JTc',
            images: [
                {
                    id: 0,
                    originalTitle: 'App screens',
                    original: 'https://lh3.googleusercontent.com/6gQ2yX8wvsshBwVFpTIY8bPulG46O7tG1OtpgU8cpj2z4PuQ9eC0sZ7N7xH2sqB8PD3I7HHf9agcFFXam2UpJHelxAWUt9w7EYOSTiBaQlC1uKaVfomxy6NAHvCLq2zbqJiOely4Uw=w2400',
                },
                {
                    id: 1,
                    originalTitle: 'App icons',
                    original: 'https://lh3.googleusercontent.com/ET0YgklXsD-xA3NvODqtvS0qiF3Rz_VoSfGWgDWO4Aa00GeaWPg65s98_At1_ty3HudifRoPp7bLBsjAmue02WfvRAOhFfCd1xcNGHY_aq8LaGEVMgMiQCdQXdyREw6MT6ls8Gsseg=w2400',
                },
            ],
            web: false
        })
    .set('jobi',
        {
            index: 10,
            title: 'Jobi',
            subtitle: "An online job tracker, using a drag and drop component to insure an easy update",
            date: new Date("2021-8-1"),
            image: 'https://lh3.googleusercontent.com/VPG2j4lCxg5-ToOyT0M257EQAP_Es3RCW7sd_-i5RHcoTJ_P8D4ii1j0bzpqtDXyRv3jp8mB53smsG8XbV2Lf7WNyE2P5zbsP1PJU9cGboU68OD37OBbrSN-_jepv_X3yDkpy8pJOQ=w2400',
            stack: [
                'JavaScript',
                'Sass',
                'ReactJS',
                'Material-UI',
                'Rsuite',
                'Node.js',
                'ExpressJS',
                'MongoDB',
                'Firebase',
                'Top npm packages:', ['react-beautiful-dnd', 'react-chartjs', 'react-data-table-component', 'react-router-dom']
            ],
            utilities: [
                'Postman'
            ],
            description:
                `When I started the job search process, I used an Excel file to organize all the jobs I've been applied for and later, I found a site that allows doing the same thing more conveniently. But I felt it was very basic and lacking features that could further facilitate the process, so I'm happy to introduce you to Jobi - my version of a job tracking site.\n` +
                `Jobi allows you to keep track of job applications in a convenient and organized way, update job status easily, view a job timeline from the moment you apply, through a conversation with a recruiter until you get the job. In addition, there's a statistical analysis that allows you to see how many jobs you have submitted so far, in the current week and more. All you have to do is log in with your Google account and start tracking.\n\n`,
            links: [
                { id: 0, icon: null, caption: 'Website link', url: 'https://jobi.netlify.app/' },
                { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/jobi' },
            ],
            otherCreators: [],
            type: 'MERN Stack',
            youtube: null,
            images: [
                {
                    id: 0,
                    originalTitle: 'Digital wireframe for homepage',
                    original: 'https://lh3.googleusercontent.com/WMvc0ZKa2NsxC2XZlrKZq4eMms3MRbVOVosxtf3h9PlTPFFRJkyJIeCk61PpDsVMvqxL5xVs5-vfCIP9B_F1ouJIu-gpat3lT1t2zQtj-nV4tdrE_S-bgWQCX4P2RG1OoP1TtT7RKQ=w2400',
                },
                {
                    id: 1,
                    originalTitle: 'Homepage',
                    original: 'https://lh3.googleusercontent.com/g8RAW2qBgKMMKW9YyX1N9vnATperZtys5yzOXY9wJCIo1gasn4m1U_lgzPYOQB6QGoZef1iVPGheJQ-XYgvehr5-0pS1iPRb0r-4QtRkDOwonBxRd6rulFnfeutjsaoHhaWWiwrpWg=w2400',
                },
                {
                    id: 2,
                    originalTitle: 'Tracking board',
                    original: 'https://lh3.googleusercontent.com/WqMWMUIuhc1kTKz9iNFa43c4bRiRiQDobsTMr_oQNFm3PRGM8rS-EgzIoj0BowCqsa0iL6B6XK0Vh0tEmYFObFl6GpYgnzi_0fCnVFp-n2_avTDCUbxwdDwXnU7_sOx7wy8G0f5LVg=w2400',
                },
                {
                    id: 3,
                    originalTitle: 'Stats page',
                    original: 'https://lh3.googleusercontent.com/GzInwlqPeHmTZXPDiJbVEio8hAhFqIC8f2ZRPMwQgKurYd5Hvk89OgSaLzFJlMHC-LjfmhT3zHeFtQ7bqXbwvek1jdxoQFOhHvrMBIlgi7UQJQSaHzfm1SuwPGMCCyIjV2UeMBh7eQ=w2400',
                }
            ],
            web: true
        })
    .set('phone-zone',
        {
            index: 9,
            title: 'Phone Zone',
            subtitle: "An online smartphones and mobile accessories store",
            date: new Date("2021-7-4"),
            image: 'https://lh3.googleusercontent.com/6ZuibTOPwgkdLDumVTtmwtFe7IDc7gguPaDKXY8_G-pm0l9cEpiZ_gs0bcg14J5GkWPI3xF9TCzUH0lByarIOtFVdK9z_wWmeMsekpSlnmHLvj8GlXTPCfKlMP-hT4xlbpAkEomEzQ=w2400',
            stack: ['JavaScript', 'Sass', 'ReactJS', 'Material-UI', 'Stripe', 'Commerce.js', 'Top npm packages:', ['react-hook-form', 'react-router-dom', '@stripe']],
            utilities: [],
            description:
                `Phone Zone is a modern and fully responsive online e-commerce store, inspired by some real online stores and allows you to "order" smartphones and mobile accessories. As a Frontend Developer, it was important to me to focus on creating an easy and intuitive user interface with a clean and modern design. For the avoidance of doubt, this is just a personal project and I don't sell anything.\n\n` +
                `In the Frontend, I've been using React with Material-UI framework and SASS. In the Backend, I've been using Stripe for the payment system and Commerce.JS, a service that allows managing the Backend part of stores like that: Store the products and their information, determine shipping countries and subdivisions prices and managing orders in an easy way.\n\n` +
                `If you want to test it, please use this dummy credit card number: 4242 4242 4242 4242 04/24 242 42424`,
            links: [
                { id: 0, icon: null, caption: 'Website link', url: 'https://phone-zone1.netlify.app/' },
                { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/phone-zone' },
            ],
            otherCreators: [],
            type: 'React App',
            youtube: null,
            images: [
                {
                    id: 0,
                    originalTitle: 'Primary sketch for homepage',
                    original: 'https://lh3.googleusercontent.com/YsWQJAXz6dp2P9hUoV6x-HSrX0kRAX0kAIPfssA19h6Q2pI1FypJFwmAqxX1DF2nYejJsKah5JrQimu-0Dkh2yRO_bYhb_PKLvgozQH6Bk-L1oorqZLwzT5YLXrQYQ_X7gHJJFp4dA=w2400'
                },
                {
                    id: 1,
                    originalTitle: 'Digital wireframe for homepage',
                    original: 'https://lh3.googleusercontent.com/PybbQOd7LHADA1gAPIbbMYh-XqB8TgbozNYfxw0QTHxFNz_Np_M2nEWgz_68tpiY3syqSbr-9_rbG2nFS7cMYtVqQ0RCVIfEq-mxQ1greqi8ymxotmB5BFC8DSaFLgNnkEiKy7EqTQ=w2400',
                },
                {
                    id: 2,
                    originalTitle: 'Homepage',
                    original: 'https://lh3.googleusercontent.com/hyWp4mVPpkl3ZX5k4-_rcpF9VQW1b4tIYUo97Rq4dd2jygSQF7lOoCIslDnGaTnVHb8HO4ERX4ewRa-6wBnL1bcyikxHcyNW6YGRT26FroGmuhZ9sNTpEIpxShNqunJdhuDkcJn_Xw=w2400',
                },
                {
                    id: 3,
                    originalTitle: 'Phones page',
                    original: 'https://lh3.googleusercontent.com/9bq0GubLrnSBtwN2YjZVEgPzF5NeZNIUG07WH5kllouMH-wlJYsnT_LQSb6EI4l-y3ItFoirTvQy61_IqyjlZxTErwni0pWM01D5tpbGQBHbQ44h5s7luyC5kh_RI7_kUl1Mo_ixAw=w2400',
                }
            ],
            web: true
        })
    .set('get-a-card',
        {
            index: 8,
            title: 'Get a Card',
            subtitle: "An online digital business cards generator using several templates",
            date: new Date('2021-5-23'),
            image: 'https://lh3.googleusercontent.com/cBjxIN-oGgyddrV_tzL4rKTKCsUQHRS3zXtxW5XAvzr-CVDy8o2gmdtKLkbCaVeroG4sxp8vz-c0A_x9wNkCDqWVOCJv0D7SDX0eJoUhi1DX9mneVIxga4_b6ZKnigw3a-lik5szgA=w2400',
            stack: ['JavaScript', 'Sass', 'ReactJS', 'Material-UI', 'Node.js', 'ExpressJS', 'MongoDB', 'Firebase', 'Top npm packages:', ['animate.css', 'react-share', 'react-router-dom']],
            utilities: ['Postman'],
            description:
                "We're living in a digital world and the changes didn't skip the world of marketing either, which has been changed dramatically in recent years. One of the major changes applies to business cards, which from a small physical card, has gone digital and creative.\n\n" +
                "Because of that, I've decided to build this web service - Get a Card!\n Get a card allows you to create as many digital business cards by yourself.\n" +
                "Once you create an account, you can start creating your digital business card, style it and share it with your clients in just a few seconds!\n\n" +
                "The technical side of this project: For the frontend, I've been using React, Material-UI and Sass. For the backend, I've been using ExpressJS to build a web server, MongoDB as a database and Firebase for authentication and storage.\n\n" +
                "Demo user for a quick demonstration: \n" +
                "Email: user2@gmail.com\nPassword: user222",
            links: [
                { id: 0, icon: null, caption: 'Website link', url: 'https://get-a-card.netlify.app/' },
                { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/get-a-card' },
                { id: 2, icon: 'example', caption: 'Card example', url: 'https://get-a-card.netlify.app/example3' }
            ],
            otherCreators: [],
            type: 'MERN Stack',
            youtube: null,
            images: [
                {
                    id: 0,
                    originalTitle: 'Homepage',
                    original: 'https://lh3.googleusercontent.com/nvTz2q6l1T956jzlti0gk-roRoOpyaIdcaRDo4cFUiR06HdbHs52eNhOT3tqGBRegzndn1EJ8pk0O4ZMVAUtkLjRlkB2haqpCBwWN_zuoYyByK6BbqNE-mKZUvNhtPqs5Ud-TcDdEQ=w2400'
                },
                {
                    id: 1,
                    originalTitle: 'Registration/login screen',
                    original: 'https://lh3.googleusercontent.com/VIhiMn1PfBrH2QxGZeWWfIhWwkDJKdeX6CkBJ5i8A6EMl07oExwwj0q4j7dyHFqcUeCdtGUU6oGG6n59HfA4P1WQq6AzZ7trFkAbZRUhbO_fvp7tcQqaJR2uJg56CWSaJkefv6RwCw=w2400',
                },
                {
                    id: 2,
                    originalTitle: 'Dashboard panel',
                    original: 'https://lh3.googleusercontent.com/qnkw0irzE2Gs-Cx1UCreDENif1Y4j9-HtohsQhnedaaq1OyTNlW4zlME8lsjopaF79m78Vlk-4iVx2gyb8E-nJNA05XoPix98BfMt1XR0PkJZHoBj9J2EP4tbzI0WzU9bCLJWOb0kA=w2400',
                }
            ],
            web: true
        })
    // .set('save-the-date',
    //     {
    //         index: 7,
    //         title: 'Save The Date',
    //         subtitle: "An online medicines management with main feature: Calculating the date it should be thrown",
    //         date: new Date('2021-5-2'),
    //         image: 'https://lh3.googleusercontent.com/jXxGfijxa3FJmuZVyUKTxg1xjzxeMePkxbPMLL7r_iC1o2Eg3tpKdrNcTYhsmv7BijESBj7xGq5aXd7blyNaw5hYsgammsSr0DmC-2BuemeP_Gr7gxID4JdvHKKUdH7lzpZCfGduYg=w2400',
    //         stack: ['JavaScript', 'Sass', 'ReactJS', 'Material-UI', 'Firebase', 'Top npm packages:', ['date-fns', 'react-big-calendar', 'react-data-table-component', 'react-router-dom']],
    //         description:
    //             "I'm using some ointments because of my allergy, and all of them need to be thrown away after a certain amount of time since opening. \n" +
    //             "The problem is I can't always remember when I've opened an ointment, and sometimes I throw it away for no reason. So, in order to avoid it, I've built this simple website." +
    //             "Save The Date is a website that allows you to manage a list of medicine or cosmetics that you're using. Once you adding a new medicine, the system will calculate the date you should throw it away, based on the opening date and usage time. \n\n" +
    //             "Furthermore, the website contains a local calendar with all of your data that you've added and you can create an event in Google Calendar that reminds you about medicine that close to the end date. \n\n" +
    //             "In order to use it, you just need to create an account in 3 simple steps: Supply a valid email, a username and a password and that's it, you have an account! \n\n" +
    //             "Demo user for a quick demonstration: \n " +
    //             "Email: user1@gmail.com\n" +
    //             "Password: user123",
    //         links: [
    //             { id: 0, icon: null, caption: 'Website link', url: 'https://save-the-date45.netlify.app/' },
    //             { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/save-the-date' }
    //         ],
    //         otherCreators: [],
    //         type: 'React app',
    //         youtube: null,
    //         images: [
    //             {
    //                 id: 0,
    //                 originalTitle: 'Homepage',
    //                 original: 'https://lh3.googleusercontent.com/0VxBRrEd-QZ47AHi1Ni8o9-Cig4wbIVU1ZtXldPcn1lIMhzCon677X9C_ibc8k6mwfTW-d0iQ0tIW2w6cN4AHos7jgc3Pc-vSvmOMxHuxTbMHvxvdfkOOstHAgf80h9Hey07IMfEZQ=w2400'
    //             },
    //             {
    //                 id: 1,
    //                 originalTitle: 'Registration/login screen',
    //                 original: 'https://lh3.googleusercontent.com/5BljsABDXNseBCRRJdHyM_XYwduNRIDV0a-N8Vt9BByMxBB5Nu_6JziQUR_su4He7a2a7GAfNCsMDxz3naO022-jUVSwr1eQczjHU5eVpHzMVVSMsU8H2J9OMtSj1h1GdWHTEa1BGw=w2400',
    //             },
    //             {
    //                 id: 2,
    //                 originalTitle: 'Dashboard panel',
    //                 original: 'https://lh3.googleusercontent.com/NIvdlS6V9thC5idpExp-mKU8PAwNU1IY_bOmbeAY_3k7V94syrVZ-d31xQf1M0Ro_85VHSviwO28r2ND7VB5dCUpT295n-8Yrv7sWfmtdZfUhVwMPwFDCqAtuNLhQ1LERlgO4vliGA=w2400',
    //             },
    //             {
    //                 id: 3,
    //                 originalTitle: 'Calendar page',
    //                 original: 'https://lh3.googleusercontent.com/4TRPoGR3_iuvdpU4X9fQ7em_rH2lOOuPQOGKM6iLRL6s2VCVRuAtLp17Bany8Et2oTeVDGuzfDM29u7lyWz235XIHlnlezupr9rmRuNFjuFTpOfWnqlRfD9Sp0IA6v34gVUiUPav0Q=w2400',
    //             }
    //         ],
    //         top: true,
    //         web: true
    //     })
    .set('personal-blog',
        {
            index: 6,
            title: 'Personal Blog',
            subtitle: "My personal blog that contains articles, poems and texts I've written",
            date: new Date("2021-4-1"),
            image: 'https://lh3.googleusercontent.com/hbM7Zh46b89aKcwR9X5mzY8fZVo_75-5oA2Hiry62y8gmZlaKnfeYDbMTgJDRkT-7Sf0CsmAs6Yzlpv_p5BnAgIBsiR5D_-N56HV2O3uMmzqcWc0NQ17KMgMMHhHoac63sVno7n16Q=w2400',
            stack: ['JavaScript', 'SCSS', 'ReactJS', 'Material-UI', 'Firebase', 'Top npm packages:', ['chart.js', 'date-fns', 'emailjs-com', 'jss-rtl', 'react-input-tags-hooks', 'react-router-dom']],
            utilities: [],
            description:
                "I always loved programming and writing has a huge part of who I am, so what happened when I've dared to combine those different worlds? a Blog!\n\n" +
                "I'm blogging for over 5 years on two websites, but I've never had my own blog. So after learning and developing some websites,  I felt that it's the right time to develop my own blog. Because it's important to me to keep practicing in React, I've preferred not to use built-in platforms like WordPress and build it from scratch.\n\n" +
                "The website divided into 2 parts: The blog itself and a private dashboard that allow me to manage all posts easily and contain some statistics. In addition, readers have an option to subscribe and get a weekly newsletter.\n\n" +
                "I've been using React, Material-UI and SCSS for the frontend using React hooks (useState and useEffect). The backend (database and storage) completely created with Firebase and Cloud Firestore. The newsletter service made with emailjs package.",
            links: [
                { id: 0, icon: null, caption: 'Website link', url: 'https://the-man-and-the-written-word.netlify.app/' },
                { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/personal-blog' }
            ],
            otherCreators: [],
            type: 'React Website',
            youtube: null,
            images: null,
            web: true
        })
    .set('portfolio-plus',
        {
            index: 5,
            title: 'Portfolio Plus',
            subtitle: 'An online personal portfolio landing page generator',
            date: new Date('2021-1-24'),
            image: 'https://lh3.googleusercontent.com/kMIJChi_DN8WaEs94gBRQ75jGPKSzUSmQC2fDZvODYkyZv5EqDEr6NLxAB_M7fc9DhfLVYCjjoWEHccpgGYayd3pgftByOXuI0pyl3LRT9mq8FoE8Ie8fQegF3USOdU5bdIMmRbc1A=w2400',
            stack: ['JavaScript', 'CSS3', 'ReactJS', 'Material-UI', 'Styled-Components', 'Firebase', 'Top npm packages:', ['clsx', 'react-share', 'react-router-dom']],
            utilities: [],
            description:
                "Portfolio Plus is a web service that allows you to create a designed landing page with your personal projects in a readable and colorful way. The most important feature - you can send it easily to anyone. The idea was born out of a need to unify all projects in one place, which will be a slightly less generic and banal way as in a resume. \n\n" +
                "So, how does it works? \n Once you create an account with a standard email, username and password, you will get a page of your own. Add as many projects as you want, upload a profile image, choose a style and share it with everyone! Easy, isn't it? \n\n" +
                "I've been using React for the frontend using React hooks (useState and useEffect). The backend (authentication, database and storage) completely created with Firebase and Cloud Firestore.",
            links: [
                { id: 0, icon: null, caption: 'Website link', url: 'https://portfolio-plus.netlify.app/' },
                { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/Portfolio-Plus' }
            ],
            otherCreators: [],
            type: 'React app',
            youtube: null,
            images: null,
            web: true
        })
    .set('path-to-success',
        {
            index: 4,
            title: 'Path To Success',
            subtitle: 'A website with my summaries and tips of first degree in Computer Science ',
            date: new Date('2020-11-1'),
            image: 'https://lh3.googleusercontent.com/w7Vn-noUuuyEjxZ2GbYXJ_q7YFg7T0hP3859XHLdN7DMNg0IfEb7a1-uPHmtAGmZA3z92qZSleeU5JZFYxqzbogb2T54I8lXAeScCbAJTmoa6u_YzwFtm9ekse8tNmcx8X96Sa504Q=w2400',
            stack: ['JavaScript', 'SASS', 'ReactJS', 'Material-UI', 'Framer Motion'],
            utilities: [],
            description:
                "I've graduated in 2019 after 4 challenging years and since then, I'm interested in web development. \n\n" +
                "During the degree, I summarized quite a bit of the study materials, and I know how difficult a Computer Science degree can be, so I've decided to build a website with 2 goals: " +
                "Sharing my summaries and tips in order help those who are currently studying in HIT and keep practicing in React. \n\n" +
                "I've built it using React, Material-UI, Sass and some other npm packages, like react-router-dom, framer-motion and react-scroll. " +
                "The filss are stored in Firebase server",
            links: [
                { id: 0, icon: null, caption: 'Website link', url: 'https://path-to-success.netlify.app/' },
                { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/path-to-success' }
            ],
            otherCreators: [],
            type: 'React Website',
            youtube: null,
            images: null,
            web: true
        })
    .set('search-without-spoilers',
        {
            index: 3,
            title: 'Search Without Spoilers',
            subtitle: 'A bot which searching information about TV shows and movies',
            date: new Date("2020-9-23"),
            image: 'https://lh3.googleusercontent.com/XLdCB_EHOQ7gIe7m1ok1QzbmkIjz_Ax41ZaC2eQoPqmcVxCQgKYrpVSLstRi25mSnqLSnaZ55-yXOng5e5grCwGZqtEUa-jsgRBykvEahaouE8MTC_mFcbcFVRuAgbByP062n3lxUg=w2400',
            stack: ['Python', 'PyCharm'],
            utilities: [],
            description:
                "I don't like spoilers, so much so that I prefer not to see trailers and even pictures from a series or movie that has not yet been screened.\n" +
                "The problem is when I want to check when a new season or movie will airing, I need to encounter small spoilers.\n\n" +
                "So in order to avoid that, I've programmed a telegram bot that will do it for me. This bot can search for a release date of a new season or a new movie. I've also added additional commands that provide information about rating, cast, genre and cover photo.\n\n" +
                "The bot has written in Python using telebot package for the basic commands, a Python package called IMDbPy which provided me most of the information that I needed for and urlopen package for web scraping.",
            links: [
                { id: 0, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/Search-Without-Spoilers-Bot' }
            ],
            otherCreators: [],
            type: 'Telegram Bot',
            youtube: 'https://www.youtube.com/embed/mO-mX_kYXSk',
            images: null,
            web: false
        })
    .set('game-of-phones',
        {
            index: 2,
            title: 'Game of Phones',
            subtitle: 'Windows application for rating mobile phones based on different age groups',
            date: new Date("2019-5-28"),
            image: 'https://lh3.googleusercontent.com/V12sHHJPwZ-QtTZtgKHRp2hjFskBKypqvftUQ00fWqzvmNLy25h6QUmaox7F23YnAk49XzfR7c0txIrRSp_PRpxJ32MwgmD_PcI7DtZLl9PYpSyWgjrMZPkHxA6guIF7W--tYXbNIw=w2400',
            stack: ['Python', 'PyCharm'],
            utilities: [],
            description:
                "A Windows application developed as part of a Heuristic Algorithms course. \n\n" +
                "The app ranks mobile phones by some criteria using 2 heuristic algorithms: TOPSIS and Borda. Also, the app uses real data from GSMArena site which has been scraped ahead of time by a Python script. \n\n" +
                "The rating based on 3 age groups: Children up to the age of 12, high-tech workers and retirees. After rating, The app will display the 5 best phones for each age group with a link for the phone's page in GSMArena.",
            links: [
                { id: 0, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/Heuristics' }
            ],
            otherCreators: [
                { id: 0, caption: 'ML', photo: 'https://lh3.googleusercontent.com/PYOJJYALum3UOjUMc0z2wvmudrbfBCpxUHh7smTXt8aV8KG6uf4TskCK8A3INgXTUfGvyJeXYZ3I5z6PNpuwRxsxMA3EOvkyI5s6PCp4HOODrh_yH_nfvQzjARBxM_s-XK6zvvyI1A=s200-p-k', url: 'https://www.linkedin.com/in/melinda-levi-5501481ab/' },
                { id: 1, caption: 'KL', photo: 'https://lh3.googleusercontent.com/8TQFjmt-kcJMNnlC2KUR5jGSgGXz1zR3MTQ7LnGTVOS1-EssawWFuDborRBxiQvP6Pctl3MkW_YNTvohDF511dBkYbQNxpKHIbIlGqebKZs90ed83Wts3UKJ_lwrDn-S7kY_QIUrFg=s200-p-k', url: 'https://www.linkedin.com/in/kostya-lokshin-6577a2163/' }
            ],
            type: 'Windows App',
            youtube: 'https://www.youtube.com/embed/v9cWouBaRNY',
            grade: 100,
            images: null,
            web: false
        })
    .set('spin-and-learn',
        {
            index: 1,
            title: 'Spin and Learn',
            subtitle: 'Educational mind game based on Wheel of Fortune for Android devices',
            date: new Date("2019-2-4"),
            image: 'https://lh3.googleusercontent.com/RxoiIGbgUDwLb8l_sDQ_HEWloUZNKav8SSg4x457LdD8q9ttW-ZOkJev7TNuz3VnzN4X6PVQaKmHLpCH1NmtSZlrrpFuCp-_4K5XAMC7yFRyEAm-f1l1VhSzgz0TKRV1oOo1MDN39w=s200-p-k',
            stack: ['Java', 'XML', 'Android Studio', 'Adobe Photoshop'],
            utilities: [],
            description:
                "An educational mind game developed as part of an Android course.\nThe game is based on the Wheel of Fortune: The wheel containing four different types of questions must be rotated: Completing letters in a word by definition, completing a proverb, identifying capital cities and simple exercises in mathematics.\n\n" +
                "The aim of the game is to accumulate as many correct answers as possible and earn as many points as possible when there are 10 questions.\n\n" +
                "The game is available in the Google Play store in 3 languages: Hebrew, English and Russian.",
            links: [
                { id: 0, icon: 'play', caption: 'The app in Google Play store', url: 'https://play.google.com/store/apps/details?id=tsahi.and.kostia.spinandlearn' },
                { id: 1, icon: 'git', caption: 'Git repository', url: 'https://github.com/tsahiBarshevsky/Spin-and-learn' }
            ],
            otherCreators: [
                { id: 0, caption: 'KL', photo: 'https://lh3.googleusercontent.com/8TQFjmt-kcJMNnlC2KUR5jGSgGXz1zR3MTQ7LnGTVOS1-EssawWFuDborRBxiQvP6Pctl3MkW_YNTvohDF511dBkYbQNxpKHIbIlGqebKZs90ed83Wts3UKJ_lwrDn-S7kY_QIUrFg=s200-p-k', url: 'https://www.linkedin.com/in/kostya-lokshin-6577a2163/' }
            ],
            type: 'Android App',
            youtube: 'https://www.youtube.com/embed/jB1Oi45VU8k',
            grade: 100,
            images: null,
            web: false
        })
    .set('MMU-client–server-based',
        {
            index: 0,
            title: 'MMU Client-Server Based',
            subtitle: 'A Client-Server based system that simulates Memory Management Unit ',
            date: new Date("2018-6-28"),
            image: 'https://lh3.googleusercontent.com/0nbL2zHiENeti3i0rOPq7pDXfXzxtGedg8H478E0nXA2qyJPtj5QdwQA2WEArHUem5N4NqFZCgYaV6CEpteN_ULcLrO-JKRqjQmCi1iHApdVtX6SI8d5qUaRkITd2h96kkwR-k1gEg=w2400',
            stack: ['Java', 'Eclipse'],
            utilities: [],
            description:
                "A windows application developed as part of an Internet Programming in Java course.\n\n" +
                "The system simulates the operation of the Memory Management Unit by using HashMap with two fields: page and key. The paging between the different pages is done using 4 paging algorithms: Most Recent Used, Least Recent Used, Random and Second Chance.\n\n" +
                "The system is based on a client-server architecture, MVC design pattern and parallel programming to insure that several clients will be able to connect to the server at the same time.",
            links: [
                { id: 0, icon: 'git', caption: "Client's git repository", url: 'https://github.com/tsahiBarshevsky/CacheUnitClient' },
                { id: 1, icon: 'git', caption: "Server's git repository", url: 'https://github.com/tsahiBarshevsky/CacheUnitProject' }
            ],
            otherCreators: [
                { id: 0, caption: 'SA', photo: 'https://lh3.googleusercontent.com/KV_ZS78Y5VyDJe9sZGFMADu02qbPgBOjUpGKZjf1J65aJiIkqa50GCx_0abubYiw_4lWe3tYNsnuKLLJclZyCbfDn5oQSkGARXykK2OQxug_fGDP3zpaxQC00YKVM8pS1iZvvDQIYA=s200-p-k', url: 'https://www.linkedin.com/in/shelly-ambar-a96382146' },
            ],
            type: 'Windows App',
            youtube: 'https://www.youtube.com/embed/bkKoEZDgPGo',
            grade: 95,
            images: null,
            web: false
        });