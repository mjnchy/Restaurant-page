import "./menu.css";

function createMenu() {
    const divMenu = document.createElement('div');
    divMenu.id = 'menu-div';

    function createMenuType (type) {
        const div = document.createElement('div');
        div.classList.add('menu-type');
        div.id = `menu-${type}`;

        const subDiv = document.createElement('div');
        subDiv.classList.add('menu-type-declaration');
        subDiv.id = `menu-${type}-declaration`;

        const h2 = document.createElement('h2');
        h2.classList.add('type-heading');
        h2.id = `${type}-heading`;
        h2.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}`;

        subDiv.append(h2);
        div.append(subDiv);

        return div;
    };

    const menuList = {};

    function addToList (type, name) {
        if (!menuList.hasOwnProperty(type)) {
            const menuType = menuList[`${type}`] = {};
            const typeItem = menuType[`${name}`] = {};
            typeItem.name = `${name}`;
        };

        if (menuList.hasOwnProperty(type)) {
            
            const typeItem = menuList[`${type}`][`${name}`] = {};
            typeItem.name = `${name}`;
        };
    };

    function createMenuHeader () {
        const div = document.createElement('div');
        div.id = 'menu-header-container';

        const h2 = document.createElement('h2');
        h2.id = 'menu-header';
        h2.textContent = `Humble Home's Menu`;

        div.append(h2);
        
        divMenu.append(div);
    };

    function createItem(name, description, type, toAppend) {
        const parsedName = name.toLowerCase().replace(' ', '-');

        const div =  document.createElement('div');
        div.classList.add('menu-item');
        div.id = `${parsedName}`;

        const divInfo = document.createElement('div');
        divInfo.classList.add('div-info');

        const divPicture = document.createElement('div');
        divPicture.classList.add('div-picture');

        const picture = document.createElement('img');
        picture.classList.add('item-picture');
        picture.id = `$${parsedName}-picture`;

        const item = document.createElement('h2');
        item.classList.add(`item-name`);
        item.id = `${parsedName}-header`;
        item.textContent = `${name}`;
        
        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-description');
        itemDescription.id = `${parsedName}-description`;
        itemDescription.textContent = `${description}`;
        
        const addToCart = document.createElement('button');
        addToCart.classList.add('add-to-cart-btn');
        addToCart.textContent = 'Order Online';

        divInfo.append(item, itemDescription, addToCart);
        divPicture.append(picture);
        div.append(divInfo, divPicture);
        toAppend.append(div);
        divMenu.append(toAppend);

        addToList(type, name);
    };

    const mainMenu = createMenuType('lunch');
    const sidesMenu = createMenuType('sides');
    const specialsMenu = createMenuType('specials');
    const dinnerMenu = createMenuType('dinner');

    function createMainMenu(name, description, type = 'lunch', toAppend = mainMenu) {
        createItem(name, description, type, toAppend);        
    };

    function createSideMenu(name, description, type = 'sides', toAppend = sidesMenu) {
        createItem(name, description, type, toAppend);        
    };

    function createSpecialsMenu(name, description, type = 'specials', toAppend = specialsMenu) {
        createItem(name, description, type, toAppend);        
    };

    function createDinnernMenu(name, description, type = 'dinner', toAppend = dinnerMenu) {
        createItem(name, description, type, toAppend);        
    };

    createMenuHeader();

    createMainMenu('Korean Barbecue', 'Made from freshly cut chicken and our in-house recipe, the Korean Barbecue is one of our most popular items and rightfully so.');
    createMainMenu('Nashville Hot', 'The richness and the taste of the classic spicy Nashville Hot chicken further enriched by our own recipe is one of the most liked items we have in our menu.', );
    createMainMenu('Yuba Noodles', 'The classic yuba noodles that you know and love with a unique taste made by our master chefs.', );
    createMainMenu('Fried Rice', 'The classic Thai fried rice that everyone knows and loves. Can you take the spice!?', );
    createMainMenu('Gochujang', 'A chilly paste soup made with fermented spice and chillies. Are you up to the challenge?', );
    createMainMenu('Chicken Biryani', 'The classic Bengali chicken biryani made with a twist with our family recipe that makes the perfect blend of spiciness and juicyness.', );
    createMainMenu('The Famous Sandwich', 'Our most popular sandwich');
    createMainMenu('Ribeye Reuben', 'Reuben made with fresly cut Australian ribeye');

    createSideMenu('Soup', 'Our very own chicken soup');
    createSideMenu('Fries', 'The classic French fries everyone knows and loves');
    createSideMenu(`Mac'N'Cheese`, 'Very tasty mac and cheese made by our top chefs with a unique take');
    createSideMenu('Apple Sauce', 'The classic apple sauce that everyone knows and loves');

    createSpecialsMenu('Special Barbecue', 'Our special barbecue mix that contains chicken, beef and lamb barbecue');
    createSpecialsMenu('Mystery Mix', 'Order it and see for yourself');

    createDinnernMenu('Ramen', 'Classic Ramen');
    createDinnernMenu('Korean Barbecue', 'Made from freshly cut chicken and our in-house recipe, the Korean Barbecue is one of our most popular items and rightfully so.');
    createDinnernMenu('Spinach soup', 'The classic spinach soup');
    createDinnernMenu('Overdrive Sub', 'Our overdrive footlong sub');

    return divMenu;
};

export {
    createMenu
};