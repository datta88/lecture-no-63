
import ReactDOM from 'react-dom/client';
import Card, {Heading} from './view/Card/Card';
import Img from './view/Image/gold.jpg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Heading />
 <div className='div-img'>
 <Card img={Img} title={'jay shreeram'} text={'good morning'} />
 <Card img={Img} title={'om sai ram'} text={'good afternoon'} />
 <Card img={Img} title={'om namih shivay'} text={'good night'} />
 </div>
 </>
 
);

