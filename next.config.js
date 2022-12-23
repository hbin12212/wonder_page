module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "https://page.stibee.com/subscriptions/219667",
                permanent: false,
            },
        ];
    },
};
