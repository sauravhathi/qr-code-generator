import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import QRCode from 'qrcode'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [qrCode, setQrCode] = useState('')

  function handleQRCode(value: string): void {
    QRCode.toDataURL(value, (err, url) => {
      setQrCode(url)
    })
  }

  return (
    <>
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate QR Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            QR Code Generator
          </h1>
          <p className={styles.description}>
            Generate QR Codes for your website, social media, or anything else.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Website &rarr;</h3>
              <p>Generate QR Codes for your website.</p>
            </div>
            <div className={styles.card}>
              <h3>Social Media &rarr;</h3>
              <p>Generate QR Codes for your social media.</p>
            </div>
            <div className={styles.card}>
              <h3>Anything &rarr;</h3>
              <p>Generate QR Codes for anything.</p>
            </div>
          </div>
          <div className={styles.inputBox}>
            <div className={styles.input}>
              <label htmlFor="url">URL</label>
              <input type="text" id="url" name="url" onChange={(e) => handleQRCode(e.target.value)} placeholder="https://example.com" />
              <span id="urlError"></span>
            </div>

          </div>
          <div className={styles.qrCode}>
            <Image src={qrCode ? qrCode : 'https://github.com/sauravhathi/qr-code-generator/blob/main/public/qr-code.png?raw=true'}
           alt="QR Code" width={300} height={300} className={styles.qrCodeImg} />
          </div>
        </div>
        <footer className={styles.footer}>
          <a href="https://github.com/sauravhathi" target="_blank" rel="noopener noreferrer">
            Made by{' '}
            <Image src="https://avatars.githubusercontent.com/u/61316762?v=4" className={styles.fooImg} alt="Logo" width={100} height={100} />
            <span>@sauravhtahi</span>
          </a>
        </footer>
      </main>
    </>
  )
}
