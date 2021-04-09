import variables from './variables'

interface fontListObjects {
    name: string,
    thickness: string,
    weight: number,
    formats?: string[]
}

const fontList: fontListObjects[] = [
    {
        name: variables.fonts.ceraPro,
        thickness: 'Light',
        weight: 300
    },
    {
        name: variables.fonts.ceraPro,
        thickness: 'Regular',
        weight: 400
    },
    {
        name: variables.fonts.ceraPro,
        thickness: 'Medium',
        weight: 500
    },
    {
        name: variables.fonts.ceraPro,
        thickness: 'Bold',
        weight: 800
    },
    {
        name: variables.fonts.ceraPro,
        thickness: 'Black',
        weight: 900
    },
    {
        name: variables.fonts.akzidenzGroteskPro,
        thickness: 'Cn',
        weight: 400
    },
    {
        name: variables.fonts.akzidenzGroteskPro,
        thickness: 'BoldCn',
        weight: 700
    },
    {
        name: variables.fonts.akzidenzGroteskPro,
        thickness: 'Bold',
        weight: 800
    },
]

const fontsFormats: {
    [index: string]: string
} = {
    eot: 'eot',
    woff: 'woff',
    ttf: 'truetype',
    otf: 'truetype',
}

const fonts: () => string = () => {
    return fontList.reduce((str, { name, thickness, weight, formats = ['eot', 'ttf', 'woff'] }) =>
    (str += `
        @font-face {
            font-family: '${name}';
            src: ${formats.reduce((str, format) =>
                (str += `url(/fonts/${ name }${ thickness ? `-${ thickness }` : '' }.${ format }) format('${ fontsFormats[format] }'),`)
            , '').slice(0, -1)};
            font-weight: ${weight};
            font-style: normal;
            font-display: fallback;
        }`)
    , '')
}

export default fonts
