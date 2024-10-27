export const getBaseUrl = (): any => {
    const environment = process.env.NODE_ENV;

    switch (environment) {
        case 'development':
            return 'http://localhost:8880/api/v1'; // Replace with your development API URL
        case 'production':
            return 'http://localhost:8880/api/v1';// Replace with your production API URL
        default:
            return 'http://localhost:8880/api/v1'; // Replace with a default API URL
    }
};