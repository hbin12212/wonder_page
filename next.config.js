module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "http://bit.ly/3Ws3wnS",
                permanent: false,
            },
        ];
    },
};
