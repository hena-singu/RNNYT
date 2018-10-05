import fs from 'fs';

import { reshapeNewsData } from '../../../src/utils/dataTransformations';

const testData = JSON.parse(fs.readFileSync(__dirname + '/testData.json'));

describe('dataTransformation util', () => {
    describe('reshapeNewsData function', () => {
        it('should correctly transform NYT news objects', () => {
            const transformedData = reshapeNewsData(testData);

            expect(transformedData).toEqual(
                [
                    {
                        description: 'React Native, the framework for building mobile applications with web technologies, is expanding to new platforms.',
                        author: 'JACOB FRIEDMANN',
                        location: '',
                        imageUrl: 'https://example.com/image.png',
                        date: 'Sep 10th 2016',
                        title: 'React Native Expands to New Platforms',
                        url: 'http://example.com/react-native-expands'
                    }
                ]
            );
        });
    });
});