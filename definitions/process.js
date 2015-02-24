exports.docProcess = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-doc.git',
    processBuild: 'npm install',
    execute: {
      process: 'srv/doc-srv.js'
    }
  }
};


exports.histProcess = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-history.git',
    processBuild: 'npm install',
    execute: {
      process: 'srv/hist-srv.js'
    }
  }
};

exports.realProcess = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-realtime.git',
    processBuild: 'npm install',
    execute: {
      process: 'srv/real-srv.js'
    }
  }
};

exports.webProcess = {
  type: 'process',
  specific: {
    repositoryUrl: 'https://github.com/nearform/sudc-web.git',
    processBuild: 'npm install; cd web; npm install; npm install bower -g; bower install',
    execute: {
      process: 'index.js',
      cwd: 'web'
    }
  }
};

