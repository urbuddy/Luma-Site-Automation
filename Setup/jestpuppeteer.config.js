module.exports = {
    launch: {
        headless: process.env.HEADLESS==='false'? false:true,
        args: [`--window-size=900,1200`],
    },
    retryCount: Number(process.env.RETRIES)
};