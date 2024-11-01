const lawsuits = [
    {
        id: 1,
        numero: '123',
        tribunal: 'TJAL',
        dataInicio: '21-05-2010',
        movimentos: [
            {
                id: 1,
                date: '21-05-2010',
                description: 'Inicio do processo',
            },
            {
                id: 2,
                date: '27-06-2010',
                description: 'Julgamento'
            },
            {
                id: 3,
                date: '31-12-2010',
                description: 'Processo encerrado'
            }
        ],
        partes: {
            autor : "Maria",
            reu : "Fabio"
        }
    },
    {
        id: 2,
        numero: '124',
        tribunal: 'TJAL',
        dataInicio: '24-05-2015',
        movimentos: [
            {
                id: 1,
                date: '24-06-2015',
                description: 'Processo investigado'
            },
            {
                id: 2,
                date: '28-06-2015',
                description: 'Processo finalizado'
            }
        ],
        partes: {
            autor : "Maria",
            reu : "Fabio"
        }
    },
    {
        id: 3,
        numero: '125',
        tribunal: 'TJAL',
        dataInicio: '15-08-2018',
        movimentos: [
            {
                id: 1,
                date: '15-08-2018',
                description: 'Abertura do processo'
            },
            {
                id: 2,
                date: '20-09-2018',
                description: 'Audiência de conciliação'
            },
            {
                id: 3,
                date: '10-11-2018',
                description: 'Sentença proferida'
            }
        ],
        partes: {
            autor : "Maria",
            reu : "Fabio"
        }
    },
    {
        id: 4,
        numero: '126',
        tribunal: 'TJAL',
        dataInicio: '10-01-2020',
        movimentos: [
            {
                id: 1,
                date: '10-01-2020',
                description: 'Início do processo'
            },
            {
                id: 2,
                date: '15-02-2020',
                description: 'Citação do réu'
            },
            {
                id: 3,
                date: '05-04-2020',
                description: 'Resposta do réu recebida'
            },
            {
                id: 4,
                date: '30-06-2020',
                description: 'Julgamento'
            },
            {
                id: 5,
                date: '15-07-2020',
                description: 'Processo encerrado'
            }
        ],
        partes: {
            autor : "Tatiana",
            reu : "Julia"
        }
    },
    {
        id: 5,
        numero: '127',
        tribunal: 'TJAL',
        dataInicio: '05-03-2022',
        movimentos: [
            {
                id: 1,
                date: '05-03-2022',
                description: 'Protocolo da ação'
            },
            {
                id: 2,
                date: '20-03-2022',
                description: 'Despacho do juiz'
            },
            {
                id: 3,
                date: '15-04-2022',
                description: 'Audiência de instrução'
            },
            {
                id: 4,
                date: '30-06-2022',
                description: 'Sentença'
            }
        ],
        partes: {
            autor : "Maria",
            reu : "Fabio"
        }
    }
];

export default lawsuits;
