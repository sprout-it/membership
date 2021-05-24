module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' },
            '/register': { page: '/register' },
            '/reset-password': { page: '/reset-password' },
            '/social-register': { page: '/social-register' },
            '/verification': { page: '/verification' },
        }
    },
}