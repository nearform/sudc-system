exports.root = {
  type: 'container'
};

exports.doc = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/kamil-mech/sudc-doc.git',
    execute: {
      args: '-p 9002:9002 -d',
      exec: '/usr/bin/node /srv/doc-srv.js'
    }
  }
};


exports.hist = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/darragh-hayes/sudc-history.git',
    execute: {
      args: '-p 9003:9003 -d',
      exec: '/usr/bin/node /srv/hist-srv.js'
    }
  }
};

exports.real = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/darragh-hayes/sudc-realtime/tree/update_dockerfile.git',
    execute: {
      args: '-p 9001:9001 -d',
      exec: '/usr/bin/node /srv/real-srv.js'
    }
  }
};

exports.web = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/darragh-hayes/sudc-web.git',
    execute: {
      args: '-p 8000:8000 -d',
      exec: '/bin/bash /web/run.sh'
    }
  }
};

