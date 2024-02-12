import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink';
import {useTranslation} from 'react-i18next';

export const Navbar = () => {
  const {t} = useTranslation();
  return (
    <div className={cls.Navbar}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('About')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          {t('Main')}
        </AppLink>
      </div>
    </div>
  );
};
