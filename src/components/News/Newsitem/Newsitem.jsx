/**  
 * @description Компонент "Новость"
 */

function Newsitem({ news }) {

    return (
        <div className="newsitem">
            <img className='imgnews' src={news.img} alt='news' />&nbsp;
            <a href={news.link}><span className='textnews'>{news.text}</span></a>
        </div>
    );
}

export default Newsitem;