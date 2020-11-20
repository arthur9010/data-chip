module.exports = [
    {
        'model': 'User',
        'documents': [
            {
                '_id': 'user_jh23i4uhi141hiu12h',
                'chip_id': '47:4B:7C:4B',
                'socialName': 'Arthur Alves',
                'civilName': 'Arthur Marcelo Santana Alves',
                'career': 'Developer',
                'birthDate': '15/11/2001',
                'cpf': '14512345880',
                'rg': '2803382445',
                'biologicalSex': 'M',
                'bloodGroup': 'A+' ,
                'weight': '72',
                'healthProblems': ['diabetes', 'pressão alta'] ,
                'allergies': ['dipirona'],
            },
        ],
    },
    {
        'model': 'Bank',
        'documents': [
            {
                '_id': 'bank_oij3o1ij231j0dd12sd',
                'balance': 10000,
                'extract': [],
                'user_id': 'user_jh23i4uhi141hiu12h',
            },
        ],
    },
    {
        'model': 'User',
        'documents': [
            {
                '_id': 'user_dg425f55i14s5h34f15g',
                'chip_id': '7A:1A:D1:16',
                'socialName': 'Laura Martins',
                'civilName': 'Laura Martins Gonçalves',
                'career': 'Developer',
                'birthDate': '05/11/2001',
                'cpf': '13516784525',
                'rg': '380338222',
                'biologicalSex': 'F',
                'bloodGroup': 'O' ,
                'weight': '40',
                'healthProblems': [] ,
                'allergies': [],
            },
        ],
    },
    {
        'model': 'Bank',
        'documents': [
            {
                '_id': 'bank_12djas09j1j0dd12sd',
                'balance': 100000,
                'extract': [],
                'user_id': 'user_dg425f55i14s5h34f15g',
            },
        ],
    },
]