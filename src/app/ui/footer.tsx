
const Footer = () => {
    const colors = ['#2FA8E1', '#E20615', '#73BB2B', '#E7CF33', '#8E8E8E'];
    const labels: { [key: string]: string[] } = {
        '本だな': [],
        'おすすめの本': [],
        '本をさがす': ['キーワードからさがす', 'カテゴリーからさがす'],
        '本のとうろく': [],
        'せってい/つかい方': ['きほんせってい', 'ログイン']
    };

    const links: { [key: string]: { main: string; sub: string[] } } = {
        '本だな': { main: '/bookshelf', sub: [] },
        'おすすめの本': { main: '/recommendation', sub: [] },
        '本をさがす': { main: '/searchSelect', sub: ['/search', '/categories'] },
        '本のとうろく': { main: '/uploder', sub: [] },
        'せってい/つかい方': { main: '/setting', sub: ['/setting', '/setting'] },
    };


    return (
        <footer className="bg-[#FFF4DE] p-10 md:p-12 lg:p-16 min-h-[400px] flex items-center">
            {/*min-h-[400px]でフッターの高さ*/}
        <div className="flex justify-between w-full">
            {/*メニューを横に均等に配置 */}
            {Object.keys(labels).map((label, index) => (
                <div key={index} className="flex flex-col items-center flex-1 px-4">
                    {/* メインメニュー */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-4 h-8 rounded-md" style={{ backgroundColor: colors[index] }}></div>
                         {/* 色付き四角 */}
                        <a href={links[label].main} className="text-sm md:text-lg lg:text-xl font-medium text-gray-700 hover:text-blue-500 pb-1">
                            {/* メインラベル */}
                            {label}
                        </a>
                    </div>

                    {/* サブメニュー */}
                    {labels[label].length > 0 && (
                        <div className="mt-4 flex flex-col items-center gap-3">
                            {labels[label].map((subLabel: string, subIndex) => (
                                <a
                                    key={subIndex}
                                    href={links[label].sub[subIndex] || '#'}
                                    className="block text-sm font-medium text-gray-700 hover:text-blue-500 border-b-2 border-gray-700"
                                >
                                    {subLabel}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </footer>
    );
};

export default Footer;