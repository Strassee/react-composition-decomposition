/**  
 * @description Компонент "Новости"
 */
import Newsitem from './Newsitem/Newsitem';
import newImg from './news.png';

function News(props) {
    const news = {
        img: newImg,
        text: 'This is news',
        link : '#'
    }

    return (
        <div className="flexitems news">
            <span>NEWS</span>
            <Newsitem news={news} />
            <Newsitem news={news} />
            <Newsitem news={news} />
            <Newsitem news={news} />
        </div>
    );
}

export default News;