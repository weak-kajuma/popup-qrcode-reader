# popup-qrcode-reader
QR code reader by window.open()

## How to use
```
import readQRCode from './popup-qrcode-reader'

await readQRCode('^https://example.com/search?q=')
```
readQRCode(regex)

regex: Read only QRCode that matches regular expression

This library requires access to https://weak-kajuma.github.io/popup-qrcode-reader/index.html

QRコードは(株)デンソーウェーブの登録商標です
