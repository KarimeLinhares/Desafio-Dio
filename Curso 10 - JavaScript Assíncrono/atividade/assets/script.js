const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
	const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return data.webpurl;
};


const loadImg = async () => {
	const catImg = document.getElementsById('cat');
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();
