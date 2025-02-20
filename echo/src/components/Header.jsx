import { useState } from 'react';
import './Header.css'
import createSvgIcon from '../utils/createSvgIcon';

export default function Header() {
    const [isLightTheme, setIsLightTheme] = useState(document.documentElement.classList.contains('light-theme') ? true : false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    console.log(isLightTheme)

    const newChatIconPaths = [
        "M8.514 22.634a2.3 2.3 0 0 1-.875-.176 2.216 2.216 0 0 1-1.389-2.079v-.622a1.008 1.008 0 0 0-1.007-1.007H4A2.753 2.753 0 0 1 1.25 16V4A2.753 2.753 0 0 1 4 1.25h16A2.753 2.753 0 0 1 22.75 4v12A2.753 2.753 0 0 1 20 18.75h-6.272a1 1 0 0 0-.712.3l-2.925 2.92a2.219 2.219 0 0 1-1.577.664ZM4 2.75A1.252 1.252 0 0 0 2.75 4v12A1.252 1.252 0 0 0 4 17.25h1.243a2.51 2.51 0 0 1 2.507 2.507v.622a.75.75 0 0 0 1.28.53l2.925-2.925a2.493 2.493 0 0 1 1.773-.734H20A1.252 1.252 0 0 0 21.25 16V4A1.252 1.252 0 0 0 20 2.75Z",
        "M12 13.75a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75Z",
        "M15 10.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5Z"
    ]

    let themeIconPaths = isLightTheme ? [
        "M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286",
        "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
    ] : ["M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"]

    const fullScreenIconPaths = isFullScreen ? ["M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"] : [
        "M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"
    ]

    function themeToggle() {
        if (!isLightTheme) {
            setIsLightTheme(true);
            document.documentElement.classList.add('light-theme')
            localStorage.setItem('isLightTheme', JSON.stringify(true));
        } else {
            setIsLightTheme(false);
            document.documentElement.classList.remove('light-theme')
            localStorage.setItem('isLightTheme', JSON.stringify(false));
        }
    }

    function fullScreenToggle() {
        if (!isFullScreen) {
            document.documentElement.requestFullscreen()
            setIsFullScreen(true)
        } else {
            document.exitFullscreen()
            setIsFullScreen(false)
        }

    }

    const newChatIcon = createSvgIcon({
        paths: newChatIconPaths,
        fill: 'var(--color-text-secondary)',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24'
    })

    const themeIcon = createSvgIcon({
        paths: themeIconPaths,
        fill: 'var(--color-text-secondary)',
        width: '24',
        height: '24',
        viewBox: '0 0 16 16'
    })

    const fullScreenIcon = createSvgIcon({
        paths: fullScreenIconPaths,
        fill: 'var(--color-text-secondary)',
        width: '24',
        height: '24',
        viewBox: '0 0 16 16'
    }
    )

    return (
        <div className="header">
            <h1 className="header__title">EpicEase Echo</h1>
            <div className="header__actions">
                <button className="header__button header__button-new-chat">{newChatIcon}</button>
                <button className="header__button header__button-theme" onClick={themeToggle}>{themeIcon}</button>
                <button className="header__button header__button-full-screen" onClick={fullScreenToggle}>{fullScreenIcon}</button>
            </div>
        </div>
    )
}