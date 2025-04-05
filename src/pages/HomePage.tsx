import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Thưởng thức một suất đồ ăn mang về hôm nay
        </h1>
        <span className="text-xl">Chỉ cần một cú click để có ngay đồ ăn!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage } />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter" >
                Đặt đồ ăn mang về nhanh hơn nữa!
            </span>
            <span>
                Tải ứng dụng OrderFood để đặt hàng nhanh hơn và nhận gợi ý cá nhân hóa!
            </span>
            <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;