module.exports = {
  changeChannelText: 'Mets la ',
  sentences: [
    {
      'service': 'lirc',
      'label': 'change-channel',
      'language': 'fr',
      'status' : 'official',
      'sentences': [
        {
          'uuid': '817954ed-7df7-423e-be29-308bc7d6f722',
          'text': 'Mets la %CHANNEL%'
        },
        {
          'uuid': '7b68693e-7367-4acd-a21e-ef7807f0c8f0',
          'text': 'Mets la chaine %CHANNEL%'
        }
      ]
    }
  ],
  answsers: [{
    'label': 'change-channel',
    'language': 'fr',
    'needAnswer' : 'false',
    'responses': [
      {
        'uuid': 'c0c1505e-0602-4124-815c-b22ee1624f19',
        'text': 'Ok, je change de chaine'
      },
      {
        'uuid': '67d5a4d6-f90c-4e47-a83a-56d4e30dd105',
        'text': 'Entendu, je change le chaine'
      }
    ]
  }]
};