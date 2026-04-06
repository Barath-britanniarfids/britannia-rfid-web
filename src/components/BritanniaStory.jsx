import { useState } from 'react'
import styles from './BritanniaStory.module.css'

const VIDEO_ID = 'Az4vVMVSJUg'
const THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`
const EMBED  = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`

export default function BritanniaStory() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className={styles.section} id="story">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>The Britannia Story</h2>
          <p className={styles.subheading}>
            Discover nearly five decades of innovation and our commitment to pioneering the future of digital identity.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          {playing ? (
            <iframe
              className={styles.iframe}
              src={EMBED}
              title="The Britannia Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* YouTube thumbnail */}
              <img
                src={THUMB}
                alt="The Britannia Story video thumbnail"
                className={styles.thumb}
              />
              {/* Dark overlay */}
              <div className={styles.thumbOverlay} />
              {/* Play button */}
              <button
                className={styles.playBtn}
                onClick={() => setPlaying(true)}
                aria-label="Play The Britannia Story video"
              >
                <div className={styles.playCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <polygon points="5 3 19 12 5 21 5 3" fill="#fff" />
                  </svg>
                </div>
                <span className={styles.playLabel}>Watch Our Story</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
