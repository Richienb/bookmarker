const Bookmarker = ({
    url,
    title = "",
    useFallBack = true
} = {}) => {

    // Detect Firefox <23
    if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(title, url, '')

    // Detect Internet Explorer
    else if (window.external && ('AddFavorite' in window.external)) window.external.AddFavorite(url, title)

    // Detect Opera <15 and Firefox >23
    else if (window.opera && window.print || window.sidebar && !(window.sidebar instanceof Node)) triggerBookmark.attr('rel', 'sidebar').attr('title', title).attr('href', url)

    // Other browsers like WebKit
    else if (useFallBack === true && window.location.href === url && window) alert(`You can add this page to your bookmarks by pressing ${navigator.userAgent.toLowerCase().includes('mac') ? 'Command/Cmd' : 'CTRL'} + D on your keyboard.`)

    // If all options fail
    else return false

    // If any option succeeds
    return true
}

export default {
    Bookmarker
}
