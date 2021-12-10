import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as styles from './Gallery.styles';
import PhotoPanel from './PhotoPanel';
import { photoUrl } from '../utils/images';

export default function Gallery({ photos }) {
  const router = useRouter();
  const thumbnailsRefs = useRef({});

  useEffect(() => {
    thumbnailsRefs.current = photos.reduce((acc, curr) => {
      acc[curr.id] = null;
      return acc;
    }, {});
  }, [photos]);

  const openPanel = (photoId) => {
    router.push(`${router.route}?id=${photoId}`, undefined, {
      shallow: true,
    });
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <PhotoPanel
        photos={photos}
        onClose={() => {
          if (thumbnailsRefs.current[router.query.id]) {
            thumbnailsRefs.current[router.query.id].scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
            });
          }
        }}
      />

      <section className={styles.galleryContainer}>
        {photos.map(({ photo, title, id }) => (
          <div
            key={`photo-${id}`}
            role="button"
            className={styles.photoContainer}
            onClick={() => openPanel(id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                openPanel(id);
              }
            }}
            tabIndex={id}
            ref={(el) => {
              thumbnailsRefs.current[id] = el;
            }}
          >
            <Image
              src={photoUrl(photo, 'small')}
              className={styles.photo}
              layout="fill"
              priority
            />
            <div className={styles.titleOverlay}>
              <span>{title}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
