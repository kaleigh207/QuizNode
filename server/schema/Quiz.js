module.exports = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'title': 'Quiz',
  'description': 'A quiz tests one\'s knowledge in a particular field.',
  'properties': {
    'name': { 'type': 'string' },
    'groups': { 'type': 'array', 'items': { 'type': 'string' } },
    'description': { 'type': 'string' },
    'questions': { 'type': 'array', 'oneOf': [
      { '$ref': '#/definitions/question' }
    ] },
  },
  'definitions': {
    'question': {
      'name': 'Question',
      'description': 'A question in a quiz',
      'properties': {
        'categories': { 'type': 'array', 'items': { 'type': 'string' } },
        'questionText': { 'type': 'string' },
        'type': { 'type': 'number' },
        'answer': { 'type': 'string' },

      }
    }
  }
};
