import ListTab from "../../component/listTab";
import Wallet from "../../component/wallet";
import Calender from "../../component/calender";
import TotalWidgetV2 from "../../component/widget/TotalWidgetV2";
import Summary from "../../component/summary";
import Location from "../../component/summary/Location";

function HomeTwo() {
    return (
        <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-12 xl:pb-12 xl:flex-wrap">
            <div className="2xl:flex 2xl:space-x-[48px]">
                <section className="2xl:flex-1 2xl:mb-0 mb-6">
                    <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
                        <TotalWidgetV2 />
                        <Location />
                    </div>
                    <div className="w-full mb-[24px] flex space-x-[24px]">
                        <Summary />
                    </div>
                    <ListTab />
                </section>
            </div>
            <section className="w-full flex space-x-0 lg:flex-row lg:space-x-6 2xl:flex-row 2xl:space-x-0 h-full">
                    <Wallet />
                    <Calender />
                </section>
        </main>
    );
}

export default HomeTwo;
