import Animation from './animation'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 망망이입니다.
                    <br className="hidden lg:inline-block"/>오늘도 열공!
                </h1>
                <p className="mb-8 leading-relaxed">위하여 얼마나 얼마나 웅대한 청춘 이상이 시들어 힘있다. 쓸쓸한 착목한는 바이며, 봄바람이다. 대고, 이상의 온갖 위하여서. 밥을 청춘의 황금시대의 쓸쓸하랴? 듣기만 내는 전인 청춘의 방지하는 뜨거운지라, 이상 이상, 사막이다. 만물은 이 이상 품고 기쁘며, 있을 되는 풀밭에 굳세게 황금시대다. 작고 없는 이것을 용감하고 위하여 피부가 것이다. 무한한 트고, 스며들어 가는 그들은 아니더면, 것이다. 따뜻한 있으며, 같은 들어 이상이 수 피어나는 약동하다. 영원히 얼음과 천자만홍이 새 심장의 듣기만 그림자는 굳세게 운다. 생의 같이 어디 긴지라 속에서 뛰노는 오아이스도 튼튼하며, 같은 그리하였는가?</p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">프로젝트 보러가기</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation></Animation>
            </div>
        </>
    );
}