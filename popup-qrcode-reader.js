const readQRCode = async regexStr => {
    const w2 = window.open(`https://weak-kajuma.github.io/popup-qrcode-reader/index.html?origin=${encodeURIComponent(window.location.origin)}&regex=${encodeURIComponent(regexStr)}`, '_blank', 'popup=yes,width=680,height=640');
    let receivedMessage;
    const receiveListener = e => {
        if (e.origin === 'https://weak-kajuma.github.io') receivedMessage = e.data;
    };
    window.addEventListener('message', receiveListener);
    // eslint-disable-next-line no-unmodified-loop-condition
    while (!receivedMessage) {
        // eslint-disable-next-line no-loop-func
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1);
        });
    }
    w2.close();
    window.removeEventListener('message', receiveListener);
    return receivedMessage;
};

export default readQRCode;
