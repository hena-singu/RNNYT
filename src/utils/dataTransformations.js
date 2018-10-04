import moment from 'moment';

const getMultimediaUrlByFormt = (multimedia, format) => {
    if (!multimedia) {
        return '';
    }

    const matchingFormat = multimedia.find(media => media.format == format);
    if (!matchingFormat) {
        return '';
    }

    return matchingFormat;
};

export const reshapeNewsData = news => (
    news.map(
        ({
            abstract,
            byline,
            geo_facet,
            multimedia,
            published_date,
            title,
            url
        }) => ({
            description: abstract,
            author: byline ? byline.replace('By ', '') : '',
            location: geo_facet.length > 0 ? geo_facet[0] : '',
            imageUrl: getMultimediaUrlByFormt(multimedia, 'thumbLarge'),
            date: moment(published_date).format('MMM Do YYYY'),
            title,
            url
        })
    )
);