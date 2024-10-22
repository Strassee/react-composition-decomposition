/**  
 * @description Компонент "Страница в посещаемом"
 */

function Page({ page }) {

    return (
        <div className="pagevisited">
            <a href={page.link}><span className='textnews'><span className='titlevisited'>{page.title}</span><span className='descvisited'> - {page.description}</span></span></a>
        </div>
    );
}

export default Page;