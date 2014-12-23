exports.root = {
  type: 'container'
};

exports.doc = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-doc.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 9002:9002 -d',
      exec: '/usr/bin/node /srv/doc-srv.js',
      process: 'srv/doc-srv.js'
    }
  }
};


exports.hist = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-history.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 9003:9003 -d',
      exec: '/usr/bin/node /srv/hist-srv.js',
      process: 'srv/hist-srv.js'
    }
  }
};

exports.real = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-realtime.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 9001:9001 -d',
      exec: '/usr/bin/node /srv/real-srv.js',
      process: 'srv/real-srv.js'
    }
  }
};

exports.web = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-web.git',
    processBuild: 'npm install; cd web; npm install; npm install bower -g; bower install',
    execute: {
      args: '-p 8000:8000 -d',
      exec: '/bin/bash /web/run.sh',
      process: './index.js',
      cwd: 'web'
    }
  }
};

