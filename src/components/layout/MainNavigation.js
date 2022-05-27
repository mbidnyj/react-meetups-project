import {Link} from 'react-router-dom'
import { useContext } from 'react'

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'

function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext)

    return(
        <header className={classes.header}>
            <div className={classes.logo}>React meetups</div>
                <nav>
                    <ul>
                        <li><Link to='/'>Main Page</Link></li>
                        <li><Link to='/new-meetups'>New Meetups Page</Link></li>
                        <li><Link to='/favorites'>Favorites Page <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
                    </ul>
                </nav>
        </header>
    )
}

export default MainNavigation