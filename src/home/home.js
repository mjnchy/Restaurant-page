import "./home.css";

function homeTemplate () {
    const divMain = document.createElement('div');
    divMain.id = 'main-div';

    const divList = [];

    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.classList.add('content-div', 'home-content-div');
        
        divList.push(div);
        
        divMain.append(div);
    };

    function divParagraph (x, y, z) {
        const paragraph = document.createElement('p');
        paragraph.id = `paragraph-${y}`;
        paragraph.textContent = `${z}`;

        x.append(paragraph);
        x.classList.add('paragraph');
    };

    divParagraph(divList[0], 'one', 'Welcome to our humble home');
    divParagraph(divList[1], 'two', `Today's world is filled with noise. In this busy world, take a 
    moment of calm for yourself outside of all the noise, with us in our humble abode.`);
    divParagraph(divList[2], 'three', `Find us at these`);

    function createLink () {
        const link = document.createElement('a');
        link.id = 'location-link';
        link.textContent = ' locations';
        link.href = '';
        
        return link;
    }
    
    divList[2].firstChild.append(createLink());

    console.log(divList)
    
    return divMain;
}

export {homeTemplate};