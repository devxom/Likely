/**
 * Pinterest service provider
 * Docs: https://developers.pinterest.com/docs/widgets/save/
 * https://stackoverflow.com/questions/9951045/pinterest-api-documentation
 */

export default {
    counterUrl: 'https://api.pinterest.com/v1/urls/count.json?url={url}&callback=jsonp',
    convertNumber: (jsonpStr) => {
        const json = jsonpStr.slice(6, jsonpStr.length - 1);
        return JSON.parse(json).count;
    },
    popupUrl: 'https://pinterest.com/pin/create/button/?url={url}&description={title}',
    popupWidth: 750,
    popupHeight: 750,
    knownParams: ['url', 'title', 'media', 'counter'],
    svgIconPath: 'M7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8z',
};
