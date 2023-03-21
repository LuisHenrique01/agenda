import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Agenda } from '@/interfaces'
import { list_agenda } from '@/network/api'
import ListAgenda from '@/components/itens'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  var agenda: Agenda[] = await list_agenda()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          console.log(&quot;A agenda mais linda do mundo&quot;)
          <code className={styles.code}> ou não</code>
        </p>
        <div>
          <a
            href="https://github.com/LuisHenrique01"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/fluidicon.png"
              alt="Luis perfil"
              width={60}
              height={60}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <ListAgenda
          items={agenda}
        />
      </div>
    </main>
  )
}
