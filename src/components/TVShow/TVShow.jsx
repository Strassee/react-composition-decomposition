/**  
 * @description Компонент "Телепередача"
 */

function TVShow({ tvshow, time=false, imgplay=false }) {
    let img = '';
    if(imgplay) {
        img = <img src={imgplay} className='imgplay' alt='tvshow' />
    }
    return (
        <div className="tvshow">
            {img}
            {{time} ? <span>{time.time}</span> : ''}&nbsp;
            <span>{tvshow.title}</span>&nbsp;<span className="tvchannel">{tvshow.channel}</span>
        </div>
    );
}

export default TVShow;