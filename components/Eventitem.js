
import Image from 'next/image'
import styles from '@/styles/Eventitem.module.css'
import Link from 'next/link'
export default function Eventitem({evt}) {
  return (
    <div className={styles.event}>
        <div className={styles.img}>
            <Image src={evt.image?evt.image.formats.thumbnail.url:'/images/event-default.png'} width={170} height={100}></Image>

        </div>
        <div className={styles.info}>
            <span>
                {evt.date} at {evt.time}
            </span>
            <h3>{evt.name}</h3>

        </div>
        <div className={styles.link}>
            <Link legacyBehavior href={`/events/${evt.slug}`}>
                <a  className='btn'>Details</a>
            </Link>
        </div>
    </div>
  )
}
