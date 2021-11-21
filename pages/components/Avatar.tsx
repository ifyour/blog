import Image from 'next/image';
import avatar from '../../public/images/avatar.jpg';

export default function Avatar() {
  return (
    <div className="avatar-container">
      <Image src={avatar} alt="avatar" />
      <style jsx>{`
        .avatar-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
}
