export class MockData {
    public static readonly users = [
        {
            id: 1,
            position: 'Egide Niyomukiza',
            name: 'Software Engineer',
            available: 'Yes',
            sex: 'Male',
            address: 'Kigali, Rwanda',
            telephone: '+250787988760',
            email: 'negide3@gmail.com',
            web: 'https://egide-niyomukiza.netlify.app'
        }
    ];


    public static readonly recommendation = [
        {
            id: 1,
            user_id: 1,
            level: 1
        },
    ];

    public static readonly user_reputations = [
        {
            id: 1,
            user_id: 1,
            user_reputations: [
                'Skilled',
            ]
        }
    ];

    public static readonly interest = [
        {
            id: 1,
            user_id: 1,
            interest: [
                'Full Stack Development'
                
            ]
        }
    ];

    public static readonly experience = [
        {
            id: 1,
            user_id: 1,
            owner: 'Egide Niyomukiza',
            ID: '0000 00200 0220 0000 00 4333',
        }
    ];

    public static readonly user_skills = [
        {
            id: 1,
            user_id: 1,
            service_name: 'Software Engineering Skills',
            sections: [
                {
                    section_name: 'Python',
                    section_rate: 4
                },
                {
                    section_name: 'Software Testing',
                    section_rate: 4
                },
                {
                    section_name: 'Data Science',
                    section_rate: 3
                },
                {
                    section_name: 'Angular',
                    section_rate: 3
                },
            ]
        },

    ];
}
