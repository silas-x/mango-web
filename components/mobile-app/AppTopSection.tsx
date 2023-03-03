import { useTranslation } from 'next-i18next'
import SectionWrapper from '../shared/SectionWrapper'
import ColorBlur from '../shared/ColorBlur'
import { useTheme } from 'next-themes'
import CheckBullet from '../shared/CheckBullet'
import AppStoreButtons from './AppStoreButtons'

const AppTopSection = () => {
  const { t } = useTranslation(['common', 'mobile-app'])
  const { theme } = useTheme()

  return (
    <div className="relative overflow-hidden">
      <SectionWrapper>
        <div className="grid grid-cols-12 xl:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="mb-6">{t('mobile-app:page-heading')}</h1>
            <CheckBullet>{t('mobile-app:bullet-1')}</CheckBullet>
            <CheckBullet>{t('mobile-app:bullet-2')}</CheckBullet>
            <CheckBullet>{t('mobile-app:bullet-3')}</CheckBullet>
            <CheckBullet>{t('mobile-app:bullet-4')}</CheckBullet>
            <CheckBullet>{t('mobile-app:bullet-5')}</CheckBullet>
            <div className="mt-8">
              <AppStoreButtons />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 relative h-48 sm:h-56 md:h-80 lg:h-full">
            <img
              className="w-full mt-10 lg:mt-0 absolute h-auto lg:-right-40 xl:right-0 z-10 lg:top-1/2 lg:transform lg:-translate-y-1/2"
              src={
                theme === 'Light'
                  ? '/images/@1x-home-hero-desktop-light.png'
                  : '/images/@1x-home-hero-desktop-dark.png'
              }
              alt=""
            />
          </div>
        </div>
      </SectionWrapper>
      <ColorBlur
        className="right-0 top-40 animate-blob"
        height="100%"
        width="50%"
      />
    </div>
  )
}

export default AppTopSection
