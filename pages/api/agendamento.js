async function getReservas(req,res){
    const response = await fetch('http://localhost:3000/agendamento/sala/'+req.query.id_sala);
    const data = await response.json();
    if (response.status == 200){
        res.status(200).json(data);
    }else{
        res.status(response.status).json(data.message);
    }
}

async function postReservas(req,res){
    const response = await fetch('http://localhost:3000/agendamento',
    {method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        ...req.body,
        hora_fim: '00:00',

    })});
    const data = await response.json();
    if (response.status == 201){
        res.status(201).json(data);
    }else{
        res.status(response.status).json(data.message);
    }
}

async function deleteReservas(req,res){
    const response = await fetch('http://localhost:3000/agendamento/'+req.query.id_agendamento,
    {method:'DELETE'});
    const data = await response.json();
    res.status(response.status).json(data.message);
}


export default function handler(req,res){
    switch(req.method){
        case 'GET':
            return getReservas(req,res);
        case 'POST':
            return postReservas(req,res);
        case 'DELETE':
            return deleteReservas(req,res);
        default:
            res.status(405).json({message:"Método não suportado"});
            break;
    }
}