
const Footer = () => {
    const colors = ['#2FA8E1', '#E20615', '#73BB2B', '#E7CF33' , '#8E8E8E'];
    const labels = ['本だな', 'おすすめの本', '本をさがす', '本のとうろく', 'せってい/つかい方'];
    const links = [
        "/categories",
        "/recommendation",
        "/search",
        "/uploder",
        "/setting"
    ];

    return (
        <footer className="bg-sky-swift flex flex-wrap items-center justify-center p-10 md:p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center">
                {colors.slice(0, 5).map((color, index) => (
                    <a key={index} href={links[index]} className="flex flex-col items-center">
                        <div
                            className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
                            style={{ backgroundColor: color }}
                        >
                            <div className="w-[110px] h-[110px] rounded-full border-2 border-dashed border-white flex items-center justify-center hover:border-solid">
                            </div>
                        </div>
                        <span className="mt-2 text-sm md:text-lg lg:text-xl font-medium text-gray-700">{labels[index]}</span>
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;