exports.name = 'sudc-system';
exports.namespace = 'sudc';
exports.id = '62999e58-66a0-4e50-a870-f2673acf6c79';

exports.topology = {
  direct: {
    machine$123: {
      contains: ['doc', 'hist', 'real', 'web'],
      specific: {
        ipAddress: '178.62.92.122',
        user: 'root'
      }
    }
  },
  development: {
    root: ['doc', 'hist', 'real', 'web']
  },
  process: {
    root: ['doc', 'hist', 'real', 'web']
  }
};

