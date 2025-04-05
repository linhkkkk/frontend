const Footer = () => {
    return (
        <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white front-bold tracking-tight">
                OrderFood.com
            </span>
            <span className="text-white front-bold tracking-tight flex gap-4">
                <span>Chính Sách Quyền Riêng Tư</span>
                <span>Điều Khoản Dịch Vụ</span>
            </span>
        </div> 
        </div>
    );
};

export default Footer;