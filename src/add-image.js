import NaturePic from './nature.jpg';

export const addNaturePic = () => {
    const imgEl = document.createElement('img');
    imgEl.alt = 'nature';
    imgEl.width = 300;
    imgEl.src = NaturePic

    return imgEl;
};