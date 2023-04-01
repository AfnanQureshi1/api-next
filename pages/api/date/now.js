export default function now(req, res) {
    const date = new Date();
    const format = date.toGMTString();

    res.setHeader("Cache-Control", "s-maxage=10,stale-while-revalidate"); //cannot test locally- have to deploy on vercel to test
    res.json({now: format});
}