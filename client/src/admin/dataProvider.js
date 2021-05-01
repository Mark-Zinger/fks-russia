import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://localhost:3000');

const myDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        // if (!params.data.avatar) {
            // fallback to the default implementation
            return dataProvider.update(resource, params);
        // }
        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        // console.log({data: params.data})
        // // Freshly dropped avatar are File objects and must be converted to base64 strings
        
        // const newPictures = [params.data.avatar]
        // // const formerPictures = params.data.avatar.filter(
        // //     p => !(p.rawFile instanceof File)
        // // );

        // return Promise.all(newPictures.map(convertFileToBase64))
        //     .then(base64Pictures =>
        //         base64Pictures.map(picture64 => ({
        //             src: picture64,
        //         }))
        //     )
        //     .then(transformedNewPictures =>
        //         dataProvider.update(resource, {
        //             ...params,
        //             data: {
        //                 ...params.data,
        //                 avatar: [
        //                     ...transformedNewPictures,
        //                     // ...formerPictures,
        //                 ],
        //             },
        //         })
        //     );
    },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        console.log(file)
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

export default myDataProvider;