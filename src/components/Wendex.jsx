/**  
 * @description Компонент главной страницы сайта
 */

import Banner from './Banner';
import Ether from './Ether/Ether';
import Exchange from './Exchange';
import Logo from './Logo';
import Maps from './Maps';
import News from './News/News';
import Search from './Search';
import TVprogram from './TVprogram/TVprogram';
import Visited from './Visited/Visited';
import Weather from './Weather';

function Wendex(props) {

  return (
    <div className="main-content">
      <News />  
        <Exchange />
        <div className="main-center">
          <Logo />
          <Search />
        </div>    
          <Banner />
          <div className="main-bottom">
            <Weather />
            <Visited />
            <Maps />
            <TVprogram />
            <Ether />
          </div>
        </div>
    );

}

export default Wendex;