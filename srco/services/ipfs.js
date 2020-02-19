const log = (msg) => {
  console.log(msg)
}

const getIpfs = () => new Promise((resolve, reject) => {
  if (window.ipfs) {
	if (window.ipfs.enable) {
	  log('window.ipfs.enable is available!')
	  // improve UX by asking for permissions upfront
	  return resolve(window.ipfs.enable({ commands: ['id', 'dag', 'add','cat'] }))
	}
	log('legacy window.ipfs is available!')
	return resolve(window.ipfs)
  }
  log('window.ipfs is not available, downloading from CDN...')
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/ipfs/dist/index.min.js'
  script.onload = () => {
	log('starting IPFS node')
	const ipfs = new window.Ipfs()
	ipfs.once('ready', () => resolve(ipfs))
  }
  script.onerror = reject
  document.body.appendChild(script)
});

if(Cfg.ipfs && Cfg.ipfs.on){
	getIpfs()
	  .then(ipfs => ipfs.id().then(id => {
		window.ipfs = ipfs;
		log(`running ${id.agentVersion} with ID ${id.id}`);
	  })
	  ).catch(log)
}