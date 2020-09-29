import React, {useEffect} from 'react'
import {useRouter} from "next/router"
import styles from './styles.module.css'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const url = {
      pathname: '/',
    }

    // comment the next line to see that inline styles are not applied
    router.push(url, url)
  }, [])
  return <div className={styles.square} />
}
