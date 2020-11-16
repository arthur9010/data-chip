module.exports = [
    {
        'model': 'User',
        'documents': [
            {
                '_id': 'user_jh23i4uhi141hiu12h',
                'socialName': 'Arthur Alves',
                'civilName': 'Arthur Marcelo Santana Alves',
                'career': 'Developer',
                'birthDate': '15/11/2001',
                'cpf': '50512515875',
                'rg': '380338221',
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
]