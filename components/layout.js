import Header from './header';
import Footer from './footer';

export default function Layout({children}) {{/*요소를 넣는건데 자식이라해서 children임 */}
    return (
        <div className='bg-primary'>
            <Header></Header>
            <div>{children}</div> {/*외부에서 들어온 html요소를 여기에 넣는 것 */}
            <Footer></Footer>
        </div>
    );
}