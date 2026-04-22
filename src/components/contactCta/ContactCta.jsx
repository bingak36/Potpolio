import React from 'react'
import styles from './ContactCta.module.scss'
const ContactCta = () => {
  return (
    <section className={styles.cta_section}
    aria-labelledby='cta-heading'
    >
        <div className={`inner ${styles.inner}`}>
            <h1 className='tit tit__m'>
                  Ready to build something amazing together?
            </h1>
            <p className="txt">
                  Placeholder blurb — add your pitch and preferred contact channels here.
            </p>
            <div className={styles.cta}>
                <a className='btn btn__primary btn__small' href="mailto:hello@gmail.com">
                    Email
                </a>
                  <button className='btn  btn__small btn__ghost'  type='button'>
                    LinkedIn
                </button>
                  <button className='btn  btn__small btn__ghost'  type='button'>
                    Github
                </button>
            </div>
        </div>
    </section>
  )
}

export default ContactCta