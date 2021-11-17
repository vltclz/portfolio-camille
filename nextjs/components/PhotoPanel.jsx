import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as styles from './PhotoPanel.styles';

export default function PhotoPanel({ photos, onClose }) {
  const router = useRouter();
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const showPhotoPanel = Boolean(router.query?.id);
  const currentPhotoIndex = photos.indexOf(currentPhoto);
  const cantGoLeft = currentPhotoIndex === 0;
  const cantGoRight = currentPhotoIndex === photos.length - 1;

  const goTo = (photoId) => {
    setCurrentPhoto(null);
    router.push(`${router.route}?id=${photoId}`, undefined, {
      shallow: true,
    });
  };

  const goLeft = () => {
    goTo(photos[currentPhotoIndex - 1].id);
  };

  const goRight = () => {
    goTo(photos[currentPhotoIndex + 1].id);
  };

  const close = () => {
    router.push(router.route, undefined, { shallow: true });
    document.body.style.overflow = 'visible';
    onClose();
    setTimeout(() => setCurrentPhoto(null), 500);
  };

  useEffect(() => {
    if (showPhotoPanel) {
      setCurrentPhoto(
        photos.find(({ id }) => id.toString() === router.query.id)
      );
      setIsLoading(true);
    }
  }, [router]);

  if (typeof window === 'object') {
    let fired = false;
    document.onkeydown = (e) => {
      if (!fired && showPhotoPanel) {
        if (e.key === 'ArrowLeft' && !cantGoLeft) {
          goLeft();
        }
        if (e.key === 'ArrowRight' && !cantGoRight) {
          goRight();
        }
        if (e.key === 'Escape') {
          close();
        }
        fired = true;
      }
    };
    document.onkeyup = () => {
      fired = false;
    };
  }

  return (
    <div className={styles.photoPanel(showPhotoPanel)}>
      <div className={styles.grid}>
        <button
          type="button"
          className={styles.leftArrow}
          disabled={cantGoLeft}
          onClick={goLeft}
        >
          <Image
            src="/chevron_left.png"
            width={24}
            height={24}
            layout="fixed"
          />
        </button>

        <div className={styles.photoContainer(isLoading)}>
          {isLoading && <Image src="/loader.png" width={32} height={32} />}
          {currentPhoto && (
            <Image
              src={`${process.env.STRAPI_URL}${currentPhoto.photo.url}`}
              className={styles.photo(isLoading)}
              layout="fill"
              onLoadingComplete={() => {
                setIsLoading(false);
              }}
            />
          )}
        </div>

        <button
          type="button"
          className={styles.rightArrow}
          disabled={cantGoRight}
          onClick={goRight}
        >
          <Image
            src="/chevron_right.png"
            width={24}
            height={24}
            layout="fixed"
          />
        </button>

        <div className={styles.descSection}>
          <div>
            {currentPhoto && (
              <>
                <h1 className={styles.title}>{currentPhoto.title}</h1>
                <p>{currentPhoto.description}</p>
              </>
            )}
          </div>
          <button type="button" className={styles.closeButton} onClick={close}>
            <Image src="/cross.png" width={24} height={24} layout="fixed" />
          </button>
        </div>
      </div>
    </div>
  );
}
