/**
 * WhatsApp service provider
 */

export default {
    // %0D%0A% is the encoding for enter key
    popupUrl: 'whatsapp://send?text={title}%0D%0A%0D%0A{url}',

    // Sending on WhatsApp using manifest link instead of popup
    openPopup: false,
    knownParams: ['url', 'title'],
    svgIconPath: '8.013,15.949 L8.009,15.949 C6.574,15.948 5.167,15.564 3.939,14.839 L3.647,14.666 L0.620,15.457 L1.428,12.517 L1.238,12.216 C0.438,10.947 0.015,9.481 0.016,7.976 C0.017,3.584 3.605,0.010 8.016,0.010 C10.152,0.011 12.160,0.841 13.669,2.347 C15.179,3.852 16.010,5.854 16.009,7.983 C16.008,12.375 12.420,15.949 8.013,15.949 ZM12.860,10.262 C12.800,10.162 12.639,10.103 12.399,9.983 C12.159,9.863 10.977,9.283 10.756,9.203 C10.536,9.124 10.376,9.084 10.215,9.323 C10.055,9.563 9.594,10.103 9.454,10.262 C9.314,10.422 9.174,10.442 8.933,10.322 C8.693,10.202 7.918,9.950 7.000,9.134 C6.285,8.499 5.803,7.714 5.663,7.475 C5.522,7.235 5.648,7.105 5.768,6.986 C5.876,6.878 6.008,6.706 6.129,6.566 C6.249,6.426 6.289,6.327 6.369,6.167 C6.449,6.007 6.409,5.867 6.349,5.747 C6.289,5.627 5.822,4.443 5.608,3.969 C5.428,3.570 5.238,3.562 5.067,3.555 C4.927,3.549 4.766,3.549 4.606,3.549 C4.446,3.549 4.185,3.609 3.965,3.849 C3.745,4.089 3.124,4.668 3.124,5.847 C3.124,7.026 3.985,8.165 4.105,8.324 C4.226,8.484 5.769,10.980 8.212,11.941 C10.243,12.739 10.656,12.580 11.097,12.540 C11.538,12.500 12.519,11.961 12.720,11.401 C12.920,10.842 12.920,10.362 12.860,10.262',
};
