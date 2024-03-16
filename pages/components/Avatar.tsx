import Image from 'next/image'
import avatar from '../../public/images/avatar.jpg'

export default function Avatar() {
  return (
    <Image
      src={avatar}
      alt="avatar"
      width={100}
      height={100}
      style={{ borderRadius: '50%', margin: 0 }}
    />
  )
}
