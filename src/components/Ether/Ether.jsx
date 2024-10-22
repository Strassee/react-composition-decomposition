/**  
 * @description Компонент "В эфире"
 */
import TVShow from '../TVShow/TVShow';
import imgplay from './Play.png';

function Ether(props) {
    const tvshow = {
        title: 'Comedy club',
        channel: 'ТНТ'
    }
    return (
        <div className="flexitemsbottom ether">
            <span>ETHER</span>
            <TVShow tvshow={tvshow} imgplay={imgplay} />
            <TVShow tvshow={tvshow} imgplay={imgplay} />
        </div>
    );
}

export default Ether;