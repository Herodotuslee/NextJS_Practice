
import Image from 'next/image'
import styles from '@/styles/Eventitem.module.css'
export default function Eventitem({evt}) {
  return (
    <div className={styles.event}>
        <div className={styles.img}>
            <Image src={evt.image?evt.image:'/images/event-default.png'} width={170} height={100}></Image>

        </div>
    </div>
  )
}
