import Wrapper from "@/components/atoms/Wrapper";
import TypingBoard from "@/components/organizms/TypingBoard";
import Footer from "@/components/organizms/Footer";
import Header from "@/components/organizms/Header";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <div className="flex-1 grid place-items-center p-3 lg:p-10">
        <TypingBoard />
      </div>
      <Footer />
    </Wrapper>
  );
}
