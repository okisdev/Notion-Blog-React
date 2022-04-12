import { useTheme } from 'next-themes';

import { BsSunFill, BsMoonFill } from 'react-icons/bs';

import modeConfig from '../config/mode.config';

const BlogThemeSwither = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div id='notion-blog-theme-switcher' className='flex items-center justify-center my-3'>
            {modeConfig.global.footer.themeSwitcher.shown && (
                <div className='flex rounded border-2 p-1 transition duration-500 ease-in-out hover:ring-2 hover:bg-[#23272d] hover:text-[#adbac7] dark:hover:bg-white dark:hover:text-[#23272d]'>
                    {theme === 'dark' ? (
                        <button
                            onClick={() => {
                                setTheme('light');
                            }}
                        >
                            <BsSunFill />
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setTheme('dark');
                            }}
                        >
                            <BsMoonFill />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default BlogThemeSwither;
