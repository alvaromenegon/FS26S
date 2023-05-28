export default async function handler(req, res) {
    const { patrimonio } = req.query;
    const response = await fetch(`http://localhost:3000/equipamento/${patrimonio}`);
    const data = await response.json();
    if (response.status == 200) {
        res.status(200).json(data);
    }
    else if (response.status == 404) {
        res.status(404).json(data.message);
    }
    else {
        res.status(500).json(data.message);
    }
}