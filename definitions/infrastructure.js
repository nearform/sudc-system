exports.root = {
  type: 'container'
};

exports.webElb = {
  type: 'load-balancer',
  specific: {
    LoadBalancerName: 'nfd',
    Listeners: [{Protocol: 'HTTP', LoadBalancerPort: 80, InstanceProtocol: 'HTTP', InstancePort: 8000}],
    AvailabilityZones: ['us-west-2a'],
    Subnets: ['subnet-838e7ef4']
  }
};

exports.webSg = {
  type: 'access-rules',
  specific: {
    ingress: [{ipProtocol: 'tcp',
               fromPort: 22,
               toPort: 22,
               ipRanges: [{cidrIp: '0.0.0.0/0'}]},
              {ipProtocol: 'tcp',
               fromPort: 3000,
               toPort: 3000,
               ipRanges: [{cidrIp: '0.0.0.0/0'}]}],
    egress: []
  }
};

exports.machine = {
  type: 'machine-image',
};

