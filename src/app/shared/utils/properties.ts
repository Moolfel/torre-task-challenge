export class Properties {
    public static readonly DEFAULT_APPLICATION_LANGUAGE = 'en';
    public static readonly RECOMMENDATION = [
        { code: 'en', largeCode: 'en-EN', name: 'English' }
    ];
    public static readonly BACKEND_SERVICES_ENDPOINT = '/api';

    public static readonly MAX_RATING = 5;

    public static readonly DEFAULT_THEME = 'green';
    public static readonly COLOR_THEMES = [
        {
            name: 'green',
            code: '#65b61b'
        },
        {
            name: 'red',
            code: '#dc3232'
        },
        {
            name: 'blue',
            code: '#30a4e2'
        }
    ];
}
