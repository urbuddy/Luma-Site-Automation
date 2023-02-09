module.exports = {
    globalSetup: './Setup/setup.js',
    globalTeardown: './Setup/teardown.js',
    testEnvironment: './Setup/puppeteer_environment.js',
    testTimeout: 50000,
    setupFilesAfterEnv: ['./Setup/setup-jest.js'],
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Luma Test Report",
            'outputPath': 'report.html'
        }]
    ]
};