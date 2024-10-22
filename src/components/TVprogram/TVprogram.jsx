/**  
 * @description Компонент "Телепрограмма"
 */

import TVShow from '../TVShow/TVShow';

function TVprogram(props) {
    const tvshow = {
        title: 'Comedy club',
        channel: 'ТНТ'
    }
    const time = {
        time: '12:00',
    }
    return (
        <div className="flexitemsbottom tvprogram">
            <span>TV Program</span>
            <TVShow tvshow={tvshow} time={time} />
            <TVShow tvshow={tvshow} time={time} />
        </div>
    );
}

export default TVprogram;