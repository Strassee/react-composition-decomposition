/**  
 * @description Компонент "Посещаемое"
 */

import Page from './Page/Page';

function Visited(props) {
    const page = {
        title: 'visit page',
        description: 'description',
        link : '#'
    }
    return (
        <div className="flexitemsbottom visited">
            <span>VISITED</span>
            <Page page={page}/>
            <Page page={page}/>
        </div>
    );
}

export default Visited;