exports.name = 'sudc-system';
exports.namespace = 'sudc';
exports.id = '62999e58-66a0-4e50-a870-f2673acf6c79';

exports.topology = {
  local: {
    root: ['doc', 'hist', 'real', 'web']
  },
  direct: {
    machine$123: {
      contains: ['doc', 'hist', 'real', 'web'],
      specific: {
        user: 'root',
        identityFile: 'sudc-key'
      }
    }
  }
};

