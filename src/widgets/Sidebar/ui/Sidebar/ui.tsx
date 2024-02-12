import classNames from '@/shared/lib/helpers/classNames';
import {useState} from 'react';

import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from '@/widgets/ThemeSwicher/ui/ThemeSwitcher';
import {LangSwitcher} from '@/widgets/LangSwitcher';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({className}: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  return (
    <div
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [
        className,
      ])}
    >
      <button onClick={toggleCollapsed}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
